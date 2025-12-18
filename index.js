const express = require ("express")
const app = express();

// run before the request is accepted and response is back on the way:
app.use((req,res,next)=>{
  console.log("request chala")
  next();
})

app.use((req,res,next)=>{
  console.log("request phir chala......")
  next();
})

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