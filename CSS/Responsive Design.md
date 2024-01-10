<h1 style='text-align:center;font-size:3rem;'>Responsive Design</h1>

# General

* [The Odin Project](https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-natural-responsiveness)
* [MDN - Viewport Meta Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)
* 

## Natural Responsiveness
Naturally flexibility is the first step to making responsive websites. For example, to set the initial width of a webpage to the size of the screen someone is on, we add the following to our HTML:

    <meta name="viewport" content="width=device-width, initial-scale=1">

This also tells the browser not to zoom in or out.

Avoid using fixed widths or heights and instead, use ```max-width```, ```min-width```, ```max-height```, and ```min-height```. Though, it is advisable to avoid using heights altogether (except perhaps in the header / footer). Instead, use margin and padding to control space around elements. 

## Responsive Images