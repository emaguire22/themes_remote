(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{381:function(t,e,n){"use strict";n.r(e);var o=n(51),r=n(0),i=n.n(r),c=n(25),a=n.n(c);function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var u=function(t){function e(){return p(this,e),s(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.onReady=function(){var t=this,e=this.context.compareRemoveMessage;i()("body").on("click","[data-comparison-remove]",(function(n){t.context.comparisons.length<=2&&(a()({text:e,type:"error"}),n.preventDefault())}))},e}(o.a);e.default=u}}]);