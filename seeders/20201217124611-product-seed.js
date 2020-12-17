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
      product_amount: "100"
     },
     {
      product_name: "Royci",
      product_category: "Seasoning",
      product_amount: "100"
     },
     {
      product_name: "Liveboi",
      product_category: "Self-care",
      product_amount: "100"
     },
     {
      product_name: "Asua",
      product_category: "Drinks",
      product_amount: "100"
     },
     {
      product_name: "Liveboi",
      product_category: "Self-care",
      product_amount: "100"
     },
     {
      product_name: "Kit Chain lube",
      product_category: "automotive",
      product_amount: "100"
     },
     {
      product_name: "Liveboi",
      product_category: "Self-care",
      product_amount: "100"
     },
     {
      product_name: "Clear",
      product_category: "Self-care",
      product_amount: "50"
     },
     {
      product_name: "Pepsodent",
      product_category: "Self-care",
      product_amount: "45"
     },
     {
      product_name: "Axe",
      product_category: "Self-care",
      product_amount: "35"
     },
     {
      product_name: "Kodomo",
      product_category: "Self-care",
      product_amount: "60"
     },
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
