const express=require("express");
const app=express();


let port=3000;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req,res)=>{

//     console.log("request received from our side");
   
//    let code="<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
//     res.send(code);
// });
app.get("/",(req,res)=>{
    res.send("you contacted root path");
})
// app.get("/about",(req,res)=>{
//     res.send("you contacted about path");
// })
// app.get("/home",(req,res)=>{
//     res.send("you contacted home path");
// })
// app.get("/search",(req,res)=>{
//     res.send("you contacted search path");
// })
// app.get("*",(req,res)=>{
//     res.send("This path does not exist");
// })
app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    let htmlStr=`<h1>Welcome to the page of @${username}</h1>`;
    res.send(htmlStr);
})

app.get("/search",(req,res)=>{
    let {q}=req.query;
    res.send(`<h1>search results for query :${q}</h1>`);
})