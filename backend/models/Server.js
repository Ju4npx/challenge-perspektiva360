const express = require("express");
const cors = require("cors");
const dbConnection = require("../config/database");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 5000;

    this.paths = {};

    this.connectDB();
    this.middlewares();
    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(
      cors({
        origin: "http://localhost:3000",
        optionsSuccessStatus: 200,
      })
    );

    this.app.use(express.json());

    this.app.use(express.static("public"));
  }

  routes() {}

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}

module.exports = Server;
