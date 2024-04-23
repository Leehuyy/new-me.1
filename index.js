const express = require('express')
 require("ejs");
const app = new express();

// Set template engine 
app.set("view engine", "ejs");

// đăng ký thư mục public
app.use (express.static('public'));
app.get ('/', (req, res) => {
   res.render("index");
});

app.get ('/about', (req, res) => {
    res.render("about");
 });

 app.get ('/contact', (req, res) => {
    res.render("contact");
 });

 app.get ('/post', (req, res) => {
    res.render("post");
 })

app.listen(5000, () => {
    console.log('App listening on http://localhost:5000');
});


// const mongoose = request("mongoose");
// const app = express();

// // set template engine 
// app.set("view engine", "ejs");
// // Conect MongooseDB
// try {
//     mongoose.connect("mongodb+srv://minhducjavascript:minhduc@cluster0.ob51qdy.mongodb.net/test");   
// } catch(Error){console.log("Cannot connect MongoDB", error);}
// const Cat = mongoose.model("Cat", { name: String });

// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));