export const convertFromString = (
  value: string,
): null | undefined | boolean | number | string => {
  if (value === "null") return null;
  if (value === "undefined") return undefined;
  if (value === "true") return true;
  if (value === "false") return false;
  if (!isNaN(parseFloat(value))) return parseFloat(value);
  return value;
};
