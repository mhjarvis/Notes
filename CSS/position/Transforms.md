<h1 style='text-align:center;font-size:3rem;'>Transforms</h1>

# General
The ```transform``` property allows you to change the appearance of elements without affecting the document flow. ```transform``` takes in one or more transform functions (with each taking in their own value). Most elements can be transformed with some exceptions (such as non-replaced inline elements).

[The Odin Project Link](https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-transforms)<br>
[MDN Link](https://developer.mozilla.org/en-US/docs/Web/CSS/transform#values)<br>
[CSS-Tricks on ```perspective()```](https://css-tricks.com/how-css-perspective-works/)<br>
[Transform Tutorial](https://www.joshwcomeau.com/css/transforms/)

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
```rotate```, ```scale```, and ```translate``` also work on the 3D plane, but require a ```perspective``` value to be able to perceive the 3D effect.

### ```perspective()```
This is the transform function value that sets the distance from the user to the z=0 plane:

    .element {
        transform: perspective()
    }

This tells the object to render as if we are viewing it from a specific distance on the z-axis. ```perspective()``` must be declared first when adding multiple transform function values. See the following additinal function values:

### ```rotate()```

    .element {
        transform: rotateX();
        transform: rotateY();
        transform: rotateZ();
        transform: rotate3d();
    }

### ```scale()```

    .element {
        transform: scaleZ();
        transform: scale3d();
    }

### ```translate()```

    .element {
        transform: translateZ();
        transform: translate3d();
    }

