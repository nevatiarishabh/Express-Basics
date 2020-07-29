var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, Welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var sounds ={
        cow: "Moo",
        pig: "Oink",
        horse: "Neigh",
        dog: "Woof Woof!",
        goldfish: "..."
    };
    var animal= req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The "+ animal + " says " + sound);
});

app.get("/repeat/:word/:number", function(req, res){
    var word = req.params.word;
    var num = Number(req.params.number);
    var result = "";
    for(var i=1; i<=num; i++)
    {
        result += i +": "+word + " ";
    }
    res.send(result);
});

app.get("*", function(req, res){
    res.send("Sorry, Page not found... What are you doing with your life");
})

app.listen(3000, function(){
    console.log("Server has started...");
});