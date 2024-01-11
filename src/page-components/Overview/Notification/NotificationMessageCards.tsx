import React from "react";
import { FlexWrapper } from "../../../shared-components";

import NotificationMessageCard from "./NotificationMessageCard";

const messages = [
  {
    isRead: true,
    name: "vastubau847477",
  },
  {
    isRead: true,
    name: "vafe8374895j",
  },
  {
    isRead: false,
    name: "avnaahrrh8887",
  },
];

const NotificationMessageCards = () => {
  return (
    <FlexWrapper>
      {messages.map((message) => {
        return (
          <NotificationMessageCard key={message.name} isRead={message.isRead} />
        );
      })}
    </FlexWrapper>
  );
};

export default NotificationMessageCards;
