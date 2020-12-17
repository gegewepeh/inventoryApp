const router = require ('express').Router()
const DisplayController = require ('../controllers/DisplayController')

router.get ('/', DisplayController.index)

router.get ('/add/:id', DisplayController.add)
router.post ('/add/:id', DisplayController.postAdd)

module.exports = router