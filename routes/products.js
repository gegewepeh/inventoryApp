const router = require ('express').Router()
const ProductController = require ('../controllers/ProductController')

router.get ('/', ProductController.index)

router.get ('/add', ProductController.add)
router.post ('/add', ProductController.postAdd)

router.get ('/delete/:id', ProductController.delete)

module.exports = router