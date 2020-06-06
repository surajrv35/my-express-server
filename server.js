const express = require("express");
const app = express();

app.get("/", function(request, response){
  //console.log(request);
  response.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at : surajrvadvadgi@gmail.com");
});

app.get("/about", function(req, res){
  res.send("My name is Suraj and i love coding");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Watching Movies</li><li>Cooking</li><li>Listening Songs</li></ul>");
});

app.listen(3000, function(){
  console.log("Server running on port 3000");
});
