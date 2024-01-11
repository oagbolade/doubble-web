import React from "react";
import { FlexWrapper } from "../../../shared-components";

import NotificationInvestmentCard from "./NotificationInvestmentCard";

const messages = [
  {
    isRead: true,
    name: "EARNINGS-vastubau847477",
    type: "EARNINGS",
    color: "#56D189",
  },
  {
    isRead: true,
    name: "SAVINGS-vafe8374895j",
    color: "#AE60F6",
    type: "SAVINGS",
  },
];

const NotificationInvestmentCards = () => {
  return (
    <FlexWrapper>
      {messages.map((message) => {
        return <NotificationInvestmentCard key={message.name} {...message} />;
      })}
    </FlexWrapper>
  );
};

export default NotificationInvestmentCards;
