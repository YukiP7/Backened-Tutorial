import express from "express";

const app = express() ;
const port = 3000;

app.get('/' , (req , res) => {
    res.send('<h2>Server is ready for Jokes</h2>');
})

const jokes = [{
        id : 1 ,
        title : 'A joke'
    },
    {
        id : 2 ,
        title : 'A second joke'
    },
    {
        id : 3 ,
        title : 'A third joke'
    },
    {
        id : 4 ,
        title : 'A fourth joke'
    },
    {
        id : 5 ,
        title : 'A fifth joke'
    }]

app.get('/api/jokes' , (req , res) => {
    res.send(jokes)
})

app.listen(port , () => {
    console.log(`Server is ready at http://localhost:${port}`);
})