const http=require("http");
const server=http.createServer((req, res)=>{
    //res.statusCode=200;
    //res.setHeader("content-type","imgae/jpg");
    //res.write("This is Mohammed Gamil ");
    
    //res.statusCode
    //res.write("This is ................++++\n ");
    //res.write("This is ................++++ ");
    //res.end(" You have completed")
    //res.write(req.url);
    if(req.url=='/home'){
        res.statusCode=200;
        res.write('you are welome to home')}
    else if(req.url=="/contact"){
        res.statusCode=200;
        res.write('you are contact')}
    else if(req.url=="/about"){
        res.statusCode=200;
        res.write("you are welcome to about")}
    else{res.statusCode=404;
         res.write("NNNNNOT fooooound")}
    res.end()

})
server.listen(5000,()=>{console.log("server running..")})