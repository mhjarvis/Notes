<h1 style='text-align:center;font-size:3rem;'>Keyframes</h1>

# General
Keyframes are like "animation milestones", marking key moments in an element's transformation during an animation, defining what styles it should have at those points. Unlike transitions, animations can loop, do not need any type of a trigger, and provide significantly more flexibility.

[MDN - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)<br>
[MDN - @keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)<br>



## Animation Poperties
The first part of the animation process is the configuration stage - where animation properties are defined on the element that they will affect. Some of these include:

* ```animation-duration``` - the length of the animation cycle. 
* ```animation-name``` - a custom name that links to the keyframe.
* ```animation-iteration-count``` - how long or how many iterations there will be.
* ```animation-direction``` - should the animation alternate or reset to the beginning of the animation.

## Keyframes
The ```@keyframes``` at-rule references the animation-name defined on a property. Keyframes use a percentage to indicate the times for an animation to take place (the keywords ```from``` and ```to``` are interchangable for ```0%``` and ```100%```, respectively). 

        #ball {
            /* ... other CSS properties ... */
            background-color: red;
            animation: 2s change-color infinite alternate;
        }

        @keyframes change-color {
            from {
                background-color: red;
            }
            50% {
                width: 200px;
                height: 200px;
                background-color: blue;
            }
            to {
                background-color: green;
            }
        }