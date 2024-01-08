export type NonNullableItems<T extends readonly unknown[]> = {
  [K in keyof T]: NonNullable<T[K]>;
};
