/*
---

script: Fx.Scroll.Carousel.js

description: Extends Fx.Scroll to work like a carousel

license: MIT-style license.

authors: Ryan Florence

docs: http://moodocs.net/rpflo/mootools-rpflo/Fx.Scroll.Carousel

requires:
- more/1.2.4.2: [Fx.Scroll]

provides: [Fx.Scroll.Carousel]

...
*/


Fx.Scroll.Carousel = new Class({
	
	Extends: Fx.Scroll,
	
		options: {
			mode: 'horizontal',
			childSelector: false,
			loopOnScrollEnd: true
		},
	
	initialize: function(element, options){
		this.parent(element, options);
		this.cacheElements();
		this.currentIndex = 0;
	},
	
	cacheElements: function(){
		var cs = this.options.childSelector;
		if(cs){
			els = this.element.getElements(cs);
		} else if (this.options.mode == 'horizontal'){
			els = this.element.getElements(':first-child > *');
		} else {
			els = this.element.getChildren();
		}
		this.elements = els;
		return this;
	},
	
	toNext: function(){
		if(this.checkLink()) return this;
		this.currentIndex = this.getNextIndex();
		this.toElement(this.elements[this.currentIndex]);
		this.fireEvent('next');
		return this;
	},
	
	toPrevious: function(){
		if(this.checkLink()) return this;
		this.currentIndex = this.getPreviousIndex();
		this.toElement(this.elements[this.currentIndex]);
		this.fireEvent('previous');
		return this;
	},
	
	getNextIndex: function(){
		this.currentIndex++;
		if(this.currentIndex == this.elements.length || this.checkScroll()){
			this.fireEvent('loop');
			this.fireEvent('nextLoop');
			return 0;
		} else {
			return this.currentIndex;
		};
	},
	
	getPreviousIndex: function(){
		this.currentIndex--;
		var check = this.checkScroll();
		if(this.currentIndex < 0 || check) {
			this.fireEvent('loop');
			this.fireEvent('previousLoop');
			return (check) ? this.getOffsetIndex() : this.elements.length - 1;
		} else {
			return this.currentIndex;
		}
	},
	
	getOffsetIndex: function(){
		var visible = (this.options.mode == 'horizontal') ? 
			this.element.getStyle('width').toInt() / this.elements[0].getStyle('width').toInt() :
			this.element.getStyle('height').toInt() / this.elements[0].getStyle('height').toInt();
		return this.currentIndex + 1 - visible;
	},
	
	checkLink: function(){
		return (this.timer && this.options.link == 'ignore');
	},
	
	checkScroll: function(){
		if(!this.options.loopOnScrollEnd) return false;
		if(this.options.mode == 'horizontal'){
			var scroll = this.element.getScroll().x;
			var total = this.element.getScrollSize().x - this.element.getSize().x;
		} else {
			var scroll = this.element.getScroll().y;
			var total = this.element.getScrollSize().y - this.element.getSize().y;
		}
		return (scroll == total);
	},
	
	getCurrent: function(){
		return this.elements[this.currentIndex];
	}
	
});