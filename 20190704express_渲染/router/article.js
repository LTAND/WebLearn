const express = require("express")
const router = express.Router()

// /article
router.get("/", (req, res) => {
  res.send("文章首页")
})
router.get("/:id", (req, res) => {
  let { id } = req.params
  console.log('req.params :', req.params);
  res.send(`${id}阅读文章`)
})
router.get("/edit", (req, res)=>{
  res.send("编辑")
})
router.get("/:id/comment", (req, res) => {
  res.send("文章评论")
})

// 子路由
router.use("/aaa", require("./aaa/aaa.js"))


module.exports = router
