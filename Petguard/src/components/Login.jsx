import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { loginAPI } from "../Services/userservice";
import { useDispatch } from "react-redux";
import { login } from "../Redux/UserSlice";
import { motion } from "framer-motion";

const Login = () => {
  const { mutateAsync, isError, error, isPending } = useMutation({
    mutationFn: loginAPI,
    mutationKey: ["Userlogin"],
  });
  const loginSchema = yup.object({
    username: yup.string().matches(/^[a-z0-9._]+$/, "Invalid username format").required("Username is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { getFieldProps, errors, touched, handleSubmit } = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      mutateAsync(values).then((data) => {
        dispatch(login(data));
        localStorage.setItem("userdata", JSON.stringify(data));
        navigate("/user-home");
      });
    },
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('public/the-lucky-neko-2JcixB1Ky3I-unsplash.jpg')" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-white/70 p-8 rounded-2xl shadow-lg w-96" // Set to half transparent
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
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
      </motion.div>
    </motion.div>
  );
};

export default Login;