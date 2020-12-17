const {Warehouse, Product, WarehouseShelf} = require ('../models/index')

class WarehouseController {
  static index (req, res) {
    Warehouse.findAll () 
      .then (warehouse => {
        res.render ('warehouse.ejs', {warehouse})
      })
      .catch (err => {
        console.log (err)
        res.send (err)
      })
  }

  static add (req, res) {
    res.render ('addWarehouseShelf.ejs')
  }

  static postAdd (req, res) {
    // let obj = {
    //   shelf_name: req.body.shelf_name
    //   product
    // }
  }







  // static add (req, res) {
  //   let targetId = +req.params.id
  //   let targetProduct

  //   Product.findByPk (targetId)
  //     .then (product => {
  //       targetProduct = product
  //       let obj = {
  //         shelf_name: targetProduct.product_category,
  //         product_id: targetId
  //       }
  //       return WarehouseShelf.create (obj)
  //     })
  //     .then (() => {
  //       res.redirect ('')
  //     })
  //     .catch (err => {
  //       console.log (err)
  //       res.send (err)
  //     })
  // }

}

module.exports = WarehouseController