import React from 'react';
import { Typography, FlexWrapper, FormInput, Button } from "../../../../shared-components";

import { AccordionState } from './accordionState';

import { accordionData } from '../utils/contentFaq'


import {Accordion } from "./accordionStyles"

export const AccordionComponent = () => { 
    return (
    <FlexWrapper
        display="flex" borderRadius="10px" marginLeft="35%" marginTop="-30px" alignItems="center" justifyContent="center" width="30%" position="relative">
            <Accordion >
            {accordionData.map(({ title, content }) => (
                <AccordionState title={title} content={content} />
            ))}
            </Accordion>
    </FlexWrapper>
    )
};
