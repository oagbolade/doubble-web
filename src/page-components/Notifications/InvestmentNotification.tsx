import React, { Fragment } from "react"
import styled from "styled-components";
import { FlexWrapper, Typography } from "../../shared-components";
import { ChevronLeft, ChevronRight } from "../../icons";
import NotificationItem from "./NotificationItem"
import NotificationStyles from "./Notification.module.css";

const SelectSmall = styled.select`
  border: 1px solid #e5e5e5;
  height: 30px;
  width: 68px;
  border-radius: 5px;
  padding: 5px;
`;

interface InvestmentNotificationProps {
    data: {
        title: string;
        datetime: string;
        message: string;
        keyIsActive: boolean;
    }[]
}

const InvestmentNotification = ({ data }: InvestmentNotificationProps) => {
    return (
        <Fragment>
            <div className={NotificationStyles.notificationcontainer}>
                {data.map(({ title, message, datetime, keyIsActive }, i) => <NotificationItem key={i} title={title} message={message} datetime={datetime} keyIsActive={keyIsActive} />)}
            </div>
            <div className="d-flex justify-content-between">
                <div>
                    <SelectSmall>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </SelectSmall>
                </div>
                <div>
                    <FlexWrapper alignItems="center">
                        <FlexWrapper marginRight="10px">
                            <Typography fontSize="10px">1 of 3</Typography>
                        </FlexWrapper>
                        <FlexWrapper>
                            <ChevronLeft />
                            <ChevronRight />
                        </FlexWrapper>
                    </FlexWrapper>
                </div>
            </div>
        </Fragment>
    )
}

export default InvestmentNotification
