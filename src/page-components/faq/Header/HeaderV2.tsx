import styled from "styled-components";

import {
  FlexWrapper,
  Typography
} from "../../../shared-components";

import { FaPlus, FaEdit, FaBell } from "react-icons/fa";
import { SearchInputV2 as SearchInput } from "./SearchInput";

const Header = styled.header`
position: absolute;
top: 0;
left: 240px;
width: calc(100% - 316px);
padding: 30px;
`
const HeaderV2 = () => (
  <Header>
    <FlexWrapper width="100%">
      <FlexWrapper type="item" lg="8" md="8">
        <FlexWrapper width="100%">
          <FlexWrapper type="item" lg="6" md="6">
            <SearchInput />
          </FlexWrapper>
          <FlexWrapper type="item" lg="6" md="6" alignItems="center" justifyContent="flex-end">
            <FaBell fontSize="24px" color="#263D61" />
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>

      <FlexWrapper type="item" lg="4" md="4">
        <FlexWrapper width="100%" alignItems="center" justifyContent="flex-end" position="relative">
          <span
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "#2EE4A3",
              fontSize: "18px",
              color: "#FFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              left: "40%"
            }}
          >
            DE
          </span>
          <Typography>
            Desmond Edward
          </Typography>
        </FlexWrapper>
      </FlexWrapper>
    </FlexWrapper>
  </Header>
)

export default HeaderV2;
