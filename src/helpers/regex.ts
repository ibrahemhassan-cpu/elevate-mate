export const phoneValidation: RegExp = new RegExp(
  /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
);

export const passwordValidation: RegExp = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g,
);

export const textValidation: RegExp = new RegExp(/^([a-zA-Z\s\_\-]+)$/g);
export const numberValidation: RegExp = new RegExp(/^[0-9]*$/g);
