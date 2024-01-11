import React from "react";
import {
  FlexWrapper,
  SegmentControl,
  IconButton,
} from "../../shared-components";

import { CloseIcon } from "../../icons";

interface NotificationSegmentControlProps {
  showNotificationContent?: (state: boolean) => void;
  selectCategory?: (category: string) => void;
}
const NotificationSegmentControl = (props: NotificationSegmentControlProps) => {
  const [category, setCategories] = React.useState("messages");

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    if (
      ["messages", "investment"]
        .map((option) => option.toLowerCase())
        .includes(name)
    ) {
      setCategories(value);
      props.selectCategory(value);
    }
  };

  return (
    <>
      <FlexWrapper
        width="240px"
        marginRight="20px"
        mediaQueries={`
          @media screen and (max-width: 600px) {
              width: 190px;
            }
        `}
      >
        <SegmentControl
          handleChange={handleChange}
          names={["messages", "investment"]}
          checked={false}
          selected={category}
          bgColor="#ffffff"
        />
      </FlexWrapper>
      <FlexWrapper marginRight="20px">
        <IconButton
          onClick={() => {
            // setSearchInputOpen(true);
            props.showNotificationContent(false);
          }}
          background="#00CCFF"
          borderRadius="15px"
        >
          <CloseIcon />
        </IconButton>
      </FlexWrapper>
    </>
  );
};

export default NotificationSegmentControl;
