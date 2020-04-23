
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')


let users = [
    {name:'Ravi', salary: 35498}
]

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/users', (req, res) => res.send(users));
app.post('/users', (req, res)=> 
{
    res.json()
})



// app.post('/users', (req, res)=> 
// {   let users = req.body;
//     users.push(user);
//     res.status(201).end;
    
// })



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

