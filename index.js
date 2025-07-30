const express = require("express")
const app = express()
const fs = require('fs')
const path = require("path")
const port = 3000;
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,"index.html"))
})

app.post("/send",(req,res)=>{
  const message = req.body.message;
  fs.appendFileSync("message.txt",message+'\n')
  res.send("Message saved!")
})

app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})
