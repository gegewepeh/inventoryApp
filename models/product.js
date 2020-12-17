'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.DisplayShelf,{
        through: `ProductShelves`,
        foreignKey: 'product_id'
      })
      Product.belongsTo(models.WarehouseShelf,{foreignKey:'warehouse_id'})

    }
  };
  Product.init({
    name: DataTypes.STRING,
    total_amount: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    category: DataTypes.STRING,
    warehouse_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};