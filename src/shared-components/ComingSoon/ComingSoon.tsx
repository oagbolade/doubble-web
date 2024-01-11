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

/* import GetStartedModal from "./GetStartedModal"; */

const Select = styled.select`
  border: 1px solid #e5e5e5;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  padding: 5px;
`;

const ComingSoon = (props) => {
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
            /* marginBottom="200px" */
            marginTop="20px"
            width="90%"
            flexDirection="row"
            justifyContent="center"
           /*  alignItems="center" */
          >
              <Image src="/comingSoon.gif" alt="me" width="200" height="200" />
          </FlexWrapper>
          <FlexWrapper
            /* marginBottom="200px" */
            marginTop="50px"
            width="90%"
            flexDirection="row"
            justifyContent="center"
           /*  alignItems="center" */
          >
              <Typography>
                  Coming soon
              </Typography>
          </FlexWrapper>

          {/* {gModalIsOpen && (
          <GetStartedModal
            onClose={() => {
              setGModalOpen(false);
            }}
          />
        )} */}
          {/* <GetStartedModal closeTargetModal={handleCancel} /> */}
        </Card>
      </Modal>
    </>
  );
};

export default ComingSoon;