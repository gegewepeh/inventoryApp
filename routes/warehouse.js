const router = require ('express').Router()
const WarehouseController = require ('../controllers/WarehouseController')

router.get ('/', WarehouseController.index)

router.get ('/shelves/add', WarehouseController.add)

module.exports = router