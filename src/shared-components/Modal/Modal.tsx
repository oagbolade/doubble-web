import React from "react";
import ReactDOM from "react-dom";
import styled, { ThemedStyledProps } from "styled-components";

import ModalDialog from "./ModalDialog";
import ModalContext from "./ModalContext";

import { useClickOutside } from "../../utils/click-outside";

interface ModalOverlayProps extends ThemedStyledProps<any, any> {
  mediaQueries?: string;
}
const ModalOverlay = styled.div.attrs((props: ModalOverlayProps) => ({
  mediaQueries: props.mediaQueries,
}))`
  animation: fadeIn 200ms ease-out;
  position: absolute;
  // padding-top: 200px;
  // padding-bottom: 150px;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
  }
  ${(props) => (props.mediaQueries ? props.mediaQueries : "")}
`;

ModalOverlay.defaultProps = {
  mediaQueries: `
    @media screen and (max-width: 1200px) {
      height: 275vh;
    }
  `,
};

interface ModalProps {
  children?: React.ReactNode;
  onClose?: () => void;
  overlayMediaQueries?: string;
}

const Modal = (props: ModalProps) => {
  const modalNode = React.useContext(ModalContext);
  const modalRef = React.useRef(null);
  useClickOutside(modalRef, props.onClose);
  return modalNode
    ? ReactDOM.createPortal(
        <ModalOverlay mediaQueries={props.overlayMediaQueries}>
          <ModalDialog onClose={props.onClose} ref={modalRef}>
            {props.children}
          </ModalDialog>
        </ModalOverlay>,
        modalNode
      )
    : null;
};

export default Modal;
