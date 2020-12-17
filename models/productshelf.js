'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductShelf extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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