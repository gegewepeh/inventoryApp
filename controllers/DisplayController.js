const {Product, WarehouseShelf, DisplayShelf} = require ('../models/index')

class DisplayController {
  static index (req, res) {
    DisplayShelf.findAll ()
      .then (dShelves => {
        res.render ('display', {dShelves})
      })
      .catch (err => {
        console.log (err)
        res.send (err)
      })
  }

  static add (req, res) {
    let product
    let targetId = +req.params.id
    Product.findByPk (targetId)
      .then (productData => {
        product = productData
        return DisplayShelf.findAll ()
        
      })
      .then (dShelves => {
        res.render ('sendToDisplay', {product, dShelves})
      })
      .catch (err => {
        console.log (err)
        res.send (err)
      })
  }

  static postAdd (req, res) {
    let targetId = +req.params.id
    let amountSent = req.body.amount
    let targetProduct
    Product.findByPk (targetId, {
      include : {
        model: WarehouseShelf
      }
    })
      .then (product => {
        targetProduct = product
        
        return WarehouseShelf.update ({
          where : {
            id: product.warehouse_id
          }
        })
      .then (() => {
        let totalAmount = targetProduct.total_amount - amountSent
        let obj = {
          total_amount: totalAmount,
          updatedAt: new Date ()
        }
        return Product.update ({
          where: {
            id: targetId
          }
        })
      })
      })
  }
}

module.exports = DisplayController