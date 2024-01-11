import { useState, useEffect } from "react";
import { Typography } from "../../shared-components";
import DashboardLayout from "../../shared-components/DashboardLayout/DashboardLayout";
import SettingStyles from "../../../styles/setting.module.css";
import DashboardStyles from "../../../styles/dashboard.module.css";
import ProfileForm from "./ProfileForm";
import { ActiveIcon, CompletedIcon, FutureIcon } from "../../icons";
import SettingsCard from "./SettingsCard";
import { AccordionComponent as FAQ } from "../faq/accordion/accordion";
import TermsAndCondition from "./termsandcondition/termsandcondition";
import ContactUs from "./ContactUs";
import SecuritySettings from "./SecuritySettings";
import AccountTable from "./AccountTable";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { FaChevronLeft } from "react-icons/fa";
import MobileSettingsMenu from "./MobileSettingsMenu";
import { httpRequest } from "../../https/http";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  getAllActiveInvestment,
  getAllCompletedInvestment,
  getAllFutureInvestment,
  getSettingsInvestmentCount,
} from "../../redux/settings/settingsAction";
import { accordionData } from "./faq/utils/contentFaq";

const tabs = [
  "My Account",
  "Security Settings",
  "Contact Us",
  "FAQ",
  "Terms $ Conditions",
];
const subtabs = [
  "Change Login Password",
  "Reset Transaction PIN",
  "Security Questions",
];

const accounts = [
  {
    accountNo: "000998098098",
    accountName: "Desmond Edward",
    accountType: "Savings",
    bank: "Sterling",
  },
  {
    accountNo: "000998098098",
    accountName: "Desmond Edward",
    accountType: "Current",
    bank: "Sterling",
  },
];

const Settings = () => {
  const router = useRouter();
  const { type } = router.query;
  const dispatch = useAppDispatch();
  const [getAccount, setGetAccount] = useState<any>([]);
  const [currentTab, setCurrentTab] = useState(
    type === "security" ? tabs[1] : tabs[0]
  );
  const [subTab, setSubTab] = useState(
    type === "security" ? subtabs[2] : subtabs[0]
  );
  const [toggled, setToggled] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user } = useAppSelector((state) => state.auth);
  const { loadAllInvestmentCount, allInvestmentCount } = useAppSelector(
    (state) => state.settings
  );

  const GetAccount = async () => {
    try {
      setLoading(true);
      const result = await httpRequest({
        method: "POST",
        url: "Bank/GetAccountsByBVN",
        body: {
          platform: 1,
          imei: "string",
          deviceType: "string",
          deviceManufacturer: "string",
          deviceModel: "string",
          deviceIP: "string",
          deviceName: "string",
          bvn: user?.bvn,
        },
      });
      if (result.status === true) {
        setLoading(false);
        setGetAccount(result.data || []);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    GetAccount();
  }, []);

  useEffect(() => {
    if (user.userId) {
      dispatch(getAllActiveInvestment(user.userId));
      dispatch(getAllFutureInvestment(user.userId));
      dispatch(getAllCompletedInvestment(user.userId));
      dispatch(getSettingsInvestmentCount(user.userId));
    }
  }, [user]);

  return (
    <DashboardLayout>
      <div className={SettingStyles.large}>
        <img
          src="/settings/settings-img.png"
          alt=""
          className={`${SettingStyles.settingsimage} w-100 p-fixed`}
        />
        <div className={`${SettingStyles.settingscontainer} row`}>
          <div className="col-md-4">
            <div className="card p-3">
              <div className="d-flex justify-content-center">
                <span
                  className={`${DashboardStyles.user} d-flex justify-content-center  align-items-center`}
                >
                  {user?.firstName?.charAt(0)} {user?.lastName?.charAt(0)}
                </span>
              </div>
              <ProfileForm />
            </div>
          </div>
          <div className="col-md-8">
            <div
              className={`${SettingStyles.cardscontainer} w-100 d-flex justify-content-between`}
            >
              <SettingsCard
                status="active"
                badgeBackground="#B3EDDE"
                loading={loadAllInvestmentCount}
                cardBackground="#ebfffa"
                quantity={allInvestmentCount.active}
                badgeItems={
                  allInvestmentCount.active ? ["Targets", "Fixed"] : ["None"]
                }
                icon={<ActiveIcon />}
              />
              <SettingsCard
                status="future"
                badgeBackground="#FEDF9E"
                loading={loadAllInvestmentCount}
                cardBackground="#FFECC3"
                quantity={allInvestmentCount.future}
                badgeItems={
                  allInvestmentCount.future ? ["Targets", "Fixed"] : ["None"]
                }
                icon={<FutureIcon />}
              />
              <SettingsCard
                status="completed"
                badgeBackground="#C5CBD4"
                loading={loadAllInvestmentCount}
                cardBackground="#E9ECEF"
                quantity={allInvestmentCount.completed}
                badgeItems={
                  allInvestmentCount.completed ? ["Targets", "Fixed"] : ["None"]
                }
                icon={<CompletedIcon />}
              />
            </div>
            <div className="card p-lg-4 p-md-3 p-2" style={{ height: "430px" }}>
              <div className="mt-3 d-flex flex-wrap justify-content-start w-100">
                {tabs.map((tab, i) => (
                  <div
                    key={i}
                    onClick={() => setCurrentTab(tab)}
                    className={`tab py-2 ${
                      currentTab === tab ? "activetab" : ""
                    }`}
                  >
                    {tab}
                  </div>
                ))}
              </div>
              <div className={`${SettingStyles.tabcontent} mt-2`}>
                {currentTab === "FAQ" && <FAQ data={accordionData} />}
                {["Terms of Use", "Terms $ Conditions"].includes(
                  currentTab
                ) && <TermsAndCondition />}
                {currentTab === "Contact Us" && <ContactUs />}
                {currentTab === "Security Settings" && (
                  <SecuritySettings
                    subtabs={subtabs}
                    subTab={subTab}
                    setSubTab={setSubTab}
                  />
                )}
                {["My Account", "My Profile"].includes(currentTab) &&
                getAccount?.ngnAccounts?.length > 0 &&
                !loading ? (
                  <AccountTable tabledata={getAccount.ngnAccounts} />
                ) : loading ? (
                  ["My Account", "My Profile"].includes(currentTab) && (
                    <SkeletonTheme
                      color="#eee"
                      highlightColor="rgba(0, 204, 255,0.3)"
                    >
                      <p style={{ marginTop: "10px" }}>
                        <Skeleton duration={2} count={1} height={30} />
                      </p>
                      <p style={{ marginTop: "10px" }}>
                        <Skeleton duration={2} count={1} height={30} />
                      </p>
                      <p style={{ marginTop: "10px" }}>
                        <Skeleton duration={2} count={1} height={30} />
                      </p>
                      <p style={{ marginTop: "10px" }}>
                        <Skeleton duration={2} count={1} height={30} />
                      </p>
                    </SkeletonTheme>
                  )
                ) : ["My Account", "My Profile"].includes(currentTab) ? (
                  <>
                    <div className={SettingStyles.tumbleweed}>
                      {" "}
                      <Image
                        src="/tumbleWeed.gif"
                        alt="TumbleWeed"
                        width={250}
                        height={250}
                      />
                    </div>
                    <h2 className="text-center pb-5 pt-0 text-secondary w3-animate-top">
                      No bank account
                    </h2>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={SettingStyles.mobile}>
        <div className={toggled ? "d-none" : "d-block"}>
          <div className={SettingStyles.menu}>
            <div className={SettingStyles.topbar}></div>
            <MobileSettingsMenu
              setCurrentTab={setCurrentTab}
              setToggled={setToggled}
              setSubTab={setSubTab}
            />
          </div>
        </div>
        <div className={toggled ? "d-block" : "d-none"}>
          <div
            className={SettingStyles.backbutton}
            onClick={() => setToggled(false)}
          >
            <FaChevronLeft
              color="#263D61"
              fontSize="1em"
              className="cursor-pointer mr-1"
            />
            <Typography fontWeight="600" className="my-2 cursor-pointer">
              Settings
            </Typography>
          </div>
          <div className={SettingStyles.mobilecontentcontainer}>
            {currentTab === "FAQ" && <FAQ data={accordionData} />}
            {["Terms of Use", "Terms $ Conditions"].includes(currentTab) && (
              <TermsAndCondition />
            )}
            {currentTab === "Contact Us" && <ContactUs />}
            {currentTab === "Security Settings" && (
              <SecuritySettings
                subtabs={subtabs}
                subTab={subTab}
                setSubTab={setSubTab}
              />
            )}
            {currentTab === "My Account" && (
              <AccountTable tabledata={accounts} />
            )}
            {currentTab === "My Profile" && <ProfileForm />}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
