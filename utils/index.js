let mongoose = require('mongoose');
//用户账号表
let UserInfo = mongoose.model('UserInfo');

export function userLogin(account, password) {
  UserInfo.find({"account": account, "password": password}, (err,doc)=> {
    if(err){
      console.log(err);
    }else {
      console.log(doc);
    }
  })
}