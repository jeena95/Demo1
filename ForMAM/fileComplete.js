/*var http=require('http');
var server=http.createServer(function(request,response){
console.log('request starting...');
//respond
response.write('Hi client!')
response.end();
});
server.listen(3000);
console.log('server running at http://172.29.122.110:3000/');*/

///Events
/*var events=require('events');
var eventEmitter=new events.EventEmitter();
eventEmitter.on('sayHi',function(){
    console.log('Hi....');
});
eventEmitter.on('sayHello',function(){
    console.log('Hello...');
});
console.log('before sayHi');
eventEmitter.emit('sayHi');
console.log("after sayHi");
console.log('bafore sayHello');
eventEmitter.emit('sayHello')
console.log('after sayHello');*/

/*var fs= require("fs");
var data='';
//create readable stream
var readerStream=fs.createReadStream('input1.txt');
//handle stream events-->data ,end and error
readerStream.on('data',function(chunk){
    data +=chunk;
});
readerStream.on('end',function(){
    console.log(data);
});
readerStream.on('error',function(err){
    console.log(err);
});*/

/*var fs=require("fs");
var data='Mean Mern Stack Training';
// create a writable stream
var writeStream=fs.createWriteStream('output.txt');
//write the data to stream
writeStream.write(data);
//Mark the end of the file
writeStream.end();
//Handle stream events-->finish and error
writeStream.on('finish',function(){
    console.log("write completed");
});
writeStream.on('error',function(err){
    console.log(err);   
})
console.log("program ended");*/

/*var fs=require("fs");
//create readable stream
var readerStream=fs.createReadStream('input.txt');
//create writable stream
var writerStream=fs.createWriteStream('output.txt');
//pipe the read write operations
//read input.txt and write data to output.txt
readerStream.pipe(writerStream);
console.log("program ended");*/


var http=require('http');
var server=http.createServer(function(request,response){
console.log('request starting...');
//respond
console.log(request.method);
if(request.url=="/hai")
{
response.write('Hi client!')
response.end();
}
if(request.url=="/int"){
    response.write(JSON.stringify({username:"jeena",age:16}));
    response.end();   
}
});
server.listen(3000);
console.log('server running at http://172.29.122.110:3000/');

/*var http=require("http");
var fs=require("fs");
var path=require("path");
http.createServer(function(req,res){
    console.log(`$(req.method) request for $(req.url)`);
   /* if(req.url.match('style.css')){
        var cssPath=path.join(__dirname,'public',req.url);
        var fileStream =fs.createReadStream(cssPath);
        fileStream.pipe(res);
    }else if(req.url.match("Penguins.jpg")){
        var imgPath=path.join(__dirname,req.url);
        var imgStream =fs.createReadStream(imgPath);
        imgStream.pipe(res);   
    }else{
        res.end("404 file not found");
    }
}).listen(3000);
console.log("File server running on port no 3000")*/

/*var http=require("http");
var inv=require("./inventorybl");
http.createServer(function(req,res){
    if(req.url==="/"){
        res.end(JSON.stringify(data));
    } else if(req.url==="/instock") {
      inv.listInStock(res);
    } else if(req.url==="/onorder"){
       inv.listOnBackOrder(res);
    }else {
        res.end("404 error...Data not found");
    }
    
}).listen(3000);
console.log("server listening on port 3000");*/

/*var http=require("http");
var inv=require("./tempbl");
var a=40; 
http.createServer(function(req,res){
 
    if(req.url==="/celsiustofahrenheit") {
     var b= inv.getCelsius(a);
     res.write(b.toString());
     res.end();
    } else if(req.url==="/fahrenheittocelsius"){
      var c= inv.getFahrenheit(a);
      res.write(c.toString());
      res.end();
    }else {
        res.end("404 error...Data not found");
    }
    
}).listen(3000);
console.log("server listening on port 3000");*/

/*var http=require("http");
var inv=require("./rectanglebl");
http.createServer(function(req,res)
{
   if(req.url=="/rectangle/area") 
   {
   var result = inv.area(10,20);
    res.write("area is "+result);
    res.end();
   
   }
   else if(req.url=="/rectangle/perimeter")
   {
    var result=inv.perimeter(10,20);
    res.write("perimeter is "+result);
    res.end();
   }
   
   else
   {
       res.end("404 error...data not found");

   }
}).listen(3000);
console.log("server listening to this port 3000");*/

/*var http=require("http");
var inv=require("./crect");
//var r=require("Rectangle");
//var r1=new Rectangle(10.20);
http.createServer(function(req,res)
{
   if(req.url=="/rectangle/area") 
   {
    new Rectangle(10.20);
    var result = inv.calculateArea();
    res.write("area is "+result.toString());
    res.end();
   
   }

   else if(req.url=="/rectangle/perimeter")
   {
    new Rectangle(10.20);
    var result=inv.perimeter();
    res.write("perimeter is "+result);
    res.end();
   }
   
   else
   {
       res.end("404 error...data not found");

   }
}).listen(3000);
console.log("server listening to this port 3000");*/
