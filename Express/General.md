<h1 style='text-align:center;font-size:3rem;'>Express</h1>

# General

* [Express Website](https://expressjs.com/)

Express is a web framework for Node.js. It is a NPM package which comes with methods and plugins that can be used to build web applications and APIs. Express can help:

- Start up a server and listen for requests
- Parse incoming requests
- Match requests to particular routes
- Craft http response and associated content

## Framework versus Library
When using a LIBRARY, the flow of the application code is left up to you. In a FRAMEWORK, the control is inverted; the framework is in charge and tells you where to plug in the code.

# Request and Response
Express creates a JavaScript object for us (i.e. ```req``` below) by parsing the incoming HTTP content. We then respond to the request using the ```res```. This response can be varied.

    app.use((req, res) => {
        res.send('<h1>Message received; this is your response</h1>');
    })

# Express Routing
When a request is sent, Express will check and find a matching route based on the path and method (e.g. GET, POST), and then sends you to the right handler function. Express is able to do this matching using ```app.get```. You can have as many of these as needed. You can also use a generic path that will cover all possible 'paths', but make sure that this is placed last in the order, otherwise it will prevent legitemit paths from executing:

    const express = require('express')      // import express framework
    const app = express()

    app.get('/', (req, res) => {
        res.send('<h1>This is the HomePage</h1>')
    })

    app.get('/cats', (req, res) => {
        console.log('Cat Request!')
        res.send('<h1>This is the CATTTTTTTT page</h1>')
    })

    app.get('/dogs', (req, res) => {
        res.send('<h1>WOOOOOoooOOOOOOfffFFFFFFFf</h1>')
    })

    app.get('*', (req, res) => {
        res.send('<h1>404 Error</h1>')
    })

    app.listen(3000, () => {
        console.log('Listening on port 3000...')
    })

# Express Path Parameters



