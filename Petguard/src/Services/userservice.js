import axios from "axios";
import { BASE_URL } from "../utiles/url";

export const  loginAPI= async()=>{
    const response = await axios.post(`${BASE_URL}/user/login`)
    return response.data
 }