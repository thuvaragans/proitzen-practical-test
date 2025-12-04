# Simple Contact Manager - Backend

This is the **backend** for the Simple Contact Manager application.  
It provides a **REST API** to perform CRUD operations on contacts stored in a JSON file.

---

## Features

- List all contacts
- Get a single contact by ID
- Add a new contact
- Update an existing contact by ID
- Delete a contact by ID
- Input validation:
  - Name is required and cannot contain numbers
  - Email must be in valid format
  - Phone number must be 10 digits and start with `0`

---

## Tech Stack

- Node.js
- Express.js
- JSON file for data storage
- CORS support for frontend integration (Not implemented)

---

## Setup & Installation

1. Clone the repository:
git clone this repo

2. Navigate to the backend folder:
cd backend

3. Install dependencies:
npm install

4. Create a .env file to set the PORT (optional):
PORT=5000

5. Start the server:
npm start

Default server URL: http://localhost:5000

---

## Known Issues / Limitations

1. Data is stored in a JSON file, so it will reset if the file is deleted.
2. No authentication implemented.
3. No database integration.

---

## Testing

All CRUD operations were tested using **Postman** to ensure that the API endpoints work as expected.  
You can use Postman or any similar API testing tool to interact with the backend.

---

## API Examples

These are example requests and responses for the GET API endpoints. You can use them in Postman or any API client.

### Get All Contacts
- **Method:** GET  
- **URL:** `http://localhost:5000/contacts`  

**Response Example:**
```json
[
  {
    "name": "Lucas Rodriguez",
    "email": "lucas.rodriguez@example.com",
    "phone": "0103344556",
    "id": 1
  },
  {
    "id": 2,
    "name": "Henry Davis",
    "email": "henry.davis@example.com",
    "phone": "0129988776",
    "id": 2
  }
]

To view a specific Contact, replace the URL with "contacts/:id"