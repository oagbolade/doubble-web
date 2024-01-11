import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import Image from "next/image";
import { message } from "antd";
import { httpRequest } from "../../https/http";
import { useAppSelector } from "../../redux/hooks";
import { formatCurrency } from "../../utils/utilities";

export interface IAccount {
  account?: string;
  balance?: string;
  name?: string;
}

const ChangeBeneficiaryModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IAccount[]>([]);

  const { user } = useAppSelector(({ auth }) => auth);

  const showModal = () => {
    getUserAccounts();
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const getUserAccounts = async () => {
    try {
      setLoading(true);
      const result: any = await httpRequest({
        url: "Bank/GetAccountsByBVN",
        method: "POST",
        body: {
          platform: 1,
          imei: "string",
          deviceType: "1",
          deviceManufacturer: "string",
          deviceModel: "string",
          deviceIP: "string",
          deviceName: "string",
          bvn: user?.bvn,
        },
      });

      if (result?.status) {
        setLoading(false);
        setData(result?.data?.ngnAccounts);
      } else {
        setLoading(false);
      }
    } catch ({ message }) {
      console.log("err_dataa", message);

      setLoading(false);
    }
  };

  return (
    <>
      <p
        className=" fw-700 p-0 m-0"
        style={{
          color: "#00CCFF",
          fontSize: "12px",
          cursor: "pointer",
        }}
        onClick={showModal}
      >
        Change Beneficiary
      </p>
      <Modal
        title={null}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        {loading ? (
          <div
            style={{ height: "50vh", width: "100%" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Image
              src="/icons/investment/loader.gif"
              alt="End investment"
              width={40}
              height={40}
            />
          </div>
        ) : (
          <div className="my-5">
            {data.map((info: IAccount, i: number) => (
              <div key={i} className="card px-3 py-2 cursor-pointer">
                <h2>{info.name}</h2>
                <p>
                  <span>₦{formatCurrency(Number(info.balance))}</span>
                  <span className="mx-2">|</span>
                  <span>{info.account}</span>
                </p>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </>
  );
};

export default ChangeBeneficiaryModal;
