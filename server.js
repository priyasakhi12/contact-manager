// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Import routes
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // Important for reading JSON body

// Routes
app.use("/api/users", authRoutes);       // <-- this line
app.use("/api/contacts", contactRoutes); // <-- and this line

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));