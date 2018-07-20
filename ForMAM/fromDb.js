MongoClient=require('mongodb').MongoClient;
var findQuery={_id:1};
MongoClient.connect('mongodb://127.0.0.1:27017/test',function(err,db){
    if(err){
   
        console.log(err);
       }
    else{
    
        var resultSet=db.collection('rect').findOne(findQuery,function(err, result){
        console.log(result)
        var length=result.length;
        var breadth=result.breadth;
        var res=calcArea(length,breadth);
        var res1=calcPerimeter(length,breadth);
        console.log("Area :"+res);
        console.log("perimeter :"+res1);
       })
    }
        
    db.close();
});

function calcArea(l,b)
{
    var area=l*b;
    return area;
}
function calcPerimeter(l,b)
{
    var peri=2*(l+b);
    return peri;
}