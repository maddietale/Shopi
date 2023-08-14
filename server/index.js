const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.DATABASE_URI)
.then(() => console.log("DB Connect!"))
.catch((err) => console.log(`DB ERROR: ${err}!`));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
}); 