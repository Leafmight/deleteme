const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello with role: ");
});

app.get("/api/user",(req,res)=>{
    const user = {name: "Jack Jackson"}
    res.json(user)
})

app.get("/api/user2", (req,res)=>)



app.listen(2345, () => console.log("Server started"));
