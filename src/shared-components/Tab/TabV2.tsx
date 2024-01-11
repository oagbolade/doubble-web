import React from "react";
import TabInput from "./TabInput";
import { FlexWrapper, Typography } from "../";

interface TabProps {
  names: string[];
  handleChange?: (e) => void;
  checked?: boolean;
  color?: string;
  value?: string;
  selected?: string;
}
const Tab = (props: TabProps) => {
  return (
    <FlexWrapper position="relative" justifyContent="space-between" width="80%">
      {props.names.map((name) => (
        <FlexWrapper
          position="relative"
          cursor="pointer"
          flexDirection="column"
          alignItems="space-between"
          key={name}
        >
          <TabInput
            checked={props.checked}
            onChange={props.handleChange}
            name={name.toLowerCase()}
            value={name.toLowerCase()}
          />
          <label
            htmlFor={name}
            style={{
              marginBottom: "5px",
            }}
          >
            <Typography
              fontWeight="700"
              fontSize="12px"
              cursor="pointer"
              fontColor={
                name.toLowerCase() === props.selected.toLowerCase()
                  ? "#00CCFF"
                  : "#E5E5E5"
              }
            >
              {name}
            </Typography>
          </label>
          <span
            style={{
              background: "#00CCFF",
              border: ".5px solid rgb(0 0 0 / 4%)",
              boxShadow:
                "0 3px 8px 0 rgba(0,0,0,0.12), 0 3px 1px 0 rgba(0,0,0,0.04)",
              borderRadius: "7px",
              zIndex: 2,
              height: "3px",
              alignSelf: "center",
              transition: ".15s ease-out",
              width: "70%",
              cursor: "pointer",
              display:
                name.toLowerCase() === props.selected.toLowerCase()
                  ? "block"
                  : "none",
            }}
          />
        </FlexWrapper>
      ))}
    </FlexWrapper>
  );
};

Tab.defaultProps = {
  color: "#c23d38",
  checked: false,
};

export default Tab;
