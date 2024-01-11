import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { FlexWrapper, Typography, Card, FormInputV2 } from "..";
import { sendOTP } from "../../redux/otp/otpAction";
import { IVerify } from "./VerifyEmail";

/* import GetStartedModal from "./GetStartedModal"; */

const Select = styled.select`
  border: 1px solid #e5e5e5;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  padding: 5px;
`;

const VerifyPhone = (props: IVerify) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    dispatch({ type: "OTP_RESET" });
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { loading, data, error, success } = useAppSelector(({ otp }) => otp);

  const sendOtpHandler = () => {
    dispatch(sendOTP({ ...props.userInfo, emailAddress: null }));
  };

  useEffect(() => {
    if (!loading && data.userId.length)
      setTimeout(() => router.push("/otp"), 2000);
  }, [data]);

  return (
    <>
      <FlexWrapper
        cursor={props.verified ? "not-allowed" : "pointer"}
        onClick={props.verified ? () => {} : showModal}
      >
        {props.children}
      </FlexWrapper>
      <Modal
        maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        title={null}
        closable={false}
        footer={null}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Card
          boxShadow=""
          width="100%"
          height="450px"
          flexDirection="column"
          display="flex"
          borderRadius="0"
        >
          <FlexWrapper
            /* marginBottom="200px" */
            marginTop="40px"
            width="90%"
            flexDirection="row"
            justifyContent="center"
            /*  alignItems="center" */
          >
            <Image
              src="/icons/overview/phone.png"
              alt="phone"
              width="100"
              height="100"
            />
          </FlexWrapper>
          <FlexWrapper
            /* marginBottom="200px" */
            marginTop="7%"
            width="90%"
            flexDirection="row"
            justifyContent="center"
            /*  alignItems="center" */
          >
            <Typography fontSize="18px" marginBotton="5%">
              Verify your phone number
            </Typography>
          </FlexWrapper>
          <FlexWrapper
            /* marginBottom="200px" */
            marginTop="5%"
            width="90%"
            flexDirection="row"
            justifyContent="center"
            /*  alignItems="center" */
          >
            <Typography marginTop="5px" fontSize="28px">
              {props.userInfo.mobileNumber}
            </Typography>
          </FlexWrapper>
          {error.length > 0 && (
            <FlexWrapper
              /* marginBottom="200px" */
              marginTop="3%"
              width="90%"
              flexDirection="row"
              justifyContent="center"
              /*  alignItems="center" */
            >
              <Typography marginTop="5px" fontColor="red" fontSize="13px">
                {error}
              </Typography>
            </FlexWrapper>
          )}
          {success.length > 0 && (
            <FlexWrapper
              /* marginBottom="200px" */
              marginTop="3%"
              width="90%"
              flexDirection="row"
              justifyContent="center"
              /*  alignItems="center" */
            >
              <Typography marginTop="5px" fontColor="green" fontSize="14px">
                {success}
              </Typography>
            </FlexWrapper>
          )}
          <button
            onClick={sendOtpHandler}
            style={{
              width: "70%",
              height: "50px",
              background: "#263E61",
              color: "#00CCFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              margin: "5% 10% 10% 10%",
            }}
          >
            {loading && (
              <FlexWrapper marginRight="8px">
                <Image
                  src="/load.gif"
                  alt="Fixed investment"
                  width={25}
                  height={25}
                />
              </FlexWrapper>
            )}
            <Typography fontColor="#00CCFF">Send OTP</Typography>
          </button>
        </Card>
      </Modal>
    </>
  );
};

export default VerifyPhone;
