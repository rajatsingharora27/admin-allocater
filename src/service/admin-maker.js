const { Validation } = require("../validation/index");
const { AdminRepository } = require("../repository/index");
const { StatusCodes } = require("http-status-codes");
const { ValidationError } = require("../error-messages/index");

class AdminService {
  constructor() {
    this.adminRepo = new AdminRepository();
    this.validation = new Validation();
  }

  async createAdmin(data) {
    try {
      // validate the fields passed in the data
      // const res = adminRegisterValidation(data);
      const validate = await this.validation.adminRegisterValidation(data);
      let errorString = "";
      //loop on validate Object and pass in ValidationError
      for (let [key, value] of Object.entries(validate)) {
        if (value === true) {
          errorString += key + ",";
        }
      }
      console.log(errorString);

      if (errorString.length > 0) {
        throw new ValidationError(
          "Validation Error",
          " Few fields are wrong or already exists in the database",
          `${errorString}`,
          StatusCodes.BAD_REQUEST
        );
      }

      const res = await this.adminRepo.createAdmin(data);

      console.log(res);
      return res;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AdminService;
