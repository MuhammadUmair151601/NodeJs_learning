const express = require ('express')
const app = express();
const path = require('path')

// For taking forms
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// we will go to public folder for finding static folders like stylesheets images and js files:
app.use(express.static(path.join(__dirname, 'public')))

// setup ejs for view engine as middleware:
app.set('view engine', 'ejs');


app.get('/', (req,res)=>{
  res.render("index")
})

PORT = 3000;
app.listen(PORT, (req,res)=>{
  console.log("server connected:")
})