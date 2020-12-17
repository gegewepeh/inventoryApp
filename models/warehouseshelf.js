'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WarehouseShelf extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      WarehouseShelf.hasMany(models.Product,{foreignKey: 'warehouse_id'})
    }
  };
  WarehouseShelf.init({
    shelf_name: DataTypes.STRING,
    amount_warehouse: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WarehouseShelf',
  });
  return WarehouseShelf;
};