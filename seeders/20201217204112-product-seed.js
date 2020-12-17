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
      name: "Indomo",
      total_amount: "100",
      price: "2000",
      category: "Food"     
      ,warehouse_id: 1
    },
      {
      name: "Royci",
      total_amount: "100",
      price: "1500",
      category: "Seasoning"     
      ,warehouse_id: 2
    },
      {
      name: "Sunslik",
      total_amount: "100",
      price: "13300",
      category: "Self-care"     
      ,warehouse_id: 8
    },
      {
      name: "Asua",
      total_amount: "100",
      price: "3500",
      category: "Drinks"     
      ,warehouse_id: 2
    },
      {
      name: "Liveboi",
      total_amount: "100",
      price: "5600",
      category: "Self-care"     
      ,warehouse_id: 7
    },
      {
      name: "Kit Chain lube",
      total_amount: "100",
      price: "18000",
      category: "automotive"     
      ,warehouse_id: 9
    },
      {
      name: "Dove",
      total_amount: "100",
      price: "7300",
      category: "Self-care"     
      ,warehouse_id: 7
    },
      {
      name: "Clear",
      total_amount: "50",
      price: "20000",
      category: "Self-care"     
      ,warehouse_id: 7
    },
      {
      name: "Pepsodent",
      total_amount: "45",
      price: "15600",
      category: "Self-care"     
      ,warehouse_id: 6
    },
      {
      name: "Axe",
      total_amount: "35",
      price: "38000",
      category: "Self-care"     
      ,warehouse_id: 6
    },
      {
      name: "Kodomo",
      total_amount: "60",
      price: "12000",
      category: "Self-care"     
      ,warehouse_id: 6
    },
      {
      name: "ABC Kopi",
      total_amount: "50",
      price: "4600",
      category: "Drinks"     
      ,warehouse_id: 4
    },
      {
      name: "Coca-cola",
      total_amount: "20",
      price: "8000",
      category: "Drinks"     
      ,warehouse_id: 5
    },
      {
      name: "IceStraw",
      total_amount: "80",
      price: "10000",
      category: "Food",
      warehouse_id: 4
    },
      {
      name: "Taro",
      total_amount: "45",
      price: "9700",
      category: "Food"     
      ,warehouse_id: 2
    },
      {
      name: "CatWish",
      total_amount: "12",
      price: "38000",
      category: "Pet Food"     
      ,warehouse_id: 6
    },
      {
      name: "Sari Roti",
      total_amount: "34",
      price: "7000",
      category: "Food"     
      ,warehouse_id: 2
    },
      {
      name: "Roti Biru",
      total_amount: "50",
      price: "6000",
      category: "Food"     
      ,warehouse_id: 1
    },
      {
      name: "Superpel",
      total_amount: "10",
      price: "17000",
      category: "Household"     
      ,warehouse_id: 8
    },
      {
      name: "Baygon",
      total_amount: "25",
      price: "27000",
      category: "Household"     
      ,warehouse_id: 10
    }
    ]
    data.forEach((el) => {
    el.createdAt = new Date(moment().utc())
    el.updatedAt = new Date(moment().utc())
  })

    return queryInterface.bulkInsert('Products', data, {})
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Products', null, {})
  }
};
