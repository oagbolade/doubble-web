import styled from "styled-components";

import {
  FlexWrapper,
  Typography,
  Card,
  Modal,
  FormInputV2,
} from "../../shared-components";

import InputTextGroup from "./InputTextGroup";

const Select = styled.select`
  border: 1px solid #e5e5e5;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  magrin-bottom: 20px;
`;

const EditInvestmentModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <Card
        boxShadow=""
        width="820px"
        height="540px"
        flexDirection="column"
        display="flex"
        borderRadius="0"
      >
        <FlexWrapper width="90%">
          <Typography fontColor="#C4C4C4" fontSize="14px" width="100%">
            Change Beneficiary
          </Typography>
        </FlexWrapper>
        <FlexWrapper width="90%" marginBottom="20px">
          <FormInputV2 placeholder="New Car Savings" />
        </FlexWrapper>
        <FlexWrapper width="90%">
          <Typography fontColor="#C4C4C4" fontSize="14px" width="100%">
            Change Beneficiary
          </Typography>
        </FlexWrapper>
        <FlexWrapper width="90%" marginBottom="20px">
          <InputTextGroup placeholder="102315123" />
        </FlexWrapper>
        <FlexWrapper width="90%" marginBottom="25px">
          <Select>
            <option value="investment duration">GTBank</option>
            <option value="investment duration">others</option>
          </Select>
        </FlexWrapper>
        <FlexWrapper width="90%" marginBottom="50px">
          <Typography
            marginLeft="20px"
            fontColor="#C4C4C4"
            fontSize="14px"
            width="100%"
          >
            Desmond Edward Francis
          </Typography>
        </FlexWrapper>
        <button
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
          }}
        >
          <Typography fontColor="#00CCFF">Save</Typography>
        </button>
      </Card>
    </Modal>
  );
};

export default EditInvestmentModal;
