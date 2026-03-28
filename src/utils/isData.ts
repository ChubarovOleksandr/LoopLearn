export const isExist = <T>(value: T | null | undefined): value is T =>
  value !== null && value !== undefined;

export const isArray = (value: unknown): value is [] => Array.isArray(value);

export const isEmptyArray = <T>(value: unknown): value is T[] =>
  Array.isArray(value) && value.length === 0;

export const isNotEmptyArray = <T>(value: unknown): value is T[] =>
  Array.isArray(value) && value.length > 0;
