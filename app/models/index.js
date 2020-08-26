
// const dbConfig = require('../config/db.config.js');

// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//     host: dbConfig.HOST,
//     dialect: dbConfig.dialect,
//     define: {
//         underscored: dbConfig.define.underscored,
//         freezeTableName: dbConfig.define.freezeTableName
//     },
//     pool: {
//         max: dbConfig.pool.max,
//         min: dbConfig.pool.min,
//         acquire: dbConfig.pool.acquire,
//         idle: dbConfig.pool.idle
//     }
// });

const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  define: {
    underscored: dbConfig.define.underscored,
    freezeTableName: dbConfig.define.freezeTableName
  },

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.products = require("./products.model.js")(sequelize, Sequelize);
db.users = require("./users.model.js")(sequelize, Sequelize);
db.activities = require("./activities.model.js")(sequelize, Sequelize);
db.products.belongsToMany(db.users, {
    through: db.activities,
    //foreignKey: "product_id"
});
db.users.belongsToMany(db.products, {
    through: db.activities,
    //foreignKey: "user_id"
});

db.products = require("./products.model.js")(sequelize, Sequelize);
db.categories = require("./categories.model.js")(sequelize, Sequelize);

db.categories.hasMany(db.products);
db.products.belongsTo(db.categories, {
  foreignKey: {
    name: "category_id",
    allowNull: false
  }
});

// const activities = sequelize.define("activities", {
//     user_id: {
//         type: Sequelize.DataTypes.INTEGER,
//         references: {
//             model: db.users,
//             key: 'id'
//         }
//     },
//     product_id: {
//         type: Sequelize.DataTypes.INTEGER,
//         references: {
//             model: db.products,
//             key: 'id'
//         }
//     },
//     created: {
//         type: Sequelize.DataTypes.BOOLEAN
//     },
//     back_total: {
//         type: Sequelize.DataTypes.FLOAT
//     },
//     interested: {
//         type: Sequelize.DataTypes.BOOLEAN
//     },
//     liked: {
//         type: Sequelize.DataTypes.BOOLEAN
//     }
// });
// db.users.belongsToMany(db.products, {through: activities});
// db.products.belongsToMany(db.users, {through: activities});

module.exports = db;

