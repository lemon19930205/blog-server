var express = require('express');
var router = express.Router();

//二级路径
router.post('/', function (req, res, next) {
  console.log(req.body);

  res.send({
    status: 0,
    msg: "登陆成功",
    data:{
      userInfo:{
        name:"老周同志"
      }
    }
  })
});

module.exports = router;
