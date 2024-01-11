import { Dispatch, SetStateAction } from "react";
import { SpectranetIcon, Swift4gIcon, IpNxIcon, SmileIcon } from "../../icons";
import TabItem from "../../shared-components/TabItem/TabItem";

const items = [
  {
    label: "Smile",
/*     serviceProvider: "string", 
    logoUrl: "string", */
    icon: <SmileIcon />
  },
  {
    label: "Spectranet",
/*     serviceProvider: "string", 
    logoUrl: "string", */
    icon: <SpectranetIcon />
  },
  {
    label: "Swift",
/*     serviceProvider: "string", 
    logoUrl: "string", */
    icon: <Swift4gIcon />
  },
  {
    label: "ipNX",
/*     serviceProvider: "string", 
    logoUrl: "string", */
    icon: <IpNxIcon />
  }
]

interface InternetProps {
  setPaymentItem: Dispatch<SetStateAction<{ icon: any, label: string, serviceProvider: string, logoUrl: string }>>;
  setshowModal: Dispatch<SetStateAction<boolean>>;
}

const Internet = ({ setPaymentItem, setshowModal }: InternetProps) => {
   //Pls do not delete the handleClick function
/*   const handleClick = (item: { label: string; icon: any }) => {
    setPaymentItem(item);;
    setshowModal(true)
  } */
  return (<div className="d-flex justify-content-md-start justify-content-center flex-wrap">
    {items.map((item, i) => <TabItem key={i} item={item} /* onClick={() => handleClick(item)} */ />)}
  </div>
  )
}

export default Internet;