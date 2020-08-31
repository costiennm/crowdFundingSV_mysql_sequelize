const db = require("../models");
const User = db.users;
const Product = db.products;
const Category = db.categories;
const Activity = db.activities;

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

exports.detailProduct = async function getDetailProduct(req, res) {
    const product = await Product.findByPk(req.body.id, {
        include: [
            {
                model: User,
                as: 'users',
                //required: true,
                // as: 'users',
                attributes: ["id", "name"],
                through: {
                    where: {created: 1},
                    attributes: ["user_id", "product_id", "created"],
                }
            },
        ],
    })
    
    //Count interested
    const interested = await Activity.count({
        where: {interested: 1, product_id: req.body.id}
    })
    
    // Count liked
    const liked = await Activity.count({
        where: {liked: 1, product_id: req.body.id}
    })
    
    // Sum backed total
    const backedTotal = await Activity.sum('back_total', {
        where: {product_id: req.body.id}
    })

    console.log(product, interested, liked, backedTotal);
};


exports.detailCategory = (req, res) => {
    Category.findByPk(req.body.id, {
        include: [
            {
                model: Product,
                attributes: ["id", "name", "short_description", "images"]
            }
        ]
    })
    .then((category) => {
        // const product = category.products;
        // console.log(product);
        res.send(category);
    })
    .catch((err) => {
        res.send(err);
        console.log(err);
    });
};