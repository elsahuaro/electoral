"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _createForOfIteratorHelper(a,b){var c;if("undefined"==typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(c=_unsupportedIterableToArray(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function n(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function e(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function s(){c=a[Symbol.iterator]()},n:function n(){var a=c.next();return g=a.done,a},e:function e(a){h=!0,f=a},f:function f(){try{g||null==c["return"]||c["return"]()}finally{if(h)throw f}}}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=_getPrototypeOf(a);if(b){var e=_getPrototypeOf(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var LoadingScene=/*#__PURE__*/function(a){function b(){var a;return _classCallCheck(this,b),a=c.call(this,"loading"),a.loaded=!1,a}_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"preload",value:function preload(){var a=this,b=this.game.config.width,c=this.game.config.height,d=this.add.graphics(),e=this.add.graphics();e.fillStyle(2236962,.8),e.fillRect(445,270,320,50);var f=this.make.text({x:b/2,y:c/2-50,text:"Cargando...",style:{font:"20px monospace",fill:"#000"}});f.setOrigin(.5,.5);var g=this.make.text({x:b/2,y:c/2-5,text:"0%",style:{font:"18px monospace",fill:"#ffffff"}});g.setOrigin(.5,.5),this.load.on("progress",function(a){g.setText(parseInt(100*a)+"%"),d.clear(),d.fillStyle(11871774,1),d.fillRect(455,280,300*a,30)}),this.load.on("complete",function(){d.destroy(),e.destroy(),f.destroy(),g.destroy(),a.scene.start("welcome")}),this.load.image("ine-back","/img/contar-bien/ine-box-back.png"),this.load.image("ine-front","/img/contar-bien/ine-box-front.png"),this.load.image("tapete","/img/contar-bien/tapete.png"),this.load.image("boleta","/img/contar-bien/boleta.png");var h,i=_createForOfIteratorHelper(votes);try{for(i.s();!(h=i.n()).done;){var j=h.value;this.load.image(j,"/img/contar-bien/voto-"+j+".png")}}catch(a){i.e(a)}finally{i.f()}}}]),b}(Phaser.Scene);
