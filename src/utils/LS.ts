export const getDataFromLS = (key: string) => {
   const data = localStorage.getItem(key)
   return data != null ? JSON.parse(data) : [];
}

export const setDataToLS = <T> (key: string, value: T) => {
   localStorage.setItem(key, JSON.stringify(value));
}