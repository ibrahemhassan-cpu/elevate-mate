// Utility type to extract keys and nested keys
type Join<K extends string, P> = P extends string | number
  ? `${K}.${P}`
  : never;
type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...0[]];

export type NestedKeys<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
    ? {
        [K in keyof T]: K extends string
          ? T[K] extends object
            ? K | Join<K, NestedKeys<T[K], Prev[D]>>
            : K
          : never;
      }[keyof T]
    : "";
