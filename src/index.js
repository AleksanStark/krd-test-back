const express = require("express");
const cors = require("cors");
const pino = require("pino-http");
const dotenv = require("dotenv");
const router = require("./router");
const mongoose = require("mongoose");

dotenv.config();
const PORT = process.env.PORT || 5002;
const app = express();

app.use(express.json());
app.use(cors());
app.use(pino());
app.use("/", router);

const start = async () => {
  const uri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PWD}@cluster0.zlhfuqf.mongodb.net/${process.env.MONGO_DB_NAME}`;
  await mongoose.connect(uri);
  app.listen(PORT, () => console.log(`server runnig on ${process.env.PORT}`));
};
start();
