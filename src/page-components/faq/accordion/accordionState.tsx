import React, { useState } from 'react';
import { Typography, FlexWrapper } from "../../../shared-components";

import { } from "../../../icons";

import { AccordionTitle, AccordionContent } from "./accordionStyles"

export const AccordionState = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <FlexWrapper borderRadius="10px" className="mx-3">
            <AccordionTitle
                onClick={() => setIsActive(!isActive)}
            >
                <Typography fontColor="#263D61" fontWeight="700">{title}</Typography>
                <FlexWrapper>{isActive ? '-' : '+'}</FlexWrapper>
            </AccordionTitle>
            {isActive && <AccordionContent>{content}</AccordionContent>}
        </FlexWrapper>
    )
};
