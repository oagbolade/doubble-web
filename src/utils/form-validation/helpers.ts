export const isEmail = (value) =>
  /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{1,64}@([a-zA-Z0-9-]+.[a-zA-Z0-9-]{2,}){1,255}){1,320}$/.test(
    value
  );

export const isEmpty = (value) => Boolean(value.length);

export const setEmptyField = (formValues) => {
  return Object.keys(formValues).find((value) => {
    if (typeof formValues[value] === "string" && !formValues[value].length) {
      return true
    }

    if (typeof formValues[value] === "number") {
      return true;
    }
    return false;
  });
}
