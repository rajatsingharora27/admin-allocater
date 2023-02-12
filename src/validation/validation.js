const { check, validationResult } = require("express-validator");

const adminRegisterValidation = async (data) => {
  try {
    if (data.phoneNumber === null) {
      return false;
    }
    check("phoneNumber")
      .not()
      .isEmpty()
      .withMessage("Phone number is required")
      .isMobilePhone("en-IN")
      .withMessage("Invalid phone number");

    const errors = validationResult(data);
    console.log(errors);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { adminRegisterValidation };
