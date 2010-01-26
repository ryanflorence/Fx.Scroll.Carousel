Class: Fx.Scroll.Carousel {#Fx.Scroll.Carousel}
===============================================

Extends Fx.Scroll to provide carousel functionality.

### Extends:

Fx.Scroll

### Demo:

<iframe style="width: 100%; height: 530px" src="http://mootools.net/shell/rpflo/LEb7H/embedded/result,js,css,html"></iframe>

Fx.Scroll.Carousel Method: constructor {#Fx.Scroll.Carousel:constructor}
-------------------------------------------------------------------------


### Syntax:

	var myCarousel = new Fx.Scroll.Carousel(element, options);

### Arguments:

1. element - (*mixed*) A string of the id for an Element or an Element reference to scroll.
2. options - (*object*, optional) All of the Fx.Scroll options plus the options below:

### Options:

* mode - (*string*: defaults to `horizontal`) Accepts `horizontal` and `vertical`.
* childSelector - (*string*: defaults to `false`) This can be used if your elements inside the carousel don't match the default element selection*.
* loopOnScrollEnd - (*boolean*: defaulst to `true`) If true, the carousel will scroll to the beginning when the last element is visible.  If false it will try to scroll to each element displaying no effect for the last few elements (usually.)

### Notes:

If the mode is `vertical` it will select the immediate children of your element. If the mode is `horizontal` it will select the grandchildren of your scrolling element since you typically need a wrapper and an inner div to achieve a horizontal scroll, and if `childSelector` is defined it will selected whatever elements match.  Here are some examples:

    #HTML
    <!-- horizontal mode selects grandchildren -->
    <div id="horizontally-scrolling-element">
      <div id="forced-horizontal-scroll-element" style="width: 2000px">
        <div class="horizontally-selected-element">1</div>
        <div class="horizontally-selected-element">2</div>
        <div class="horizontally-selected-element">3</div>
        <div class="horizontally-selected-element">4</div>
      </div>
    </div>
    
    <!-- vertical mode selects children -->    
    <div id="vertically-scrolling-element">
      <div class="vertically-selected-element">1</div>
      <div class="vertically-selected-element">2</div>
      <div class="vertically-selected-element">3</div>
      <div class="vertically-selected-element">4</div>
    </div>
    
    <!-- childSelecter: 'p' selects 'p' -->
    <div id="overflowed-element">
      <div>
        <div>
          <p class="childSelector-ed">1</p>
          <p class="childSelector-ed">2</p>
          <p class="childSelector-ed">3</p>
          <p class="childSelector-ed">4</p>
        </div>
      </div>
    </div>

### Example

    #HTML
    <div id="carousel">
      <div class="inner" style="width: 2000px">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
    </div>

    #CSS
    div#carousel {
      overflow: hidden;
      width: 300px;
      height: 200px;
    }
    
    div#carousel div.inner {
      width: 600px;
    }
    
    div#carousel div.inner > div {
      float: left;
      width: 100px;
      height: 200px;
    }

    #JS
    myCarousel = new Fx.Scroll.Carousel('carousel',{
      mode: 'horizontal',
      onStart: function(){
        myCarousel.getCurrent().tween('color','#000');
      },
      onComplete: function(){
        myCarousel.getCurrent().tween('color','#fff');
      }
    });

Fx.Scroll.Carousel Method: toNext {#Fx.Scroll.Carousel:toNext}
---------------------------------------------------------------

<big>Scrolls the carousel to the next element</big>

### Syntax:

    myCarousel.toNext();

### Returns:

This Fx.Scroll.Carousel instance.



Fx.Scroll.Carousel Method: toPrevious {#Fx.Scroll.Carousel:toPrevious}
-----------------------------------------------------------------------

<big>Scrolls the carousel to the previous element</big>

### Syntax:

    myCarousel.toPrevious();

### Returns:

This Fx.Scroll.Carousel instance.


Fx.Scroll.Carousel Method: getCurrent {#Fx.Scroll.Carousel:getCurrent}
-----------------------------------------------------------------------

<big>Returns an element reference of the current element.  Helpful when using events.</big>

### Syntax:

    myCarousel.getCurrent();

### Returns:

The current element in the carousel.

Fx.Scroll.Carousel Method: cacheElements {#Fx.Scroll.Carousel:cacheElements}
-----------------------------------------------------------------------------

<big>Not typically used. This caches the elements within carousel.  Use this method if you dynamically add items to the carousel</big>

### Syntax:

    myCarousel.cacheElements();

### Returns:

This Fx.Scroll.Carousel instance.



