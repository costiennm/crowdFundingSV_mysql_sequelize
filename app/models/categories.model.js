module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define("categories", {
        category: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Categories;
};