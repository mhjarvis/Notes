<h1 style="text-align:center">Arrays</h1>

## forEach()
The ```forEach()``` syntax expects a function expression as its input, which it will apply to each element in the array. 

    const numbers = [1, 2, 3, 4, 5];

    numbers.forEach(function (el) {
        console.log(el);
    })

## map()
```map()``` is similar to ```forEach()```, except that it will generate a new array after running the function on each element.

    const array = ['ro', 'markus', 'jfsoijoi']
    const mappedArray = array.map(function (el) {
        return el.toUpperCase();
    })

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    let x = numbers.map(function(ele) {
        return ele * ele;
    })

## Arrow Functions
A newer / simpler syntax for defining function expressions (essentially, removing the function keyword). 

    const square = (x) => {
        return x * x;
    }

    const add = (x, y) => {
        return x + y;
    }