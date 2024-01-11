import React from "react";
import { FlexWrapper, FormInput, Button } from "../../shared-components";

import { NairaIcon, SearchIcon } from "../../icons";

export const SearchInputV2 = () => (
  <FlexWrapper width="100%" position="relative">
    <FormInput
      placeholder="search"
      variant="outline"
      borderRadius="15px"
      bgColor="#FAFBFB"
      paddingLeft="60px !important"
      borderRight="none"
      width="100%"
      wrapperWidth="75%"
      mediaQueries={`
        @media screen and (max-width: 600px) {
            width: 100%;
            height: 40px
        }
      `}
    />
    <FlexWrapper position="absolute" left="10px" top="10px">
      <SearchIcon
        fillColor="#E5E5E5"
        width="20"
        height="30"
        viewBox="0 0 24 30"
      />
    </FlexWrapper>
  </FlexWrapper>
);

const SearchInput = () => (
  <FlexWrapper width="100%">
    <FormInput
      placeholder="search"
      variant="outline"
      borderRadius="15px 0px 0px 15px"
      bgColor="transparent"
      border="1px solid #E5E5E5"
      borderRight="none"
      width="100%"
      wrapperWidth="75%"
      mediaQueries={`
        @media screen and (max-width: 600px) {
            width: 100%;
            height: 40px
        }
      `}
    />
    <Button
      width="25%"
      borderRadius="0px 15px 15px 0px"
      borderLeft="none"
      bgColor="transparent"
      borderColor="#E5E5E5"
      mediaQueries={`
        @media screen and (max-width: 600px) {
            height: 40px;
            width: 25%;
        }
      `}
    >
      <SearchIcon
        fillColor="#263E61"
        width="20"
        height="30"
        viewBox="0 0 24 30"
      />
    </Button>
  </FlexWrapper>
);

export default SearchInput;
