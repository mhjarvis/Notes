const jokes = require('give-me-a-joke')     // ref the package only
const colors = require('colors')
/* const cowsay = require('cowsay')
 */

// use ```npm link cowsay``` in terminal to use the globally installed package
// cowsay is installed globally because it is giving us actual changes to the cmd line

jokes.getRandomDadJoke (function(joke) {

    console.log(joke.blue)                  // use colors on joke package
})

/* console.log(cowsay.say({
    text : "I'm a poopoo",
    e : "oO",
    T : "U "
}));
 */