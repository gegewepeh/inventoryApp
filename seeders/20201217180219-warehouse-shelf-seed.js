'use strict';
var moment = require('moment')
module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let data = [
    {
      shelf_name: 'A1'
    },
    {
      shelf_name: 'A2'
    },
    {
      shelf_name: 'A3'
    },
    {
      shelf_name: 'B1'
    },
    {
      shelf_name: 'B2'
    },
    {
      shelf_name: 'B3'
    },
    {
      shelf_name: 'C1'
    },
    {
      shelf_name: 'C2'
    },
    {
      shelf_name: 'C3'
    },
    {
      shelf_name: 'C4'
    }
   ]

   data.forEach((el) => {
    el.createdAt = moment().format()
    el.updatedAt = moment().format()
  })
   return queryInterface.bulkInsert('WarehouseShelves', data, {})
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('WarehouseShelves', null, {})
  }
};
