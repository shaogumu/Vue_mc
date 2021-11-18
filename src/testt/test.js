import  db from './nedb';
export var newdb= db.Createdb('testdb');

// export default {
//     data:{name:''},
//     methods:{
//         sdata :( async function (data) {
//             // await db.insert({number: 12});
//             // await db.insert({number: 11});
//             await newdb.insert({number: 16,sex:'男'});
//             let  res =  newdb.sort({number: -1}).limit(0, 1000).find();
//             return res
//         })()
//     }
// }

export var sdata=( async function () {
    // await db.insert({number: 12});
    // await db.insert({number: 11});
    //await newdb.insert({number: 16,sex:'男'});
    let  res =  newdb.sort({number: -1}).limit(0, 1000).find();
    return res
})();


export function udata(){
    // newdb.remove({}, { multi: true }, function (err, numRemoved) {
    // });
    newdb.insert({number: 16,sex:'男',name:"狄惠军123"});
    //newdb.insert({number: 16,sex:'男',name:"狄惠军123956"});
    // ( async function () {
    //     // await db.insert({number: 12});
    //     // await db.insert({number: 11});
    //     await newdb.insert({number: 16,sex:'男',name:"狄惠军123"});
    //     // newdb.remove({}, { multi: true }, function (err, numRemoved) {
    //     // });
    //     //newdb.update({"_id":"CFMZuLgQiVCgQ96b"},{$set:{"number":13}});
    // })();
}

// export var idata=( async function () {
//     // await db.insert({number: 12});
//     // await db.insert({number: 11});
//     await newdb.insert({number: 16,sex:'男'});
//     let  res =  newdb.sort({number: -1}).limit(0, 1000).find();
//     return res
// })();

// export var ddata=( async function () {
//     // await db.insert({number: 12});
//     // await db.insert({number: 11});
//     await newdb.insert({number: 16,sex:'男'});
//     let  res =  newdb.sort({number: -1}).limit(0, 1000).find();
//     return res
// })();

// export var udata=( async function () {
//     // await db.insert({number: 12});
//     // await db.insert({number: 11});
//     await newdb.insert({number: 16,sex:'男'});
//     let  res =  newdb.sort({number: -1}).limit(0, 1000).find();
//     return res
// })();


// export default{
//     selecttb :function(){
// 	    let data=  new newdb.sort({number: -1}).limit(0, 5).find();
//         console.log(data);
//     }
// }

//  const db = require('./nedb')('testdb');
// ( async function () {
// 	// await db.insert({number: 12});
// 	// await db.insert({number: 11});
// 	// await db.insert({number: 13});
//     let  res = await db.sort({number: -1}).limit(0, 5).find();
// 	console.log(res);
// })();





