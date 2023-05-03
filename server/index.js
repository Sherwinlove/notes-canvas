require("dotenv").config();
const routes = require("./routes/routes");
const cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("We're in, boys.");
});

const app = express();

const PORT = 6969;

app.use(express.json());
app.use(cors());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
