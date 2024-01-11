import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import GetStartedModal from "./GetStartedModal";

import {
  FlexWrapper,
  Typography,
  Card,
  Modal,
  FormInputV2,
} from "../../shared-components";
import { OverviewDartIconSmall } from "../../icons";

// import InputButtonGroup from "./InputButtonGroup";

const Select = styled.select`
  border: 1px solid #e5e5e5;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  padding: 5px;
`;

const TargetModal = ({ onClose }) => {
  const [gModalIsOpen, setGModalOpen] = React.useState(false);

  const getStartedHandle = () => {
    setGModalOpen(true);
  };

  useEffect(() => {
    // if (gModalIsOpen) onClose();
  }, [gModalIsOpen]);

  return (
    <Modal onClose={onClose}>
      <Card
        boxShadow=""
        width="820px"
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
            achieving a target and then your interest is paid as markup to help
            hit the target.
          </Typography>
        </FlexWrapper>
        <FlexWrapper width="90%" marginBottom="50px">
          <Typography>
            Voluntary additional contributions can be made into the investment
            account apart from the regular contributions based on the initial
            set date as well as multiple plans purchased.
          </Typography>
        </FlexWrapper>
        {gModalIsOpen && (
          <GetStartedModal
            onClose={() => {
              setGModalOpen(false);
            }}
          />
        )}
        <button
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
            margin: "10px",
          }}
          onClick={getStartedHandle}
        >
          <Typography fontColor="#00CCFF">Let’s Get Started</Typography>
        </button>
      </Card>
    </Modal>
  );
};

export default TargetModal;
