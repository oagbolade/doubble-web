import React from "react";
import { MdModeEdit, MdDelete } from "react-icons/md"

import {
  FlexWrapper,
  Typography,
} from "../../shared-components";


export const MyAccountTableBody = () => (
  <FlexWrapper
    padding="20px"
    marginTop="20px"
    justifyContent="space-between"
    background="#FFFFFF"
    width="100%"
  >
    <FlexWrapper flex="1 1" flexDirection="column">
      <Typography fontColor="#263D61" fontSize="10px" marginBottom="10px">
        Account No
      </Typography>
      <Typography fontColor="#263D61" fontSize="12px" fontWeight="700">
        0062294761
      </Typography>
    </FlexWrapper>
    <FlexWrapper flex="1 1" flexDirection="column">
      <Typography fontColor="#263D61" fontSize="10px" marginBottom="10px">
        Account Name
      </Typography>
      <Typography fontColor="#263D61" fontSize="12px" fontWeight="700">
        Desmond Edward
      </Typography>
    </FlexWrapper>
    <FlexWrapper flex="1 1" flexDirection="column">
      <Typography fontColor="#263D61" fontSize="10px" marginBottom="10px">
        Account Type
      </Typography>
      <Typography fontColor="#263D61" fontSize="12px" fontWeight="700">
        Savings
      </Typography>
    </FlexWrapper>
    <FlexWrapper flex="1 1" flexDirection="column">
      <Typography fontColor="#263D61" fontSize="10px" marginBottom="10px">
        Bank
      </Typography>
      <Typography fontColor="#263D61" fontSize="12px" fontWeight="700">
        Sterling
      </Typography>
    </FlexWrapper>
    <FlexWrapper flex="1 1" flexDirection="column">
      <Typography fontColor="#00CCFF" fontSize="14px" marginBottom="5px">
        <MdModeEdit color="#00CCFF" />
      </Typography>
      <Typography fontColor="#00CCFF" fontSize="12px" fontWeight="700">
        edit
      </Typography>
    </FlexWrapper>
    <FlexWrapper flex="1 1" flexDirection="column">
      <Typography fontColor="#EB5757" fontSize="14px" marginBottom="5px">
        <MdDelete color="#EB5757" />
      </Typography>
      <Typography fontColor="#EB5757" fontSize="12px" fontWeight="700">
        delete
      </Typography>
    </FlexWrapper>
  </FlexWrapper>
)
