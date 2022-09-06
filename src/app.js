const express = require('express');
const { indexRouter } = require('./routes');
const dbConnect = require('./service/db');
const path = require("path");
const bodyParser = require('body-parser');
const Blog = require("../src/model/blog")
const deleteBlog = require("./controllers/blog/delete");
const app = express();

const PORT = process.env.PORT || 8000;

const staticPath = path.join(__dirname,"../public");


// app.use(express.static(staticPath));
app.set("view engine","ejs");
app.use(express.json());
app.use(bodyParser.urlencoded())

app.use("/api/v1",indexRouter);

app.get("/",(req,res)=>{
    res.send({
        data:"Sever Runing Smoothly"
    })
})

app.get("/createblog",(req,res)=>{
    res.render("blogcreate.ejs");
})

app.get( "/edit/:id" ,async(req,res)=>{

    const { id } = req.params;
    const blog= await Blog.findById(id);
    console.log(blog)
    res.render("editblog.ejs",{ blog });
  
  });

app.get( "/delete/:id", deleteBlog);  

app.get("/blogs", async(req,res)=>{

    const blogs = await Blog.find();
    res.render("allblogs.ejs",{blogs:blogs});
})

app.post("/createblogpost",(req,res)=>{
    console.log('HIT')
    console.log(req.body);
})


// app.get("/",(req,res)=>{
//     res.render("index");
// })

app.all("*",(req,res)=>{
    res.status(404).send({
        data:"Route not found"
    })
})

dbConnect();



app.listen(PORT,()=>console.log(`SERVERS UP AND RUNNING: ${PORT}`))