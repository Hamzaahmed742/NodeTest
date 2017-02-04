var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactList',['contactList']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactList',function(req,res){
	console.log("request received");
	// var person1 = {
	// 	name:'hamza',
	// 	email:'hamza@gmail.com',
	// 	number:"111-111-1111"
	// };
	// var person2 = {
	// 	name:'Ahmed',
	// 	email:'ahmed@gmail.com',
	// 	number:"123-111-1111"
	// };
	// var person3 = {
	// 	name:'Ali',
	// 	email:'ali@gmail.com',
	// 	number:"123-123-1111"
	// };
	// var contactList = [person1,person2,person3];
	// res.json(contactList);
	db.contactList.find(function(err,response){
		console.log(response);
		res.json(response);
	});
});
app.post('/contactList',function(req,res){
	console.log(req.body);
	db.contactList.insert(req.body,function(err,doc){
		res.json(doc);
	});
});
app.delete('/contactList/:id',function(req,res){
	console.log(req.params.id);
	db.contactList.remove({_id:mongojs.ObjectId(req.params.id)},function(err,doc){
		res.json(doc);
	});
});

app.listen(3000);
console.log('listening at port 3000');