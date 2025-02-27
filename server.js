const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const path=require('path')

// dotenv configuration
dotenv.config()

//rest object
const app=express()

//middlewares
app.use(cors())
app.use(express.json())

//static files access
app.use(express.static(path.join(__dirname,'./client/build')))

//routes
app.use("/api/v1/portfolio",require("./routes/portfolioRoute"));

app.get('*',function(req,res){
res.sendFile(path.join(__dirname,'./client/build/index.html'))
});

//port
const PORT=process.env.PORT || 8080

//listen
app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})

 