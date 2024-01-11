import React, { useState } from 'react';
import { Typography, FlexWrapper } from "../../../../shared-components";

import { } from "../../../../icons";

import { AccordionTitle, AccordionContent } from "./accordionStyles"

export const AccordionState = ({title, content }) => { 
    const [isActive, setIsActive] = useState(false);

    return (
        <FlexWrapper width="600px" borderRadius="10px">
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
