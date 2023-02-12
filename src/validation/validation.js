const { AdminRepository } = require("../repository/index");

class Validation {
  constructor() {
    this.adminRepo = new AdminRepository();
  }

  async adminRegisterValidation(data) {
    try {
      let validationResult = {
        phoneNumber: false,
        email: false,
        password: false,
      };
      //validating Fields
      const emailFromDatabase = await this.adminRepo.findUser(data.email);
      const validatePhonenumber = this.#validatePhone(data.phoneNumber);
      const validatePassword = this.#validatePass(data.password);

      if (emailFromDatabase.length > 0) {
        validationResult = {
          ...validationResult,
          email: true,
        };
      }
      if (validatePhonenumber == false) {
        validationResult = {
          ...validationResult,
          email: true,
        };
      }
      if (validatePassword == false) {
        validationResult = {
          ...validationResult,
          email: true,
        };
      }

      return validationResult;
    } catch (error) {
      throw error;
    }
  }

  #validatePhone() {}

  #validatePass() {}
}

module.exports = Validation;
