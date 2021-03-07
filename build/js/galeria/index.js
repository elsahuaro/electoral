"use strict";function _createForOfIteratorHelper(a,b){var c;if("undefined"==typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(c=_unsupportedIterableToArray(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function n(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function e(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function s(){c=a[Symbol.iterator]()},n:function n(){var a=c.next();return g=a.done,a},e:function e(a){h=!0,f=a},f:function f(){try{g||null==c.return||c.return()}finally{if(h)throw f}}}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}var galeria_data=[{src:"0000.jpg",distrito:7,lugar:"Alamos",fecha:"2021-02-22"},{src:"0001.jpg",distrito:6,lugar:"Ciudad Obreg\xF3n",fecha:"2021-02-23"},{src:"0002.jpg",distrito:3,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-02-28"},{src:"0003.jpg",distrito:6,lugar:"Campo 30",fecha:"2021-02-28"},{src:"0004.jpg",distrito:6,lugar:"Campo 30",fecha:"2021-02-28"},{src:"0005.jpg",distrito:6,lugar:"Campo 30",fecha:"2021-02-28"},{src:"0006.jpg",distrito:2,lugar:"Nogales",fecha:"2021-02-28"},{src:"0007.jpg",distrito:2,lugar:"Nogales",fecha:"2021-02-28"},{src:"0008.jpg",distrito:3,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-02-28"},{src:"0009.jpg",distrito:3,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-02-28"},{src:"0010.jpg",distrito:3,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-02-28"},{src:"0011.jpg",distrito:4,lugar:"Capacitaci\xF3n Virtual",fecha:"2021-02-28"},{src:"0012.jpg",distrito:1,lugar:"Caborca",fecha:"2021-02-28"},{src:"0013.jpg",distrito:1,lugar:"Caborca",fecha:"2021-02-28"},{src:"0014.jpg",distrito:1,lugar:"Caborca",fecha:"2021-02-28"},{src:"0015.jpg",distrito:7,lugar:"Etchojoa",fecha:"2021-02-27"},{src:"0016.jpg",distrito:7,lugar:"Etchojoa",fecha:"2021-02-27"},{src:"0017.jpg",distrito:7,lugar:"Navojoa",fecha:"2021-02-26"},{src:"0018.jpg",distrito:7,lugar:"Navojoa",fecha:"2021-02-26"},{src:"0019.jpg",distrito:7,lugar:"Navojoa",fecha:"2021-02-19"},{src:"0020.jpg",distrito:7,lugar:"Navojoa",fecha:"2021-02-19"},{src:"0021.jpg",distrito:4,lugar:"Bacadehuachi",fecha:"2021-02-21"},{src:"0022.jpg",distrito:4,lugar:"Bacadehuachi",fecha:"2021-02-21"},{src:"0023.jpg",distrito:4,lugar:"Villa Hidalgo",fecha:"2021-02-20"},{src:"0024.jpg",distrito:4,lugar:"Granados - Hu\xE1sabas",fecha:"2021-02-21"},{src:"0025.jpg",distrito:1,lugar:"San Luis R\xEDo Colorado",fecha:"2021-02-27"},{src:"0026.jpg",distrito:1,lugar:"San Luis R\xEDo Colorado",fecha:"2021-02-27"},{src:"0027.jpg",distrito:4,lugar:"Bavispe",fecha:"2021-02-21"},{src:"0028.jpg",distrito:4,lugar:"Bavispe",fecha:"2021-02-21"},{src:"0029.jpg",distrito:4,lugar:"Bavispe",fecha:"2021-02-21"},{src:"0030.jpg",distrito:4,lugar:"Bavispe",fecha:"2021-02-21"},{src:"0031.jpg",distrito:1,lugar:"Sonoyta",fecha:"2021-03-02"},{src:"0032.jpg",distrito:1,lugar:"Puerto Pe\xF1asco",fecha:"2021-03-02"},{src:"0033.jpg",distrito:4,lugar:"Sahuaripa",fecha:"2021-03-06"},{src:"0034.jpg",distrito:4,lugar:"Sahuaripa",fecha:"2021-03-06"},{src:"0035.jpg",distrito:4,lugar:"Sahuaripa",fecha:"2021-03-06"},{src:"0036.jpg",distrito:5,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-03-06"},{src:"0037.jpg",distrito:5,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-03-06"},{src:"0038.jpg",distrito:5,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-03-06"},{src:"0039.jpg",distrito:5,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-03-06"},{src:"0040.jpg",distrito:3,lugar:"Hermosillo",fecha:"2021-03-06"},{src:"0041.jpg",distrito:3,lugar:"Hermosillo",fecha:"2021-03-06"}// { src: '', distrito: , lugar: '', fecha: '' },
];window.addEventListener("load",function(){var a=document.getElementById("galeria");a.innerHTML="";var b,c=_createForOfIteratorHelper(galeria_data);try{for(c.s();!(b=c.n()).done;){var d=b.value,e=document.createElement("a"),f=document.createElement("img"),g=document.createElement("div");e.classList.add("galeria__item"),e.href="/img/galeria/"+d.src,f.classList.add("galeria__image"),f.src="/img/galeria/"+d.src,g.classList.add("galeria__descr"),g.innerHTML=d.fecha+" Distrito "+d.distrito+" en "+d.lugar,e.appendChild(f),e.appendChild(g),a.appendChild(e)}}catch(a){c.e(a)}finally{c.f()}});
