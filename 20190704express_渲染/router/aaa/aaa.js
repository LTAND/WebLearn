const express = require("express")
const router = express.Router()

// /article/aaa
router.get("/",  (req, res) => {
  res.send("aaa")
})

router.get("/a", require("./a.js"))

router.get("/b", (req, res) => {
  res.send("b")
})

router.get("/c", (req, res) => {
  res.send("c")
})

module.exports = router
