import React, { useState } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import Image from "next/image";

import {
  FlexWrapper,
  Typography,
  Card,
  FormInputV2,
} from "../../shared-components";
import { OverviewDartIconSmall } from "../../icons";

import GetStartedModal from "./GetStartedModal";

const Select = styled.select`
  border: 1px solid #e5e5e5;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  padding: 5px;
`;

const TrialModal = (props) => {
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
      <FlexWrapper cursor="pointer" onClick={showModal}>
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
            marginBottom="30px"
            marginTop="-20px"
            width="90%"
            flexDirection="row"
            justifyContent="flex-end"
          >
            <FlexWrapper>
              <Image
                src="/icons/overview/overview.png"
                alt="Fixed investment"
                width={60}
                height={50}
              />
            </FlexWrapper>
            <FlexWrapper>
              <Typography marginTop="10px" fontWeight="900">
                Targets
              </Typography>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper width="90%" marginBottom="20px">
            <Typography>
              Doubble Target option allows you save a sizeable amount towards
              achieving a target and then your interest is paid as markup to
              help hit the target.
            </Typography>
          </FlexWrapper>
          <FlexWrapper width="90%" marginBottom="50px">
            <Typography>
              Voluntary additional contributions can be made into the investment
              account apart from the regular contributions based on the initial
              set date as well as multiple plans purchased.
            </Typography>
          </FlexWrapper>
          {/* {gModalIsOpen && (
          <GetStartedModal
            onClose={() => {
              setGModalOpen(false);
            }}
          />
        )} */}
          <GetStartedModal closeTargetModal={handleCancel} />
        </Card>
      </Modal>
    </>
  );
};

export default TrialModal;
