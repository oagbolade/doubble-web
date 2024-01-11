import Image from "next/image";
import TabItem from "../../shared-components/TabItem/TabItem";
import { Dispatch, SetStateAction } from "react";
import { SendIcon } from "../../icons";

const paymentitems = [
  {
    label: "Send Money",
    /*     serviceProvider: "string", 
    logoUrl: "string", */
    icon: <SendIcon />,
  },
];

interface PaymentsCompProps {
  setPaymentItem: Dispatch<SetStateAction<{ label: string; icon: any }>>;
  setshowModal: Dispatch<SetStateAction<boolean>>;
}

const PaymentsComp = ({ setPaymentItem, setshowModal }: PaymentsCompProps) => {
  const handleClick = (item: { label: string; icon: any }) => {
    setPaymentItem(item);
    setshowModal(true);
  };
  return (
    <div className="d-flex justify-content-md-start justify-content-center flex-wrap">
      {paymentitems.map((item, i) => (
        <TabItem key={i} item={item} onClick={() => handleClick(item)} />
      ))}
    </div>
  );
};

export default PaymentsComp;
