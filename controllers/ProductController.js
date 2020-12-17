const {Product, WarehouseShelf, DisplayShelf, ProductShelf} = require ('../models/index')

class ProductController {
  static index (req, res) {
    let products
    Product.findAll ({
      order : [
        ['id', 'ASC']
      ],
      include: {
        model: WarehouseShelf
      }
    })
      .then (productsData => {
        console.log(productsData[0].WarehouseShelf.amount_warehouse)
        
        products = productsData
        return DisplayShelf.findAll ({
          include: {
            model: Product
          }
        })
      })
      .then (dShelves => {
        // products.forEach (e => {
        //   e.amountDisplay = 
        // })
        // let amountDisplay = dShelves.map (e => {
        //   return e.amount_d
        // })
        console.log(dShelves)
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
    Product.findByPk (targetId, {
      include: {
        model: WarehouseShelf
      }
    })
      .then ( product => {
        let resultAmount = product.WarehouseShelf.amount_warehouse - product.total_amount
        let obj = {
          amount_warehouse: resultAmount
        }

        return WarehouseShelf.update (obj, {
          where: {
            id: product.WarehouseShelf.id
          }
        })
      
      .then (() => {
        return Product.destroy ({
            where: {
              id: targetId
            }
          })
      })
      .then (() => {
        res.redirect ('/products')
      })
      
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