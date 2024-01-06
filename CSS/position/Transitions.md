<h1 style='text-align:center;font-size:3rem;'>Transitions</h1>

# General
Transitions allow for animating a change of an elements state. The ```transition``` property consists of the following properties:

* ```transition-property``` - determines what CSS property will be transitioned (e.g. background-color).
* ```transition-duration``` - determines the duration that the transition will occur over.
* ```transition-timing-function``` - control the speed of the change (e.g. ```ease-out```).
* ```transition-delay``` - determines the delay at which the change will start.

There is also a usable shorthand property:

* ```transition: <property> <duration> <timing-function> <delay>;```

        button {
            background-color: white;
            transition: background-color 1s ease-out 0.25s;
        }
        button:hover {
            background-color: black;
        }

[The Odin Project Link](https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-transitions)<br>
[MDN - Using transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)<br>


# 

### 