const express = require("express");
const dbConnection = require("./config/db-config");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server-config");
const apiRoutes = require("./router/index");

const server = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  await dbConnection();
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
};

server();
