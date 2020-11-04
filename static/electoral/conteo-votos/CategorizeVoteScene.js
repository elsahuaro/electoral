"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=_getPrototypeOf(a);if(b){var e=_getPrototypeOf(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return _possibleConstructorReturn(this,c)}}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}var CategorizeVoteScene=/*#__PURE__*/function(a){function b(){var a;return _classCallCheck(this,b),a=c.call(this,"categorize-vote"),a.boleta_x0=85,a.boleta_y0=250,a.boleta_y1=50,a.boleta_x2=0,a.boleta_y2=0,a.boleta_scale0=.15,a.boleta_scale2=1,a.boleta_scale3=.125,a.tapete={},a}_inherits(b,a);var c=_createSuper(b);return _createClass(b,[{key:"init",value:function init(a){this.total=a.total,this.vote=a.vote,this.conteo=a.conteo}},{key:"create",value:function create(){this.boxlabel=this.add.text(85,this.game.config.height/2+125,"Urna",{font:"30px \"Libertinus Sans\"",fill:"black"}),this.addTapete(),this.totalText=this.add.text(this.game.config.width-140,20,"total: "+this.total,{font:"30px \"Libertinus Sans\"",fill:"black"}),this.back=this.add.image(120,this.game.config.height/2,"ine-back"),this.back.depth=0,this.front=this.add.image(120,this.game.config.height/2,"ine-front"),this.front.depth=2,this.boleta=this.addBoleta("boleta"),this.voteImg=this.addBoleta(this.vote),this.tweenBoleta1()}},{key:"addBoleta",value:function addBoleta(a){var b=this.add.image(this.boleta_x0,this.boleta_y0,a);return b.setOrigin(0,0),b.scaleX=this.boleta_scale0,b.scaleY=this.boleta_scale0,b.depth=1,b}},{key:"tweenBoleta1",value:function tweenBoleta1(){var a=this;this.tweens.add({targets:this.boleta,duration:500,ease:"Quad.easeInOut",y:this.boleta_y1,onComplete:function onComplete(){a.boleta.depth=3,a.voteImg.depth=3,a.tweenBoleta2()}}),this.tweens.add({targets:this.voteImg,duration:500,ease:"Quad.easeInOut",y:this.boleta_y1})}},{key:"tweenBoleta2",value:function tweenBoleta2(){this.tweens.add({targets:this.boleta,duration:500,ease:"Quad.easeInOut",y:this.boleta_y2,x:this.boleta_x2,scaleX:this.boleta_scale2,scaleY:this.boleta_scale2}),this.tweens.add({targets:this.voteImg,duration:500,ease:"Quad.easeInOut",y:this.boleta_y2,x:this.boleta_x2,scaleX:this.boleta_scale2,scaleY:this.boleta_scale2})}},{key:"addTapete",value:function addTapete(){var a=Math.floor;this.matlabel=this.add.text(800,525,"Tapete",{font:"30px \"Libertinus Sans\"",fill:"black"});for(var b=0;b<votes.length;b++){this.tapete[votes[b]]=this.add.image(0,0,"tapete"),this.tapete[votes[b]].setOrigin(0,0);var c=this.tapete[votes[b]].width,d=this.tapete[votes[b]].height,e=490+b%7*c,f=100+a(b/7)*c;this.tapete[votes[b]].x=e,this.tapete[votes[b]].y=f;var g=this.add.text(e,f,votes[b].split("-").join("-").toUpperCase(),{font:"12px \"Libertinus Sans\"",fill:"black"});g.x=e+c/2-g.width/2,g.y=f+10,this.tapete[votes[b]].setInteractive(),this.tapete[votes[b]].on("pointerover",this.voteTintSetter(b)),this.tapete[votes[b]].on("pointerout",this.voteTintClearer(b)),this.tapete[votes[b]].on("pointerdown",this.voteCaster(b));var h=this.conteo[votes[b]].correct+this.conteo[votes[b]].incorrect,j=this.add.text(e,f,""+h,{font:"30px \"Libertinus Sans\"",fill:"black"});j.x=e+c/2-j.width/2,j.y=f+d/2-j.height/2+10}}},{key:"voteTintSetter",value:function voteTintSetter(a){var b=this;return function(){b.tapete[votes[a]].setTint(14626523)}}},{key:"voteTintClearer",value:function voteTintClearer(a){var b=this;return function(){b.tapete[votes[a]].clearTint()}}},{key:"voteCaster",value:function voteCaster(a){var b=this;return function(){b.castVote(votes[a])}}},{key:"castVote",value:function castVote(a){var b=this;a==this.vote?++this.conteo[a].correct:++this.conteo[a].incorrect;for(var c=0;c<votes.length;c++)this.tapete[votes[c]].clearTint(),this.tapete[votes[c]].off("pointerover"),this.tapete[votes[c]].off("pointerout"),this.tapete[votes[c]].off("pointerdown");var d=this.tapete[a].x,e=this.tapete[a].y;this.tweens.add({targets:[this.boleta,this.voteImg],duration:500,ease:"Quad.easeInOut",x:d,y:e,scaleX:this.boleta_scale3,scaleY:this.boleta_scale3,onComplete:function onComplete(){b.fadeBoleta()}})}},{key:"fadeBoleta",value:function fadeBoleta(){var a=this;this.tweens.add({targets:[this.boleta,this.voteImg],duration:250,ease:"Quad.easeInOut",alpha:0,onComplete:function onComplete(){a.scene.start("draw-vote",{total:a.total,conteo:a.conteo})}})}}]),b}(Phaser.Scene);