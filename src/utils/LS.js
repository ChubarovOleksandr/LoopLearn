export const getDataFromLS = (key) => {
   const data = localStorage.getItem(key)
   return data != null ? JSON.parse(data) : [];
}

export const setDataToLS = (key, value) => {
   localStorage.setItem(key, JSON.stringify(value));
}