const express = require("express");
const cors = require("cors");
const path = require("path");
const fileUpload = require("express-fileupload");
const dbConnection = require("../config/database");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 5000;

    this.paths = {
      auth: "/api/auth",
      images: "/api/images",
      public: "../public/index.html",
    };

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
        origin: process.env.FRONTEND_URL,
        optionsSuccessStatus: 200,
      })
    );

    this.app.use(express.json());

    this.app.use(express.static("public"));

    // File upload
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
        createParentPath: true,
      })
    );
  }

  routes() {
    this.app.use(this.paths.auth, require("../routes/authRoutes"));
    this.app.use(this.paths.images, require("../routes/imageRoutes"));
    this.app.get("/*", (req, res) => {
      res.sendFile(path.join(__dirname, this.paths.public));
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`El servidor se está ejecutando en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;
