// const express = require("express");
// const app = express();


// app.use((req, res, next) => {
//   console.log("request chala");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("request phir chala......");
//   next();
// });


// app.get("/", (req, res) => {
//   res.send("this is home page:");
// });

// app.get("/profile", (req, res) => {
//   res.send("this is profile page:");
// });

// app.get("/about", (req, res) => {
//   res.send("this is about page:");
// });

// app.use((req, res, next) => {
//   const error = new Error("Page not found");
//   error.status = 404;
//   next(error);
// });


// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.send(err.message || "Something went wrong");
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log("server connected successfully:");
// });
