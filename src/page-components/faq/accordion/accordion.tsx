import React, { useState } from "react";
import {
  Typography,
  FlexWrapper,
  FormInput,
  Button,
} from "../../../shared-components";

import { AccordionState } from "./accordionState";

import { Accordion } from "./accordionStyles";

export const AccordionComponent = ({ data }) => {
  return (
    <div className="container mx-auto p-0 mb-5" style={{ maxWidth: "800px" }}>
      <Accordion>
        {data?.map(({ title, content }, i) => (
          <AccordionState title={title} content={content} key={i} />
        ))}
      </Accordion>
      <div>
        {data.length == 0 && (
          <Typography fontColor={"#eb5757"}>No Result Found</Typography>
        )}
      </div>
    </div>
  );
};
