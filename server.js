const express = require("express");
const loginRouter = require("./src/routers/login_router");
const uploadRouter = require("./src/routers/upload_router");
const uploadFileRouter = require( "./src/routers/uploadfile_router" );
const app = express();
require("dotenv").config();

const port = process.env.PORT;

app.use(express.urlencoded());
app.use(express.json());

// const helloRouter = express.Router();

// helloRouter.get("/", (req, res, next) => {
//   return res.send("helloworld");
// });
// app.use("/helloworld", helloRouter);

// app.get("/helloworld", (req, res, next) => {
//   return res.send("helloworld");
// });

app.use("/login", loginRouter);

app.use("/upload/file_pdf",uploadFileRouter);
app.use("/upload", uploadRouter);

app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));

app.listen(port, () => {
  console.log(`start server at port: ${port}`);
});
