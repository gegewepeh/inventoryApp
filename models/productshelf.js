'use strict';
const {
  Model
} = require('sequelize');
const produk_rak = require('../../inventory-pair-project/models/produk_rak');
module.exports = (sequelize, DataTypes) => {
  class ProductShelf extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductShelf.belongsTo(models.Product,{foreignKey:'product_id'})
      ProductShelf.belongsTo(models.DisplayShelf,{foreignKey:'display_shelf_id'})
    }
  };
  ProductShelf.init({
    product_id: DataTypes.INTEGER,
    display_shelf_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductShelf',
  });
  return ProductShelf;
};