const express = require('express');


const app = express();

app.get("/", function(req, res){
  res.send("You made it!");
});

app.listen(3000, function(){
  console.log("App running on localhost:3000")
});
