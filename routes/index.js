import express from "express"
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/catalog")
});

router.get('/about', (req, res)=>{
  console.log(req)
  res.send("<h1>Request index about</h1>")
})
export default router;
