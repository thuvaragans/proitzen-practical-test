// Importing utility functions for reading/writing contacts from JSON file.
const { readContacts, writeContacts } = require("../utils/fileHandler");
// Importing validation function for contact data.
const { validateContact } = require("../utils/validation");


// Function to get all contacts.
function getAllContacts(req, res) {
  const contacts = readContacts();
  res.json(contacts);
}

// Function to get a single contact by ID.
function getContactById(req, res) {
  const contacts = readContacts();
  const contact = contacts.find(c => c.id === parseInt(req.params.id));
  if (!contact) return res.status(404).json({ error: "Sorry, specified contact is not found!!!" });
  res.json(contact);
}

// Function to create a new contact.
function createContact(req, res) {
  const contacts = readContacts();
  const newContact = req.body;

  const errors = validateContact(newContact);
  if (Object.keys(errors).length > 0) return res.status(400).json(errors);

  newContact.id = contacts.length ? contacts[contacts.length - 1].id + 1 : 1;
  contacts.push(newContact);
  writeContacts(contacts);

  res.status(201).json({
    message: "The new contact has been added successfully...",
    contact: newContact
  });
}

// Function to update an existing contact by ID.
function updateContact(req, res) {
  const contacts = readContacts();
  const id = parseInt(req.params.id);

  const contactIndex = contacts.findIndex(c => c.id === id);
  if (contactIndex === -1) return res.status(404).json({ error: "Sorry, the specified contact is not found!!!" });

  const updatedContact = { ...contacts[contactIndex], ...req.body };

  const errors = validateContact(updatedContact);
  if (Object.keys(errors).length > 0) return res.status(400).json(errors);

  contacts[contactIndex] = updatedContact;
  writeContacts(contacts);

  res.json({
    message: "The requested contact has been updated successfully...",
    contact: updatedContact
  });
}

// Function to delete a contact by ID.
function deleteContact(req, res) {
  const contacts = readContacts();
  const id = parseInt(req.params.id);

  const newContacts = contacts.filter(c => c.id !== id);
  if (newContacts.length === contacts.length) return res.status(404).json({ error: "Sorry, specified contact is not found!!!" });

  writeContacts(newContacts);
  res.json({ message: "The requested contact has been deleted successfully..." });
}


// Exporting all controller functions to use in routes.
module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
};
