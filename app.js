// imports express into out file
const express = require("express")
const app = express()
const PORT = 5000

app.listen(5000, () => {
    console.log('[server] running on ${PORT}')
})
app.get('/', (request, response) =>{
    response.send('Hello, home!')
})
app.get('/here', (request, response) =>{
    response.send('Hello, you here!')
})
app.get('/there', (request, response) =>{
    response.send('Hello, there!')
})
app.get('/overthere', (request, response) =>{
    response.send('Hello, over there!')
})

