import { ISection } from "../components/dashboard/Dashboard";

export const getDataFromLS = (key: string) => {
   const data = localStorage.getItem(key)
   return data != null ? JSON.parse(data) : [];
}

export const setDataToLS = (key: string, value: ISection[]) => {   
   localStorage.setItem(key, JSON.stringify(value));
}