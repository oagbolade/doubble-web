import React from "react";
import styled from "styled-components";

import ModalContext from "./ModalContext";

const ModalContainer = styled.div`
  position: relative;
  z-index: 0;
`;

interface ModalProviderProps {
  children?: React.ReactNode;
}

const ModalProvider = (props: ModalProviderProps) => {
  const modalRef = React.useRef();
  const [context, setContext] = React.useState(props);

  React.useEffect(() => {
    setContext(modalRef.current);
  });

  return (
    <ModalContainer>
      <ModalContext.Provider value={context}>
        {props.children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </ModalContainer>
  );
};

export default ModalProvider;
