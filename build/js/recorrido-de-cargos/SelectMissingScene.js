"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_unsupportedIterableToArray(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _createForOfIteratorHelper(a,b){var c;if("undefined"==typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(c=_unsupportedIterableToArray(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function n(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function e(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function s(){c=a[Symbol.iterator]()},n:function n(){var a=c.next();return g=a.done,a},e:function e(a){h=!0,f=a},f:function f(){try{g||null==c.return||c.return()}finally{if(h)throw f}}}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=_getPrototypeOf(a);if(b){var e=_getPrototypeOf(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var SelectMissingScene=/*#__PURE__*/function(a){function b(){return _classCallCheck(this,b),c.call(this,"select-missing")}_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"puestoTxt",value:function puestoTxt(a,b,c){var d=this.add.text(0,0,a,{font:"18px \"Roboto Condensed\"",fill:"black",align:"center",wordWrap:{width:100}});return d.setOrigin(0,0),d.x=b,d.y=c,d}},{key:"create",value:function create(){var a=this;this.game.input.touch.capture=!1,this.miembrosImgs={},this.xFinales=[0,0,0,0,0,0,0,0,0],this.faltas=[!1,!1,!1,!1,!1,!1,!1,!1,!1],this.puestos=[0,0,0,0,0,0],this.mesaDir=this.add.text(0,50,"Mesa Directiva de la Casilla",{font:"50px \"Roboto Condensed\"",fill:"black"}),this.mesaDir.setOrigin(0,0),this.mesaDir.x=this.game.config.width/2-this.mesaDir.width/2,this.mesaDir.alpha=0;for(var b,c=["Presidente/a","1\xBA Secretario/a","2\xBA Secretario/a","1\xBA Escrutador/a","2\xBA Escrutador/a","3\xBA Escrutador/a"],d=25,e=0;6>e;e++)b=miembros[e],this.miembrosImgs[b]=this.add.image(0,0,b).setInteractive(),this.miembrosImgs[b].setOrigin(0,0),this.miembrosImgs[b].scale=.25,this.xFinales[e]=e*offset+d,this.miembrosImgs[b].x=e*offset+d+this.game.config.width,this.miembrosImgs[b].y=this.game.config.height/2-.25*this.miembrosImgs[b].height/2,this.puestos[e]=this.puestoTxt(c[e],e*offset+d+30,this.game.config.height/2+.25*this.miembrosImgs[b].height/2);for(var h,j=6;9>j;j++)h=miembros[j],this.miembrosImgs[h]=this.add.image(0,0,h).setInteractive(),this.miembrosImgs[h].setOrigin(0,0),this.miembrosImgs[h].scale=.25,this.xFinales[j]=j*offset+d+50,this.miembrosImgs[h].x=j*offset+d+this.game.config.width,this.miembrosImgs[h].y=this.game.config.height/2-.25*this.miembrosImgs[h].height/2;for(var k,l=9;15>l;l++)k=miembros[l],this.miembrosImgs[k]=this.add.image(0,0,k).setInteractive(),this.miembrosImgs[k].setOrigin(0,0),this.miembrosImgs[k].scale=.25,this.miembrosImgs[k].x=l*offset+d+this.game.config.width,this.miembrosImgs[k].y=this.game.config.height/2-.25*this.miembrosImgs[k].height/2;for(var f=function(b){var c=miembros[b];a.tweens.add({targets:[a.miembrosImgs[c]],duration:500+100*b,ease:"Quad.easeInOut",x:a.xFinales[b],onComplete:function onComplete(){a.miembrosImgs[c].on("pointerover",function(b){a.miembrosImgs[c].setTint(3071814),b.event.preventDefault()}),a.miembrosImgs[c].on("pointerout",function(d){a.faltas[b]?a.miembrosImgs[c].setTint(14628142):a.miembrosImgs[c].clearTint(),d.event.preventDefault()}),a.miembrosImgs[c].on("pointerdown",function(d){a.faltas[b]?(a.miembrosImgs[c].clearTint(),a.faltas[b]=!1):(a.miembrosImgs[c].setTint(14628142),a.faltas[b]=!0),d.event.preventDefault()})}})},g=0;9>g;g++)f(g);this.recorrerBtn=this.add.image(100,this.game.config.height-100,"recorrerBtn").setInteractive(),this.recorrerBtn.setOrigin(0,0),this.recorrerBtn.scale=.75,this.recorrerBtn.on("pointerover",function(b){a.recorrerBtn.setTint(9103239),b.event.preventDefault()}),this.recorrerBtn.on("pointerout",function(b){a.recorrerBtn.clearTint(),b.event.preventDefault()}),this.recorrerBtn.on("pointerdown",function(b){a.recorrerBtn.off("pointerdown"),a.recorrerBtn.off("pointerover"),a.recorrerBtn.off("pointerout"),a.recorrerBtn.clearTint();for(var c,d=0,e=Object.values(a.miembrosImgs);d<e.length;d++)c=e[d],c.off("pointerdown"),c.off("pointerover"),c.off("pointerout"),c.clearTint();for(var p=0;9>p;p++)a.faltas[p]&&a.tweens.add({targets:[a.miembrosImgs[miembros[p]]],duration:500+50*p,ease:"Quad.easeInOut",y:-1e3});for(var f=[!1,!1,!1,!1,!1,!1,!1,!1,!1],g=0,h=0,i=0;9>i;i++)a.faltas[i]?g++:(f[h]=miembros[i],h++);if(3<g)for(var q=h;6>q;q++)f[q]=miembros[q-h+9];var k,l=_createForOfIteratorHelper(f.entries());try{for(l.s();!(k=l.n()).done;){var m=_slicedToArray(k.value,2),n=m[0],o=m[1];o&&a.tweens.add({targets:[a.miembrosImgs[o]],duration:1e3+100*n,ease:"Quad.easeInOut",x:a.xFinales[n]})}}catch(a){l.e(a)}finally{l.f()}setTimeout(function(){a.tweens.add({targets:f.slice(6).filter(function(a){return a}).map(function(b){return a.miembrosImgs[b]}),duration:250,ease:"Quad.easeInOut",alpha:0,onComplete:function onComplete(){a.tweens.add({targets:a.puestos.concat(f.slice(0,6).map(function(b){return a.miembrosImgs[b]})),duration:500,ease:"Quad.easeInOut",x:"+=200"}),a.tweens.add({targets:[a.mesaDir],duration:1e3,ease:"Quad.easeInOut",alpha:1})}})},2e3),b.event.preventDefault()}),this.reiniciarBtn=this.add.image(890,this.game.config.height-100,"reiniciarBtn").setInteractive(),this.reiniciarBtn.setOrigin(0,0),this.reiniciarBtn.scale=.75,this.reiniciarBtn.on("pointerover",function(b){a.reiniciarBtn.setTint(9103239),b.event.preventDefault()}),this.reiniciarBtn.on("pointerout",function(b){a.reiniciarBtn.clearTint(),b.event.preventDefault()}),this.reiniciarBtn.on("pointerdown",function(b){a.tweens.add({targets:[a.recorrerBtn,a.reiniciarBtn].concat(Object.values(a.miembrosImgs)),duration:750,ease:"Quad.easeInOut",alpha:0,onComplete:function onComplete(){a.scene.start("select-missing")}}),b.event.preventDefault()})}}]),b}(Phaser.Scene);