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
      name: 'Section 1',
      amount_display: 0
    },
    {
      name: 'Section 2',
      amount_display: 0
    },
    {
      name: 'Section 3',
      amount_display: 0
    },
    {
      name: 'Section 4',
      amount_display: 0
    },
    {
      name: 'Section 5',
      amount_display: 0
    }
  ]

   data.forEach((el) => {
    el.createdAt = moment().format()
    el.updatedAt = moment().format()
  })
   
   return queryInterface.bulkInsert('DisplayShelves', data, {})
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('DisplayShelves', null, {})
  }
};
