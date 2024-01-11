import React, { useState, useEffect } from "react";
import Link from "next/link";
import PaymentStyles from "../../../styles/payment.module.css";
import {
  EKEDCIcon,
  IkejaElectricIcon,
  ReceiveIcon,
  SendIcon,
  SpectranetIcon,
} from "../../icons";
import { Tab, Typography } from "../../shared-components";
import DashboardLayout from "../../shared-components/DashboardLayout/DashboardLayout";
import { formatCurrency } from "../../utils/utilities";
import Notifications from "./Notifications";
import UserTasks from "../Overview/Tasks/UserTasksV2";
import Dataandairtime from "./DataandAirtime";
import Internet from "./Internet";
import PaymentsComp from "./PaymentComp";
import Tv from "./Tv";
import Utility from "./Utility";
import PaymentModal from "./PaymentModal";
import { Modal } from "antd";
import ComingSoon from "../../shared-components/ComingSoon/ComingSoon";
import { useAppSelector } from "../../redux/hooks";
import { httpRequest, HTTPResponse } from "../../https/http";
import Image from "next/image";
import PaymentHistoryModal from "./PaymentHistoryModal";
import { getLogo } from "../../shared-components/TabItem/TabItem";
import ActivityLoader from "../../shared-components/Loader/ActivityLoader";

const paymentlist = [
  {
    text: "Recieve Money",
    icon: <ReceiveIcon />,
  },
  {
    text: "Recieve Money",
    icon: <ReceiveIcon />,
  },
  {
    text: "Send Money",
    icon: <SendIcon />,
  },
  // {
  //   text: "EKEDC",
  //   icon: <EKEDCIcon />,
  // },
  // {
  //   text: "Spectranet",
  //   icon: <SpectranetIcon />,
  // },
  // {
  //   text: "Ikeja Electric",
  //   icon: <IkejaElectricIcon />,
  // },
];

// const tabs = ["Payment", "Data & Airtime", "Internet", "TV", "Utility"];
const tabs = ["Payment", "Data & Airtime"];

const Payment = () => {
  const [currentTab, setCurrentTab] = useState("Payment");
  const [paymentItem, setPaymentItem] = useState<{
    label: string;
    icon: any;
    logoUrl: string;
    serviceId: string;
    serviceProvider: string;
    account: string;
  }>(null);
  const [showModal, setshowModal] = useState(false);
  const [paymentList, setPaymentList] = useState([]);
  const [noTargetActive, setNoTargetActive] = useState(true);
  const [loading, setLoading] = useState(false);

  const { user } = useAppSelector((state) => state.auth);

  const PaymentList = async () => {
    try {
      const result = await httpRequest({
        method: "POST",
        url: "Transactional/TrasantionHistory",
        body: {
          platform: 1,
          imei: "string",
          deviceType: "string",
          deviceManufacturer: "string",
          deviceModel: "string",
          deviceIP: "string",
          deviceName: "string",
          userId: user?.userId,
          from: "2021-09-23T17:22:19.157Z",
          to: "2021-09-23T17:22:19.157Z",
        },
      });

      if (result.status === true) {
        setPaymentList(result.data || []);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    PaymentList();
  }, []);

  return (
    <DashboardLayout>
      <div className="row">
        <div className="col-12 my-3">
          <Typography
            fontWeight="700"
            fontSize="18px"
            className="d-none d-md-block py-3"
          >
            Payment History
          </Typography>
        </div>
        <div className="col-lg-9">
          <div
            className={`${PaymentStyles.cardscontainer} d-flex justify-content-center`}
          >
            {paymentList?.length > 0 && !loading ? (
              paymentList.slice(0, 10).map((data, i) => {
                return (
                  <div key={i} className="mr-3 d-flex justify-content-center">
                    <div
                      className="card p-3"
                      style={{
                        maxWidth: "140",
                        minWidth: "135px",
                        height: "180px",
                      }}
                    >
                      <div className="d-flex justify-content-between h-25">
                        <div
                          className="text-secondary-blue fw-700"
                          style={{ fontSize: "0.6em" }}
                        >
                          {data.beneficiaryName}
                        </div>
                        <div>{data.icon}</div>
                      </div>
                      <div className="text-center h-50 d-flex justify-content-center align-items-center flex-column">
                        <div
                          className="text-secondary-blue fw-700 my-2"
                          style={{ fontSize: "0.9em" }}
                        >
                          {data.currency}
                          {formatCurrency(data.amount)}
                        </div>
                        <div
                          style={{ fontSize: "0.7em" }}
                          className="my-2 text-secondary-blue"
                        >
                          {data.narration}
                        </div>
                      </div>
                      <PaymentHistoryModal paymentList={data} />
                    </div>
                  </div>
                );
              })
            ) : (
              <>
                {loading && <ActivityLoader />}
                {!loading && paymentList.length === 0 ? (
                  <>
                    <div
                      className={`d-flex flex-column justify-content-center align-items-center`}
                    >
                      {" "}
                      <Image
                        src="/tumbleWeed.gif"
                        alt="TumbleWeed"
                        width={200}
                        height={200}
                      />
                      <h2 className="text-center pb-3 pt-0 text-secondary w3-animate-top">
                        No Payment History
                      </h2>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </>
            )}
          </div>
          <div className="d-flex justify-content-center mt-4 mb-5">
            <Link href="/payment/history">
              <button className={PaymentStyles.paymenthistorybutton}>
                View Payment History
              </button>
            </Link>
          </div>
          <div className="card p-lg-4 p-md-3 p-2 my-5">
            <Typography fontWeight="700" textAlign="left">
              Investments & Payments
            </Typography>
            <div className="mt-4 d-flex flex-wrap justify-content-start w-100">
              {tabs.map((tab, i) => (
                <div
                  key={i}
                  onClick={() => setCurrentTab(tab)}
                  className={`tab py-2 ${currentTab === tab ? "activetab" : ""
                    }`}
                >
                  {tab}
                </div>
              ))}
            </div>
            <div className="my-4">
              {currentTab === "Payment" && (
                <PaymentsComp
                  setPaymentItem={setPaymentItem}
                  setshowModal={setshowModal}
                />
              )}
              {currentTab === "Data & Airtime" && (
                <Dataandairtime
                  setPaymentItem={setPaymentItem}
                  setshowModal={setshowModal}
                />
              )}
              {/* <ComingSoon>
                {currentTab === "Internet" && (
                  <Internet
                    setPaymentItem={setPaymentItem}
                    setshowModal={setshowModal}
                  />
                )}
                {currentTab === "TV" && (
                  <Tv
                    setPaymentItem={setPaymentItem}
                    setshowModal={setshowModal}
                  />
                )}
                {currentTab === "Utility" && (
                  <Utility
                    setPaymentItem={setPaymentItem}
                    setshowModal={setshowModal}
                  />
                )}
              </ComingSoon> */}
            </div>
          </div>
        </div>
        <div className="col-lg-3 d-lg-block d-none mx-auto">
          <div className="card p-3 mb-2">
            <UserTasks />
          </div>
          <div className="card p-3">
            <Notifications />
          </div>
        </div>
      </div>
      <PaymentModal
        paymentItem={paymentItem}
        setshowModal={setshowModal}
        target={currentTab}
        showModal={showModal}
      />
    </DashboardLayout>
  );
};

export default Payment;
