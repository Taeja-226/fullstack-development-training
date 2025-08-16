import express from 'express'
const app = express();
const port = 3000;

app.use(express.json());

app.post('/create-todo',(request,response)=>{
    console.log(`Request recieved at ${JSON.stringify(request.body)}`);
    response.send(request.body)
})
app.get('/read-all-todo',(request,response)=>{
    let todo = [{
     "id" : 1,
     "todo" :  "Go to gym"
},
{
     "id" : 2,
     "todo" :   "Singing"
},
{
     "id" : 3,
     "todo" : "Dancing"
}]

})
app.get('/read todo',(request,response)=>{
     console.log(`read student with id = ${req.query.id}`)
    let todo = [{
     "id" : 1,
     "todo" :  "Go to gym"
},
{
     "id" : 2,
     "todo" :   "Singing"
},
{
     "id" : 3,
     "todo" : "Dancing"
}]
    response.json(todo)

})
app.patch('/update-todo',(request,response)=>{
       console.log(`read student with id = ${req.query.id}`)
     let todo = [{
     "id" : 1,
     "todo" :  "Go to gym"
},
{
     "id" : 2,
     "todo" :   "Singing"
},
{
     "id" : 3,
     "todo" : "Dancing"
}]
    response.send("Todo updated successfully")
})
app.delete('/delete-todo',(request,response)=>{
       console.log(`read student with id = ${req.query.id}`)
     let todo = [{
     "id" : 1,
     "todo" :  "Go to gym"
},
{
     "id" : 2,
     "todo" :   "Singing"
},
{
     "id" : 3,
     "todo" : "Dancing"
}]
    response.send("Todo deleted successfully")
})


app.listen(port , ()=>{
    console.log(`Server started at port ${[port]}`)
})