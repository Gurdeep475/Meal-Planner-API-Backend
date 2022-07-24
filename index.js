const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api");

app.use(express.json());

app.use("/", apiRoutes);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
