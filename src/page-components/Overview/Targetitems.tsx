import { useEffect } from "react";
import Image from "next/image";
import { OverviewDartIconSmall } from "../../icons";
import overviewStyles from "../../../styles/overview.module.css";
import { httpRequest, HTTPResponse } from "../../https/http";
import { Fragment, useState } from "react";
import TrialModal from "./TrialModal";
import Modal from "./TargetModal";
import FixedModal from "./FixedInvestModal";
import FixedInvestModal from "./FixedInvestModal";
import ComingSoon from "../../shared-components/ComingSoon/ComingSoon";
import Link from "next/link";

export const paymentTargetItems = [
  {
    label: "Targets",
    icon: <OverviewDartIconSmall />,
  },
];
export const paymentFixedItems = [
  {
    label: "Fixed Investment",
    icon: (
      <Image
        src="/icons/overview/fixed-investment.png"
        alt="Fixed investment"
        width={14}
        height={20}
      />
    ),
  },
];
export const paymentPageLink = [
  {
    label: "Payments",
    icon: (
      <Image
        src="/icons/overview/payments.png"
        alt="Payments"
        width={14}
        height={20}
      />
    ),
  },
];

export const comingSoonItems = [
  {
    label: "Term Deposits",
    icon: (
      <Image
        src="/icons/overview/team-deposite.png"
        alt="Term Deposits"
        width={14}
        height={20}
      />
    ),
  },
  {
    label: "Treasury Bills",
    icon: (
      <Image
        src="/icons/overview/treasury-bills.png"
        alt="Treasury Bills"
        width={14}
        height={20}
      />
    ),
  },
  {
    label: "Bonds",
    icon: (
      <Image
        src="/icons/overview/bonds.png"
        alt="Bonds"
        width={14}
        height={20}
      />
    ),
  },
  {
    label: "Promissory notes",
    icon: (
      <Image
        src="/icons/overview/promissory-notes.png"
        alt="Promissory notes"
        width={14}
        height={20}
      />
    ),
  },
  {
    label: "MTN Commercial Paper",
    icon: (
      <Image
        src="/icons/overview/MTNCommercialPaper.png"
        alt="MTN Commercial Paper"
        width={14}
        height={20}
      />
    ),
  },
  {
    label: "Guaranteed Investment notes",
    icon: (
      <Image
        src="/icons/overview/Investment-notes.png"
        alt="Guaranteed Investment notes"
        width={14}
        height={20}
      />
    ),
  },
  {
    label: "Sukuk",
    icon: (
      <Image
        src="/icons/overview/sukuk.png"
        alt="Sukuk"
        width={14}
        height={20}
      />
    ),
  },
  {
    label: "SWAPS",
    icon: (
      <Image
        src="/icons/overview/SWAPS.png"
        alt="SWAPS"
        width={14}
        height={20}
      />
    ),
  },
  {
    label: "Commodity Linked Notes",
    icon: (
      <Image
        src="/icons/overview/commodity-notes.png"
        alt="Commodity Linked Notes"
        width={14}
        height={20}
      />
    ),
  },
  {
    label: "Real Estate Notes",
    icon: (
      <Image
        src="/icons/overview/real-estate-notes.png"
        alt="Real Estate Notes"
        width={14}
        height={20}
      />
    ),
  },
  {
    label: "AltMall Asset Finance Notes",
    icon: (
      <Image
        src="/icons/overview/alt-mall.png"
        alt="AltMall Asset Finance Notes"
        width={14}
        height={20}
      />
    ),
  },
];

type ITarget = {
  contributionPerFrequency: string;
  currency: string;
  frequency: string;
  months: number;
  totalContribution: string;
  totalInterest: string;
}[];

const Targetitems = () => {
  const [modalIsOpen, setModalOpen] = useState(false);

  return (
    <Fragment>
      <div className={overviewStyles.paymentitemcontainer}>
        {paymentTargetItems.map((item, i) => {
          return (
            <TrialModal key={i}>
              <div
                className={`${overviewStyles.paymentitemcard} cursor-pointer`}
              >
                <div className="p-1">
                  <div className="d-flex justify-content-center">
                    {item.icon}
                  </div>
                  <div className="d-flex justify-content-center">
                    {item.label}
                  </div>
                </div>
              </div>
            </TrialModal>
          );
        })}
        {paymentFixedItems.map((item, i) => {
          return (
            <FixedInvestModal key={i}>
              <div
                className={`${overviewStyles.paymentitemcard} cursor-pointer`}
              >
                <div className="p-1">
                  <div className="d-flex justify-content-center">
                    {item.icon}
                  </div>
                  <div className="d-flex justify-content-center">
                    {item.label}
                  </div>
                </div>
              </div>
            </FixedInvestModal>
          );
        })}
        {paymentPageLink.map((item, i) => {
          return (
            <Link href={`/payment`} key={i}>
              <div
                className={`${overviewStyles.paymentitemcard} cursor-pointer`}
              >
                <div className="p-1">
                  <div className="d-flex justify-content-center">
                    {item.icon}
                  </div>
                  <div className="d-flex justify-content-center">
                    {item.label}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
        {/* {comingSoonItems.map((item, i) => {
          return (
            <ComingSoon key={i}>
              <div
                className={`${overviewStyles.paymentitemcard} cursor-pointer`}
              >
                <div className="p-1">
                  <div className="d-flex justify-content-center">
                    {item.icon}
                  </div>
                  <div className="d-flex justify-content-center">
                    {item.label}
                  </div>
                </div>
              </div>
            </ComingSoon>
          );
        })} */}
      </div>
      {/* <div className={overviewStyles.paymentitemcontainer}>
        
      </div> */}
      {/*       {modalIsOpen && (
        <FixedModal
          onClose={() => {
            setModalOpen(false);
          }}
        />
      )} */}
    </Fragment>
  );
};

export default Targetitems;
