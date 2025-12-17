// const fs = require ('fs')
// fs.writeFile("Hi.txt","Hello everyone how are you all", function(err){
//   if(err)console.error(err)
//     else console.log("done")
// })

// const fs = require('fs')
// fs.appendFile("file2","Hello all of you are selected", function(err){
//   if(err)console.error(err)
//     else console.log("done")
// })

// appendFile is same as writeFile:

// const fs = require('fs')
// fs.rename("Hi.txt","Hello.txt", (err)=>{
//   if(err) console.error(err)
//     else console.log("done")
// })

// const fs = require ('fs')
// fs.copyFile("file2","Hello.txt",(err)=>{
//   if(err) console.error(err)
//     else console.log("done")
// })

// this will copy all the text from file2 and paste it in the hello.txt

// now fs.remdir and fs.unlink are used for deletion but remdir for directory unlink for deleting file

// const fs = require('fs');

// fs.rm("C:/Users/PMLS/Desktop/NodeJS learning/directory", {
//   recursive: true,
//   force: true
// }, (err) => {
//   if (err) console.error(err);
//   else console.log("done");
// });

// const fs = require('fs')
// fs.unlink("./Hello.txt", (err)=>{
//   if(err) console.error(err)
//     else console.log("done")
// })