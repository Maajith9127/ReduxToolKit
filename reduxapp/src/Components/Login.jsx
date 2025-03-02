import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import LoginSchema from '../YupSchemes/LoginScheme';
const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-gray-100 shadow-md rounded-xl p-8 w-full max-w-md border border-gray-300">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6 tracking-wide">
          Welcome Back
        </h2>

        <Formik
          initialValues={{
            emailId: '',
            password: ''
          }}

          onSubmit={async (values) => {

            console.log("Login Submitted:", values);
            const response= await fetch("http://localhost:3000/log",{
              credentials:"include",
              method:"POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(values)
              
            }


            )


            if(response.ok){

              console.log(response)
              const resjson= await response.json()
              console.log(resjson)


            }else{
              console.log("Failed to login ")
            }

          }}
          validationSchema={LoginSchema}
          
        >
          <Form className="flex flex-col gap-5">
            {/* Email Field */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium">Email</label>
              <Field 
                type="email" 
                name="emailId" 
                className="border border-gray-300 p-3 rounded-lg bg-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter your email"
              />
              <ErrorMessage name="emailId" component="div" className="text-red-500 text-sm mt-1" />
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

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold p-3 rounded-lg hover:bg-indigo-500 transition-all duration-300 ease-in-out"
            >
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
