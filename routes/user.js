var express = require('express');
var router = express.Router();

let {userLogon, userLogin} = require('../utils/index');

//二级路径
//注册
router.post('/logon', function (req, res, next) {
  //console.log(req.body);
  let {account, password} = req.body;
  if (account && password) {
    let data = userLogon(account, password);
    console.log(data);
    if(data.id){
      res.send({
        status: 0,
        msg: "注册成功",
      })
    }else {
      res.send({
        status: -1,
        msg: "注册失败",
      })
    }
  }
});

//登陆
router.post('/login', function (req, res, next) {
  //console.log(req.body);
  let {account, password} = req.body;
  if (account && password) {
    let data = userLogin(account, password);
    console.log(data);
    if(data){
      res.send({
        status: 0,
        msg: "登陆成功",
        data: data
      })
    }else {
      res.send({
        status: -1,
        msg: "登陆失败",
      })
    }
  }
});

module.exports = router;
