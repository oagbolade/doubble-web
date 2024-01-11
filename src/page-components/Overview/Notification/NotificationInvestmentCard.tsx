import React from "react";

import {
  FlexWrapper,
  Typography,
  Card,
  Rotate,
  Collapse,
} from "../../../shared-components";

import {
  NotificationArrowDownIcon,
  NotificationArrowUpIcon,
  OpenMessageIcon,
  CloseMessageIcon,
  NotificationEarningIcon,
  NotificationSavingsIcon,
} from "../../../icons";

interface NotificationMessageCardProps {
  cardIcon?: React.ReactElement;
  isRead?: boolean;
  message?: string;
  type?: string;
  color?: string;
}

const NotificationMessageCard = (props: NotificationMessageCardProps) => {
  const [isOpen, setOpen] = React.useState(false);
  const message = (message: string) => {
    if (message.split(" ").length > 60) {
      return message.split(" ").slice(0, 60).join(" ");
    }
    return message;
  };
  return (
    <Card
      padding="20px"
      height=""
      margin="10px"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      width="100%"
      bgColor={props.isRead ? "#FFFFFF" : "#E5E5E5"}
      border="1px solid #E5E5E5"
      boxShadow=""
      position="relative"
    >
      <FlexWrapper justifyContent="space-between" width="100%" padding="10px">
        <FlexWrapper
          width="130px"
          justifyContent="space-between"
          mediaQueries={`
            @media screen and (max-width: 600px) {
              width: 90px;
            }
          `}
        >
          {props.type.toLowerCase() === "savings" && (
            <NotificationSavingsIcon />
          )}
          {props.type.toLowerCase() === "earnings" && (
            <NotificationEarningIcon />
          )}
          <Typography
            fontColor={props.color}
            fontWeight="700"
            fontSize="12px"
            mediaQueries={`
              @media screen and (max-width: 600px) {
                font-size: 10px;
              }
            `}
          >
            {props.type}
          </Typography>
        </FlexWrapper>
        <FlexWrapper
          width="130px"
          justifyContent="space-between"
          mediaQueries={`
            @media screen and (max-width: 600px) {
              width: 100px;
            }
          `}
        >
          <Typography
            fontSize="12px"
            fontWeight="700"
            mediaQueries={`
              @media screen and (max-width: 600px) {
                font-size: 10px;
              }
            `}
          >
            Today, 04:00pm
          </Typography>
          <Rotate in={isOpen}>
            <NotificationArrowDownIcon
              onClick={() => {
                setOpen(!isOpen);
              }}
            />
          </Rotate>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper width="100%" justifyContent="flex-end">
        <Collapse in={isOpen}>
          <Typography fontWeight="400" fontSize="14px" width="90%">
            {isOpen ? props.message : message(props.message)}
          </Typography>
        </Collapse>
      </FlexWrapper>
    </Card>
  );
};

NotificationMessageCard.defaultProps = {
  cardIcon: <OpenMessageIcon />,
  isRead: true,
  type: "EARNINGS",
  color: "#56D189",
  message:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
};

export default NotificationMessageCard;
