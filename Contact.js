// models/Contact.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  notes: { type: String },
  tags: { type: [String] },
}, { timestamps: true });

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;