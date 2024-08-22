const express = require("express"); // Express package is imported
const app = express(); // Created instances of express
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRrouter = require("./router/userRouter");
const cors = require("cors");
dotenv.config();
app.use(express.json());
app.use(cors());


mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected Sucessfully");
    // Kept App.listen here so that app will not run if there is error in connecting
    app.listen(process.env.PORT || 8000, (err) => {
      if (err) console.log(err);
      console.log("Running Successfully");
    }); // This is port number
  })
  .catch((error) => console.log("Error Caught", error));

app.use(userRrouter);
