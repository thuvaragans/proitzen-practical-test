const fs = require("fs"); // Importing the built-in Node.js 'fs' module to work with the file system.
const FILE_PATH = "./contacts.json"; // Path to the JSON file that stores contacts.


// Reads the contacts JSON file and returns the data as a JavaScript array.
// Returns Array of contact objects.
function readContacts() {
  const data = fs.readFileSync(FILE_PATH, "utf-8"); // Reading the contents of the contacts.json file as a string.
  return JSON.parse(data); // Parsing the JSON string into a JavaScript array and returning it.
}

// Writes the given array of contacts to the Contacts JSON file.
function writeContacts(data) {
  const jsonData = JSON.stringify(data, null, 2); // Converting the array into a JSON string with indentation for readability.
  fs.writeFileSync(FILE_PATH, jsonData); // Writing the JSON string to contacts.json, overwriting existing data.
}


// Exporting the functions so other modules can use them.
module.exports = { readContacts, writeContacts };
