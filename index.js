const express = require("express");

const ejs = require("ejs");

const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get('/my_resume', function(req, res) {
  res.render('../views/my_resume.ejs');
});

app.get('/my_fun_facts', function(req, res) {
  res.render('../views/my_fun_facts.ejs');
});

app.get('/my_blog', function(req, res) {
  res.render('../views/my_blog.ejs');
});

app.get('/my_trivia', function(req, res) {
  res.render('../views/my_trivia.ejs');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));