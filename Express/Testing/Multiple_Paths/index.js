const express = require('express')      // import express framework
const app = express()


/**
 * This 'path' will take the /cats path and execute the contained code. In this case,
 * if you go to localhost:3000/cats, the contained code will execute.
 */
app.get('/cats', (req, res) => {
    console.log('Cat Request!')
    res.send('<h1>This is the CATTTTTTTT page</h1>')
})

app.listen(3000, () => {
    console.log('Listening on port 3000...')
})