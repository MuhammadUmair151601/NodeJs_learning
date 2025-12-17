const fs = require ('fs')
fs.writeFile("Hi.txt","Hello everyone how are you all", function(err){
  if(err)console.error(err)
    else console.log("done")
})
