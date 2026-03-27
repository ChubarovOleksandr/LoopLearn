import { LsKeysEnum } from '@enums/localStorageKeys';

import { isExist } from './isData';

export const getDataFromLS = (key: LsKeysEnum) => {
  const data = localStorage.getItem(key);
  return isExist(data) ? JSON.parse(data) : [];
};

export const setDataToLS = <T>(key: LsKeysEnum, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};
