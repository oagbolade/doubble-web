import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MTNIcon, GloIcon, AirtelIcon, NineMobileIcon } from "../../icons";
import TabItem from "../../shared-components/TabItem/TabItem";
import { useAppSelector } from "../../redux/hooks";
import { httpRequest, HTTPResponse } from "../../https/http";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import AirtimeForm from "./forms/AirtimeForm";
import { IAccount } from "../Investment/ChangeBeneficiaryModal";

const itemsForDataAir = [
  {
    label: "MTN",
    /*     serviceProvider: "string", 
    logoUrl: "string", */
    icon: <MTNIcon />,
  },
  {
    label: "Glo",
    /*     serviceProvider: "string", 
    logoUrl: "string", */
    icon: <GloIcon />,
  },
  {
    label: "Airtel",
    /*     serviceProvider: "string", 
    logoUrl: "string", */
    icon: <AirtelIcon />,
  },
  {
    label: "9mobile",
    /*     serviceProvider: "string", 
    logoUrl: "string", */
    icon: <NineMobileIcon />,
  },
];

interface DataAirtimeProps {
  setPaymentItem: Dispatch<
    SetStateAction<{
      icon: any;
      label: string;
      serviceProvider: string;
      logoUrl: string;
    }>
  >;
  setshowModal: Dispatch<SetStateAction<boolean>>;
}

const Dataandairtime = ({ setPaymentItem, setshowModal }: DataAirtimeProps) => {
  const [fetchServiceProvider, setFetchServiceProvider] = useState<any>([]);

  const { user } = useAppSelector((state) => state.auth);

  const FetchServiceProvider = async () => {
    try {
      const result = await httpRequest({
        method: "POST",
        url: "Transactional/FetchServiceProvider",
        body: {
          serviceType: 0,
        },
      });

      setFetchServiceProvider(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    FetchServiceProvider();
  }, []);

  //Pls do not delete the handleClick function
  const handleClick = (item: {
    icon: any;
    label: string;
    serviceProvider: string;
    logoUrl: string;
  }) => {
    setPaymentItem(item);
    setshowModal(true);
  };
  return (
    <div className="d-flex justify-content-md-start justify-content-center flex-wrap">
      {fetchServiceProvider.map((item, i) => (
        <TabItem key={i} item={item} onClick={() => handleClick(item)} />
      ))}
    </div>
  );
};

export default Dataandairtime;
