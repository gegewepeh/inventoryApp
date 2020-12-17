const {Product, WarehouseShelf, DisplayShelf} = require ('../models/index')

class ProductController {
  static index (req, res) {
    let products
    Product.findAll ({
      order : [
        ['id', 'ASC']
      ],
    })
      .then (productsData => {
        products = productsData
        return DisplayShelf.findAll ()
        
      })
      .then (dShelves => {
        
        res.render ('products.ejs', {products})
      })
      .catch (err => {
        console.log (err)
        res.send (err)
      })
  }

  static add (req, res) {
    WarehouseShelf.findAll ()
      .then (wShelves => {
        res.render ('addProduct.ejs', {wShelves})
      })
  }

  static delete (req, res) {
    let targetId = +req.params.id
    Product.destroy ({
      where: {
        id: targetId
      }
    })
      .then (product => {
        res.redirect ('/products')
      })
      .catch (err => {
        console.log (err)
        res.send (err)
      })
  }

  static postAdd (req, res) {
    let obj = {
      name: req.body.name,
      total_amount: req.body.total_amount,
      price: req.body.price,
      category: req.body.category,
      warehouse_id: req.body.warehouse_id,
      createdAt: new Date (),
      updatedAt: new Date ()
    }
    let obj2 = {
      amount_warehouse: req.body.total_amount,
      updatedAt: new Date ()
    }
    Product.create (obj)
      .then ( () => {
        return WarehouseShelf.update (obj2, {
          where: {
            id: req.body.warehouse_id
          }
        })
      })
      .then (() => {
        res.redirect ('/products')
      })
      .catch (err => {
        console.log (err)
        res.send (err)
      })
  }

  
}

module.exports = ProductController