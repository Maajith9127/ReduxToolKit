import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import RegisterSchema from "../YupSchemes/RegisterSchema";
import { useState } from "react";
import { set } from "mongoose";
const Register = () => {
  const [register, setregister] = useState(false)
  const [error, seterror] = useState(false)
  return (
  
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-gray-100 shadow-md rounded-xl p-8 w-full max-w-md border border-gray-300">
       {register ? (<div className="bg-green-200 p-2 text-center ">Registered Successfully!</div>) : null} 
       {error ? (<div className="bg-red-200 p-2 text-center ">Register UnSuccessfully!</div>) : null} 
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6 tracking-wide">
          Create Account
        </h2>

      

        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}

          validationSchema={RegisterSchema} // ✅ Apply Yup validation
          
          onSubmit={async (values) => {

           const response= await fetch("http://localhost:3000/reg",{
              method:"POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(values)
            })

            if(response.ok){
              setregister(true)
              console.log("Register succcessfull")
              setTimeout(() => {
                setregister(false)
              }, 1000);
            }
            else{
              seterror(true)
              setTimeout(() => {
                seterror(false)
              }, 1000);

            }
          
          }}
        >
          <Form className="flex flex-col gap-5">
            {/* Username Field */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Username</label>
              <Field
                type="text"
                name="username"
                className="border border-gray-300 p-3 rounded-lg bg-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter your username"
              />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Email</label>
              <Field
                type="email"
                name="email"
                className="border border-gray-300 p-3 rounded-lg bg-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Password Field */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Password</label>
              <Field
                type="password"
                name="password"
                className="border border-gray-300 p-3 rounded-lg bg-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Confirm Password</label>
              <Field
                type="password"
                name="confirmPassword"
                className="border border-gray-300 p-3 rounded-lg bg-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Re-enter your password"
              />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold p-3 rounded-lg hover:bg-indigo-500 transition-all duration-300 ease-in-out"
            >
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
