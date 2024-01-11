import React, { Fragment, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  FlexWrapper,
  Typography,
  IconButton,
  Card,
} from "../../shared-components";
import InvestmentTable from "./InvestmentTable";
import InvestmentDetails from "./InvestmentDetails";
import DashboardLayout from "../../shared-components/DashboardLayout/DashboardLayout";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import DashboardStyles from "../../../styles/dashboard.module.css";

import {
  activeFixedInvestment,
  activeRewardInvestment,
  activeTargetInvestment,
  allCompletedInvestments,
  checkInvestmentStatus,
  fetchAllInvestments,
  futureFixedInvestment,
  futureRewardInvestment,
  futureTargetInvestment,
  searchInvestmentAction,
} from "../../redux/investment/investmentAction";
import { InvestmentState } from "../../types/Investment";
import ActivityLoader from "../../shared-components/Loader/ActivityLoader";
import GetStartedModal from "../Overview/GetStartedModal";
import { cleanNumber, getNextEarning } from "../../utils/utilities";
import { SearchIcon, TimesIcon } from "../../icons";

interface InvestmentModalBeneficiaryProps {
  name: string;
  bank: string;
  accountNumber: string;
}

const InvestmentModalBeneficiary = (props: InvestmentModalBeneficiaryProps) => {
  return (
    <FlexWrapper flexDirection="column" padding="10px">
      <Card
        padding="15px"
        width="100%"
        height="100%"
        borderRadius="10px"
        bgColor="#F9F9F9"
        boxShadow=""
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        <FlexWrapper flexDirection="column" alignItems="flex-start">
          <Typography fontSize="18px" fontWeight="400" fontColor="#263D61">
            {props.name}
          </Typography>
          <Typography fontSize="12px" fontWeight="400" fontColor="#263D61">
            {props.bank}
          </Typography>
        </FlexWrapper>

        <FlexWrapper flexDirection="column" alignItems="flex-start">
          <Typography fontSize="18px" fontWeight="700" fontColor="#263D61">
            {props.accountNumber}
          </Typography>
          <Typography fontSize="12px" fontWeight="700" fontColor="#00CCFF">
            Change Beneficiary
          </Typography>
        </FlexWrapper>
      </Card>
    </FlexWrapper>
  );
};

const Investment = () => {
  const dispatch = useAppDispatch();

  const [investmentDetaiIsOpen, setInvestmentDetailOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [modalIsOpen, setModalOpen] = useState(false);
  const [editInvestmentModalIsOpen, setEditInvestmentModalOpen] = useState(
    false
  );
  const { user } = useAppSelector((state) => state.auth);
  const [investmentDetail, setInvestmentDetail] = useState({});
  const [statsFilter, setStatsFilter] = useState("asc");

  const showDetail = (data: any) => {
    setInvestmentDetailOpen(true);
    setInvestmentDetail(data);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchInvestment, setSearchInvestment] = useState("");

  const handleSearch = () => {
    dispatch(searchInvestmentAction(user.userId, searchInvestment));
  };

  const handleKeyDown=(e)=>{
    if (["Enter", ";", " ", "Tab", ","].includes(e.key)) {
      e.preventDefault();
      dispatch(searchInvestmentAction(user.userId, searchInvestment));
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const {
    tableData,
    loading,
    showOverview,
    selectedinvestType,
    isFromSettingsPage,
  }: InvestmentState = useAppSelector((state) => state.investment);
  const {
    allActiveInvestment,
    allCompletedInvestment,
    allFutureInvestment,
  } = useAppSelector((state) => state.settings);

  const [investmentType, setInvestmentType] = useState(
    selectedinvestType || "activeFixed"
  );

  useEffect(() => {
    if (user?.userId && user?.userId?.length > 0) {
      if (investmentType === "activeFixed") {
        dispatch(activeFixedInvestment(user?.userId));
        dispatch({ type: "RESET_SELECTED_TYPE", payload: "activeFixed" });
      } else if (investmentType === "futureTarget") {
        dispatch(futureTargetInvestment(user?.userId));
        dispatch({ type: "RESET_SELECTED_TYPE", payload: "futureTarget" });
      } else if (investmentType === "activeReward"){
        dispatch(activeRewardInvestment(user?.userId));
        dispatch({ type: "RESET_SELECTED_TYPE", payload: "activeReward" });
      }else if (investmentType === "futureReward"){
        dispatch(futureRewardInvestment(user?.userId));
        dispatch({ type: "RESET_SELECTED_TYPE", payload: "futureReward" });
      }else if (investmentType === "futureFixed") {
        dispatch(futureFixedInvestment(user?.userId));
        dispatch({ type: "RESET_SELECTED_TYPE", payload: "futureFixed" });
      } else if (investmentType === "allCompleted") {
        dispatch(allCompletedInvestments(user?.userId));
        dispatch({ type: "RESET_SELECTED_TYPE", payload: "allCompleted" });
      } else if (investmentType === "activeTargeet") {
        dispatch(activeTargetInvestment(user?.userId));
        dispatch({ type: "RESET_SELECTED_TYPE", payload: "activeTargeet" });
      } else if (investmentType === "active" && isFromSettingsPage) {
        dispatch(fetchAllInvestments(allActiveInvestment.data));
        dispatch({ type: "RESET_SELECTED_TYPE", payload: "active" });
      } else if (investmentType === "future" && isFromSettingsPage) {
        dispatch(fetchAllInvestments(allFutureInvestment.data));
        dispatch({ type: "RESET_SELECTED_TYPE", payload: "future" });
      } else if (investmentType === "completed" && isFromSettingsPage) {
        dispatch(fetchAllInvestments(allCompletedInvestment.data));
        dispatch({ type: "RESET_SELECTED_TYPE", payload: "completed" });
      } else {
        dispatch(activeFixedInvestment(user?.userId));
        isFromSettingsPage &&
          dispatch({ type: "RESET_SELECTED_TYPE", payload: "activeFixed" });
        setInvestmentType("activeFixed");
      }
    }
  }, [dispatch, investmentType, investmentDetaiIsOpen, user]);

  const filter = [
    { label: "A-Z", value: "asc" },
    { label: "Z-A", value: "desc" },
  ];

  useEffect(() => {
    if (showOverview.show) {
      const { details } = showOverview;
      const newDetails = {
        title: details.purpose,
        type: details.category,
        investmentAmount: cleanNumber(details.investmentValue),
        maturityDate: details.maturityDate,
        nextEarning:
          getNextEarning(details.maturityDate) > 0
            ? getNextEarning(details.maturityDate)
            : 0,
        effectiveDate: details.effectiveDate,
        investmentID: details.investment_ID,
        totalContribution: cleanNumber(details.contributions),
        frequency: details.frequency,
        intrest: Math.floor(details.interest),
        timeline: {
          start: 0,
          end: details.term,
        },
        status: checkInvestmentStatus(
          details.effectiveDate,
          details.maturityDate
        ),
      };
      setInvestmentDetailOpen(true);
      setInvestmentDetail(newDetails);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      dispatch({
        type: "CLEAR_INVESTMENT_OVERVIEW",
        payload: { show: false, fromOverview: true },
      });
    }
  }, [showOverview]);

  return (
    <DashboardLayout>
      {investmentDetaiIsOpen ? (
        <InvestmentDetails
          closeDetails={() => setInvestmentDetailOpen(false)}
          details={investmentDetail}
          setModalOpen={() => {
            setEditInvestmentModalOpen(true);
          }}
          handleClick={() => {
            setInvestmentDetailOpen(false);
          }}
        />
      ) : (
        <Fragment>
          <Typography fontWeight="600" className="my-4 d-none d-md-block">
            Investments
          </Typography>
          <div
            className="d-flex justify-content-between flex-wrap"
            style={{ margin: "50px 0 30px 0" }}
          >
            <div className="my-1">
              <select
                value={selectedinvestType}
                onChange={({ target }) => setInvestmentType(target.value)}
                className={`doubble-select px-2 ${
                  openSearch ? DashboardStyles.toggleShow : ""
                }`}
              >
                {/* <option value="">All Investment</option> */}
                <option value="activeFixed">Active Fixed Investment</option>
                <option value="activeTargeet">Active Target Investment</option>
                <option value="activeReward">Active Reward Investment</option>
                <option value="futureFixed">Future Fixed Investment</option>
                <option value="futureTarget">Future Target Investment</option>
                <option value="futureReward">Future Reward Investment</option>
                <option value="allCompleted">Completed Investment</option>
                {selectedinvestType === "active" ||
                selectedinvestType === "future" ||
                selectedinvestType === "completed" ? (
                  <option value={selectedinvestType}>
                    {selectedinvestType.charAt(0).toUpperCase() +
                      selectedinvestType.substring(1)}{" "}
                    Investments
                  </option>
                ) : (
                  ""
                )}
              </select>
            </div>
            {/* <div className="d-lg-block d-none">
            </div> */}
            <div className="d-flex my-1">
              <form
                className={`${DashboardStyles.searchcontainer} mx-1 d-flex align-items-center`}
              >
                <input
                  className={`${DashboardStyles.searchInput} ${
                    openSearch ? "" : DashboardStyles.toggleShow
                  }`}
                  placeholder="Search"
                  value={searchInvestment}
                  maxLength={25}
                  onChange={(e) => setSearchInvestment(e.currentTarget.value)}
                  onKeyDown={handleKeyDown}
                />
                <SearchIcon
                  className={`${DashboardStyles.inputicon} ${DashboardStyles.largesearch}`}
                  fillColor="#E5E5E5"
                  onClick={handleSearch}
                />
                <SearchIcon
                  className={`${DashboardStyles.inputicon} ${DashboardStyles.mobilesearch}`}
                  fillColor="#E5E5E5"
                  onClick={() =>
                    openSearch ? handleSearch() : setOpenSearch(true)
                  }
                />

                <TimesIcon
                  className={`${DashboardStyles.timesIcon} ${
                    openSearch ? "" : DashboardStyles.toggleShow
                  }`}
                  fillColor="#263D61"
                  onClick={() => setOpenSearch(false)}
                />
              </form>
              <select
                onChange={({ target }) => setStatsFilter(target.value)}
                className={`doubble-select px-2 ${DashboardStyles.sortfilter} ${
                  openSearch ? DashboardStyles.toggleShow : "d-block"
                }`}
                value={statsFilter}
              >
                {filter.map((option, i) => (
                  <option key={i} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="ml-2 d-none d-md-block">
                <GetStartedModal type="fixed" closeTargetModal={handleCancel}>
                  <IconButton
                    borderRadius="5px"
                    background="#263D61"
                    onClick={() => setModalOpen(true)}
                  >
                    <FaPlus fontSize="24px" color="#00CCFF" />
                  </IconButton>
                </GetStartedModal>
              </div>
            </div>
          </div>
          <div className="p-relative">
            <InvestmentTable
              tabledata={tableData}
              handleClick={showDetail}
              filter={statsFilter}
              loading={loading}
            />
            {loading && tableData?.length === 0 && (
              <div style={{ height: "100px" }} />
            )}
            {loading && <ActivityLoader />}

            <button
              className={`d-block d-md-none bg-primary-blue float-action-button`}
              style={{ bottom: "7%" }}
              onClick={() => setModalOpen(true)}
            >
              <FaPlus
                className="text-secondary-blue"
                style={{ fontSize: "20px" }}
              />
            </button>
          </div>
        </Fragment>
      )}
    </DashboardLayout>
  );
};

export default Investment;
