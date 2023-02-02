const express = require('express')
var path = require("path");
const app = express()
const port = 3000

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,'./')));


app.all('/signup', (req, res) => {
 
  if(req.method == "GET")
  res.sendFile(path.join(__dirname,'./signup.html'));
  else if(req.method == "POST")
  res.send("name: " + req.body.name + "  email: " + req.body.email + "  passowrd: " + req.body.password)

})

app.all('/login', (req, res) => {
 
  if(req.method == "GET")
  res.sendFile(path.join(__dirname,'./login.html'));
  else if(req.method == "POST")
  res.send("name: " + req.body.name + "  passowrd: " + req.body.password)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})