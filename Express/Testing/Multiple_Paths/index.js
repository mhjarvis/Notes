const express = require('express')      // import express framework
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>This is the HomePage</h1>')
})

/**
 * This 'path' will take the /cats path and execute the contained code. In this case,
 * if you go to localhost:3000/cats, the contained code will execute.
 */
app.get('/cats', (req, res) => {
    console.log('Cat Request!')
    res.send('<h1>This is the CATTTTTTTT page</h1>')
})

/**
 * This 'path' will execute with the /dogs in the rul
 */
app.get('/dogs', (req, res) => {
    res.send('<h1>WOOOOOoooOOOOOOfffFFFFFFFf</h1>')
})

/**
 * This 'path' or 'route' will cover all other paths that may be input into
 * the URL. Make sure this is last, otherwise it will trigger before actual paths do.
 */
app.get('*', (req, res) => {
    res.send('<h1>404 Error</h1>')
})

app.listen(3000, () => {
    console.log('Listening on port 3000...')
})