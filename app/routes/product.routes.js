module.exports = app => {
    const products = require("../controllers/product.controller.js");
    const categories = require("../controllers/product.controller.js");
    const users = require("../controllers/user.controller.js");
    const activities = require("../controllers/user.controller.js")
    const detailProduct = require("../controllers/product.controller.js");
    const detailCategory = require("../controllers/product.controller.js");

    const router = require("express").Router();

    router.get("/", (req, res) => {
        res.send('Welcome to CrowdfundingSV MIRABO.');
    });

    router.post("/users", users.CreateUser);
    router.post("/activities", activities.createActivity)
    router.post("/products", products.createProduct);
    router.post("/categories", categories.createCategory);

    router.get("/detailProduct", detailProduct.detailProduct);
    router.get("/detailCategory", detailCategory.detailCategory);

    app.use('/', router);
}