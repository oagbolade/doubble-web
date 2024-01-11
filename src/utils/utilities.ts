import React from "react";
import { httpRequest, HTTPResponse } from "../https/http";
import { HeaderTexts } from "../page-components/Home/constants";
import { IAccount } from "../page-components/Investment/ChangeBeneficiaryModal";
/* import {ITarget} from "../page-components/Overview/CreateInvestmentModal"; */

type ITarget = {
  contributionPerFrequency: string;
  currency: string;
  frequency: string;
  months: number;
  totalContribution: string;
  totalInterest: string;
}[];

export const formatCurrency = (value: number, decimals = 2) => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
  }).format(value);
};

export const determineBackgroundColor = (status: string) => {
  switch (status) {
    case "completed":
      return "#E9ECEF";
    case "pending":
    case "future":
      return "#FFECC4";
    case "active":
      return "#EBFFFA";
    default:
      return "#E9ECEF";
  }
};

export const determineTextColor = (status: string) => {
  switch (status) {
    case "completed":
      return "#576984";
    case "pending":
    case "future":
      return "#F8AB08";
    case "active":
      return "#09B78A";
    default:
      return "#576984";
  }
};

export const limits = [5, 10, 20, 50, 100, 200];

export const formatDate = (date: string) => new Date(date).toLocaleString();

export const daysBefore = (numberOfDays: number) => {
  const currentdate = new Date();
  return new Date(currentdate.setDate(currentdate.getDate() - numberOfDays))
    .toISOString()
    .substring(0, 10);
};

export const daysAfter = (numberOfDays: number, startdate = currentDate()) => {
  const currentdate = new Date(startdate);
  return new Date(currentdate.setDate(currentdate.getDate() + numberOfDays))
    .toISOString()
    .substring(0, 10);
};

export const getFormattedDate = (date) => {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : "0" + day;

  return month + "/" + day + "/" + year;
};

export const currentDate = () => {
  return new Date().toISOString().substring(0, 10);
};

export function useInvestmentType(investmentType) {
  const [productID, setProductID] = React.useState<number>(1);
  const [fixedID, setFixedID] = React.useState<number>(1);
  let error;

  const getProductId = async () => {
    const res: HTTPResponse<ITarget> = await httpRequest({
      url: "Explorer/ProductList ",
      method: "POST",
    });

    if (res.status) {
      switch (investmentType) {
        case "target":
          setProductID(1);
          break;
        case "call":
          setProductID(2);
          break;
        case "fixed":
          setProductID(3);
          break;
        case "reward":
          setProductID(4);
          break;
        default:
          setProductID(1);
      }
    }
  };

  getProductId();

  return {
    productID,
    fixedID,
    error,
  };
}

export const getFixedId = async (type, setFixedID) => {
  const res: HTTPResponse<ITarget> = await httpRequest({
    url: "FixedInvestment/FetchFixedType",
    method: "POST",
  });
};

export const getNextEarning = (endDate) => {
  const today = new Date().getTime();

  const end = Date.parse(endDate);

  const totalDay = (end - today) / (1000 * 3600 * 24);
  const remainingDay = Math.ceil(totalDay) % 30;
  return remainingDay;
};

export const checkIsActive = (maturityData) => {
  const today = new Date().getTime();
  const end = Date.parse(maturityData);
  const checker = end - today;
  if (String(checker).charAt(0) === "-") {
    return false;
  } else {
    return true;
  }
};

export const checkIsFuture = (startData) => {
  const today = new Date().getTime();
  const start = Date.parse(startData);
  const checker = start - today;
  if (String(checker).charAt(0) === "-") {
    return false;
  } else {
    return true;
  }
};

export const cleanNumber = (number) => {
  return number.split(" ")[1].split(".")[0].replace(",", "");
};

export const getUserAccounts = async (bvn) => {
  let data: IAccount[] = [];
  let success = false;
  try {
    const result: any = await httpRequest({
      url: "Bank/GetAccountsByBVN",
      method: "POST",
      body: {
        platform: 1,
        imei: "string",
        deviceType: "1",
        deviceManufacturer: "string",
        deviceModel: "string",
        deviceIP: "string",
        deviceName: "string",
        bvn: bvn,
      },
    });

    if (result?.status) {
      data = result?.data?.ngnAccounts;
      success = true;
    } else {
      success = false;
    }
  } catch ({ message }) {
    success = false;
  }
  return { success, data };
};

export const headerLinkTexts = [
  { text: HeaderTexts.Account, url: "login" },
  { text: HeaderTexts.Product, url: "/#product-section" },
  { text: HeaderTexts.About, url: "#", comingSoon: true },
  { text: HeaderTexts.Faq, url: "faq" },
];

export const footerLinkTexts = [
  { text: HeaderTexts.Account, url: "login" },
  { text: HeaderTexts.Product, url: "/#product-section" },
  { text: HeaderTexts.About, url: "#" },
  { text: HeaderTexts.Faq, url: "faq" },
  { text: HeaderTexts.TermsAndConditions, url: "termsandconditions" },
];
