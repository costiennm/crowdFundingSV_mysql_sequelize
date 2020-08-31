const db = require("../models");
const User = db.users;
const Product = db.products;
const Activity = db.activities;

exports.CreateUser = (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address
    };

    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        });
};

// add a product to a user
exports.createActivity = (req, res) => {
    return User.findByPk(req.body.user_id)
        .then((user) => {
            if(!user) {
                console.log("User not found!");
                return null;
            }
            return Product.findByPk(req.body.product_id)
                .then((product) => {
                    if(!product) {
                        console.log("Product not found!");
                        return null;
                    }

                    user.addProduct(product, {
                        through: {
                            created: req.body.created,
                            back_total: req.body.back_total,
                            interested: req.body.interested,
                            liked: req.body.liked
                        }
                    });
                    console.log('>> added successfully');
                    // console.log("Alooo",product);
                    res.send("Oke");
                });
        })
        .catch((err) => {
            console.log(err);
        });
};


// exports.createActivity = (req, res) => {
//     if(!req.body.created && !req.body.back_total && !req.body.interested && !req.body.liked) {
//         res.status(400).send("Association was denied!");
//         return;
//     }

//     const activity = {
//         user_id: req.body.user_id,
//         product_id: req.body.product_id,
//         created: req.body.created,
//         back_total: req.body.back_total,
//         interested: req.body.interested,
//         liked: req.body.liked
//     };

//     console.log(JSON.stringify(activity));

//     Activity.create(activity)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).send(err);
//         });
// }