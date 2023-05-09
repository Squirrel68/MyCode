const express = require("express");
const router = express.Router(); // typeof(router) = func
const TestController = require("../apps/controllers/test");
const AuthController = require("../apps/controllers/auth");
const AdminController = require("../apps/controllers/admin");
const CategoryController = require("../apps/controllers/category");
const ProductController = require("../apps/controllers/product");
const UserController = require("../apps/controllers/user");

router.get("/test", TestController.test1);

router.get("/", (req, res) => {
  res.send(typeof router);
});

// Router Admin
router.get("/admin/login", AuthController.login);
router.get("/admin/logout", AuthController.logout);
router.get("/admin/dashboard", AdminController.index);
// Admin Product
router.get("/admin/products", ProductController.index);
router.get("/admin/products/create", ProductController.create);
router.get("/admin/products/edit/:id", ProductController.edit);
router.get("/admin/products/delete/:id", ProductController.del);
// Admin user
router.get("/admin/users", UserController.index);
router.get("/admin/users/create", UserController.create);
router.get("/admin/users/edit/:id", UserController.edit);
router.get("/admin/users/delete/:id", UserController.del);
// Admin Category
router.get("/admin/categories", CategoryController.index);
router.get("/admin/categories/create", CategoryController.create);
router.get("/admin/categories/edit/:id", CategoryController.edit);
router.get("/admin/categories/delete/:id", CategoryController.del);

module.exports = router;
