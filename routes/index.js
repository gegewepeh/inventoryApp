const router = require ('express').Router()
const IndexController = require ('../controllers/IndexController')
const WarehouseController = require ('../controllers/WarehouseController')
const ProductController = require ('../controllers/ProductController')
const DisplayController = require ('../controllers/DisplayController')

router.get ('/', IndexController.index)

router.use ('/warehouse', WarehouseController.index)

router.use ('/products', ProductController.index)

router.use ('/display', DisplayController.index)

module.exports = router