import { TotalEarningsStyle } from "./../../page-components/termsandcondition/Button/styles";
import React from "react";
import { httpRequest } from "../../https/http";
import {
  IFixedId,
  ITargetId,
} from "../../page-components/Overview/GetStartedModal";
import { formatCurrency } from "../utilities";
import { changeErrorKeys } from "./regOldUserValidator";

export interface StateValidatorSchemaInterface {
  [x: string]: {
    isEmpty?: ValidatorInterface;
    isString?: ValidatorInterface;
    isEmail?: ValidatorInterface;
    isValidPassword?: ValidatorInterface;
    isEqual?: {
      func: (password: string, confirmPassword: string) => boolean;
      error: string;
    };
  };
}

export interface ValidatorInterface {
  func: (value: string) => boolean;
  error: string;
}

export interface StateSchemaInterface {
  [x: string]: string;
}

export function useFormValidation(
  stateSchema: StateSchemaInterface,
  stateValidatorSchema: StateValidatorSchemaInterface
) {
  const [formValues, setValues] = React.useState(stateSchema);
  const [errors, setErrors] = React.useState(stateSchema);

  const validateFormFields = React.useCallback(
    (name: string, value: string) => {
      const validator = stateValidatorSchema;
      const field = validator[name];
      let error = "";
      if (field.isEmpty) {
        error = !field.isEmpty.func(value) ? field.isEmpty.error : "";
      }

      if (field.isString) {
        error = !field.isString.func(value) ? field.isString.error : "";
      }

      if (field.isEmail) {
        error = !field.isEmail.func(value) ? field.isEmail.error : "";
      }

      if (field.isValidPassword) {
        error = !field.isValidPassword.func(value)
          ? field.isValidPassword.error
          : "";
      }

      if (field.isEqual) {
        error = !field.isEqual.func(
          formValues.password,
          formValues.confirmPassword
        )
          ? field.isEqual.error
          : "";
      }
      return error;
    },
    [stateValidatorSchema, formValues]
  );

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): any => {
      const target = event.target;
      let value = target.value;
      const name = target.name;
      const isMoney = target.getAttribute("data-ismoney");

      if (isMoney) {
        value =
          value && value !== "0"
            ? formatCurrency(Number(value.replaceAll(/(-|,)/g, "")), 0)
            : "";
      }

      const error = validateFormFields(name, value);
      setValues((prevState) => ({ ...prevState, [name]: value }));
      setErrors((prevState) => ({ ...prevState, [name]: error }));
    },
    [validateFormFields]
  );
  return {
    handleChange,
    formValues,
    errors,
  };
}

export const checkValid = (formValues, errors) => {
  let isValid = true;
  let type = "";
  for (let key in errors) {
    if (
      errors[key].trim() !== "" ||
      (errors[key].trim() === "" && formValues[key] === "")
    )
      isValid = false;
    type = key;
    break;
  }
  return { isValid, type };
};

export const checkValidator = (input) => {
  console.log("iinpt", input);
  let isValid = true;
  let error = "";
  for (let [key, value] of Object.entries(input)) {
    if (key === "daoCode" || key === "targetValue") {
    } else {
      if (String(value).trim() === "") {
        isValid = false;
        error = `${changeErrorKeys(key)} is required!`;
        break;
      }
    }
  }
  return { isValid, error };
};

export const setFixedId = async () => {
  const res: any = await httpRequest({
    url: "FixedInvestment/FetchFixedType",
    method: "POST",
  });
  if (res.status) return res.data;
};

export const getTargetId = (
  targetIdDetails: ITargetId[],
  currency: string,
  duration: string
) => {
  if (targetIdDetails.length === 0) return "empty";

  for (let targetDetails of targetIdDetails) {
    if (
      currency === targetDetails.currency &&
      Number(duration) >= targetDetails.min &&
      Number(duration) <= targetDetails.max
    ) {
      return targetDetails.id;
    } else if (
      currency === targetDetails.currency &&
      Number(duration) >= targetDetails.min &&
      Number(duration) <= targetDetails.max
    ) {
      return targetDetails.id;
    }
  }
};

export const getFixedId = (
  fixedIdDetails: IFixedId[],
  currency: string,
  amount: string,
  duration: string
) => {
  if (fixedIdDetails.length === 0) return "empty";

  for (let fixedDetails of fixedIdDetails) {
    if (
      currency === fixedDetails.currency &&
      Number(duration) >= fixedDetails.minTerm &&
      Number(duration) <= fixedDetails.maxTerm &&
      Number(amount) >= fixedDetails.minAmount &&
      Number(amount) <= fixedDetails.maxAmount
    ) {
      return fixedDetails.id;
    } else if (
      currency === fixedDetails.currency &&
      Number(duration) >= fixedDetails.minTerm &&
      Number(duration) <= fixedDetails.maxTerm &&
      Number(amount) >= fixedDetails.minAmount &&
      Number(amount) <= fixedDetails.maxAmount
    ) {
      return fixedDetails.id;
    }
  }
};

export const setTargetId = async () => {
  const res: any = await httpRequest({
    url: "TargetInvestment/FetchTargetType",
    method: "POST",
  });
  if (res.status) return res.data;
};

export const checkUserValidity = (updatedData) => {
  let isValid = false;
  if (
    updatedData.firstName?.length > 0 &&
    updatedData.lastName?.length > 0 &&
    updatedData.dob?.length > 0 &&
    updatedData.gender?.length > 0 &&
    updatedData.mobileNumber?.length > 0 &&
    updatedData.username?.length > 0 &&
    updatedData.emailAddress?.length > 0
  ) {
    isValid = true;
  } else {
    isValid = false;
  }
  return { isValid };
};
