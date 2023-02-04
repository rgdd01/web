const express = require('express')
var path = require("path");
const app = express()
const port = 3000

//for styling of html-css pages
app.set('view engine' , 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,'./')));

//first page will open
app.get('/', (req, res) => {
 
  res.sendFile(path.join(__dirname,'./homepagelogin.html'));

})


app.all('/signup', (req, res) => {
 
  if(req.method == "GET")
  res.sendFile(path.join(__dirname,'./signup.html'));
  else if(req.method == "POST")
  //res.send("name: " + req.body.name + "  email: " + req.body.email + "  passowrd: " + req.body.password)
  res.sendFile(path.join(__dirname,'./login.html'));

})

app.all('/login', (req, res) => {
  if(req.method == "GET")
  res.sendFile(path.join(__dirname,'./login.html'));
  else if(req.method == "POST")
  //res.send("name: " + req.body.name + "  passowrd: " + req.body.password)
  res.sendFile(path.join(__dirname,'./homepage.html'));
  

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// if the page  not found 
app.use( (req , res) => {
  res.render("errorpage")

})