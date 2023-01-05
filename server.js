const express = require("express");
const app = express();
const ejs = require("ejs");
const dotenv = require("dotenv");
const productRoutes = require("./Routes/productRoutes");
const connectDB = require("./config/db");

connectDB();
// app.set("view engine", "ejs");
app.use(express.json());
dotenv.config({ path: "config/dotenv.env" });

app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/api/product/create", (req, res) => {
//   res.render("product");
// });


app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});

app.use("/api/product", productRoutes);
