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
      product_name: "Indomo",
      product_category: "Food",
      product_amount: "100",
      product_price: "2000"
     },
     {
      product_name: "Royci",
      product_category: "Seasoning",
      product_amount: "100",
      product_price: "1500"
     },
     {
      product_name: "Sunslik",
      product_category: "Self-care",
      product_amount: "100",
      product_price: "13300"
     },
     {
      product_name: "Asua",
      product_category: "Drinks",
      product_amount: "100",
      product_price: "3500"
     },
     {
      product_name: "Liveboi",
      product_category: "Self-care",
      product_amount: "100",
      product_price: "5600"
     },
     {
      product_name: "Kit Chain lube",
      product_category: "automotive",
      product_amount: "100",
      product_price: "18000"
     },
     {
      product_name: "Dove",
      product_category: "Self-care",
      product_amount: "100",
      product_price: "7300"
     },
     {
      product_name: "Clear",
      product_category: "Self-care",
      product_amount: "50",
      product_price: "20000"
     },
     {
      product_name: "Pepsodent",
      product_category: "Self-care",
      product_amount: "45",
      product_price: "15600"
     },
     {
      product_name: "Axe",
      product_category: "Self-care",
      product_amount: "35",
      product_price: "38000"
     },
     {
      product_name: "Kodomo",
      product_category: "Self-care",
      product_amount: "60",
      product_price: "12000"
     },
     {
      product_name: "ABC Kopi",
      product_category: "Drinks",
      product_amount: "50",
      product_price: "4600"
     },
     {
      product_name: "Coca-cola",
      product_category: "Drinks",
      product_amount: "20",
      product_price: "8000"
     },
     {
      product_name: "IceStraw",
      product_category: "Food",
      product_amount: "80",
      product_price: "10000"
     },
     {
      product_name: "Taro",
      product_category: "Food",
      product_amount: "45",
      product_price: "9700"
     },
     {
      product_name: "CatWish",
      product_category: "Pet Food",
      product_amount: "12",
      product_price: "38000"
     },
     {
      product_name: "Sari Roti",
      product_category: "Food",
      product_amount: "34",
      product_price: "7000"
     },
     {
      product_name: "Roti Biru",
      product_category: "Food",
      product_amount: "50",
      product_price: "6000"
     },
     {
      product_name: "Superpel",
      product_category: "Household",
      product_amount: "10",
      product_price: "17000"
     },
     {
      product_name: "Baygon",
      product_category: "Household",
      product_amount: "25",
      product_price: "27000"
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
