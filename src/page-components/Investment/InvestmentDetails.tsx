import React, { Fragment, useState } from "react";
import { FaChevronLeft, FaPencilAlt } from "react-icons/fa";
import { FlexWrapper, Typography } from "../../shared-components";
import {
  determineBackgroundColor,
  determineTextColor,
  formatCurrency,
} from "../../utils/utilities";
import InvestmentModalHorizontalProgressBar from "./Utils/InvestmentModalHorizontalProgressBar";
import { InvestmentCircularWaveProgressBarV2 as InvestmentCircularWaveProgressBar } from "./Utils/InvestmentsCircularWaveProgressBar";
import InvestmentStyles from "../../../styles/investment.module.css";
import { InvestmentDetail } from "../../types/Investment";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import "antd/dist/antd.css";
import EndInvestmentModal from "./EndInvestmentModal";
import ChangeBeneficiaryModal from "./ChangeBeneficiaryModal";
import { useRouter } from "next/router";
import CreateInvestmentModal from "../Overview/CreateInvestmentModal";
const SimilarInvestmentDetails = ({
  details,
}: {
  details: InvestmentDetail;
}) => (
  <FlexWrapper
    flexDirection="column"
    width="100%"
    marginTop="20px"
    minHeight="50vh"
  >
    <FlexWrapper
      background="#263D61"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      padding="10px"
      borderRadius="6px 6px 0 0"
    >
      <Typography
        fontColor="#FFFFFF"
        fontSize="12px"
        marginBottom="10px"
        fontWeight="bold"
      >
        {details?.title?.charAt(0)?.toUpperCase() + details?.title?.slice(1)}
      </Typography>
      <FlexWrapper width="30%">
        <InvestmentModalHorizontalProgressBar
          color="#ABEEFF"
          fontColor="#FFFFFF"
          period={`${details.timeline.start} of ${details.timeline.end} months`}
          filledWidth={(details.timeline.start / details.timeline.end) * 100}
          emptyWidth={
            ((details.timeline.start - details.timeline.end) /
              details.timeline.end) *
            100
          }
        />
      </FlexWrapper>
    </FlexWrapper>
    <FlexWrapper
      background="#F9F9F9"
      height="50px"
      alignItems="Center"
      padding="10px"
    >
      <Typography color="#F9F9F9" fontSize="12px">
        Earnings: ₦{formatCurrency(Number(details.investmentAmount))}
      </Typography>
    </FlexWrapper>
  </FlexWrapper>
);

const CarSavingsDetails = ({
  type,
  moreInfo,
}: {
  type: string;
  moreInfo: string;
}) => {
  return (
    <FlexWrapper flexDirection="column" marginBottom="20px">
      <Typography fontSize="12px" marginBottom="5px">
        {type}
      </Typography>
      <Typography fontWeight="600" fontSize="14px">
        {moreInfo}
      </Typography>
    </FlexWrapper>
  );
};

const InvestmentDetails = ({
  handleClick,
  setModalOpen,
  details,
  closeDetails,
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(({ auth }) => auth);
  const {
    showOverview: { fromOverview },showOverview
  }: any = useAppSelector((state) => state.investment);
  const handleCloseDetails = () => closeDetails();
  const {details:detail}=showOverview
  

  const handleOverview = () => {
    router.push("/overview");
    dispatch({
      type: "CLEAR_INVESTMENT_OVERVIEW",
      payload: { show: false, fromOverview: false },
    });
  };

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Fragment>
      <div className="row my-4">
        <div className="col-lg-9">
          <div className="d-flex justify-content-between">
            <FlexWrapper>
              <FaChevronLeft
                color="#263D61"
                fontSize="24px"
                onClick={fromOverview ? handleOverview : handleClick}
                className="cursor-pointer"
              />
              <FlexWrapper flexDirection="column" marginLeft="20px">
                <Typography
                  fontSize="1.5em"
                  fontWeight="700"
                  marginBottom="10px"
                >
                  {details?.title?.toUpperCase()}
                </Typography>
                <InvestmentModalHorizontalProgressBar
                  color="#ABEEFF"
                  period={`${details.timeline.start} of ${details.timeline.end} months`}
                  filledWidth={
                    (details.timeline.start / details.timeline.end) * 100
                  }
                  emptyWidth={
                    ((details.timeline.start - details.timeline.end) /
                      details.timeline.end) *
                    100
                  }
                />
              </FlexWrapper>
            </FlexWrapper>
            <div className="d-none d-lg-block">
              {details.status === "pending" && (
                <CreateInvestmentModal
                  investment={{
                    title: details.title,
                    amount: details.investmentAmount,
                    type: details.type === "Future Fixed" ? "fixed" : "target",
                    month: details.type === "Future Fixed" ? "360" : "12",
                    currency: "NGN",
                    frequency: details.frequency,
                    startDate: details.effectiveDate.substr(0, 10),
                    endDate: details.maturityDate.substr(0, 10),
                    fundingAccount: details.payInAccount,
                    beneficiaryAccount: details.payInAccount,
                    rollover: "",
                    transactionPIN: "",
                    daoCode: details.daoCode,
                    targetValue: "",
                    investmentID: details.investmentID,
                  }}
                  isEditInvestment={true}
                  checkValid={{ isValid: true, type: "" }}
                  closeTargetModal={handleCancel}
                  errMsg={() => {}}
                />
              )}
            </div>
            <div className="d-block d-lg-none">
              <div className="d-flex justify-content-center">
                <small className="mr-1 p-1">Status: </small>
                <div
                  style={{
                    backgroundColor: determineBackgroundColor(details.status),
                    borderRadius: "30px",
                    width: "max-content",
                  }}
                  className="py-1 px-3 d-flex justify-content-center"
                >
                  <span
                    style={{
                      color: determineTextColor(details.status),
                      fontSize: "10px",
                    }}
                  >
                    {details.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card p-lg-5 p-2 my-5">
            <div className="row flex-wrap">
              <div className="col-12 d-none d-lg-block mb-3">
                <div className="d-flex justify-content-end">
                  <small className="mr-1 p-1">Status: </small>
                  <div
                    style={{
                      backgroundColor: determineBackgroundColor(details.status),
                      borderRadius: "30px",
                      width: "max-content",
                    }}
                    className="py-1 px-3 d-flex justify-content-center"
                  >
                    <span
                      style={{
                        color: determineTextColor(details.status),
                        fontSize: "10px",
                      }}
                    >
                      {details.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div style={{ position: "relative", minHeight: "250px" }}>
                  <InvestmentCircularWaveProgressBar
                    color="#ABEEFF"
                    title="Next Earning"
                    numOfDays={
                      details.status === "completed"
                        ? "0"
                        : details.status === "pending"
                        ? "-1"
                        : details.nextEarning
                    }
                    width="200px"
                    height="200px"
                    waveLargeText="3em"
                    waveSmallText="1em"
                    incrementValue={
                      details.status === "completed"
                        ? 100
                        : details.status === "pending"
                        ? 1
                        : (details.nextEarning / 30) * 100
                    }
                    mobileWaveLargeText="2em"
                    mobileWaveSmallText="1em"
                    top="20%"
                    left="15%"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <div className="mt-3">
                    <div
                      className="mt-3 mb-1 text-center text-secondary-blue fw-bold"
                      style={{ fontSize: "1.2em" }}
                    >
                      Next Earning
                    </div>
                    <div
                      className="my-1 mb-3 text-center text-secondary-blue fw-700"
                      style={{ fontSize: "1.2em" }}
                    >
                      ₦{formatCurrency(Number(details.intrest))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6  col-xl-4  d-flex justify-content-center">
                <div className="my-3">
                  <CarSavingsDetails
                    type="Deposited"
                    moreInfo={`₦${formatCurrency(
                      Number(details.investmentAmount)
                    )}`}
                  />
                  <CarSavingsDetails
                    type="Total Contribution"
                    moreInfo={`₦${formatCurrency(
                      Number(details.totalContribution)
                    )}`}
                  />
                  <CarSavingsDetails
                    type="Total Interest"
                    moreInfo={`₦${formatCurrency(
                      Number(details.totalContribution)
                    )}`}
                  />
                  <CarSavingsDetails
                    type="Duration Covered"
                    moreInfo={`${details.timeline.start} of ${details.timeline.end} month`}
                  />
                  <CarSavingsDetails
                    type="Investment Frequency"
                    moreInfo={details.frequency}
                  />
                  <CarSavingsDetails
                    type="Date"
                    moreInfo={`${details.effectiveDate
                      .slice(0, 10)
                      .split("-")
                      .reverse()
                      .join("/")} - ${details.maturityDate
                      .slice(0, 10)
                      .split("-")
                      .reverse()
                      .join("/")}`}
                  />
                </div>
              </div>
              <div className="col-12  col-xl-4 mx-md-auto">
                <div
                  className="bg-gray-three"
                  style={{
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "10px",
                    // wordWrap: 'break-word',
                  }}
                >
                  <div>
                    <div className="my-5">
                      <p className="text-secondary-blue fw-700 p-0 m-0" style={{ maxWidth: '100%' }}>
                        {detail.beneficiaryName && detail.beneficiaryName
                          .toString()
                          .split(" ")
                          .map(
                            (userName) =>
                              userName.charAt(0).toUpperCase() +
                              userName.substr(1).toLowerCase()
                          )
                          .join(" ")}
                      </p>
                      <small className="text-secondary-blue">
                        Sterling Bank
                      </small>
                    </div>
                    <div className="mb-2">
                      <p className="text-secondary-blue fw-700 p-0 m-0">
                        {detail.beneficiaryAccount}
                      </p>
                    </div>
                    {details.status === "pending" ? (
                      <div className="mb-2">
                        <ChangeBeneficiaryModal />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  {details.status !== "completed" && (
                    <div className="d-flex justify-content-center my-3">
                      <div className="demo">
                        <EndInvestmentModal
                          title="End Investment"
                          className={InvestmentStyles.endinvestmentbutton}
                          details={details}
                          user={user}
                          closeDetails={handleCloseDetails}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 d-none d-lg-block">
          <div className="card py-3 px-2">
            <SimilarInvestmentDetails details={details} />
          </div>
        </div>
        <div className="p-relative">
          <button
            className={`d-block d-lg-none bg-primary-blue float-action-button`}
            style={{ bottom: "20%" }}
            onClick={() => setModalOpen(true)}
          >
            <FaPencilAlt
              className="text-secondary-blu"
              style={{ fontSize: "20px" }}
            />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default InvestmentDetails;
