const {Warehouse} = require ('../models/index')

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
    res.render ('addWarehouseShelves')
  }

  static postAdd (req, res) {
    
  }
}

module.exports = WarehouseController