const express = require("express");
const PORT = process.env.PORT || 4000;

//Initialize the express app
const app = express();

//Global middleware
app.use((req, res, next) => {
    
  console.log("Global Middleware");
  next();
});

//Routes
app.get("/", (req, res) => res.send("Hello from the root url"));

///Listern to port
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
