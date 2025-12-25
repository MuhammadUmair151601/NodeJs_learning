// Dynamic routing in nodeJS:

const express = require ('express');
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')

app.get('/about' ,(req,res)=>{
  res.send("chal gaya")
})
app.get('/username/:id', (req,res)=>{
  res.send(`welcome to roll number ${req.params.id} in new batch:`)
})

port = 3000;
app.listen(port, (req,res)=>{
  console.log("server connected to port 3000:")
})
