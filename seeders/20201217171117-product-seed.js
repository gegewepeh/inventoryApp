'use strict';

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
      },
      {
      name: "Royci",
      total_amount: "100",
      price: "1500",
      category: "Seasoning"     
      },
      {
      name: "Sunslik",
      total_amount: "100",
      price: "13300",
      category: "Self-care"     
      },
      {
      name: "Asua",
      total_amount: "100",
      price: "3500",
      category: "Drinks"     
      },
      {
      name: "Liveboi",
      total_amount: "100",
      price: "5600",
      category: "Self-care"     
      },
      {
      name: "Kit Chain lube",
      total_amount: "100",
      price: "18000",
      category: "automotive"     
      },
      {
      name: "Dove",
      total_amount: "100",
      price: "7300",
      category: "Self-care"     
      },
      {
      name: "Clear",
      total_amount: "50",
      price: "20000",
      category: "Self-care"     
      },
      {
      name: "Pepsodent",
      total_amount: "45",
      price: "15600",
      category: "Self-care"     
      },
      {
      name: "Axe",
      total_amount: "35",
      price: "38000",
      category: "Self-care"     
      },
      {
      name: "Kodomo",
      total_amount: "60",
      price: "12000",
      category: "Self-care"     
      },
      {
      name: "ABC Kopi",
      total_amount: "50",
      price: "4600",
      category: "Drinks"     
      },
      {
      name: "Coca-cola",
      total_amount: "20",
      price: "8000",
      category: "Drinks"     
      },
      {
      name: "IceStraw",
      total_amount: "80",
      price: "10000",
      category: "Food"     
      },
      {
      name: "Taro",
      total_amount: "45",
      price: "9700",
      category: "Food"     
      },
      {
      name: "CatWish",
      total_amount: "12",
      price: "38000",
      category: "Pet Food"     
      },
      {
      name: "Sari Roti",
      total_amount: "34",
      price: "7000",
      category: "Food"     
      },
      {
      name: "Roti Biru",
      total_amount: "50",
      price: "6000",
      category: "Food"     
      },
      {
      name: "Superpel",
      total_amount: "10",
      price: "17000",
      category: "Household"     
      },
      {
      name: "Baygon",
      total_amount: "25",
      price: "27000",
      category: "Household"     
      }
    ]
    data.forEach((el) => {
    el.createdAt = new Date()
    el.updatedAt = new Date()
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
