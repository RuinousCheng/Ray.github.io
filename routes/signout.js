const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

// GET /signout 登出
router.get('/', checkLogin, function (req, res, next) {
  req.session.user = null
  req.flash('success', '退出成功')
  // 跳转到主页
  res.redirect('/posts')
})

module.exports = router
