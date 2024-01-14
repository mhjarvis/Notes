const express = require('express')                      // import express
const app = express()

app.use((req, res) => {                                         // will run every time a request is made
    console.log('We have a request coming in.')
    // res.send('Hello There! We got your request, this is a response')
    res.send('<h1>Hello this is the webpage</h1>')
})

app.listen(3000, () => {                                // will listen on port for incoming
    console.log("Listening on Port 3000!")              // this is what starts the server
})