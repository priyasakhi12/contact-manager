import express from "express";
import { createContact, getContacts, updateContact, deleteContact } from "../controllers/contactController.js";
import { protect } from "../middleware/authMiddleware.js"; // JWT middleware

const router = express.Router();

router.use(protect); // protect all contact routes

router.post("/", createContact);
router.get("/", getContacts);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

export default router;