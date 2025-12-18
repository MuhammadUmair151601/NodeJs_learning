const express = require ("express")
const app = express();

app.get('/',(req,res)=>{
  res.send("this is home page:")
})

app.get('/profile', (req,res)=>{
  res.send("this is profile page:")
})

app.get('/about', (req,res)=>{
  res.send("this is about page:")
})

const PORT = 3000;
app.listen(PORT,(req,res)=>{
  console.log('server connected successfully:')
});