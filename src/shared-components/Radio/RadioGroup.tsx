import React from "react";
import styled from "styled-components";

import RadioGroupContext from "./RadioGroupContext";

const RadioGroupStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: column;
`;

interface RadioGroupProps {
  children: React.ReactNode;
  name?: string;
  value?: string;
  onChange?: (
    event: React.ChangeEvent<{ value: string; checked: boolean }>,
    checked: boolean
  ) => void;
}
const RadioGroup = (props: RadioGroupProps) => {
  const { name, onChange, value: valueProp } = props;
  const [value, setValue] = React.useState("");

  const handleChange = (
    event: React.ChangeEvent<{ value: string; checked: boolean }>
  ) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event, event.target.checked);
    }
  };

  React.useEffect(() => {
    if (value !== valueProp) {
      setValue(valueProp as string);
    }
  }, [valueProp, value]);

  return (
    <RadioGroupContext.Provider value={{ name, onChange: handleChange, value }}>
      <RadioGroupStyle>{props.children}</RadioGroupStyle>
    </RadioGroupContext.Provider>
  );
};

export default React.memo(RadioGroup);
