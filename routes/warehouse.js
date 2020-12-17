const router = require ('express').Router()
const WarehouseController = require ('../controllers/WarehouseController')

router.get ('/', WarehouseController.index)

router.get ('/shelves/add/', WarehouseController.add)
router.post ('/shelves/add/', WarehouseController.postAdd)


module.exports = router