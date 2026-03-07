import Contact from "../models/Contact.js";

// Create Contact
export const createContact = async (req, res) => {
  try {
    const contact = await Contact.create({ ...req.body, userId: req.user.id });
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Contacts
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ userId: req.user.id });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Contact
export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Contact
export const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};