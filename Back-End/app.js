const express = require("express");
const morgan = require("morgan");
const router = require("./src/routes/index.js");
const cors = require("cors");

// Para leer data del .env
// import * as dotenv from 'dotenv'
// dotenv.config()

const server = express();

//options for cors middleware
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use((req, res, next) => {
  //* update to match all domains you will make the request from
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Acceptm"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", router);

module.exports = server;