const express = require("express");
const { connection } = require("./db");

const { NewsRoute } = require("./controller/nodemailer");
const app = express();

app.use(express.json());
const cors = require("cors");

app.use(cors());
app.use("/newsLetter", NewsRoute);

app.listen(4500, async (req, res) => {
  try {
    await connection;
    console.log("connected to DB");
    console.log("port is running at 4500");
  } catch (err) {
    console.log(err);
  }
});
