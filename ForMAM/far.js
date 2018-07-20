var http=require("http");
var fs=require("fs");
var qs=require("querystring");
var MongoClient=require('mongodb').MongoClient;
//var fh=require("./fto.js");
    http.createServer(function(req,res){
    console.log(req.method)
     if(req.method=="GET") {
       res.end(` <!DOCTYPE html>
        <html>
        <head>
        <title>Fill out this form</title>
        </head>
        <body>
            <h1>fill out this form</h1>
            <form action="/" method="post">
                <label>Fahren</label>
                <input type="text" id="fahren" name="fahren"
                placeholder="Fahrenheit temperature" required/>        
                
                <input type="text" id="celcius" name="celcius"
                placeholder="celcious temperature" required readonly/>
                <button>Send</button>
            </form>
        </body>
        </html>
        `);
    } 
      else if(req.method=="POST"){
        
    
        var body="";
        req.on("data",function(chunk){
            body+=chunk;
            console.log("data");
        });
        req.on("end",function()
        {
            var obj=qs.parse(body);
            console.log(obj.fahren);
             var fahren=parseFloat(obj.fahren);
             var cel=(5/9)*(fahren-32.0);
             // obj. celcius=$cel.toString()
            //res.end("Fahren="+ fahren.toString() +
           // "celsius="+cel.toString());

         res.end(`<!DOCTYPE html>
                 <html>
                 <head>
                 <title>Fill out this form</title>
                 </head>
                 <body>
                     <h1>fill out this form</h1>
                     <form action="/" method="post">
                         <label>Fahren</label>
                         <input type="text" id="fahren" name="fahren"
                         placeholder="${fahren}"required/>        
                         <label>celecious</label>
                         <input type="text" id="celcius" name="celcius"
           
                          value="${cel}" required readonly/>
                         <button>Send</button>
                     </form>
                 </body>
                 </html>
                 `);
                    MongoClient.connect('mongodb://127.0.0.1:27017/test',function(err,db){
                    if(err){
                   
                        console.log(err);
                       }
                    else{
                   
                         db.collection('rect').insert({"Fahren":fahren
                          ,"Celsius":cel},function(err, result){
                         if(err) throw err;
                     
                       })
                    }
                        
                 db.close();
                });
              
          }); 
          }

        }).listen(3000);

        console.log("Form server listening on port 3000");
