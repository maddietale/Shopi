const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// ROUTES
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
// DB
mongoose.connect(process.env.DATABASE_URI)
    .then(() => console.log("DB Connect!"))
    .catch((err) => console.log(`DB ERROR: ${err}!`));
// CODE
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
// SERVER
app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
}); 