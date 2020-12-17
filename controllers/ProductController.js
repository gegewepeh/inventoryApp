const {Product} = require ('../models/index')

class ProductController {
  static index (req, res) {
    Product.findAll ()
      .then (products => {
        res.render ('products.ejs', {products})
      })
      .catch (err => {
        console.log (err)
        res.send (err)
      })
  }

  static add (req, res) {

  }

  
}

module.exports = ProductController