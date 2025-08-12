// import express package
const express = require('express');
// create or we say initaialize  app with express function
const app = express();
// define port
const port = 3000;
/*
API section
*/

/*
API method 1
http method = get
url = '/api-1'
request = {}
response = "this is our first api"
*/
app.get('/api-1' , (request, response) =>
{
    response.send("This is our first api")
})
app.get('/testing-api', (request,response) =>{
     
    response.send("Nice job. You get it . This is how we create API's with different paths")
})
app.get("/test-api-3", (request,response) =>{

    response.send("My test api third is working properly.")
})
app.get("/homepage-admin" ,(request,response)=>{

    response.send("this is website homepage")
})

// API 2nd method
/*
http method = post
url ='/insert-user'
response = 'user inserted successfully'
 */
app.post('/insert-user' , (request,response)=>{
    console.log(`content of server is ${request}`)
    response.send("user inserted successfully")
})

// start server
app.listen(port,() => {
    console.log(`my api is started at ${port}`)
})