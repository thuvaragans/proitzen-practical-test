// Importing the Express library.
const express = require("express");
// Creating router instance to define routes for the contacts.
const router = express.Router();
// Importing all controller functions that contain the logic for each route.
const contactsController = require("../controllers/contactsController");

// ROUTES...
router.get("/", contactsController.getAllContacts); // Get all contacts.
router.get("/:id", contactsController.getContactById); // Get single contact by ID.
router.post("/", contactsController.createContact); // Add a new contact.
router.put("/:id", contactsController.updateContact); // Update an existing contact.
router.delete("/:id", contactsController.deleteContact); // Delete an existing contact.

// Exporting the router so it can be used in server.js...
module.exports = router;
