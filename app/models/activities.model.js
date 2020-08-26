const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Activities = sequelize.define("activities", {
        user_id: {
            type: DataTypes.INTEGER
        },
        product_id: {
            type: DataTypes.INTEGER
        },
        created: {
            type: DataTypes.BOOLEAN
        },
        back_total: {
            type: DataTypes.FLOAT
        },
        interested: {
            type: DataTypes.BOOLEAN
        },
        liked: {
            type: DataTypes.BOOLEAN
        }
    });
    return Activities;
};