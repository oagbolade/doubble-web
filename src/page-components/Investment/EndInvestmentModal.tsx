import React, { useState } from "react";
import { Modal } from "antd";
import Image from "next/image";
import { FormInputV2 } from "../../shared-components";
import { httpRequest } from "../../https/http";
import { useRouter } from "next/router";

interface IButton {
  className: string;
  title: string;
  userPIN?: any;
  details: any;
  user: any;
  closeDetails: () => void;
}

const EndInvestmentModal = ({
  className,
  title,
  details,
  user,
  closeDetails,
}: IButton) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pin, setPin] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const checkInvestmentType = (type, status) => {
    if (status === "active") {
      switch (type) {
        case "Doubble Fixed":
          return "FixedInvestment/TerminateFixed";
        case "Doubble Target":
          return "TargetInvestment/TerminateTarget";
        default:
          return null;
      }
    } else {
      switch (type) {
        case "Doubble Fixed":
          return "FixedInvestment/TerminateFutureFixed";
        case "Doubble Target":
          return "TargetInvestment/TerminateFutureTarget";
        default:
          return null;
      }
    }
  };

  const confirmHandler = async () => {
    const url = checkInvestmentType(details.type, details.status);
    if (!details.type)
      return setMessage("Something went wrong, please refresh this page!");
    if (!pin) return setMessage("Transaction PIN is required!");
    try {
      setLoading(true);
      const result = await httpRequest({
        url,
        method: "POST",
        body: {
          platform: 1,
          imei: "string",
          deviceType: "1",
          deviceManufacturer: "string",
          deviceModel: "string",
          deviceIP: "string",
          deviceName: "string",
          emailAddress: user.emailAddress,
          firstName: user.firstName,
          investmentID: details.investmentID,
          userId: user.userId,
          transactionPIN: pin,
        },
      });
      if (result.status) {
        setLoading(false);
        setMessage("success");
        setTimeout(() => {
          handleCancel();
          setMessage("");
          closeDetails();
        }, 5000);
      } else {
        setLoading(false);
        setMessage(result.message);
      }
    } catch ({ message }) {
      setLoading(false);
      setMessage(message);
    }
  };

  return (
    <>
      <button className={className} onClick={showModal}>
        {title}
      </button>
      <Modal
        title={null}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
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
            <p className="text-center font-weight-bold mt-5">
              Enter transction PIN to proceed
            </p>
            <div>
              {" "}
              <form autoComplete="off">
                <FormInputV2
                  name="pin"
                  type="password"
                  placeholder="Transaction PIN"
                  maxLength={4}
                  onChange={({ target }) => {
                    if (isNaN(Number(target.value))) return;
                    setPin(target.value);
                  }}
                  value={pin}
                  autoComplete="none"
                  className="text-center"
                />
              </form>
            </div>

            {message.length > 0 && (
              <div className="mt-2 text-center text-danger">
                {message !== "success" && message}
              </div>
            )}
            <button
              className={`${className} mx-auto d-block mt-3 mb-2`}
              onClick={confirmHandler}
            >
              <span>Confirm</span>
              {loading && (
                <span className="ml-3">
                  <Image
                    src="/load.gif"
                    alt="End investment"
                    width={25}
                    height={25}
                    className="mt-1"
                  />
                </span>
              )}
            </button>
          </>
        )}
      </Modal>
    </>
  );
};

export default EndInvestmentModal;
