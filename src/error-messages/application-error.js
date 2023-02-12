const { StatusCodes } = require("http-status-codes");

class ApplicationError extends Error {
  constructor(name, message, explanation, statusCode) {
    super();
    this.name = name;
    this.message = message;
    this.explanation = explanation;
    this.statusCode = statusCode;
  }
}

module.exports = ApplicationError;
