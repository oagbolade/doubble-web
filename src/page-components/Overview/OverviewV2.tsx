import { MouseEventHandler, useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { FlexWrapper, Typography } from "../../shared-components";
import { OverviewDartIconSmall, CactusIcon } from "../../icons";
import UserTasks from "./Tasks/UserTasksV2";
import OverviewNotification from "./OverviewRecentNotification";
import { InvestmentCircularWaveProgressBarV2 as InvestmentCircularWaveProgressBar } from "../Investment/Utils/InvestmentsCircularWaveProgressBar";
import { httpRequest, HTTPResponse } from "../../https/http";
import DashboardLayout from "../../shared-components/DashboardLayout/DashboardLayout";
import overviewStyles from "../../../styles/overview.module.css";
import Targetitems from "./Targetitems";
import {
  useAppSelector,
  useAppDispatch,
} from "../../redux/hooks"; /*
import progress from "../../shared-components/HorizontalProgressBar/HorizontalProgressBar" */
import GetStartedModal from "./GetStartedModal";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Image from "next/image";
import { checkInvestmentStatus } from "../../redux/investment/investmentAction";
import { getNextEarning } from "../../utils/utilities";
import { useRouter } from "next/router";
import { userInfo } from "../../redux/auth/authActions";

const Overview = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [targetActive, setTargetActive] = useState([]);
  const [noTargetActive, setNoTargetActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { user } = useAppSelector((state) => state.auth);

  const getTargetActive = async () => {
    try {
      setLoading(true);
      const result = await httpRequest({
        method: "POST",
        url: "TargetInvestment/ListofActiveTarget",
        body: {
          platform: 0,
          imei: "string",
          deviceType: "string",
          deviceManufacturer: "string",
          deviceModel: "string",
          deviceIP: "string",
          deviceName: "string",
          userId: user?.userId,
        },
      });
      if (result?.data) {
        setLoading(false);
        setTargetActive(result?.data || []);
        setNoTargetActive(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getTargetActive();
  }, []);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const singleStatus = loading
    ? 0
    : checkInvestmentStatus(
        targetActive[0]?.effectiveDate,
        targetActive[0]?.maturityDate
      );
  const singleNextEarning = loading
    ? 0
    : getNextEarning(targetActive[0]?.maturityDate) > 0
    ? getNextEarning(targetActive[0]?.maturityDate)
    : 0;

  return (
    <DashboardLayout>
      <div className="row">
        <div className="col-12 my-3">
          <Typography
            fontWeight="700"
            fontSize="18px"
            className="d-none d-md-block pt-3 px-3"
          >
            Overview
          </Typography>
        </div>
        <div className="col-lg-9 row mx-auto">
          <div className="col-xlg-3 col-lg-5 col-12 d-none d-lg-block">
            {/*
            { noTargetActive && <div> <SterlingLoadingIcon /> </div>} */}

            {targetActive.length > 0 && (
              <div className={`${overviewStyles.bigcard} card p-3`}>
                <div className="text-center py-3">
                  <Typography fontWeight="700" fontSize="18px">
                    {targetActive.length > 0 ? (
                      targetActive[0]?.purpose
                    ) : !loading ? (
                      <Typography
                        style={{ color: "#C4C4C4", marginTop: "50px" }}
                      >
                        No Investment Found
                      </Typography>
                    ) : (
                      <span
                        style={{
                          display: "inline-block",
                          margin: "auto",
                        }}
                      >
                        <Image
                          src="/loader.gif"
                          alt="investment loader"
                          width={40}
                          height={40}
                          className="mt-1"
                        />
                      </span>
                    )}
                  </Typography>
                </div>
                <div style={{ position: "relative", minHeight: "180px" }}>
                  {targetActive.length > 0 ? (
                    <InvestmentCircularWaveProgressBar
                      color="#ABEEFF"
                      title="Next Earning"
                      numOfDays={
                        singleStatus === "completed"
                          ? "0"
                          : singleStatus === "pending"
                          ? "-1"
                          : String(singleNextEarning)
                      }
                      width="108px"
                      height="108px"
                      mobileHeight="108px"
                      mobileWidth="108px"
                      waveLargeText="27px"
                      waveSmallText="10px"
                      mobileWaveLargeText="27px"
                      mobileWaveSmallText="10px"
                      incrementValue={
                        singleStatus === "completed"
                          ? 100
                          : singleStatus === "pending"
                          ? 1
                          : (singleNextEarning / 30) * 100
                      }
                      top="20%"
                      left="15%"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <FlexWrapper flexDirection="column">
                      {targetActive.length > 0 ? (
                        <Typography
                          fontWeight="700"
                          fontSize="8px"
                          className="my-1"
                        >
                          Savings Frequency
                        </Typography>
                      ) : (
                        ""
                      )}
                      <Typography
                        fontWeight="700"
                        fontSize="12px"
                        className="my-1"
                      >
                        {targetActive.length > 0
                          ? targetActive[0]?.frequency
                          : !loading
                          ? ""
                          : ""}
                      </Typography>
                    </FlexWrapper>
                  </div>
                  <div>
                    <FlexWrapper flexDirection="column">
                      {targetActive.length > 0 ? (
                        <Typography
                          fontWeight="700"
                          fontSize="8px"
                          className="my-1"
                        >
                          Total Savings
                        </Typography>
                      ) : (
                        ""
                      )}
                      <Typography
                        fontWeight="700"
                        fontSize="12px"
                        className="my-1"
                      >
                        {/* ₦ */}
                        {targetActive.length > 0
                          ? targetActive[0]?.contributions
                          : ""}
                      </Typography>
                    </FlexWrapper>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-baseline mt-4 mb-1">
                  {targetActive.length > 0 ? (
                    <button
                      className="px-2"
                      disabled={!targetActive.length}
                      onClick={() => {
                        dispatch({
                          type: "SHOW_INVESTMENT_OVERVIEW",
                          payload: { show: true, details: targetActive[0] },
                        });
                        router.push("/investment");
                      }}
                      style={{
                        width: "100px",
                        height: "30px",
                        background: "#00CCFF",
                        color: "#263E61",
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        borderRadius: "5px",
                        border: "none",
                        cursor: !targetActive.length
                          ? "not-allowed"
                          : "pointer",
                      }}
                    >
                      <Typography fontSize="12px">Click to view</Typography>
                    </button>
                  ) : (
                    ""
                  )}
                  <div className="d-flex">
                    <FlexWrapper
                      fontWeight="700"
                      fontSize="12px"
                      marginRight="10px"
                      className="mr-2"
                    >
                      {targetActive.length > 0
                        ? targetActive[0]?.category
                        : !loading
                        ? ""
                        : ""}
                    </FlexWrapper>
                    {targetActive.length > 0 && !loading ? (
                      <OverviewDartIconSmall />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          {loading && targetActive.length < 1 && (
            <div className="col-12 d-flex justify-content-center mt-5">
              <img
                src="/loader.gif"
                alt="investment loader"
                width={100}
                height={100}
                className="mt-1"
              />
            </div>
          )}
          {!loading && targetActive.length < 1 && (
            <Fragment>
              <div className="col-12 d-flex justify-content-center mt-5">
                <img
                  src="/tumbleWeed.gif"
                  alt="investment loader"
                  width={300}
                  height={300}
                  className="mt-1"
                />
              </div>
              <div
                className="text-center text-secondary-blue"
                style={{
                  fontSize: "24px",
                  marginTop: "-70px",
                  position: "relative",
                }}
              >
                No Investment
              </div>
            </Fragment>
          )}
          <div className="col-xlg-9 col-lg-7 col-12 row mx-auto p-0">
            <div
              className={`col-12 row mx-auto p-0`}
              style={{ maxHeight: "400px" }}
            >
              {targetActive.length > 0 && (
                <div
                  className={`${overviewStyles.cardscontainer} col-lg-12 d-flex`}
                >
                  {/* { noTargetActive && <div ><SterlingLoadingIcon /> </div>} */}
                  {loading && !targetActive.length
                    ? [1, 2, 3].map((no) => (
                        <div className="mr-3" key={no}>
                          <div
                            className="card p-3"
                            style={{
                              maxWidth: "160px",
                              minWidth: "150px",
                              height: "200px",
                            }}
                          >
                            <div className="d-flex justify-content-between py-1">
                              <Typography fontWeight="700" fontSize="10px">
                                Loading items...
                              </Typography>
                              <CactusIcon height="50" />
                            </div>
                            <div
                              style={{
                                position: "relative",
                                minHeight: "72px",
                                marginBottom: "10px",
                              }}
                            >
                              <InvestmentCircularWaveProgressBar
                                color="#ABEEFF"
                                title="Next Earning"
                                numOfDays="0"
                                width="72px"
                                height="72px"
                                waveLargeText="18px"
                                waveSmallText="5px"
                                mobileHeight="108px"
                                mobileWidth="108px"
                                mobileWaveLargeText="27px"
                                mobileWaveSmallText="10px"
                                incrementValue={90}
                                top="20%"
                                left="15%"
                              />
                            </div>
                            <SkeletonTheme
                              color="#EEE"
                              highlightColor="#00CCFF"
                            >
                              <Skeleton height={25} width={130} />
                            </SkeletonTheme>
                          </div>
                        </div>
                      ))
                    : !loading && !targetActive.length
                    ? [1, 2, 3].map((no) => (
                        <div className="mr-3" key={no}>
                          <div
                            className="card p-3"
                            style={{
                              maxWidth: "160px",
                              minWidth: "150px",
                              height: "200px",
                            }}
                          >
                            <div className="d-flex justify-content-between py-1">
                              <Typography
                                fontWeight="700"
                                fontSize="10px"
                                marginBottom="35px"
                              >
                                No Investment Found
                              </Typography>
                            </div>
                            <div
                              style={{
                                position: "relative",
                                minHeight: "72px",
                                marginBottom: "10px",
                              }}
                            >
                              <InvestmentCircularWaveProgressBar
                                color="#ABEEFF"
                                title="Next Earning"
                                numOfDays="0"
                                width="72px"
                                height="72px"
                                waveLargeText="18px"
                                waveSmallText="5px"
                                mobileHeight="108px"
                                mobileWidth="108px"
                                mobileWaveLargeText="27px"
                                mobileWaveSmallText="10px"
                                incrementValue={0}
                                top="20%"
                                left="15%"
                              />
                            </div>
                            <button
                              style={{
                                width: "90%",
                                height: "20px",
                                background: "#00CCFF",
                                color: "#263E61",
                                display: "flex",
                                justifyContent: "space-evenly",
                                alignItems: "center",
                                borderRadius: "5px",
                                border: "none",
                                cursor: "read-only",
                                marginBottom: "8px",
                              }}
                              className="mt-4 mb-1"
                            >
                              <Typography fontSize="12px">
                                Click to view
                              </Typography>
                            </button>
                          </div>
                        </div>
                      ))
                    : targetActive
                        .filter((item, index) => index < 5)
                        .map((target, i: number) => {
                          const status = checkInvestmentStatus(
                            target?.effectiveDate,
                            target?.maturityDate
                          );
                          const nextEarning =
                            getNextEarning(target.maturityDate) > 0
                              ? getNextEarning(target.maturityDate)
                              : 0;
                          return (
                            <div className="mr-3" key={i}>
                              <div
                                className="card p-3"
                                style={{
                                  maxWidth: "160px",
                                  minWidth: "150px",
                                  height: "200px",
                                }}
                              >
                                <div className="d-flex justify-content-between py-1">
                                  <Typography fontWeight="700" fontSize="10px">
                                    {target.purpose}
                                  </Typography>
                                  <CactusIcon height="50" />
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    minHeight: "72px",
                                  }}
                                >
                                  <InvestmentCircularWaveProgressBar
                                    color="#ABEEFF"
                                    title="Next Earning"
                                    numOfDays={
                                      status === "completed"
                                        ? "0"
                                        : status === "pending"
                                        ? "-1"
                                        : String(nextEarning)
                                    }
                                    width="72px"
                                    height="72px"
                                    waveLargeText="18px"
                                    waveSmallText="5px"
                                    mobileHeight="108px"
                                    mobileWidth="108px"
                                    mobileWaveLargeText="27px"
                                    mobileWaveSmallText="10px"
                                    incrementValue={
                                      status === "completed"
                                        ? 100
                                        : status === "pending"
                                        ? 1
                                        : (nextEarning / 30) * 100
                                    }
                                    top="20%"
                                    left="15%"
                                  />
                                </div>
                                <div className="d-flex justify-content-center">
                                  <button
                                    style={{
                                      width: "90%",
                                      height: "20px",
                                      background: "#00CCFF",
                                      color: "#263E61",
                                      display: "flex",
                                      justifyContent: "space-evenly",
                                      alignItems: "center",
                                      borderRadius: "5px",
                                      border: "none",
                                      // marginTop: "50px",
                                      cursor: "pointer",
                                      marginBottom: "8px",
                                    }}
                                    className="mt-4 mb-1"
                                    onClick={() => {
                                      dispatch({
                                        type: "SHOW_INVESTMENT_OVERVIEW",
                                        payload: {
                                          show: true,
                                          details: target,
                                        },
                                      });
                                      router.push("/investment");
                                    }}
                                  >
                                    <Typography fontSize="12px">
                                      Click to view
                                    </Typography>
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                </div>
              )}
              <div
                className={`${
                  overviewStyles.investmentbuttonscontainer
                } col-lg-12 d-flex ${
                  targetActive.length < 1 ? "justify-content-center" : ""
                } mt-3`}
              >
                {targetActive.length > 0 && !loading && (
                  <Link href="/investment">
                    <button
                      className={overviewStyles.viewinvestmentbutton}
                      style={{ lineHeight: "21px" }}
                    >
                      View My Investments{" "}
                    </button>
                  </Link>
                )}
                {!loading && (
                  <GetStartedModal
                    type="fixed"
                    title="Create Investment"
                    closeTargetModal={handleCancel}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card p-lg-4 p-md-3 p-2 my-3">
              <Typography fontWeight="700" textAlign="center">
                Investments & Payments
              </Typography>
              <div className="mt-4">
                <Targetitems />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 d-lg-block d-none">
          <div className="card p-3 mb-2">
            <UserTasks />
          </div>
          <div className="card p-3">
            <OverviewNotification />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Overview;
