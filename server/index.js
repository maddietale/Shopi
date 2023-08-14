const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// ROUTES
const userRoute = require("./routes/user");
// DB
mongoose.connect(process.env.DATABASE_URI)
.then(() => console.log("DB Connect!"))
.catch((err) => console.log(`DB ERROR: ${err}!`));
// CODE
app.use("/api/users", userRoute);
// SERVER
app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
}); 