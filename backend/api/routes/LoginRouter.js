import express from "express";
import Register from "../../models/Register.js";

const LoginRouter = express.Router();
LoginRouter.post("/", async (req, res) => {
    console.log("SESSION OBJECT BEFORE:", JSON.stringify(req.session));
    const { emailId, password } = req.body
    console.log(`My email is ${emailId}`);
    const email = emailId
    const emailfound = await Register.findOne({ email })
    if (emailfound) {

        const passwordfound = password
        console.log("hey pass word in db is   ", emailfound.password);
        
        if (passwordfound == emailfound.password) {
            const { id: ID, name: NAME, email: EMAIL } = emailfound;
            console.log(`The password entered and user name mathces and hence you are logged in ${passwordfound}`);
            req.session.user={ id: ID, name: NAME, email: EMAIL }
            console.log("SESSION OBJECT AFTER:", JSON.stringify(req.session));
            res.status(200).json({ message: "Successfully Logged in and user found", UserData:{ id: ID, name: NAME, email: EMAIL} })
        }
        else {
            res.status(400).json({ message: "Password is wrong" })
        }

    } else {
        res.status(400).json({ message: "Email Not Found" })
    }




});

export default LoginRouter;
