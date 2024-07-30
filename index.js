const express=require('express')

let app=express()
app.use(express.json())


app.use("/get",(req,res)=>{
    res.send(`Hello,world! ${process.pid}`)
})

// app.use("/getname",(req,res)=>{
//     res.send(`Hello,world! ${process.pid}`)
// })

app.listen(4000,()=>{
    console.log(`Server is running on port 4000 ${process.pid}`)
})