const express = require("express"); // Importing the Express library to create the server and handle routes.
const cors = require("cors"); // Importing CORS middleware to allow cross-origin requests.
const contactsRoutes = require("./routes/contacts"); // Importing the contacts routes from the routes folder.
require("dotenv").config(); // Loading environment variables from the .env file.

const app = express(); // Creating a new Express application.
const PORT = process.env.PORT || 5000; // Use env PORT or fallback to 5000.

app.use(cors());
app.use(express.json());

// Mounting the contacts routes at the /contacts routes path.
// All requests starting with /contacts will be handled by contactsRoutes.
app.use("/contacts", contactsRoutes);

// Starting the Express Server for incoming requests on the specified PORT.
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
