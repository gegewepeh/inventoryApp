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
      name: 'Section 1'
    },
    {
      name: 'Section 2'
    },
    {
      name: 'Section 3'
    },
    {
      name: 'Section 4'
    },
    {
      name: 'Section 5'
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
