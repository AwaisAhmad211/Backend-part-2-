const fs = require('fs') ;
const http = require('http')

const server = http.createServer((req,res)=>{
   res.send("Ok")
})
server.listen(8080);

// writeFile
// fs.writeFile("hey.txt","tum kaisy ho",(err)=>{
//     if(err) {console.error(err)}
//     else{console.log("Done")}
// })

// appendFile
// fs.appendFile("hey.txt"," hn mai thik ho",(err)=>{
//     if(err) console.error(err) ;
//     else console.log("Done")
// })

// rename
// fs.rename("hey.txt","hello.txt",(err)=>{
//     if(err) console.error(err) ;
//     else console.log("Done");
// })

// unlink
// fs.unlink("./Hello",(err)=>{
//     if(err) console.error(err.message) ;
//     else console.log("Done");
// })

// rmdir
// fs.rmdir("./Hello",{recursive : true},(err)=>{
//     if(err) console.error(err.message) ;
//     else console.log("Done");
// })

// rm
// fs.rm("./Hello",(err)=>{
//     if(err) console.error(err) ;
//     else console.log("Done");
// })