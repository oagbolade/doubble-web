import { Dispatch, SetStateAction } from "react";
import {
  EKEDCIcon,
  IkejaElectricIcon,
  BeninElectricIcon,
  PhcnIcon,
} from "../../icons";
import Phcn from "../../icons/Phcn";
import TabItem from "../../shared-components/TabItem/TabItem";

const items = [
  {
    label: "EKEDC",
    /*   serviceProvider: "string", 
  logoUrl: "string", */
    icon: <EKEDCIcon />,
  },
  {
    label: "Ikeja Electric",
    /*   serviceProvider: "string", 
  logoUrl: "string", */
    icon: <IkejaElectricIcon />,
  },
  {
    label: "Benin Electricity",
    /*   serviceProvider: "string", 
  logoUrl: "string", */
    icon: <BeninElectricIcon />,
  },
  {
    label: "PHCN",
    /*   serviceProvider: "string", 
  logoUrl: "string", */
    icon: <Phcn />,
  },
];

interface UtilityProps {
  setPaymentItem: Dispatch<SetStateAction<{ label: string; icon: any }>>;
  setshowModal: Dispatch<SetStateAction<boolean>>;
}

const Utility = ({ setPaymentItem, setshowModal }: UtilityProps) => {
  //Pls do not delete the handleClick function
  /*   const handleClick = (item: { label: string; icon: any }) => {
    setPaymentItem(item);;
    setshowModal(true)
  } */
  return (
    <div className="d-flex justify-content-md-start justify-content-center flex-wrap">
      {items.map((item, i) => (
        <TabItem key={i} item={item} /* onClick={() => handleClick(item)} */ />
      ))}
    </div>
  );
};

export default Utility;
