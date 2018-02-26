let {UserAccount} = require('./mongoose');

//注册
exports.userLogon = function (account, password) {
  UserAccount.create({account: account, password: password}, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      //console.log(doc);
      return doc
    }
  })
};


//登陆
exports.userLogin = function (account, password) {
  let data;
  UserAccount.findOne({account: account, password: password}, (err, doc) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      //console.log(doc);
      return doc;
    }
  });
};