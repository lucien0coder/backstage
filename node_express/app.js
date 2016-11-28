var express = require('express')
var mongodb = require('mongodb')

var app = express();
var server = new mongodb.Server('localhost',27017,{
	safe:true
})
var conn = new mongodb.Db('test',server,{
	safe:true
})

//get_info访问数据库请求
app.get('/get_info',function(req, res){

	var data = '';
	//输出数据库的数据
	conn.open(function(err,db){
		if(err) throw err;//连接数据库失败
		db.collection('col',{safe:true},function(err,col){
			if(err) throw err;//没有找到集合
			col.find().toArray(function(err,docs){
				if(err) throw err;//没有数据或者执行异常
				data = docs;

				console.log(data)
				res.send('Hello World' + '\n' + JSON.stringify(data))
				conn.close()
			})
		})
	})
})

//post 请求
app.post('/',function(req,res){
	console.log('recive post')
	res.send('Hello Post')
})

//post 请求
app.get('/',function(req,res){
	console.log('recive get')
	res.send('Hello Get')
})

app.get('/get_userName',function(req,res){

	console.log('recive getName')
	res.send('打印姓名....')

})



var server = app.listen(8081,function(){
	var host = server.address().address
	var port = server.address().port

	console.log("访问地址为：http://"+ host + port)
})