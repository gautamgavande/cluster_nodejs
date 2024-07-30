const cluster=require('cluster')
const os = require('os')
const express = require('express')
let app=express()
app.use(express.json())

const numCPU=os.cpus().length

console.log(numCPU)

if(cluster.isMaster){
    for(let i=0;i<numCPU;i++){
        cluster.fork()
    }
}
else{
    app.use("/get",(req,res)=>{
        res.send(`Hello,world! ${process.pid}`)
    })
    
    app.listen(4000,()=>{
        console.log(`Server is running on port 4000 ${process.pid}`)
    })
}