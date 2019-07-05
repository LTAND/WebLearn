const express = require("express")
const router = express.Router()

// user
router.get("/", (req, res)=>{
  res.send("用户中心")
})

router.get("/:id", (req, res) => {
  res.send("个人用户")
})

router.get("/:id/edit", (req, res)=>{
  res.send("编辑用户")
})

module.exports = router