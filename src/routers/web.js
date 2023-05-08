const express = require("express");
const router = express.Router(); // typeof(router) = func

router.get("/", (req, res) => {
  res.send(typeof router);
});

// Router Admin
router.get("/admin/login", (req, res) => {
  res.send("admin/login");
});
router.get("/admin/logout", (req, res) => {
  res.send("admin/logout");
});
router.get("/admin/dashboard", (req, res) => {
  res.send("admin/dashboard");
});
// Admin Product
router.get("/admin/products", (req, res) => {
  res.send("admin/products");
});
router.get("/admin/products/create", (req, res) => {
  res.send("admin/products/create");
});
router.get("/admin/products/edit/:id", (req, res) => {
  res.send("admin/products/edit/:id");
});
router.get("/admin/products/delete/:id", (req, res) => {
  res.send("admin/products/delete/:id");
});
// Admin users
router.get("/admin/users", (req, res) => {
  res.send("admin/users");
});
router.get("/admin/users/create", (req, res) => {
  res.send("admin/users/create");
});
router.get("/admin/users/edit/:id", (req, res) => {
  res.send("admin/users/edit/:id");
});
router.get("/admin/users/delete/:id", (req, res) => {
  res.send("admin/users/delete/:id");
});
// Admin categories
router.get("/admin/categories", (req, res) => {
  res.send("admin/categories");
});
router.get("/admin/categories/create", (req, res) => {
  res.send("admin/categories/create");
});
router.get("/admin/categories/edit/:id", (req, res) => {
  res.send("admin/categories/edit/:id");
});
router.get("/admin/categories/delete/:id", (req, res) => {
  res.send("admin/categories/delete/:id");
});

module.exports = router;
