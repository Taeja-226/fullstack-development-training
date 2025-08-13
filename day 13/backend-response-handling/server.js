// import express package
import express from 'express';

// create app variable
const app = express();

// define port number
const port = 3000;

// define request parsing
app.use(express.json())


// API section start
app.get('/test',(req,res)=>{
    res.send("API is up.")

})
app.get('/read-user',(req,res)=>{
    // we fetch user from database

    // let user = null
    let user={
        "name" : "Pooja",
         "age" : 18
    }
    if (user===null)
          res.status(404).send("Data not found")
    else
         res.status(200).json(user)
})

// API section end

// Start server
app.listen(port,()=>{
    console.log(`server started at port ${port}`)
})