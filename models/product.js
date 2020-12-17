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
      Product.hasMany(models.ProductShelf,{foreignKey:'product_id'})
      Product.hasMany(models.WarehouseShelf,{foreignKey:'product_id'})
    }
  };
  Product.init({
    product_name: DataTypes.STRING,
    product_category: DataTypes.STRING,
    product_amount: DataTypes.INTEGER,
    product_price:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};