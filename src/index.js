import express from "express"
import nodemon from 'nodemon'
import bodyParser from 'body-parser'

const PORT = 3000

const app = express()

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))

app.get('/', (req,res) =>{
    
    res.sendFile('homev2.html',{"root": __dirname})
})
//console.log(`Server running at 3000`);