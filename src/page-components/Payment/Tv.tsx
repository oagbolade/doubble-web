import { Dispatch, SetStateAction } from "react";
import {
  DSTVIcon,
  GotvIcon,
  MytvIcon,
  StartimesIcon,
  IrokotvIcon,
  NetflixIcon,
} from "../../icons";
import TabItem from "../../shared-components/TabItem/TabItem";

const items = [
  {
    label: "DStv",
    serviceProvider: "string",
    logoUrl: null,
    icon: <DSTVIcon />,
  },
  {
    label: "Gotv",
    /*   serviceProvider: "string", 
  logoUrl: "string", */
    icon: <GotvIcon />,
  },
  {
    label: "MyTV",
    /*   serviceProvider: "string", 
  logoUrl: "string", */
    icon: <MytvIcon />,
  },
  {
    label: "Startimes",
    /*   serviceProvider: "string", 
  logoUrl: "string", */
    icon: <StartimesIcon />,
  },
  {
    label: "iROKO TV",
    /*   serviceProvider: "string", 
  logoUrl: "string", */
    icon: <IrokotvIcon />,
  },
  {
    label: "Netflix",
    /*   serviceProvider: "string", 
  logoUrl: "string", */
    icon: <NetflixIcon />,
  },
];

interface TvProps {
  setPaymentItem: Dispatch<SetStateAction<{ label: string; icon: any }>>;
  setshowModal: Dispatch<SetStateAction<boolean>>;
}

const Tv = ({ setPaymentItem, setshowModal }: TvProps) => {
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

export default Tv;
