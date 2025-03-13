import axios from "axios";
import { BASE_URL } from "../utiles/url";
// import { data } from "react-router-dom";

export const  loginAPI= async(data)=>{
    console.log(data);
    
    const response = await axios.post(`${BASE_URL}/user/login`)
    return response.data
}
export   const registerAPI=async(data)=>{
    const response=await axios.post(`${BASE_URL}/user/reg`,data)
        return response.data
}