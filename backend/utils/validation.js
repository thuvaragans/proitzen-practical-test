// Function for the contact info validation.
function validateContact(contact) {
  const errors = {};

  // Name Validation.
  if (!contact.name || contact.name.trim() === "") {
    errors.name = "Name is required, please add the Contact Name!";
  } else if (/\d/.test(contact.name)) {
    errors.name = "Name cannot contain any numbers!";
  }

  // Email ID Validation.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!contact.email || !emailRegex.test(contact.email)) {
    errors.email = "Email entered is invalid, please check!";
  }

  // Phone Number Validation.
  const phoneRegex = /^0\d{9}$/;
  if (!contact.phone || !phoneRegex.test(contact.phone)) {
    errors.phone = "Phone number is invalid, it must be 10 digits and start with '0'!";
  }

  return errors;
}


// Exporting the function so other modules can use it.
module.exports = { validateContact };
