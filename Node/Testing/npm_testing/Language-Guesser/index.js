const franc = require('franc')
const langs = require('langs')


let test1 = 'Alle meine Sehe'
let test2 = '저는 7년 동안 한국에서 살았어요'

printResult(test1)
printResult(test2)

function printResult(text) {

    let result = langs.where(2, franc(text)).name

    console.log(`"${text}" is in ${result}`)
}