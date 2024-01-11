import { useState } from "react";
import { FaChevronUp, FaChevronDown, FaEnvelope, FaCircle } from "react-icons/fa";
import { formatDate } from "../../utils/utilities";
import NotificationStyles from "./Notification.module.css";

interface NotificationItemProps {
    title: string;
    datetime: string;
    message: string;
    keyIsActive: boolean;
}

const NotificationItem = ({ title, message, datetime, keyIsActive }: NotificationItemProps) => {
    const [openMessage, setOpenMessage] = useState(false);

    return (
      <div
        className={`${
          openMessage
            ? NotificationStyles.opennotification
            : NotificationStyles.closednotification
        } card mb-2 px-2 pb-1.5 pt-2 py-md-2 row text-secondary-blue cursor-pointer`}
        onClick={() => setOpenMessage(!openMessage)}
      >
        {keyIsActive == true? 
        <div className="col-1"> <FaCircle
          style={{ color: "#00ccff", fontSize: "5px", top:"12.5px", left:"50px", position:"absolute" }}
        />  
        {/* <input type="checkbox" style={{ border:"5px solid #e5e5e5", left:"25px", top:"10px", position:"absolute" }}/>*/} </div> : <div className="col-1"></div>}
        <div
          className="col-2 d-none d-lg-block fw-bold"
          style={{ fontSize: "0.85em" }}
        >
          {title}
        </div>
        <div className="col-lg-8 col-9 fw-400">
          <span className="d-block d-lg-none mr-3 mb-2 ml-2">
            <FaEnvelope className="text-primary-blue mr-2" /> {formatDate(datetime)}
          </span>
          <div
            className={NotificationStyles.notificationmessage}
            style={{ fontSize: "12.5px" }}
          >
            {message}
          </div>
        </div>
        <div className="col-1">
          {openMessage ? (
            <FaChevronUp size={12} />
          ) : (
            <FaChevronDown size={12} />
          )}
        </div>
      </div>
    );
}

export default NotificationItem
