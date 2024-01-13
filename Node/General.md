<h1 style='text-align:center;font-size:3rem;'>Node</h1>

# General Information
Node is a "Javascript runtime". Node allows you to run JavaScript on a server and is a language capable of handling a lot of traffic and performing complex tasks. It does not require a browser to run.


    process.argv

# Working with ```module.exports```
In Node, we can work with different files by importing / exporting them as needed. If something is not exported / imported correctly, the function or variable will not work in the other file. 

    /******* EXPORTING *******/
    module.exports.add = add;                   // export a single function

    const math = {                              // different way of writting a export function
        add: add,
        PI: PI,
        square: square
    }
    module.exports = math;

    module.exports.PI

    /******* IMPORTING *******/
    const math = require('./math');             // import a whole file
    const {PI, square} = require('./math')      // import a single or certain functions

Here, ```module.exports``` is simply an object that we are attatching functions / variables onto. We can also export an entire directory (see the shelter example). When doing so, Node will look for the index.js file within that directory and import whatever that file is exporting.