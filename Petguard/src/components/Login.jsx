import React from "react";
import { data, Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { loginAPI } from "../Services/userservice";
import { useDispatch } from "react-redux";
import { login } from "../Redux/UserSlice";

const Login = () => {
  const {mutateAsync,isError,error,isPending}=useMutation({
    mutationFn:loginAPI,
    mutationKey:["Userlogin"] //mutation
  });
  const loginSchema= yup.object({
    username:yup.string().matches(/^[a-z0-9._]+$/ ,"Inavlid username format").required("username is required"),
    password:yup.string().min(6,"password must be at least 6 characters").required("password is required"),
  });

  const navigate = useNavigate()
  const dispatch =useDispatch()

  const { getFieldProps,errors,touched,handleSubmit}=useFormik({
    initialValues:{ username:"",password:""},
    validationSchema:loginSchema,
    onSubmit: (values)=>{
      mutateAsync(values).then((data)=>{
        dispatch(login(data))
        localStorage.setItem("userdata",data)
        navigate('/user-home')
      })
    }
  })
  // Validation schema
  // const validationSchema = yup.object({
  //   username: yup.string().min(3, "Minimum 3 characters").required("Username is required"),
  //   password: yup.string().min(6, "Minimum 6 characters").required("Password is required"),
  // });
  // const {mutateAsync }=useMutation({
  //   mutationFn:"",
  //   mutationKey:["Userlogin"]})
  
  // const formik = useFormik({
  //   initialValues: {
  //     username: "",
  //     password: "",
  //   },
  //   validationSchema,
  //   onSubmit: (values) => {
  //     mutateAsync(values).then((data)=>{
  //     console.log( data);
  //     })
  //   },
 
  // });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              {...getFieldProps("username")}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {touched.username && errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
             {...getFieldProps("password")}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {touched.password && errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">Don't have an account?</p>
          <Link to="/signup">
            <button className="mt-2 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
