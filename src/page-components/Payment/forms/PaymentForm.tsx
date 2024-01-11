import { useState, useEffect, Fragment, SyntheticEvent, Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { notification } from "antd";
import { httpRequest } from "../../../https/http";
import { useAppSelector } from "../../../redux/hooks";
import { getUserAccounts, formatCurrency } from "../../../utils/utilities";
import { IAccount } from "../../Investment/ChangeBeneficiaryModal";
import styled from "styled-components";
import Reciept from "../../../shared-components/Reciept/Reciept";

interface FormProps {
  data: { label: string; icon: any };
  setShowForm: Dispatch<SetStateAction<boolean>>;
}

const Select = styled.select`
  border: 1px solid #e5e5e5;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  padding: 5px;
`;

interface ISend {
  payOutAccount: string;
  sendTo: string;
  beneficiaryAccount: string;
  amount: string;
  narration: string;
  pin: string;
  bankCode: string;
}

interface IBank {
  bankCode: string;
  bankName: string;
}

type AccountVerification = {
  loading: boolean;
  error: string;
  accountName: string;
};

const PaymentForm = ({ data: { icon, label }, setShowForm }: FormProps) => {
  const [data, setData] = useState<IAccount[]>([]);
  const [accountDetails, setAccountDetails] = useState<AccountVerification>({
    loading: false,
    error: "",
    accountName: "",
  });
  const [showReciept, setShowReceipt] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [bank, setBank] = useState<IBank[]>([]);
  const [balance, setbalance] = useState<number>(0);
  const [sourceAccount, setSourceAccount] = useState("");
  const [send, setSend] = useState<ISend>({
    payOutAccount: "",
    sendTo: "SendToSterling",
    beneficiaryAccount: "",
    amount: "",
    narration: "",
    pin: "",
    bankCode: "000001",
  });

  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const getAccount = async () => {
      const { success, data } = await getUserAccounts(user?.bvn);
      if (success) setData(data);
    };
    getAccount();

    const getBanks = async () => {
      try {
        const result = await httpRequest({
          method: "POST",
          url: "Bank/FetchBanks",
        });

        const banks = result.data?.filter((bank: IBank) => bank.bankCode !== "000001") || [];
        const sortedBanks = banks.sort((a: IBank, b: IBank) => a.bankName.toLowerCase().charCodeAt(0) - b.bankName.toLowerCase().charCodeAt(0)) || [];
        setBank(sortedBanks);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getBanks();
  }, []);

  useEffect(() => {
    if (send.beneficiaryAccount.length === 10) {
      verifyRecipientAccount();
    }
  }, [send.beneficiaryAccount, send.bankCode]);

  const sendToSterling = async () => {
    try {
      const result = await httpRequest({
        method: "POST",
        url: "Transactional/ToSterling",
        body: {
          platform: 1,
          imei: "string",
          deviceType: "1",
          deviceManufacturer: "string",
          deviceModel: "string",
          deviceIP: "string",
          deviceName: "string",
          payOutAccount: send.payOutAccount,
          beneficiaryAccount: send.beneficiaryAccount,
          currency: "string",
          amount: Number(send.amount.replace(/\$\s?|(,*)/g, '')),
          narration: send.narration,
          userId: user?.userId,
          transactionPIN: send.pin,
        },
      });
      if (result.status) {
        setIsLoading(false);
        setShowReceipt(true);
      } else {
        setIsLoading(false);
        notification.error({ message: result.message });
      }
    } catch (error) {
      notification.error({
        message: "Oops !!! Something went wrong. Try again",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const sendToOtherBanks = async () => {
    try {
      const result = await httpRequest({
        method: "POST",
        url: "Transactional/ToOtherBanks",
        body: {
          platform: 1,
          imei: "string",
          deviceType: "1",
          deviceManufacturer: "string",
          deviceModel: "string",
          deviceIP: "string",
          deviceName: "string",
          payOutAccount: send.payOutAccount,
          beneficiaryAccount: send.beneficiaryAccount,
          currency: "string",
          amount: Number(send.amount.replace(/\$\s?|(,*)/g, '')),
          destinationBankCode: send.bankCode,
          narration: send.narration,
          userId: user?.userId,
          transactionPIN: send.pin,
        },
      });
      if (result.status) {
        setIsLoading(false);
        setShowReceipt(true);
      } else {
        setIsLoading(false);
        notification.error({ message: result.message });
      }
    } catch (error) {
      notification.error({
        message: "Oops !!! Something went wrong. Try again",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add("was-validated");
    if (!e.currentTarget.checkValidity()) return;

    if (accountDetails.error) {
      notification.error({ message: "Invalid Beneficiary Account" });
      return;
    }

    if (balance < Number(send.amount)) {
      notification.warning({
        message: "Insufficient Balance",
        description:
          "The source Account selected does not have sufficient balance for this transaction",
      });
      return;
    }

    setIsLoading(true);

    if (send.sendTo === "SendToSterling") {
      sendToSterling();
    } else {
      sendToOtherBanks();
    }
  };

  const verifyRecipientAccount = async () => {
    try {
      const body = {
        platform: 1,
        imei: "string",
        deviceType: "1",
        deviceManufacturer: "string",
        deviceModel: "string",
        deviceIP: "string",
        deviceName: "string",
        accountNo: send.beneficiaryAccount,
        bankCode: send.bankCode,
      };

      setAccountDetails({ loading: true, error: "", accountName: "" });

      const result = await httpRequest({
        method: "POST",
        url: "Bank/ValidateOtherBankBeneficiary",
        body,
      });

      if (result.status) {
        setAccountDetails((prev) => ({
          ...prev,
          loading: false,
          error: "",
          accountName: result.message,
        }));
      } else {
        setAccountDetails((prev) => ({
          ...prev,
          loading: false,
          error:
            "Unable to verify beneficiary account. Please check and try again",
        }));
      }
    } catch (error) {
      setAccountDetails((prev) => ({
        ...prev,
        loading: false,
        error: "Oops !!! something went wrong. Try again",
      }));
    }
  };


  return (
    <Fragment>
      <form className="p-2" noValidate onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center mb-0">{icon}</div>
        <div className="text-center mb-3 mt-0">{label}</div>
        <div className="form-group">
          <Select
            required
            value={send.payOutAccount}
            name="payOutAccount"
            onChange={(e) => {
              setbalance(
                Number(
                  e.target.options[e.target.selectedIndex].getAttribute(
                    "data-balance"
                  )
                )
              );
              setSourceAccount(
                e.target.options[e.target.selectedIndex].getAttribute(
                  "data-source"
                )
              );
              setSend({ ...send, payOutAccount: e.target.value });
            }}
          >
            <option value="" disabled>
              {data.length > 0
                ? "Funding Account"
                : "Fetching Funding Account..."}
            </option>
            {data.length &&
              data.map((info: IAccount, i: number) => (
                <option
                  key={i}
                  value={info.account.split(" ")[0]}
                  data-balance={info.balance}
                  data-source={info.account}
                >
                  {info.account} - ₦{formatCurrency(Number(info.balance))}
                </option>
              ))}
          </Select>
          <small className="invalid-feedback">
            Account number must be 10 digits
          </small>
        </div>
        <div className="form-group">
          <select
            placeholder="Choose Bank"
            className="doubble-input w-100"
            required
            value={send.sendTo}
            onChange={(e) => setSend({ ...send, sendTo: e.target.value })}
          >
            <option value="SendToSterling">Send To Sterling</option>
            <option value="SendToOtherBank">Send To Other Bank</option>
          </select>
          <small className="invalid-feedback">
            Please select A transfer Type
          </small>
        </div>
        {send.sendTo == "SendToOtherBank" ? (
          <div className="form-group">
            <select
              placeholder="Choose Bank"
              className="doubble-input w-100"
              required
              value={send.bankCode}
              onChange={(e) => setSend({ ...send, bankCode: e.target.value })}
            >
              <option value="" disabled>Select A Bank</option>
              {bank.map((data, i) => (
                <option key={i} value={data.bankCode}>
                  {data.bankName}
                </option>
              ))}
            </select>
            <small className="invalid-feedback">
              Please select A transfer Type
            </small>
          </div>
        ) : (
          ""
        )}
        <div className="form-group">
          <input
            type="text"
            placeholder="Beneficiary Account"
            minLength={10}
            maxLength={10}
            className="doubble-input w-100"
            required
            value={send.beneficiaryAccount}
            onChange={(e) => {
              if (isNaN(Number(e.target.value))) return;
              setAccountDetails((prev) => ({ ...prev, error: "" }));
              setSend({ ...send, beneficiaryAccount: e.target.value.trim() });
            }}
          />
          <small className="invalid-feedback">
            Account number must be 10 digits
          </small>
          {accountDetails.loading && <span>verifying...</span>}
          {!accountDetails.loading && (
            <div
              className={`text-center ${accountDetails.error ? "text-danger" : "text-muted"
                }`}
              style={{ fontSize: "12px" }}
            >
              {accountDetails.error || accountDetails.accountName}
            </div>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Amount"
            className="doubble-input w-100"
            required
            value={send.amount || ""}
            onChange={({ target: { value }}) => {
              if (isNaN(Number(value.replaceAll(",", "")))) return;
              setSend({ ...send, amount: (value && value !== "0") ? formatCurrency(Number(value.replaceAll(",", "")), 0) : ""})
            }}
          />
          <small className="invalid-feedback">Amount is required</small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Enter Transaction Pin"
            minLength={4}
            maxLength={4}
            className="doubble-input w-100"
            required
            value={send.pin}
            onChange={(e) => {
              if (isNaN(Number(e.target.value))) return;
              setSend({ ...send, pin: e.target.value });
            }}
          />
          <small className="invalid-feedback">Pin must be 4 digits</small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Description"
            className="doubble-input w-100"
            required
            value={send.narration}
            onChange={(e) => setSend({ ...send, narration: e.target.value })}
          />
          <small className="invalid-feedback">
            Transaction Description Required
          </small>
        </div>
        <div className="form-group d-flex justify-content-center">
          <button
            disabled={isLoading || accountDetails.loading}
            style={{
              height: "var(--input-height)",
              border: "none",
              fontSize: "1.13em",
              borderRadius: "5px",
            }}
            type="submit"
            className="text-primary-blue bg-secondary-blue w-70 cursor-pointer"
          >
            <span>
              Send{" "}
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
      </form>
      <Reciept
        showReciept={showReciept}
        setShowReciept={() => {
          setShowReceipt(false);
          setShowForm(false);
        }}
        recieptTitle={label}
        recieptType={label}
        recieptIcon={icon}
        content={[
          { title: "Source Account", value: sourceAccount },
          {
            title: "Beneficiary Bank",
            value: bank.find((bank) => bank.bankCode === send.bankCode)
              ?.bankName,
          },
          { title: "Beneficiary Account No.", value: send.beneficiaryAccount },
          {
            title: "Beneficiary Account Name",
            value: accountDetails.accountName,
          },
          { title: "Amount", value: send.amount },
          { title: "Fee", value: formatCurrency(0) },
          { title: "narration", value: send.narration, divider: true },
          { title: "Total", value: send.amount },
        ]}
      />
    </Fragment>
  );
};

export default PaymentForm;
