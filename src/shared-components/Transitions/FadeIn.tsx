import React, { ReactNode, ReactElement } from "react";
import { Transition } from "react-transition-group";

const duration = 500;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
};

interface FadeInProps {
  in: boolean;
  duration: number;
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
  entering: { color: "#263E61", opacity: 1 },
  entered: { color: "#263E61", opacity: 1 },
  exiting: { color: "#D5E0FB", opacity: 0.5 },
  exited: { color: "#D5E0FB", opacity: 0.5 },
};
const FadeIn = (props: FadeInProps) => {
  const { in: asIn, duration, children, ...others } = props;
  return (
    <Transition in={asIn} timeout={props.duration}>
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

FadeIn.defaultProps = {
  entering: transitionStyles.entering,
  entered: transitionStyles.entered,
  exiting: transitionStyles.exiting,
  exited: transitionStyles.exited,
};

export default FadeIn;
