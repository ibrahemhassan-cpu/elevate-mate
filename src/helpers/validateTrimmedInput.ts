export const validateTrimmedInput = (input: string): boolean => {
  const len = input.trim().length;
  return len !== 0 ? true : false;
};
