export const getTypeSafeObjectKeys = <Obj extends Record<string, any>>(
  obj: Obj,
): (keyof Obj)[] => {
  return Object.keys(obj) as (keyof Obj)[];
};
