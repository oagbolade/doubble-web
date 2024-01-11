import React from "react";
import { Transition } from "react-transition-group";

const defaultStyle = {
  position: "absolute",
  background: "#00CCFF",
  border: ".5px solid rgb(0 0 0 / 4%)",
  boxShadow: "0 3px 8px 0 rgba(0,0,0,0.12), 0 3px 1px 0 rgba(0,0,0,0.04)",
  borderRadius: "7px",
  zIndex: 2,
  height: "3px",
  left: "0px",
  top: "100%",
  transition: ".15s ease-out",
  width: "50px",
};

interface SelectTransitionProps {
  in: boolean;
  timeout: number;
  color: string;
  width: number;
  number: number;
  selected: number;
}

const SelectTransition = (props: SelectTransitionProps) => {
  const [width, setWidth] = React.useState(400);
  React.useEffect(() => {
    if (props.width !== width) {
      setWidth(props.width);
    }
  }, [props.width]);
  const transitionStyles = {
    entering: {
      opacity: 1,
      transform: `translateX(${(props.selected * width) / props.number}px)`,
    },
    entered: {
      opacity: 1,
      transform: `translateX(${(props.selected * width) / props.number}px)`,
    },
    exiting: { opacity: 1 },
    exited: { opacity: 1 },
  };
  return (
    <Transition in={Boolean(props.selected)} timeout={props.timeout}>
      {(state) => {
        return (
          <span
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          />
        );
      }}
    </Transition>
  );
};

SelectTransition.defaultProps = {
  in: false,
  timeout: 150,
  color: "#c23d38",
  number: 3,
};

export default SelectTransition;
