import React from "react";

import { Card, IconButton, FlexWrapper } from "../";

import { CloseIcon } from "../../icons";

interface ModalDialogProps {
  children?: React.ReactNode;
  onClose?: () => void;
}
const ModalDialog = React.forwardRef(
  (props: ModalDialogProps, ref: React.Ref<HTMLDivElement>) => {
    return (
      <Card
        position="absolute"
        bgColor="#ffffff"
        // height="95%"
        // width="60%"
        width="420px"
        flexDirection="row"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
        zIndex="2999"
        // borderRadius="30px 0px 30px 30px"
        ref={ref}
        // mediaQueries={`
        //   @media screen and (max-width: 1200px) {
        //     width: 100%;
        //     left: 50%;
        //     height: 100%;
        //   }
        // `}
      >
        <FlexWrapper
          position="absolute"
          top="-1%"
          right="-2%"
          zIndex="9999"
          // mediaQueries={`
          //   @media screen and (max-width: 1200px) {
          //     top: 0%;
          //     right: 2%
          //   }
          // `}
        >
          {/* <IconButton
          background="#00CCFF"
          boxShadow="10px 10px 30px rgba(0, 0, 0, 0.15)"
          borderRadius="15px"
          onClick={props.onClose}
        >
          <CloseIcon />
        </IconButton> */}
        </FlexWrapper>
        {props.children}
      </Card>
    );
  }
);
// const ModalDialog = (props: ModalDialogProps) => {
//   const modalDialogRef = React.useRef(null);
//   return (
//     <Card
//       position="absolute"
//       bgColor="#ffffff"
//       // height="95%"
//       // width="60%"
//       height="420px"
//       width="420px"
//       flexDirection="row"
//       left="56%"
//       top="50%"
//       transform="translate(-50%, -50%)"
//       zIndex="2999"
//       // borderRadius="30px 0px 30px 30px"
//       ref={modalDialogRef}
//       // mediaQueries={`
//       //   @media screen and (max-width: 1200px) {
//       //     width: 100%;
//       //     left: 50%;
//       //     height: 100%;
//       //   }
//       // `}
//     >
//       <FlexWrapper
//         position="absolute"
//         top="-1%"
//         right="-2%"
//         zIndex="9999"
//         // mediaQueries={`
//         //   @media screen and (max-width: 1200px) {
//         //     top: 0%;
//         //     right: 2%
//         //   }
//         // `}
//       >
//         {/* <IconButton
//           background="#00CCFF"
//           boxShadow="10px 10px 30px rgba(0, 0, 0, 0.15)"
//           borderRadius="15px"
//           onClick={props.onClose}
//         >
//           <CloseIcon />
//         </IconButton> */}
//       </FlexWrapper>
//       {props.children}
//     </Card>
//   );
// };

export default ModalDialog;
