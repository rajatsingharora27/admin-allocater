const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  middlename: {
    type: String,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    min: 4,
    max: 20,
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  hasDeleteAccess: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Admin", AdminSchema);
