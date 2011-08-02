var horizontal;
var vertical;

window.addEvent('domready',function(){

	var horizontal = new Fx.Scroll.Carousel('horizontal',{
		mode: 'horizontal',
		onStart: function(){
			horizontal.getCurrent().tween('color','#000');
		},
		onComplete: function(){
			horizontal.getCurrent().tween('color','#fff');
		}
	});

	var vertical = new Fx.Scroll.Carousel('vertical',{
		mode: 'vertical',
		onStart: function(){
			vertical.getCurrent().tween('color','#000');
		},
		onComplete: function(){
			vertical.getCurrent().tween('color','#fff');
		}
	});

	$('first').addEvent('click', function(){
		horizontal.toFirst();
		vertical.toFirst();
	});

	$('next').addEvent('click', function(){
		horizontal.toNext();
		vertical.toNext();
	});

	$('previous').addEvent('click', function(){
		horizontal.toPrevious();
		vertical.toPrevious();
	});

	$('last').addEvent('click', function(){
		horizontal.toLast();
		vertical.toLast();
	});
	
	$('index').addEvent('click', function(){
		var index = this.getPrevious().get('value').toInt();
		horizontal.toIndex(index);
		vertical.toIndex(index);
	});

	$('loopOnScrollEnd').addEvent('change',function(){
		var bool = (this.value == 'true') ? true : false;
		horizontal.options.loopOnScrollEnd = bool;
		vertical.options.loopOnScrollEnd = bool;
	});

	var events = {
		onNext: function(){ $('onNext').highlight(); },
		onPrevious: function(){ $('onPrevious').highlight(); },
		onLoop: function(){ $('onLoop').highlight(); },
		onPreviousLoop: function(){ $('onPreviousLoop').highlight(); },
		onNextLoop: function(){ $('onNextLoop').highlight(); }
	};

	horizontal.addEvents(events);
	vertical.addEvents(events);

});