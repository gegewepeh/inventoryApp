const {Product, WarehouseShelf, DisplayShelf, ProductShelf} = require ('../models/index')

class DisplayController {
  static index (req, res) {
    let dShelves 
    DisplayShelf.findAll ()
      .then (dShelvesData => {
        dShelves = dShelvesData
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
    let targetDisplay 
    let targetProduct
    Product.findByPk (targetId, {
      include: {
        model: WarehouseShelf
      }
    })
    .then (product => {
      targetProduct = product
      let obj = {
        amount_warehouse: product.WarehouseShelf.amount_warehouse - amountSent,
        updatedAt: new Date ()
      }
      return WarehouseShelf.update (obj, {
        where: {
          id: product.WarehouseShelf.id
        }
      })
    })
    .then (() => {
      let obj = {
        product_id: targetId,
        display_shelf_id: req.body.dShelves_id
      }
      targetDisplay = obj.display_shelf_id
      return ProductShelf.create (obj)
    })

    .then (() => {
      return DisplayShelf.findByPk (targetDisplay)
    })
    .then (displayShelf => {
      let obj2 = {
        amount_display: displayShelf.amount_display + amountSent,
        updatedAt: new Date ()
      }
      return DisplayShelf.update (obj2, {
        where: {
          id: targetDisplay
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

module.exports = DisplayController