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
      id: 1,
      shelf_name: 'A1',
      amount_warehouse: 0
    },
    {
      id: 2,
      shelf_name: 'A2',
      amount_warehouse: 0
    },
    {
      id: 3,
      shelf_name: 'A3',
      amount_warehouse: 0
    },
    {
      id: 4,
      shelf_name: 'B1',
      amount_warehouse: 0
    },
    {
      id: 5,
      shelf_name: 'B2',
      amount_warehouse: 0
    },
    {
      id: 6,
      shelf_name: 'B3',
      amount_warehouse: 0
    },
    {
      id: 7,
      shelf_name: 'C1',
      amount_warehouse: 0
    },
    {
      id: 8,
      shelf_name: 'C2',
      amount_warehouse: 0
    },
    {
      id: 9,
      shelf_name: 'C3',
      amount_warehouse: 0
    },
    {
      id: 10,
      shelf_name: 'C4',
      amount_warehouse: 0
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
