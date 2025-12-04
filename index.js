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

// *****************redirect method is used to redirect someone to other page:
// const express = require('express')
// const app = express()
// const PORT = 3002;
// app.listen(PORT,()=>{
//   console.log(`port ${PORT} successfully connected:`)
// });

// app.get('/about',(req,res)=>{
//   res.redirect('..') 
//   // 301 will redirect it to permanent redirection:
// })
// it will open google chrome page on about
// '..' will show us the page which was opened before:   


// **********************render method is used to render the whole template file existin in the project:
// const express = require('express');
// const app = express();
// const PORT = 3001;

// // set view engine:
// app.set('view engine', 'ejs')

// // create server:
// app.listen(PORT,()=>{
//   console.log(`port ${PORT} is successfully connected:`)
// });

// // render
// app.get('/user',(req,res)=>{
//   res.render('user')
// })

// ****************downloading files

// const express = require('express')
// const app = express();
// const PORT = 3001;

// app.set('./downloads/layers.png')

// app.listen(PORT,()=>{
//   console.log(`port ${PORT} successfully connected:`)
// })

// app.get('/downloads',(req,res)=>{
//   res.download('./downloads/layers.png')
// })