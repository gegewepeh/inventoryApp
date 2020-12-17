const express = require('express')
const router = require ('./routes/index')
const rupiah = require ('./helpers/rupiah')
const app = express()
const port = 3000

app.set ('view engine', 'ejs')

app.use (express.urlencoded ({extended: false}))

app.locals.rupiah = rupiah

app.use ('/', router)

app.listen(port, () => {
  console.log(`Inventory app listening at http://localhost:${port}`)
})