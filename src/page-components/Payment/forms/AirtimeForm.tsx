import {
  MouseEventHandler,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { FaSpinner } from "react-icons/fa";
import { httpRequest, HTTPResponse } from "../../../https/http";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { getSecrityQuestions } from "../../../redux/settings/settingsAction";
import { getLogo } from "../../../shared-components/TabItem/TabItem";
import { IAccount } from "../../Investment/ChangeBeneficiaryModal";
import Image from "next/image";

interface FormProps {
  data: {
    logoUrl: string;
    serviceId: string;
    serviceProvider: string;
  };
  accounts: IAccount[];
  loadingAccount: boolean;
}
interface IPayment {
  networkProvider: string;
  phoneNumber: string;
  amount: string;
  pin: string;
  account: string;
}

const AirtimeForm = ({ data, accounts, loadingAccount }: FormProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [payOutAccount, setPayOutAccount] = useState<IPayment>({
    networkProvider: "",
    phoneNumber: "",
    amount: "",
    pin: "",
    account: "",
  });

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { user } = useAppSelector((state) => state.auth);

  const BuyAirtime = async () => {
    try {
      const result = await httpRequest({
        method: "POST",
        url: "Transactional/BuyAirtime",
        body: {
          platform: 1,
          imei: "string",
          deviceType: "string",
          deviceManufacturer: "string",
          deviceModel: "string",
          deviceIP: "string",
          deviceName: user?.firstName,
          mobileNo: payOutAccount.phoneNumber,
          serviceId: data.serviceId,
          airtimeAmount: payOutAccount.amount,
          sessionID: "string",
          appId: 0,
          payOutAccount: payOutAccount.account,
          userId: user?.userId,
          transactionPIN: payOutAccount.pin,
        },
      });
      if (result.status) {
        setIsLoading(false);
        setMessage("success");
        setTimeout(() => {
          handleCancel();
          setMessage("");
        }, 5000);
      } else {
        setIsLoading(false);
        setMessage(result.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const BuyData = async () => {
    try {
      const result = await httpRequest({
        method: "POST",
        url: "Transactional/BuyData",
        body: {
          platform: 1,
          imei: "string",
          deviceType: "string",
          deviceManufacturer: "string",
          deviceModel: "string",
          deviceIP: "string",
          deviceName: user?.firstName,
          mobileNo: payOutAccount.phoneNumber,
          serviceId: data.serviceId,
          dataAmount: payOutAccount.amount,
          sessionID: "string",
          appId: 0,
          payOutAccount: payOutAccount.account,
          userId: user?.userId,
          transactionPIN: payOutAccount.pin,
        },
      });
      if (result.status) {
        setIsLoading(false);
        setMessage("success");
        setTimeout(() => {
          /* handleCancel() */
          setMessage("");
          /* closeDetails(); */
        }, 5000);
      } else {
        setIsLoading(false);
        setMessage(result.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("was-validated");
    if (!e.currentTarget.checkValidity()) return;
    setIsLoading(true);
    if (payOutAccount.networkProvider === "Airtime") {
      BuyAirtime();
    } else {
      BuyData();
    }
  };

  return (
    <form className="p-2" noValidate>
      {message === "success" ? (
        <div className="mt-2 text-center my-5">
          <Image
            src="/icons/investment/success.gif"
            alt="success message"
            width={180}
            height={180}
          />
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-center mb-0">
            {getLogo(data.serviceProvider)}
          </div>
          <div className="text-center mb-3 mt-0">{data.serviceProvider}</div>

          <div className="form-group">
            <select
              value={payOutAccount.networkProvider}
              onChange={(e) =>
                setPayOutAccount({
                  ...payOutAccount,
                  networkProvider: e.target.value,
                })
              }
              placeholder="Network Provider"
              className="doubble-input w-100"
              required
            >
              <option value="Airtime">Airtime</option>
              <option value="Data">Data</option>
            </select>
            <small className="invalid-feedback">Network type is required</small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Phone number"
              value={payOutAccount.phoneNumber}
              maxLength={11}
              onChange={(e) => {
                if (isNaN(Number(e.target.value))) return;
                setPayOutAccount({
                  ...payOutAccount,
                  phoneNumber: e.target.value,
                });
              }}
              className="doubble-input w-100"
              required
            />
            <small className="invalid-feedback">Phone number is required</small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Amount"
              min={100}
              max={100000}
              maxLength={5}
              value={payOutAccount.amount}
              onChange={(e) => {
                if (isNaN(Number(e.target.value))) return;
                setPayOutAccount({ ...payOutAccount, amount: e.target.value });
              }}
              className="doubble-input w-100"
              required
            />
            <small className="invalid-feedback">
              Amount should be between ₦100 - ₦100,000
            </small>
          </div>
          <div className="form-group">
            <select
              value={payOutAccount.account}
              onChange={(e) =>
                setPayOutAccount({ ...payOutAccount, account: e.target.value })
              }
              placeholder="Select Beneficiary Account"
              className="doubble-input w-100"
              required
            >
              {/* ${account.name.split(" ")[0]} - For acc name if needing */}
              {/* <option value="">Select Beneficiary Account</option> */}
              <option value="">
                {loadingAccount
                  ? "Fetching Funding Account..."
                  : accounts.length > 0
                  ? "Select Funding accounts"
                  : "No funding accounts found"}
              </option>
              {accounts.length &&
                accounts.map((account: IAccount, i: number) => (
                  <option
                    key={i}
                    value={account.account.split("-")[0].trim()}
                  >{`${account.account.split("-")[0]} - ${
                    account.balance
                  }`}</option>
                ))}
            </select>
            <small className="invalid-feedback">
              Account number must be 10 digits
            </small>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter Pin"
              minLength={4}
              maxLength={4}
              value={payOutAccount.pin}
              onChange={(e) => {
                if (isNaN(Number(e.target.value))) return;
                setPayOutAccount({ ...payOutAccount, pin: e.target.value });
              }}
              className="doubble-input w-100"
              required
            />

            <small className="invalid-feedback">
              Amount should be between ₦100 - ₦100,000
            </small>
          </div>
          <div className="form-group d-flex justify-content-center">
            <button
              disabled={isLoading}
              style={{
                height: "var(--input-height)",
                border: "none",
                fontSize: "1.13em",
                borderRadius: "5px",
              }}
              type="submit"
              className="text-primary-blue bg-secondary-blue w-70 cursor-pointer"
              onClick={handleSubmit}
            >
              <span>
                Buy{" "}
                {isLoading ? (
                  <Image
                    src="/loaderWhite.gif"
                    alt="investment loader"
                    width={25}
                    height={25}
                    className="mt-1"
                  />
                ) : (
                  ""
                )}
              </span>
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default AirtimeForm;
