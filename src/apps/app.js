const express = require("express");
const app = express();
const router = express.Router();
app.get("/", (req, res) => {
  res.send("<h1>Welcome Node</h1>");
});

// Router Admin
app.get("/admin/login", (req, res) => {
  res.send("admin/login");
});
app.get("/admin/logout", (req, res) => {
  res.send("admin/logout");
});
app.get("/admin/dashboard", (req, res) => {
  res.send("admin/dashboard");
});
// Admin Product
app.get("/admin/products", (req, res) => {
  res.send("admin/products");
});
app.get("/admin/products/create", (req, res) => {
  res.send("admin/products/create");
});
app.get("/admin/products/edit/:id", (req, res) => {
  res.send("admin/products/edit/:id");
});
app.get("/admin/products/delete/:id", (req, res) => {
  res.send("admin/products/delete/:id");
});
// Admin users
app.get("/admin/users", (req, res) => {
  res.send("admin/users");
});
app.get("/admin/users/create", (req, res) => {
  res.send("admin/users/create");
});
app.get("/admin/users/edit/:id", (req, res) => {
  res.send("admin/users/edit/:id");
});
app.get("/admin/users/delete/:id", (req, res) => {
  res.send("admin/users/delete/:id");
});
// Admin categories
app.get("/admin/categories", (req, res) => {
  res.send("admin/categories");
});
app.get("/admin/categories/create", (req, res) => {
  res.send("admin/categories/create");
});
app.get("/admin/categories/edit/:id", (req, res) => {
  res.send("admin/categories/edit/:id");
});
app.get("/admin/categories/delete/:id", (req, res) => {
  res.send("admin/categories/delete/:id");
});

app.use("/static", express.static(`${__dirname}/../public/style.css`));
app.listen((port = 3000), (req, res) => {
  console.log(`Server running on port ${port}`);
});
app.use(router);
