const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validatePostInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
 data.title = !isEmpty(data.title) ? data.title : "";
data.message= !isEmpty(data.message) ? data.message : "";

// Name checks
  if (Validator.isEmpty(data.title)) {
    errors.title= "Title field is required";
  }

  if (Validator.isEmpty(data.message)) {
    errors.message= "Message field is required";
  }

return {
    errors,
    isValid: isEmpty(errors)
  };
};