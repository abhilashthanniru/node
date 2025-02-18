const http=require("http");
const server=http.createServer((req,res)=>{
    res.write("hello world");
    res.end("respnse provided")
})
server.listen(3002,()=>{
    console.log("server is running")
})