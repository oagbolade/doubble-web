import React from "react";
import { FlexWrapper } from "../../shared-components";

interface LeftDashboardContentContainerProps {
  children?: React.ReactNode;
  selectedVariant?: string;
  scrollToTop?: boolean;
}

const LeftDashboardContentContainer = (
  props: LeftDashboardContentContainerProps
) => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (containerRef.current) {
    }
    if (props.selectedVariant) {
      containerRef!.current!.scrollIntoView!({
        behavior: "smooth",
        block: "end",
      });
    }

    if (props.scrollToTop) {
      containerRef!.current!.scrollIntoView!({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [containerRef, props.selectedVariant, props.scrollToTop]);
  return (
    <FlexWrapper
      ref={containerRef}
      padding="40px"
      flexDirection="column"
      flex="1 1"
    >
      {props.children}
    </FlexWrapper>
  );
};

export default LeftDashboardContentContainer;
