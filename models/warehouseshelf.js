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
      WarehouseShelf.belongsTo(models.Product,{foreignKey:'product_id'})
      WarehouseShelf.hasMany(models.Warehouse,{foreignKey:'warehouse_shelf_id'})
    }
  };
  WarehouseShelf.init({
    name_shelf: DataTypes.STRING,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WarehouseShelf',
  });
  return WarehouseShelf;
};