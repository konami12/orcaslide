"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_Utils2=require("./Utils"),_Utils3=_interopRequireDefault(_Utils2);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var OrcaSlide=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}var c=Math.ceil;return _inherits(b,a),_createClass(b,null,[{key:"animateSlide",value:function(){var a=this,b=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],c=this.configSlide,d=c.active,e=c.itemWidth,f=c.items,g=c.moveTo,h=c.time,i=c.position,j=c.isInfinite,k=b?g:-g,l=b?i+1:i-1,m=f<l||0>l;if(d)if(j&&m)this.isInfinite=l;else if(!m){this.configSlide.position+=b?1:-1,this.configSlide.active=!1,this.isInfinite=l;var n=0,o=setInterval(function(){if(a.moveToScroll(k),n+=g,n>=e){clearInterval(o);var b=e*a.configSlide.position;a.moveToScroll(b,!1),a.configSlide.active=!0}},h)}}},{key:"autoPlay",value:function a(){var b=this,c=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];this.configSlide.autoPlay=c;var d=this.configSlide,a=d.autoPlay,e=d.timeAutoPlay;c||a?c&&a&&(this.autoPlayTimer=setInterval(function(){b.animateSlide()},e)):clearInterval(this.autoPlayTimer)}},{key:"displayArrow",value:function(a){var b=this.configSlide,c=b.autoPlay,d=b.arrowNext,e=b.arrowPrevious,f=b.items,g=b.isInfinite,h=0<a?"":"none",i=f===a?"none":"";this.displayToggle(d,i),this.displayToggle(e,h),c&&!g&&"none"===i&&this.autoPlay(!1)}},{key:"startTouch",value:function(){var a=this,b=this.isMobile,c=this.configSlide,d=c.contentItem,e=c.items;if("desktop"!==b){var f=0;d.addEventListener("touchstart",function(a){var b=a.changedTouches[0];f=parseInt(b.clientX,10)}),d.addEventListener("touchmove",function(b){var c=b.changedTouches[0],d="",g=parseInt(c.clientX,10);d=0<g-f?"right":"left","left"===d&&a.configSlide.position<e?(a.autoPlay(!1),a.animateSlide(!0)):"right"===d&&0<a.configSlide.position&&(a.autoPlay(!1),a.animateSlide(!1))})}}},{key:"config",set:function(a){this.configSlide={arrowNext:"",arrowPrevious:"",autoPlay:!1,contentItem:"",ctrlStop:"",ctrlPlay:"",time:1,timeAutoPlay:2,isInfinite:!1,position:0,active:!1},this.autoPlayTimer=null,Object.assign(this.configSlide,a),this.validateConfig.setActionButton.resizeSlide.startTouch(),this.configSlide.autoPlay&&this.autoPlay()}},{key:"isInfinite",set:function(a){var b=this.configSlide,c=b.contentItem,d=b.isInfinite,e=b.items,f=b.itemWidth,g=(0>a||a>e)&&a;if(d){if(0>a||a>e){c.style.scrollBehavior="smooth";var h=0>g?e*f:0;this.moveToScroll(h,!1),this.configSlide.position=0>g?e:0,this.configSlide.active=!0,c.removeAttribute("style")}}else this.displayArrow(a)}},{key:"resizeSlide",get:function(){var a=this,b=this.configSlide,d=this.existFields(b,"item",null),e=this.existFields(b,"content",null);return null!==d&&null!==e&&window.addEventListener("resize",function(){a.configSlide.scrollWidth=e.scrollWidth,a.configSlide.moveTo=c(d.offsetWidth/256),a.configSlide.itemWidth=d.offsetWidth;var b=d.offsetWidth*a.configSlide.position;a.moveToScroll(b,!1)}),this}},{key:"setActionButton",get:function(){var a=this;return["arrowNext","arrowPrevious","ctrlStop","ctrlPlay"].forEach(function(b){var c=a.configSlide[b],d=function(){};b.includes("ctrl")?(d=function(){a.autoPlay("ctrlPlay"===b)},a.actionButton(c,d)):(d=function(){a.animateSlide("arrowNext"===b),a.autoPlay(!1)},a.actionButton(c,d))}),this}},{key:"validateConfig",get:function(){var a=this;return["arrowNext","arrowPrevious","contentItem"].forEach(function(b){var d=a.configSlide[b],e=a.getElementDom(d);if(e&&(a.configSlide[b]=e,"contentItem"===b)){var f=e.children[0]||{},g=f.offsetWidth||0,h={items:e.children.length-1,itemWidth:g,moveTo:c(g/128),scrollWidth:e.scrollWidth||0,time:1e3*a.configSlide.time/512,item:f,content:e};a.configSlide.active=0<h.items&&0<h.moveTo,Object.assign(a.configSlide,h),a.configSlide.isInfinite||a.displayToggle(a.configSlide.arrowPrevious,"none")}}),this.validateConfigAutoPlay}},{key:"validateConfigAutoPlay",get:function(){var a=this.configSlide,b=a.active,c=a.ctrlPlay,d=a.ctrlStop,e=a.timeAutoPlay;if(b){var f={timeAutoPlay:1e3*e,ctrlPlay:this.getElementDom(c),ctrlStop:this.getElementDom(d)};Object.assign(this.configSlide,f)}return this}}]),b}(_Utils3.default);exports.default=OrcaSlide;