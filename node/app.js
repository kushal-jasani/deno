const express = require("express");

const todoroutes = require("./routes/todos");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.json());
app.use((req, res, next) => {
  console.log("some middleware");
  next();
});
app.use(todoroutes);
app.listen(3000);
