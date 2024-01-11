import React, { ReactNode, ReactElement } from "react";
import { Transition } from "react-transition-group";

const duration = 350;
const defaultStyle = {
  transition: `height ${duration}ms ease`,
};

interface Props {
  in: boolean;
  children: ReactElement;
}

const Collapse = (props: Props) => {
  const [scrollHeight, setScrollHeight] = React.useState(0);
  const [offsetHeight, setOffsetHeight] = React.useState(0);
  const { in: asIn, children } = props;
  const collapseRef = React.useRef(null);

  const transitionStyles = {
    entering: { height: offsetHeight },
    entered: { height: offsetHeight },
    exiting: { height: scrollHeight },
    exited: { height: scrollHeight },
  };
  console.log("scroll height", scrollHeight);
  const onEntering = () => {
    setScrollHeight(collapseRef.current.scrollHeight);
  };

  const onEntered = () => {
    setScrollHeight(null);
  };

  const onExit = () => {
    setScrollHeight(collapseRef.current.scrollHeight);
  };

  const onExiting = () => {
    setScrollHeight(0);
  };

  const onExited = () => {
    setScrollHeight(null);
  };
  return (
    <Transition
      in={asIn}
      timeout={350}
      appear={false}
      enter={true}
      exit={true}
      onEntering={onEntering}
      onEntered={onEntered}
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
      nodeRef={collapseRef}
    >
      {(state) =>
        React.cloneElement(children, {
          ref: collapseRef,
          style: {
            ...defaultStyle,
            //...transitionStyles[state],
          },
        })
      }
    </Transition>
  );
};

export default Collapse;
