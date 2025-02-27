import * as Yup from "yup"; // ✅ Import Yup

const LoginSchema = Yup.object({
  emailId: Yup.string()
    .email("Invalid email format") // ✅ Custom error message
    .required("Please enter Email"),
  
  password: Yup.string()
    .min(8, "Password must be at least 8 characters") // ✅ Minimum length
    .matches(/[A-Z]/, "Must include at least one uppercase letter") // ✅ At least one uppercase
    .matches(/[a-z]/, "Must include at least one lowercase letter") // ✅ At least one lowercase
    .matches(/[0-9]/, "Must include at least one number") // ✅ At least one number
    .matches(/[@$!%*?&]/, "Must include at least one special character (@$!%*?&)") // ✅ At least one special character
    .required("Please enter Password"),
});

export default LoginSchema;
