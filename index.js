// const express = require ('express')
// const app = express(); 
// const path = require('path')
// const fs = require('fs')

const { join } = require('path');

// app.set('view engine', 'ejs')

// app.use(express.json())
// app.use(express.urlencoded({extended: true}))
// // app.use(express.static(path.join(__dirname,"public")))

// app.get('/',(req,res)=>{
//   fs.readdir(`./files`, (err,files)=>{
//     res.render("index",{files: files});
//   })
//   res.render("index")
// })

// const port = 3000;
// app.listen(port,(req,res)=>{
//   console.log("server connected successfully:")
// })

// const fs = require ('fs')
// const filename = "hello.txt"
// const content = "hi everyone"
// fs.writeFile(filename, content,(err)=>{
// if(err){
//   console.log(`error writting ${filename}`)
// }else{
//   console.log(`successfully created ${filename}`)
// }
// })
// fs.AppendFile same as write file.
// const fs = require ('fs')
// fs.rename("hello.txt","hi.txt", (err)=>{
//   if(err) console.log(err)
//     else console.log("done")
// })

// const fs = require('fs')
// fs.copyFile("hi.txt","javascripts",(err)=>{
//   if(err) console.log(err)
//     else console.log("done")
// })

// const fs = require('fs')
// fs.unlink("./javascripts", (err)=>{
//   if(err) console.log(err)
//     else("done")
// })