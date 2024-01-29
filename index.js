const express=require("express");
const app=express();

app.get('/User',(req,res)=>
{
    res.status(200).json({messgae:"it's working"})
})
app.listen(2000,()=>
{
    console.log(`Server is running on ${2000}`);
})