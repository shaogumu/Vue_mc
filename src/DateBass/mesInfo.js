 
import db from "./nedb";
export var mesInfo = db.Createdb('./DateBass/mesInfoData');

//新增数据
export var AddData = async function (doc) {
  let res = mesInfo.insert(doc);
  location.reload();
  return res;
};

//删除数据(根据ID索引删除)
export var DelData =  function (ID) {
  let res = mesInfo.remove({ _id: ID }, function () {
  });
  return res;
};

//根据FType索引获取记录,仅展示四条数据
export var GetList =  function (ftype) {
  let res = mesInfo.sort({TrnDate:-1}).limit(0,4).find({ FType: ftype },function(){
   
  });
  res.then(function(data){
    return data 
  })
};

//根据FType索引获取所有记录
export var GetAllList= function(ftype){
  let res = mesInfo.sort({TrnDate:-1}).find({FType:ftype},function(){

  })
  res.then(function(data ){
    return data 
  }) 
}
//查看过后 根据MID修改IFRead属性
export var UpIFRead= function (_id){

  mesInfo.update({ _id: _id }, { $push: { IfRead: false } }, {}, function () {
    //向IfRead字段追加false
  });
  mesInfo.update({ _id: _id }, { $pop: { IfRead: -1 } }, {}, function () {
    //向IfRead字段删除第一个字段
  }); 
  
}



