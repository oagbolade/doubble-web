import React, { ReactNode, ReactElement } from "react";
import { Transition } from "react-transition-group";

const duration = 350;
const defaultStyle = {
  transition: `all ${duration}ms linear`,
};

interface FadeInProps {
  in: boolean;
  children: ReactElement;
  entering?: {
    [x: string]: any;
  };
  entered?: {
    [x: string]: any;
  };
  exiting?: {
    [x: string]: any;
  };
  exited?: {
    [x: string]: any;
  };
}

const transitionStyles = {
  entering: { transform: "rotate(180deg)" },
  entered: { transform: "rotate(180deg)" },
  exiting: { transform: "rotate(0deg)" },
  exited: { transform: "rotate(0deg)" },
};
const Rotate = (props: FadeInProps) => {
  const { in: asIn, children, ...others } = props;
  return (
    <Transition in={asIn} timeout={350}>
      {(state) =>
        React.cloneElement(props.children, {
          style: {
            ...defaultStyle,
            ...others[state],
          },
        })
      }
    </Transition>
  );
};

Rotate.defaultProps = {
  entering: transitionStyles.entering,
  entered: transitionStyles.entered,
  exiting: transitionStyles.exiting,
  exited: transitionStyles.exited,
};

export default Rotate;
