const router = require ('express').Router()
const IndexController = require ('../controllers/IndexController')
const productRouter = require ('./products')
const warehouseRouter = require ('./warehouse')
const displayRouter = require ('./display')

router.get ('/', IndexController.index)

router.use ('/warehouse', warehouseRouter)

router.use ('/products', productRouter)

router.use ('/display', displayRouter)

module.exports = router