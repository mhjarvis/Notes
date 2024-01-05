<h1 style='text-align:center;font-size:3rem;'>Transforms</h1>

# General
The ```transform``` property allows you to change the appearance of elements without affecting the document flow. ```transform``` takes in one or more transform functions (with each taking in their own value). Most elements can be transformed with some exceptions (such as non-replaced inline elements).

[The Odin Project Link](https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-transforms)<br>
[MDN Link](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#values)

# Two-Dimensional Transforms

### ```rotate()```
```rotate()``` is the tranform function value to rotate an element on a 2D plance:

    .element {
        transform: rotate(45deg);
        transform: rotate(-1rad);           // additional example
        transform: rotate(0.3turn);         // additional example
    }

### ```scale()```
```scale()``` is a transform function value to scale an element on a 2D plane:

    .element {
        transform: scaleX(0.25);
        transform: scaleY(1.5);
        transform: scale(0.25, 1.5);
    }

### ```skew()```
```skew()``` is a transform function value to skew an element on a 2D plane:

    .element {
        transform: skew(45deg);
        transform: skew(-0.5rad);
        transform: skew(45deg, -0.5rad);
    }

### ```translate()```
```translate()``` is a transform function value that translates an element on a 2D plane:

    .element {
        transform: translateX(20px);
        transform: translateY(-33%);
        transform: translate(20px, -33%);
    }

## Chaining Multiple Transforms
Multiple transforms can be added by placing a space between each one:

    .element {
        transform: rotate(45deg) translate(200%);
    }

# Three-Dimensional Transforms