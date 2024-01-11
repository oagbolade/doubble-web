import React from "react";
import SegmentControlInput from "./SegmentControlInput";
import { FlexWrapper, Typography, Card } from "../";

interface TabProps {
  names: string[];
  handleChange?: (e) => void;
  checked?: boolean;
  color?: string;
  value?: string;
  selected?: string;
  bgColor?: string;
  mediaQueries?: string;
}
const SegmentControl = (props: TabProps) => {
  return (
    <Card
      position="relative"
      justifyContent="space-around"
      width="100%"
      height="50px"
      bgColor={props.bgColor}
      boxShadow="10px 10px 50px rgb(0 0 0 / 30%)"
      borderRadius="10px"
      mediaQueries={props.mediaQueries}
    >
      {props.names.map((name) => (
        <FlexWrapper
          position="relative"
          cursor="pointer"
          flexDirection="column"
          height="100%"
          width="100%"
          alignItems="center"
          justifyContent="center"
          key={name}
        >
          <SegmentControlInput
            checked={props.checked}
            onChange={props.handleChange}
            name={name.toLowerCase()}
            value={name.toLowerCase()}
          />
          <label htmlFor={name}>
            <Typography fontWeight="700" fontSize="14px" fontColor="#263E61">
              {name}
            </Typography>
          </label>
          <span
            style={{
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              background: "#00CCFF",
              border: ".5px solid rgb(0 0 0 / 4%)",
              boxShadow:
                "0 3px 8px 0 rgba(0,0,0,0.12), 0 3px 1px 0 rgba(0,0,0,0.04)",
              borderRadius: "10px",
              zIndex: 2,
              height: "80%",
              width: "90%",
              transition: ".15s ease-out",
              fontSize: "14px",
              fontWeight: 700,
              display:
                name.toLowerCase() === props.selected.toLowerCase()
                  ? "flex"
                  : "none",
            }}
          >
            {name}
          </span>
        </FlexWrapper>
      ))}
    </Card>
  );
};

SegmentControl.defaultProps = {
  color: "#c23d38",
  checked: false,
  bgColor: "#ABEEFF",
};

export default SegmentControl;
