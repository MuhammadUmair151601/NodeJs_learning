const express = require ('express')
const app = express();

// For taking forms
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// setup ejs for view engine as middleware:
app.set('view engine', 'ejs');


app.get('/', (req,res)=>{
  res.render("index")
})

PORT = 3000;
app.listen(PORT, (req,res)=>{
  console.log("server connected:")
})