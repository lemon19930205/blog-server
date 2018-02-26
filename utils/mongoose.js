let mongoose = require('mongoose');

let dbUrl = 'mongodb://localhost:27017/blog';

/*let db = mongoose.createConnection(dbUrl, (err) => {
  if (err) {
    console.warn('数据库连接失败：' + err);
  } else {
    console.log('数据库成功连接到' + dbUrl);
  }
});*/
mongoose.connect(dbUrl);
let db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',()=>{
  console.log('数据库连接成功');
});

//账号信息表
let UserAccountSchema = new mongoose.Schema({
  account: {type: String},//账号
  password: {type: String},//密码
  //id:Schema.Types.ObjectId,//主键
});

exports.UserAccount = db.model('UserAccount', UserAccountSchema);