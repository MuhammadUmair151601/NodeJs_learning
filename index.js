// const express = require('express');
// const app = express();

// const PORT = 3000;

// app.get('/', (req, res) => {
//   res.send('<h1>Hello everyone</h1>');
// });

// app.listen(PORT, () => {
//   console.log(`Port ${PORT} connected successfully`);
// });

// ****************res.send shows arrays,objects,json data and html etc:

// const express = require('express');
// const app = express();

// const PORT = 3001;
// app.listen(PORT,()=>{
//   console.log(`port ${PORT} connected successfully.`)
// })

// app.get('/', (req,res)=>{
//   res.send("<h1>HELLO everyone</h1>")
// })

// ********************res.JSON returns the jSON data:
// const express = require('express');
// const app = express();  
// const PORT = 3002
// app.listen(PORT,()=>{
//   console.log(`port ${PORT} is connected to server successfully:`)
// })

// app.get('/',(req,res)=>{
//   res.json({name:"ali",age:23})
// })

// it will also return the array of objects;
// const express = require('express');
// const app = express();  
// const PORT = 3002
// app.listen(PORT,()=>{
//   console.log(`port ${PORT} is connected to server successfully:`)
// })

// app.get('/',(req,res)=>{
//   const users = [{name:"ali",age:23},
//                 {name:"ahmed",age:23}
//   ]
//   res.json(users)
// })


