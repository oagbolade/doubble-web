import React from "react";
import Link from "next/link";
import { Typography } from "../../../shared-components";
import {
  VerifyEmail,
  VerifyPhone,
} from "../../../shared-components/IdentityVerification";
import Image from "next/image";
import { useAppSelector } from "../../../redux/hooks";

const UserTasks = () => {
  const {
    mobileNumber,
    emailAddress,
    userId,
    isEmailAddressConfirmed,
    isMobileNumberConfirmed,
    isSecurityQuestionConfirmed,
    isPINConfirmed,
  } = useAppSelector(({ auth }) => auth.user);

  const userInfo = { emailAddress, mobileNumber, userId };

  interface IVerify {
    title: any;
    verified: boolean;
    url: string;
  }

  const VERIFICATION: IVerify[] = [
    {
      title: (
        <VerifyEmail
          userInfo={{
            ...userInfo,
            type: "email",
            url: "Explorer/SendVerifyOTP",
          }}
          verified={isEmailAddressConfirmed}
        >
          Verify Email
        </VerifyEmail>
      ),
      verified: isEmailAddressConfirmed,
      url: "",
    },
    {
      title: (
        <VerifyPhone
          userInfo={{
            ...userInfo,
            type: "phone",
            url: "Explorer/SendVerifyOTP",
          }}
          verified={isMobileNumberConfirmed}
        >
          Verify Phone No
        </VerifyPhone>
      ),
      verified: isMobileNumberConfirmed,
      url: "",
    },
    {
      title: (
        <Link href="/settings?type=security">
          <span className="text-dark cursor-pointer">
            Update Security Questions
          </span>
        </Link>
      ),
      verified: isSecurityQuestionConfirmed,
      url: "",
    },
    {
      title: (
        <Link href="/settings">
          <span className="text-dark cursor-pointer">
            Update Profile Status
          </span>
        </Link>
      ),
      verified: isPINConfirmed,
      url: "",
    },
  ];

  return (
    <div>
      <div className="mb-3">
        <Typography fontWeight="600">Tasks</Typography>
      </div>
      {VERIFICATION.map((data: IVerify, i: number) => (
        <div
          className="d-flex mb-2"
          key={i}
          title={data.verified && `Already verified`}
        >
          <span className="mr-3 mt-1">
            <Image
              src={
                data.verified
                  ? "/icons/overview/checked.png"
                  : "/icons/overview/checked-o.png"
              }
              alt="confirm email"
              width="15px"
              height="15px"
            />
          </span>
          <span>{data.title}</span>
        </div>
      ))}
    </div>
  );
};

export default UserTasks;
