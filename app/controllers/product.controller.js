const db = require("../models");
const Product = db.products;
const Category = db.categories;

exports.createCategory = (req, res) => {
    if(!req.body.category) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // create a category
    const category = {
        category: req.body.category
    };

    Category.create(category)
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating a category!"
            });
        });
};

exports.createProduct = (req, res) => {
    const product = {
        name: req.body.name,
        short_description: req.body.short_description,
        description: req.body.description,
        images: req.body.images,
        funding_goal: req.body.funding_goal,
        survival: req.body.survival,
        category_id: req.body.category_id
    };
    Product.create(product)
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.send(err);
        });
};