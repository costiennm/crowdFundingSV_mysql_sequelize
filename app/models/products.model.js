module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define("products", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        short_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        images: {
            type: DataTypes.STRING,
            allowNull: false
        },
        funding_goal: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        survival: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        views: {
            type: DataTypes.INTEGER,
            defaultValue: "0"
        }
    });
    return Products;
}