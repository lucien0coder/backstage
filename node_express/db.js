var db = require('mongodb')

var server = new db.Server('localhost',27017,{
	auto_reconnet:true
});

//test  db_name   声明数据库链接
var conn = new db.Db('test',server,{
	safe:true
})

// conn.open(function(err,db){
// 	if(err) throw err;
// 	db.collection('col',{
// 		safe:true
// 	},function(err,collection){
// 		if(err) throw err;
// 		collection.find().toArray(function(e,docs){
// 			if(e) throw e;
// 			console.log(docs);
// 		});
// 	});
// })

//连接DB
conn.open(function(err,db){
	if(err) throw err;
	//集合名称、safe:true、回调方法
	db.createCollection('col',{safe:true},function(err,collection){
		if(err) throw err;
		//add doc
		// var new_doc = {
		// 	name:'Fixed',
		// 	age:'28',
		// 	sex:'female'
		// }
		// collection.insert(new_doc,{safe:true}, function(err,res){
		// 	if(err) throw err;
		// 	console.log(res)
		// });

		//read doc
		collection.find().toArray(function(err,docs){
			if(err) throw err;
			console.log(docs)
		});

		//update doc 
		// collection.update({name:'Fixed'},{$set:{name:'kitty'}},{safe:true},function(err,res){
		// 	if(err) throw err;
		// 	console.log(res);
		// })

		//del doc
		// collection.remove({name:'Fixed'},{safe:true},function(err,res){
		// 	if(err) throw err;
		// 	console.log(res)
		// })
	});

});
