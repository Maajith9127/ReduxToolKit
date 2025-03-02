import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { UploadButton } from '@uploadthing/react';

export const Profile = () => {
    const [imageUrl, setImageUrl] = useState(null); // Store the generated URL

    const handleImageUpload = (e) => {

        const file = e.target.files[0];
        console.log(URL.createObjectURL(file))

        // if (file) {

        //     setImage(URL.createObjectURL(file)); // Create URL for preview
        // }

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">

                {/* Profile Picture */}
                <div className="flex justify-center">
                    <img
                        className="w-32 h-32 object-cover rounded-full border-4 border-indigo-500 shadow-md"
                        src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg"
                        alt="Profile"
                    />




                </div>


                <Formik
                    initialValues={{
                        name: "John Doe",
                        email: "johndoe@example.com",
                        bio: "Frontend Developer | Tech Enthusiast 🚀",
                    }}
                    onSubmit={(values) => {
                        console.log("Profile Updated:", values);
                        alert("Profile Updated Successfully! ✅");
                    }}
                >

                    <Form className="mt-5 flex flex-col gap-4">

                        <input
                            type="file"
                            id="imageUpload"
                            accept="image/*"
                            className="bg-gray-100 text-black text-xs px-2 py-4 rounded-[10px] border border-gray-300 cursor-pointer"
                            onChange={handleImageUpload}
                        />
                         {/* <UploadButton
                    
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("Uploaded File URL:", res[0].fileUrl);
          setImageUrl(res[0].fileUrl); // Save URL
        }}
        onUploadError={(error) => {
          console.error("Upload failed:", error);
          alert("Upload failed! ❌");
        }}
      /> */}


                        <Field
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full text-xl font-semibold text-center bg-gray-100 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />


                        <Field
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full text-sm bg-gray-100 p-2 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />


                        <Field
                            as="textarea"
                            name="bio"
                            placeholder="Write a short bio..."
                            className="w-full mt-3 text-sm bg-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                        />


                        <button type="submit" className="bg-indigo-600 text-white py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-indigo-800">
                            ✏️ Save Changes
                        </button>
                    </Form>

                </Formik>

            </div>
        </div>
    );
};

