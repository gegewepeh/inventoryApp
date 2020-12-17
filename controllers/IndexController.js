class IndexController {
  static index (req, res) {
    res.render ('home.ejs')
  }
}

module.exports = IndexController