let mongoose = require('mongoose');
let db = mongoose.connect('mongodb://localhost/test');

//账号信息表
let UserSchema = new mongoose.Schema({
  //账号
  account:{type:String},
  //密码
  password:{type:String}
});

mongoose.model('userInfo',UserSchema);