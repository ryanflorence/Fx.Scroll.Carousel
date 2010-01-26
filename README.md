Fx.Scroll.Carousel
==================

Extends Fx.Scroll to provide carousel functionality.

![Fx.Scroll.Carousel](http://github.com/rpflorence/Fx.Scroll.Carousel/raw/master/logo.png)

How to use
----------

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

Methods
-------

    myCarousel.toNext();
    myCarousel.toPrevious();
    myCarousel.getCurrent(); // returns an element


View the [MooDoc](http://moodocs.net/rpflo/mootools-rpflo/Fx.Scroll.Carousel) for more detailed documentation.