import express from "express";
import Register from "../../models/Register.js";

const RegisterRouter = express.Router();

RegisterRouter.post("/", async (req, res) => {
    console.log("Received Data:", req.body);
    try {
        const { username, email, password } = req.body;
        const name=username
        const existingUser = await Register.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // ✅ Create new user if not found
        const newUser = await Register.create({ name, email, password });

        res.status(201).json({ message: "Registering Successful", user: newUser });

    } catch (error) {
        console.log("Hi");
        res.status(500).json({ message: "Registering Unsuccessful", error: error.message });
    }
});

export default RegisterRouter;
