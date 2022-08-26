const express = require('express');
const { indexRouter } = require('./routes');
const dbConnect = require('./service/db');

const app = express()

const PORT = process.env.PORT || 8000 

app.use("/api/v1",indexRouter);

app.get("/",(req,res)=>{
    res.send({
        data:"Sever Runing Smoothly"
    })
})

app.all("*",(req,res)=>{
    res.status(404).send({
        data:"Route not found"
    })
})

dbConnect();



app.listen(PORT,()=>console.log(`SERVERS UP AND RUNNING: ${PORT}`))