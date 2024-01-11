import React, { useState } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import Image from "next/image";
import { FlexWrapper, Typography, Card } from "../../shared-components";

const Select = styled.select`
  border: 1px solid #e5e5e5;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  padding: 5px;
`;

const PaymentHistoryModal = ({paymentList}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
 
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="h-25 d-flex justify-content-center">
          <button
            onClick={showModal}
            style={{
              width: "90%",
              height: "20px",
              borderRadius: "5px",
              border: "none",
              marginTop: "20px",
            }}
              className="bg-primary-blue text-secondary-blue fw-500 cursor-pointer"
            >
              Click to view
          </button>
      </div>
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
          height="490px"
          flexDirection="column"
          display="flex"
          borderRadius="0"
        >
          <FlexWrapper
            marginBottom="30px"
            marginTop="-20px"
            width="90%"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <FlexWrapper>
              <Image
                src="/icons/payments/arrow.png"
                alt="Fixed investment"
                width={20}
                height={16}
              />
            </FlexWrapper>

            <FlexWrapper>
              <Typography fontSize="15px" marginTop="5px" display="block">
                Send Money
              </Typography>
            </FlexWrapper>
          </FlexWrapper>

          <FlexWrapper width="90%" marginBottom="5px">
            <Typography
              textAlign="center"
              fontColor="#263D61"
              fontSize="25px"
              width="100%"
              fontWeight="800"
            >
              ₦{paymentList.amount}
            </Typography>
          </FlexWrapper>

          <FlexWrapper width="90%" marginBottom="40px">
            <Typography
              textAlign="center"
              fontColor="#263D61"
              fontSize="14px"
              width="100%"
            >
              from
            </Typography>
          </FlexWrapper>

          <FlexWrapper width="90%" marginBottom="30px">
            <Typography
              textAlign="center"
              fontColor="#263D61"
              fontSize="14px"
              width="100%"
              fontWeight="700"
            >
              {paymentList.originatorName}
            </Typography>
            <Typography
              textAlign="center"
              fontColor="#263D61"
              fontSize="14px"
              width="100%"
            >
              {/* Wallet | */} {paymentList.originatorAccount}
            </Typography>
          </FlexWrapper>

          <FlexWrapper marginBottom="30px">
            <Image
              src="/icons/payments/arrow-down.png"
              alt="Fixed investment"
              width={14}
              height={16}
            />
          </FlexWrapper>

          <FlexWrapper width="90%" marginBottom="30px">
            <Typography
              textAlign="center"
              fontColor="#263D61"
              fontSize="14px"
              width="100%"
              fontWeight="700"
            >
              {paymentList.beneficiaryName }
            </Typography>
            <Typography
              textAlign="center"
              fontColor="#263D61"
              fontSize="14px"
              width="100%"
            >
             {/*  Access Bank | */} {paymentList.beneficiaryAccount }
            </Typography>
          </FlexWrapper>

          <button
            onClick={handleCancel}
            style={{
              width: "70%",
              height: "50px",
              background: "#263E61",
              color: "#00CCFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
              cursor: "pointer",
              margin: "10px",
              borderRadius: "10px",
            }}
          >
            <Typography fontColor="#00CCFF">Close</Typography>
          </button>
        </Card>
      </Modal>
    </>
  );
};

export default PaymentHistoryModal;
