const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {usermodel}=require("./models/user")

mongoose.connect("mongodb+srv://snehatk:6282011259@cluster0.jd3vcot.mongodb.net/userdb?retryWrites=true&w=majority&appName=Cluster0")
const app=express()
app.use(cors())
app.use(express.json())

app.post("/add",(req,res)=>{
    let input=req.body
    let user =new usermodel(input)
    user.save()
    console.log(user)
    res.json({"status":"success"})
})
app.get("/view",(req,res)=>{
    usermodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})




app.listen(8080,()=>{
    console.log("SERVER STARTED")
 })
        
