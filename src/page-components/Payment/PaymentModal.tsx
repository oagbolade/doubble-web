import { Modal } from "antd";
import "antd/dist/antd.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { httpRequest } from "../../https/http";
import { useAppSelector } from "../../redux/hooks";
import { IAccount } from "../Investment/ChangeBeneficiaryModal";
import AirtimeForm from "./forms/AirtimeForm";
import InternetForm from "./forms/InternetForm";
import PaymentForm from "./forms/PaymentForm";
import TvForm from "./forms/TvForm";
import UtilityForm from "./forms/UtilityForm";

interface ModalFormsProps {
    paymentItem: { label: string; icon: any, logoUrl: string, serviceId: string, serviceProvider: string, account };
    target: string;
    setshowModal: Dispatch<SetStateAction<boolean>>;
}

const ModalForms = ({ target, paymentItem, setshowModal }: ModalFormsProps) => {
    const [accounts, setAccounts] = useState<IAccount[]>([]);
    const [loading, setLoading] = useState(false)
    const { user } = useAppSelector((state) => state.auth);

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
      setLoading(false);

      if (result?.status) {
        setAccounts(result?.data?.ngnAccounts);
      } else {
      setLoading(false);
      }
    } catch ({ message }) {
      console.log("err_dataa", message);

      /* setLoading(false); */
    }
  };

  useEffect(() => {
    getUserAccounts()
  }, [])
    switch (target) {
        case "Payment":
            return <PaymentForm data={paymentItem} setShowForm={setshowModal}/>;
        case "Data & Airtime":
            return <AirtimeForm data={paymentItem} accounts={accounts.length && accounts} loadingAccount={loading}  />;
        case "Internet":
            return <InternetForm data={paymentItem} />;
        case "TV":
            return <TvForm data={paymentItem} />;
        case "Utility":
            return <UtilityForm data={paymentItem} />;
        default:
            return <PaymentForm data={paymentItem} setShowForm={setshowModal}/>;
    }
}

interface PaymentModalProps {
  showModal: boolean;
  target: string;
  paymentItem: {
    label: string;
    icon: any;
    logoUrl: string;
    serviceId: string;
    serviceProvider: string;
    account: string;
  };
  setshowModal: Dispatch<SetStateAction<boolean>>;
}

const PaymentModal = ({
  setshowModal,
  paymentItem,
  target,
  showModal,
}: PaymentModalProps) => {
  return showModal ? (
    <Modal
      maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      title={null}
      footer={null}
      closable={false}
      visible={showModal}
      onOk={() => setshowModal(false)}
      onCancel={() => setshowModal(false)}
    >
        <ModalForms paymentItem={paymentItem} target={target} setshowModal={setshowModal} />
    </Modal> ) : null
}

export default PaymentModal;
