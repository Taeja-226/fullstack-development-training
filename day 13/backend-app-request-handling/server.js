//  import express package
const express = require('express');
// initallize app with express function
const app = express();
// define port 
const port = 3000;
// parse the request body
app.use(express.json());
/*
API Section
 */

app.post('/insert-user',(request,response)=>
{
    console.log(`request recieved is ${JSON.stringify(request.body)}` )
    response.send("user inserted successfully")
})

// create an api below to send request body in response
app.post('/insert-user-1',(request,response)=>
{
     console.log(`request recieved is ${JSON.stringify(request.body)}` )
    response.json(`${JSON.stringify(request.body)}`)
})
app.post('/insert-user-2',(request,response)=>
{
     console.log(`request recieved is ${JSON.stringify(request.body)}` )
    response.json(request.body)
})
/*
path='/insert-person
http method = post
request={
           "personName":"ram",
           "address":{
           "homeAddress":"panipat",
           "officeAddress": "gurugram"}
           
           } */
app.post('/insert-person',(request,response)=>
{
     console.log(`request recieved is ${JSON.stringify(request.body)}` )
    response.send(`person name is ${request.body.personName}`)
})
app.post('/insert-person-1',(request,response)=>
{
     console.log(`request recieved is ${JSON.stringify(request.body)}` )
    response.json(request.body.address)
})
 
app.listen(port,()=>{
    console.log(`Our backend server is started at port ${port}`)
})