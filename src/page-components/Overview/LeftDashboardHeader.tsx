import {
  Typography,
  FlexWrapper,
  IconButton,
  LeftDashboardContentHeader,
} from "../../shared-components";

import { NotificationIcon } from "../../icons";
import NotificationSegmentControl from "./NotificationSegmentControl";

interface LeftDashboardHeaderProps {
  notificationContentIsOpen?: boolean;
  showNotificationContent?: (state: boolean) => void;
  selectCategory?: (category: string) => void;
}

const LeftDashboardHeader = (props: LeftDashboardHeaderProps) => {
  return (
    <LeftDashboardContentHeader>
      <Typography fontSize="24px" fontWeight="700" fontColor="#263E61">
        {props.notificationContentIsOpen ? "Notifications" : "Overview"}
      </Typography>
      <FlexWrapper
        mediaQueries={`
          @media screen and (max-width: 1200px) {
            display: none;
          }
        `}
      >
        {!props.notificationContentIsOpen && (
          <IconButton
            background="#263E61"
            borderRadius="15px"
            onClick={() => {
              props.showNotificationContent(true);
            }}
          >
            <NotificationIcon />
          </IconButton>
        )}
        {props.notificationContentIsOpen && (
          <NotificationSegmentControl
            showNotificationContent={props.showNotificationContent}
            selectCategory={props.selectCategory}
          />
        )}
      </FlexWrapper>
    </LeftDashboardContentHeader>
  );
};

export default LeftDashboardHeader;
