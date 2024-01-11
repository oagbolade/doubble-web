import { useEffect, useState } from "react";
import { Typography } from "../../shared-components";
import DashboardLayout from "../../shared-components/DashboardLayout/DashboardLayout";
import UserTasks from "../Overview/Tasks/UserTasksV2";
import InvestmentNotification from "./InvestmentNotification";
import MessagesNotifications from "./MessagesNotifications";
import NotificationStyles from "./Notification.module.css";
import { FaCircle } from "react-icons/fa";
import {
  InvNotificationText,
  MsgNotificationText,
} from "./NotificationsText.js";

const tabs = ["Messages", "Investments", "Tasks"];

const Notifications = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [invnotifications, setInvNotifications] = useState<
    {
      title: string;
      message: string;
      datetime: string;
      keyIsActive: true | false;
    }[]
  >(InvNotificationText);
  const [msgnotifications, setMsgNotifications] = useState<
    {
      title: string;
      message: string;
      datetime: string;
      keyIsActive: true | false;
    }[]
  >(MsgNotificationText);
  const [keyNIsActive, setNKeyIsActive] = useState(false);
  const [keyIsActive, setKeyIsActive] = useState(false);

  useEffect(() => {
    msgnotifications.map(
      (item) => item.keyIsActive === true && setNKeyIsActive(!keyIsActive)
    );
  }, [msgnotifications]);

  useEffect(() => {
    invnotifications.map(
      (item) => item.keyIsActive === true && setKeyIsActive(!keyIsActive)
    );
  }, [invnotifications]);

  return (
    <DashboardLayout>
      <div className="row">
        <div className="col-12 my-3 d-none d-md-block">
          <Typography fontWeight="700" fontSize="18px">
            Notifications
          </Typography>
        </div>
        <div className="col-lg-9 container-fluid">
          <div className="card row mb-3">
            {/* <div className="col-lg-4 d-none d-lg-block"></div> */}
            <div className="col-lg-8 d-flex flex-wrap justify-content-center w-100 px-2 px-lg-3 pt-2 pt-lg-3 pb-1">
              {tabs.map((tab, i) => (
                <div
                  key={i}
                  onClick={() => setCurrentTab(tab)}
                  className={`${NotificationStyles.tab} pt-2 pb-1 px-2 ${
                    currentTab === tab ? NotificationStyles.activetab : ""
                  } ${tab === "Tasks" ? "d-block d-lg-none" : ""}`}
                >
                  {tab}
                  {tab === "Messages" && keyNIsActive && (
                    <FaCircle
                      style={{
                        color: "#eb5757",
                        fontSize: "5px",
                        position: "absolute",
                      }}
                    />
                  )}
                  {tab === "Investments" && keyIsActive && (
                    <FaCircle
                      style={{
                        color: "#eb5757",
                        fontSize: "5px",
                        position: "absolute",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          {currentTab === "Messages" && (
            <MessagesNotifications data={msgnotifications} />
          )}
          {currentTab === "Investments" && (
            <InvestmentNotification data={invnotifications} />
          )}
          {currentTab === "Tasks" && (
            <div className="d-block d-lg-none">
              <UserTasks />
            </div>
          )}
        </div>
        <div className="col-lg-3 d-none d-lg-block">
          <div className="card p-2">
            <UserTasks />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
