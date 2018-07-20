var http=require('http');
http.createServer(function(req,res){
    console.log("wait");
    if(req.method=="GET") {
        res.end("hello world")
    }
    }).listen(3000);
    console.log("lisrening");