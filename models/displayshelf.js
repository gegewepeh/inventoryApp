'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DisplayShelf extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DisplayShelf.belongsToMany(models.Product,{
        through: 'ProductShelf',
        foreignKey: 'display_shelf_id'
      })
    }
  };
  DisplayShelf.init({
    name: DataTypes.STRING,
    amount_display: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DisplayShelf',
  });
  return DisplayShelf;
};