import axios from 'axios';

const instance = axios.create({
   baseURL: 'http://45.81.227.0:8000/api/v1/auth',
})

export const setRegisterData = async ({email, username, password}) => {

   try {
      const response = await instance.post(`/register`, {
         email,
         username,
         password
      });
      console.log(response.data);
      return response.data;

   } catch (error) {
      console.log(error); 
      return error;
   }
}