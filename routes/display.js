const router = require ('express').Router()
const DisplayController = require ('../controllers/DisplayController')

router.get ('/', DisplayController.index)

module.exports = router