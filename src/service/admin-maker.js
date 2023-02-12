const adminSchema = require("../model/adminRegister");
const { adminRegisterValidation } = require("../validation/validation");
const { AdminRepository } = require("../repository/index");

class AdminService {
  constructor() {
    this.adminRepo = new AdminRepository();
  }

  async createAdmin(data) {
    try {
      // validate the fields passed in the data
      // const res = adminRegisterValidation(data);
      const res = await this.adminRepo.createAdmin(data);

      console.log(res);
      return res;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AdminService;
