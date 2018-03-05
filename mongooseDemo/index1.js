let mongoose = require('mongoose');

let url = 'mongodb://localhost:27017/demo';

//连接数据库
mongoose.connect(url, function (err) {
  if (err) {
    console.log('连接数据库失败');
  } else {
    console.log('连接数据库成功');
  }
});

//断开数据库连接
/*setTimeout(function () {
 mongoose.disconnect(function () {
 console.log('断开连接');
 })
 },3000);*/

//Schema对象
/*let Schema = mongoose.Schema;

let mySchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments:[{body:String,date:Date}],
  date:{type:Date,default:Date.now},
  hidden:Boolean,
  meta:{
    votes:Number,
    favs:Number
  }
});*/
/*声明字段类型有两种方法：
  1.首字母大写的字段类型
  2.引号包含的小写字段类型
*/

//实例化文档对象document

/*let MyModel = mongoose.model('MyModel',mySchema);

let doc1 = new MyModel({title:'666ooo666ooo'});

//console.log(doc1.title);

doc1.save(function (err,doc) {
  console.log(doc);
});*/


//自定义方法
//在Schema对象的methods属性实例自定义扩展方法

/*let Schema = new mongoose.Schema({name:String,size:String});

Schema.methods.findSimilarSize = function (cb) {
  return this.model('MyModel').find({size:this.size},cb)
};
let MyModel = mongoose.model('MyModel',Schema);
let doc1 = new MyModel({name:'doc1',size:'small'});
let doc2 = new MyModel({name:'doc2',size:'small'});
let doc3 = new MyModel({name:'doc3',size:'big'});
doc1.save();
doc2.save();
doc3.save();
setTimeout(function () {
  doc1.findSimilarSize(function (err,docs) {
    docs.forEach(function (item,index,arr) {
      console.log(item.name);
    })
  })
});*/

//通过Schema对象的statics属性给Model添加静态方法

/*let Schema = new mongoose.Schema({name:String,size:String});
Schema.statics.findByName = function (name,cb) {
  return this.find({name:new RegExp(name,'i')},cb)
};
let MyModel = mongoose.model('MyModel',Schema);
let doc1 = new MyModel({name:'doc1',size:'small'});
let doc2 = new MyModel({name:'doc2',size:'small'});
let doc3 = new MyModel({name:'doc3',size:'big'});
doc1.save();
doc2.save();
doc3.save();
setTimeout(function () {
  MyModel.findByName('doc1',function (err,docs) {
    console.log(docs);
  })
});*/

//通过schema对象的query属性，给model添加查询方法

/*
let Schema = new mongoose.Schema({size:String,name:String});
Schema.query.byName = function (name) {
  return this.find({name:new RegExp(name)})
};
let temp = mongoose.model('temp',Schema);
let doc1 = new temp({name:'huo1',size:'small'});
let doc2 = new temp({name:'huo2',size:'small'});
let doc3 = new temp({name:'huo2',size:'big'});
doc1.save();
doc2.save();
doc3.save();

temp.find().byName('huo').exec(function (err,docs) {
  console.log(docs);
});*/


//文档新增
//1.模型的save()方法
//2.模型的create()方法
//3.模型的insertMany()方法

/*let Schema = new mongoose.Schema({age:Number,name:String});
let temp = mongoose.model('temp',Schema);
new temp({age:10,name:'save'}).save(function (err,doc) {
  console.log(doc);
});*/

/*let Schema = new mongoose.Schema({age:Number,name:String});
let temp = mongoose.model('temp',Schema);
temp.create({name:'xiaowang'},{name:'xiaoli'},function (err,doc1,doc2) {
  console.log(doc1);
  console.log(doc2);
});*/

/*let Schema = new mongoose.Schema({age:Number,name:String});
let temp = mongoose.model('temp',Schema);
temp.insertMany([{name:'a'},{name:'b'}],function (err,docs) {
  console.log(docs);
});*/

//文档查询
//1.find()
//2.findById()
//3.findOne()

/*let Schema = new mongoose.Schema({age:Number,name:String});
let temp = mongoose.model('temp',Schema);*/

//find
//1).查询全部
/*temp.find(function (err,docs) {
  console.log(docs);
});*/

//2).查询name中包含a的
/*temp.find({name:/a/},function (err,docs) {
  console.log(docs);
});*/

//3).name中包含a，且age大于10的
/*temp.find({name:/a/,age:{$gte:10}},function (err,docs) {
  console.log(docs);
});*/

//4).name中包含a,只输出name字段(注：_id段默认输出)
/*temp.find({name:/a/},'name',function (err,docs) {
  console.log(docs);
});*/

//5).不输出_id字段
/*temp.find({name:/a/},{name:1,_id:0},function (err,docs) {
  console.log(docs);
});*/

//6).跳过前两条数据(注：如果前面参数无值，用null代替)
/*temp.find(null,null,{skip:2},function (err,docs) {
  console.log(docs);
});*/

//findById
//1).显示第0个元素的所有字段
/*let aIDArr = [];
temp.find(function (err,docs) {
  docs.forEach(function (item,index,arr) {
    aIDArr.push(item._id);
  });
  temp.findById(aIDArr[0],function (err,doc) {
    console.log(doc);
  })
});*/

//2).第二种写法
/*let aIDArr = [];
temp.find(function (err,docs) {
  docs.forEach(function (item,index,arr) {
    aIDArr.push(item._id)
  });
  temp.findById(aIDArr[0]).exec(function (err,doc) {
    console.log(doc);
  })
});*/

//3).只输出name字段
/*let aIDArr = [];
temp.find(function (err,docs) {
  docs.forEach(function (item,index,arr) {
    aIDArr.push(item._id)
  });
  /!*temp.findById(aIDArr[0],{name:1,_id:0},function (err,doc) {
    console.log(doc);
  })*!/
  temp.findById(aIDArr[0],{name:1,_id:0}).exec(function (err,doc) {
    console.log(doc);
  })
});*/

//4).输出最少字段
/*let aIDArr = [];
temp.find(function (err,docs) {
  docs.forEach(function (item,index,arr) {
    aIDArr.push(item._id)
  });
  /!*temp.findById(aIDArr[0],{lean:true},function (err,doc) {
    console.log(doc);
  })*!/
  temp.findById(aIDArr[0],{lean:true}).exec(function (err,doc) {
    console.log(doc);
  })
});*/

//findOne()
//1).找出age>9的第一个文档
/*temp.findOne({age:{$gt:9}},function (err,doc) {
  console.log(doc);
});*/

/*temp.findOne({age:{$gt:9}},'name').exec(function (err,doc) {
  console.log(doc);
});*/

//$where:更复杂的查询，可以使用任意的JS作为查询的一部分，包含JS表达式的字符串或者JS函数
/*let Schema = new mongoose.Schema({name:String,age:Number,x:Number,y:Number});
let temp = mongoose.model('temp',Schema);*/

/*temp.create(
  {name:'zhangsan',age:10,x:1,y:1},
  {name:'lisi',age:12,x:1,y:2},
  {name:'wangwu',age:13,x:2,y:1},
  {name:'zhaoliu',age:30,x:2,y:2},
  function (err,docs) {
    console.log('添加',docs);
  });*/

//使用字符串
/*temp.find({$where:"this.x === this.y"},function (err,docs) {
  console.log(docs);
});*/

/*temp.find({$where:"obj.x===obj.y"},function (err,docs) {
  console.log(docs);
});*/

//使用函数
/*temp.find({$where:function () {
  return obj.x!==obj.y;
}},function (err,docs) {
  console.log(docs);
});*/

/*
temp.find({$where:function () {
  return this.x!==this.y;
}},function (err,docs) {
  console.log(docs);
});*/


//文档更新
//1.update()
//2.updateMany()
//3.find()+save()
//4.updateOne()
//5.findOne()+save()
//6.findByIdAndUpdate()
//7.findOneAndUpdate()


/*let Schema = new mongoose.Schema({name:String,age:Number,x:Number,y:Number});
let temp = mongoose.model('temp',Schema);*/

//返回值raw{ok:1(成功),nModified:1(修改的数据条数),n:1(满足条件的数据条数)}

//1.
//1).只修改第一个
/*
temp.update({age:{$gte:13}},{age:40},function (err,raw) {
  console.log(raw);
});
*/

//2).修改多个
/*temp.update({name:/u/},{age:32},{multi:true},function (err,raw) {
  console.log(raw);
});*/

//3).没有满足条件的
/*temp.update({age:100},{name:'hundred'},function (err,raw) {
  console.log(raw);
});*/

//4).如果没有满足条件的，mongo将会综合第一第二个参数向集合插入一个新的文档
/*temp.update({age:100},{name:'woshi250'},{upsert:true},function (err,raw) {
  console.log(raw);
});*/

//5).update()方法回掉函数不能被省略，可以简写成
/*
temp.update({name:/233/},{age:777},{upsert:true}).exec();
*/

//2.updateMany()默认更新多个文档，设置{multi:false}也无效
/*
temp.updateMany({age:{$gte:30}},{age:66},function (err,raw) {
  console.log(raw);
});*/

//3.find()+save()比较复杂的更新
/*temp.find({age:{$lt:20}},function (err,docs) {
  console.log(docs);
  docs.forEach(function (item,index,arr) {
    item.name += '30';
    item.save()
  });
  console.log('###',docs);
});*/

//4.updateOne()默认只更新找到的第一条数据，设置{multi:true}也无效
/*temp.updateOne({name:/u/},{age:88},function (err,raw) {
  console.log(raw);
});*/

//5.findOne()+save()复杂更新第一项

//6.findOneAndUpdate(),回调函数参数为->err,doc

//7.findByIdAndUpdate(),回调函数参数为->err,doc

//文档删除
//1.remove()
//2.findOneAndRemove()
//3.findByIdOneAndRemove()

/*let Schema = new mongoose.Schema({name:String,age:Number});
let temp = mongoose.model('temp',Schema);*/

//1.1).model的remove,回调不能省略
//temp.remove({name:/30/},function (err) {});
//temp.remove({name:/250/}).exec();

//2).文档的remove
/*
temp.find(null,function (err,docs) {
  docs.forEach(function (item,index,arr) {
    item.remove(function (err,doc) {
      console.log(doc);
    })
  })
});*/

//2.findOneAndRemove()只删除符合条件的第一条数据
/*temp.create(
  {name:'huochai',age:'27'},
  {name:'wang',age:'18'},
  {name:'huo',age:'30'},
  {name:'li',age:'12'},
  function (err,docs) {
    console.log(docs);
  });*/
/*temp.findOneAndRemove({age:{$lt:20}},function (err,doc) {
  console.log(doc);
});*/
//temp.findOneAndRemove({age:{$gte:20}}).exec();

//3.findByIdAndRemove(),根据_id字段删除函数
/*
let aIDArr = [];
temp.find(null,function (err,docs) {
  docs.forEach(function (item,index,arr) {
    aIDArr.push(item._id);
  });
  temp.findByIdAndRemove(aIDArr[0],function (err,doc) {
    console.log(doc);
  })
});*/


//前后钩子
/*即：pre()和post()方法，又称中间件，是在执行某些操作时可以执行的函数。中间件在schema上指定，类似于静态方法或实例方法*/

//let Schema = new mongoose.Schema({name:String,age:Number});

//1.在执行指定方法(find)之前，执行pre()方法
/*Schema.pre('find',function (next) {
  console.log('pre方法1');
  next()
});
Schema.pre('find',function (next) {
  console.log('pre方法2');
  next()
});
let temp = mongoose.model('temp',Schema);
temp.find(function (err,docs) {
  console.log(docs);
});*/

//2.post()不是在执行某些操作后再执行的方法，而是执行某些操作前最后执行的方法，post方法里不能使用next()
/*Schema.post('find',function (docs) {
  console.log('post方法1');
});
Schema.post('find',function (docs) {
  console.log('post方法2',docs);
});
let temp = mongoose.model('temp',Schema);
temp.find(null,function (err,docs) {
  console.log(docs);
});*/

//查询后处理
//1.sort  排序
//2.skip  跳过
//3.limit  限制
//4.select  显示字段
//5.exect  执行
//6.count  计数
//7.distinct  去重

/*let Schema = new mongoose.Schema({age:Number,name:String,x:Number,y:Number});
let temp = mongoose.model('temp',Schema);*/

/*temp.create(
  {name: 'huochai',age: 27,x: 1,y: 2},
  {name: 'wang',age: 18,x: 1,y: 1},
  {name: 'huo', age: 30, x: 2, y: 1},
  {name: 'li', age: 20, x: 2, y: 2},
  function (err,docs) {
    console.log(docs);
  });*/

//age从小到大排序
/*temp.find().sort('age').exec(function (err,docs) {
  console.log(docs);
});*/

//x从小到大，age从大到小
/*temp.find().sort("x -age").exec(function (err,docs) {
  console.log(docs);
});*/

//跳过第一个，显示其他
/*temp.find().skip(1).exec(function (err,docs) {
  console.log(docs);
});*/

//显示两个
/*temp.find().limit(2).exec(function (err,docs) {
  console.log(docs);
});*/

//显示name/age字段，不显示_id字段
/*temp.find().select("name age -_id").exec(function (err,docs) {
  console.log(docs);
});*/

/*temp.find().select({name:1,age:1,_id:0}).exec(function (err,docs) {
  console.log(docs);
});*/

//结合以上方法，跳过第1个后，只显示两个数据，按照age由大到小排序，且不显示_id字段
//但是结果显示的应该是先执行sort排序
/*temp.find().skip(1).limit(2).sort("-age").select("-_id").exec(function (err,docs) {
  console.log(docs);
});*/

//显示集合中的文档数量
/*
temp.find().count(function (err,count) {
  console.log(count);
});
*/

//返回集合中的x值
/*temp.find().distinct('x',function (err,distinct) {
  console.log(distinct);
});*/

//文档验证
//1.缺少字段的文档可以保存成功
//2.包含未设置字段的文档也可以保存成功，未设置的字段不被保存
//3.包含字段类型与设置不同的字段的文档可以保存成功，不同字段类型的字段被保存为设置的字段类型

/*let Schema = new mongoose.Schema({name:String,age:Number,x:Number,y:Number});
let temp = mongoose.model('temp',Schema);*/

/*new temp({age:10}).save(function (err,doc) {
  console.log(doc);
});*/

/*new temp({age:100,abc:'abc'}).save(function (err,doc) {
  console.log(doc);
});*/

/*new temp({age:true,name:10}).save(function (err,doc) {
  console.log(doc);
});*/

//文档验证再SchemaType中定义
//1.required，设置必填字段
//2.default，默认值
//3.min/max，取值范围(最大最小值)
//4.match，内容校验
//5.enum，取值范围(列举可取值)
//6.validate，函数自定义认证，参数代表当前字段，通过返回true

//1.
/*let Schema = new mongoose.Schema({age:{type:Number,required:true},name:String,x:Number,y:Number});
let temp = mongoose.model('temp',Schema);
new temp({name:'abc'}).save(function (err,doc) {
  console.log(err,doc);
});*/

//2.
/*
let Schema = new mongoose.Schema({age:{type:Number,default:18},name:String,x:Number,y:Number});
let temp = mongoose.model('temp',Schema);
new temp({name:'abc'}).save(function (err,doc) {
  console.log(doc);
});*/

//3.
/*
let Schema = new mongoose.Schema({age:{type:Number,min:18,max:28},name:String,x:Number,y:Number});
let temp = mongoose.model('temp',Schema);
new temp({age:30}).save(function (err,doc) {
  console.log(err,doc);
});*/

//4.
/*
let Schema = new mongoose.Schema({age:Number,name:{type:String,match:/a/},x:Number,y:Number});
let temp = mongoose.model('temp',Schema);
new temp({name:'bbb'}).save(function (err,doc) {
  console.log(err,doc);
});*/

//5.
/*let Schema = new mongoose.Schema({age:Number,name:{type:String,enum:['a','b','c']},x:Number,y:Number});
let temp = mongoose.model('temp',Schema);
new temp({name:'bbb'}).save(function (err,doc) {
  console.log(err,doc);
});*/

//6.
/*let validateLength = function (arg) {
  if(arg.length>4){
    return true
  }
  return false
};

let Schema = new mongoose.Schema({age:Number,name:{type:String,validate:validateLength},x:Number,y:Number});
let temp = mongoose.model('temp',Schema);
new temp({name:'abc'}).save(function (err,doc) {
  console.log(err,doc);
});*/

