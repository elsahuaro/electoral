"use strict";function _createForOfIteratorHelper(a,b){var c;if("undefined"==typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(c=_unsupportedIterableToArray(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function n(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function e(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function s(){c=a[Symbol.iterator]()},n:function n(){var a=c.next();return g=a.done,a},e:function e(a){h=!0,f=a},f:function f(){try{g||null==c.return||c.return()}finally{if(h)throw f}}}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}var galeria_data=[{src:"0000.jpg",distrito:7,lugar:"\xC1lamos",fecha:"2021-02-22"},{src:"0001.jpg",distrito:6,lugar:"Ciudad Obreg\xF3n",fecha:"2021-02-23"},{src:"0002.jpg",distrito:3,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-02-28"},{src:"0003.jpg",distrito:6,lugar:"Campo 30",fecha:"2021-02-28"},{src:"0004.jpg",distrito:6,lugar:"Campo 30",fecha:"2021-02-28"},{src:"0005.jpg",distrito:6,lugar:"Campo 30",fecha:"2021-02-28"},{src:"0006.jpg",distrito:2,lugar:"Nogales",fecha:"2021-02-28"},{src:"0007.jpg",distrito:2,lugar:"Nogales",fecha:"2021-02-28"},{src:"0008.jpg",distrito:3,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-02-28"},{src:"0009.jpg",distrito:3,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-02-28"},{src:"0010.jpg",distrito:3,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-02-28"},{src:"0011.jpg",distrito:4,lugar:"Capacitaci\xF3n Virtual",fecha:"2021-02-28"},{src:"0012.jpg",distrito:1,lugar:"Caborca",fecha:"2021-02-28"},{src:"0013.jpg",distrito:1,lugar:"Caborca",fecha:"2021-02-28"},{src:"0014.jpg",distrito:1,lugar:"Caborca",fecha:"2021-02-28"},{src:"0015.jpg",distrito:7,lugar:"Etchojoa",fecha:"2021-02-27"},{src:"0016.jpg",distrito:7,lugar:"Etchojoa",fecha:"2021-02-27"},{src:"0017.jpg",distrito:7,lugar:"Navojoa",fecha:"2021-02-26"},{src:"0018.jpg",distrito:7,lugar:"Navojoa",fecha:"2021-02-26"},{src:"0019.jpg",distrito:7,lugar:"Navojoa",fecha:"2021-02-19"},{src:"0020.jpg",distrito:7,lugar:"Navojoa",fecha:"2021-02-19"},{src:"0021.jpg",distrito:4,lugar:"Bacadehuachi",fecha:"2021-02-21"},{src:"0022.jpg",distrito:4,lugar:"Bacadehuachi",fecha:"2021-02-21"},{src:"0023.jpg",distrito:4,lugar:"Villa Hidalgo",fecha:"2021-02-20"},{src:"0024.jpg",distrito:4,lugar:"Granados - Hu\xE1sabas",fecha:"2021-02-21"},{src:"0025.jpg",distrito:1,lugar:"San Luis R\xEDo Colorado",fecha:"2021-02-27"},{src:"0026.jpg",distrito:1,lugar:"San Luis R\xEDo Colorado",fecha:"2021-02-27"},{src:"0027.jpg",distrito:4,lugar:"Bavispe",fecha:"2021-02-21"},{src:"0028.jpg",distrito:4,lugar:"Bavispe",fecha:"2021-02-21"},{src:"0029.jpg",distrito:4,lugar:"Bavispe",fecha:"2021-02-21"},{src:"0030.jpg",distrito:4,lugar:"Bavispe",fecha:"2021-02-21"},{src:"0031.jpg",distrito:1,lugar:"Sonoyta",fecha:"2021-03-02"},{src:"0032.jpg",distrito:1,lugar:"Puerto Pe\xF1asco",fecha:"2021-03-02"},{src:"0033.jpg",distrito:4,lugar:"Sahuaripa",fecha:"2021-03-06"},{src:"0034.jpg",distrito:4,lugar:"Sahuaripa",fecha:"2021-03-06"},{src:"0035.jpg",distrito:4,lugar:"Sahuaripa",fecha:"2021-03-06"},{src:"0036.jpg",distrito:3,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-03-06"},{src:"0037.jpg",distrito:3,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-03-06"},{src:"0038.jpg",distrito:3,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-03-06"},{src:"0039.jpg",distrito:3,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-03-06"},{src:"0040.jpg",distrito:3,lugar:"Hermosillo",fecha:"2021-03-06"},{src:"0041.jpg",distrito:3,lugar:"Hermosillo",fecha:"2021-03-06"},{src:"0042.jpg",distrito:3,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-03-06"},{src:"0043.jpg",distrito:3,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-03-06"},{src:"0044.jpg",distrito:3,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-03-06"},{src:"0045.jpg",distrito:1,lugar:"San Luis R\xEDo Colorado",fecha:"2021-03-06"},{src:"0046.jpg",distrito:1,lugar:"San Luis R\xEDo Colorado",fecha:"2021-03-06"},{src:"0047.jpg",distrito:7,lugar:"Etchojoa",fecha:"2021-03-06"},{src:"0048.jpg",distrito:7,lugar:"Etchojoa",fecha:"2021-03-06"},{src:"0049.jpg",distrito:2,lugar:"Nogales",fecha:"2021-03-07"},{src:"0050.jpg",distrito:2,lugar:"Nogales",fecha:"2021-03-07"},{src:"0051.jpg",distrito:2,lugar:"Nogales",fecha:"2021-03-07"},{src:"0052.jpg",distrito:5,lugar:"La Pea\xF1a - Costa de Hermosillo",fecha:"2021-03-07"},{src:"0053.jpg",distrito:5,lugar:"La Pea\xF1a - Costa de Hermosillo",fecha:"2021-03-07"},{src:"0054.jpg",distrito:5,lugar:"Los Pericos - Costa de Hermosillo",fecha:"2021-03-07"},{src:"0055.jpg",distrito:5,lugar:"Los Pericos - Costa de Hermosillo",fecha:"2021-03-07"},{src:"0056.jpg",distrito:5,lugar:"Los Pericos - Costa de Hermosillo",fecha:"2021-03-07"},{src:"0057.jpg",distrito:7,lugar:"Tapizuelas \xC1lamos",fecha:"2021-03-08"},{src:"0058.jpg",distrito:7,lugar:"Tapizuelas \xC1lamos",fecha:"2021-03-08"},{src:"0059.jpg",distrito:7,lugar:"Basirom \xC1lamos",fecha:"2021-03-08"},{src:"0060.jpg",distrito:7,lugar:"El Maquipo \xC1lamos",fecha:"2021-03-08"},{src:"0061.jpg",distrito:7,lugar:"El Maquipo \xC1lamos",fecha:"2021-03-08"},{src:"0062.jpg",distrito:7,lugar:"El Maquipo \xC1lamos",fecha:"2021-03-08"},{src:"0063.jpg",distrito:7,lugar:"El Maquipo \xC1lamos",fecha:"2021-03-08"},{src:"0064.jpg",distrito:7,lugar:"Sebampo Etchojoa",fecha:"2021-03-08"},{src:"0065.jpg",distrito:7,lugar:"Sebampo Etchojoa",fecha:"2021-03-08"},{src:"0066.jpg",distrito:7,lugar:"Sebampo Etchojoa",fecha:"2021-03-08"},{src:"0067.jpg",distrito:7,lugar:"Sebampo Etchojoa",fecha:"2021-03-08"},{src:"0068.jpg",distrito:7,lugar:"Sebampo Etchojoa",fecha:"2021-03-08"},{src:"0069.jpg",distrito:7,lugar:"El Rodeo Etchojoa",fecha:"2021-03-09"},{src:"0070.jpg",distrito:7,lugar:"El Rodeo Etchojoa",fecha:"2021-03-09"},{src:"0071.jpg",distrito:7,lugar:"El Rodeo Etchojoa",fecha:"2021-03-09"},{src:"0072.jpg",distrito:7,lugar:"El Rodeo Etchojoa",fecha:"2021-03-09"},{src:"0073.jpg",distrito:6,lugar:"Esperanza",fecha:"2021-03-10"},{src:"0074.jpg",distrito:6,lugar:"Esperanza",fecha:"2021-03-10"},{src:"0075.jpg",distrito:7,lugar:"Etchojoa",fecha:"2021-03-10"},{src:"0076.jpg",distrito:7,lugar:"Etchojoa",fecha:"2021-03-10"},{src:"0077.jpg",distrito:7,lugar:"Etchojoa",fecha:"2021-03-10"},{src:"0078.jpg",distrito:7,lugar:"Etchojoa",fecha:"2021-03-10"},{src:"0079.jpg",distrito:7,lugar:"Etchojoa",fecha:"2021-03-10"},{src:"0080.jpg",distrito:7,lugar:"Chacarita Etchojoa",fecha:"2021-03-11"},{src:"0081.jpg",distrito:7,lugar:"Chacarita Etchojoa",fecha:"2021-03-11"},{src:"0082.jpg",distrito:7,lugar:"Chacarita Etchojoa",fecha:"2021-03-11"},{src:"0083.jpg",distrito:7,lugar:"Chacarita Etchojoa",fecha:"2021-03-11"},{src:"0084.jpg",distrito:2,lugar:"Cananea",fecha:"2021-03-13"},{src:"0085.jpg",distrito:3,lugar:"Hermosillo",fecha:"2021-03-13"},{src:"0086.jpg",distrito:3,lugar:"Hermosillo",fecha:"2021-03-13"},{src:"0087.jpg",distrito:3,lugar:"Hermosillo",fecha:"2021-03-13"},{src:"0088.jpg",distrito:3,lugar:"Hermosillo",fecha:"2021-03-13"},{src:"0089.jpg",distrito:7,lugar:"Navojoa",fecha:"2021-03-13"},{src:"0090.jpg",distrito:7,lugar:"Navojoa",fecha:"2021-03-13"},{src:"0091.jpg",distrito:2,lugar:"Agua Prieta",fecha:"2021-03-13"},{src:"0092.jpg",distrito:2,lugar:"Agua Prieta",fecha:"2021-03-13"},{src:"0093.jpg",distrito:2,lugar:"Agua Prieta",fecha:"2021-03-13"},{src:"0094.jpg",distrito:2,lugar:"Agua Prieta",fecha:"2021-03-13"},{src:"0095.jpg",distrito:2,lugar:"Agua Prieta",fecha:"2021-03-13"},{src:"0096.jpg",distrito:1,lugar:"Trincheras y Tubutama",fecha:"2021-03-14"},{src:"0097.jpg",distrito:1,lugar:"Trincheras y Tubutama",fecha:"2021-03-14"},{src:"0098.jpg",distrito:1,lugar:"Trincheras y Tubutama",fecha:"2021-03-14"},{src:"0099.jpg",distrito:4,lugar:"Nacozari de Garc\xEDa",fecha:"2021-03-14"},{src:"0100.jpg",distrito:4,lugar:"Nacozari de Garc\xEDa",fecha:"2021-03-14"},{src:"0101.jpg",distrito:4,lugar:"Nacozari de Garc\xEDa",fecha:"2021-03-14"},{src:"0102.jpg",distrito:7,lugar:"La Bocana Etchojoa",fecha:"2021-03-14"},{src:"0103.jpg",distrito:7,lugar:"La Bocana Etchojoa",fecha:"2021-03-14"},{src:"0104.jpg",distrito:7,lugar:"La Bocana Etchojoa",fecha:"2021-03-14"},{src:"0105.jpg",distrito:7,lugar:"La Bocana Etchojoa",fecha:"2021-03-14"},{src:"0106.jpg",distrito:7,lugar:"La Bocana Etchojoa",fecha:"2021-03-14"},{src:"0107.jpg",distrito:3,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-03-14"},{src:"0108.jpg",distrito:4,lugar:"Cumpas",fecha:"2021-03-14"},{src:"0109.jpg",distrito:4,lugar:"Cumpas",fecha:"2021-03-14"},{src:"0110.jpg",distrito:4,lugar:"Cumpas",fecha:"2021-03-14"},{src:"0111.jpg",distrito:4,lugar:"Cumpas",fecha:"2021-03-14"},{src:"0112.jpg",distrito:4,lugar:"B\xE1cum",fecha:"2021-03-14"},{src:"0113.jpg",distrito:4,lugar:"B\xE1cum",fecha:"2021-03-14"},{src:"0114.jpg",distrito:4,lugar:"B\xE1cum",fecha:"2021-03-14"},{src:"0115.jpg",distrito:4,lugar:"B\xE1cum",fecha:"2021-03-14"},{src:"0116.jpg",distrito:4,lugar:"B\xE1cum",fecha:"2021-03-14"},{src:"0117.jpg",distrito:4,lugar:"B\xE1cum",fecha:"2021-03-14"},{src:"0118.jpg",distrito:4,lugar:"B\xE1cum",fecha:"2021-03-14"},{src:"0119.jpg",distrito:3,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-03-14"},{src:"0120.jpg",distrito:3,lugar:"Poblado Miguel Alem\xE1n",fecha:"2021-03-14"},{src:"0121.jpg",distrito:4,lugar:"San Ignacio R\xEDo Muerto",fecha:"2021-03-14"},{src:"0122.jpg",distrito:4,lugar:"San Ignacio R\xEDo Muerto",fecha:"2021-03-14"},{src:"0123.jpg",distrito:4,lugar:"San Ignacio R\xEDo Muerto",fecha:"2021-03-14"},{src:"0124.jpg",distrito:4,lugar:"San Ignacio R\xEDo Muerto",fecha:"2021-03-14"},{src:"0125.jpg",distrito:4,lugar:"San Ignacio R\xEDo Muerto",fecha:"2021-03-14"},{src:"0126.jpg",distrito:4,lugar:"Ejido Antonio Rosales Empalme",fecha:"2021-03-15"},{src:"0127.jpg",distrito:4,lugar:"Ejido Antonio Rosales Empalme",fecha:"2021-03-15"},{src:"0128.jpg",distrito:4,lugar:"Ejido Antonio Rosales Empalme",fecha:"2021-03-15"},{src:"0129.jpg",distrito:4,lugar:"Ejido Antonio Rosales Empalme",fecha:"2021-03-15"},{src:"0130.jpg",distrito:4,lugar:"Ejido Antonio Rosales Empalme",fecha:"2021-03-15"},{src:"0131.jpg",distrito:4,lugar:"Ejido Antonio Rosales Empalme",fecha:"2021-03-15"},{src:"0132.jpg",distrito:4,lugar:"Ejido Antonio Rosales Empalme",fecha:"2021-03-15"},{src:"0133.jpg",distrito:7,lugar:"El Sahuaral Etchojoa",fecha:"2021-03-15"},{src:"0134.jpg",distrito:7,lugar:"El Sahuaral Etchojoa",fecha:"2021-03-15"},{src:"0135.jpg",distrito:7,lugar:"El Sahuaral Etchojoa",fecha:"2021-03-15"},{src:"0136.jpg",distrito:7,lugar:"El Sahuaral Etchojoa",fecha:"2021-03-15"},{src:"0137.jpg",distrito:7,lugar:"El Sahuaral Etchojoa",fecha:"2021-03-15"},{src:"0138.jpg",distrito:7,lugar:"\xC1lamos",fecha:"2021-03-14"},{src:"0139.jpg",distrito:7,lugar:"\xC1lamos",fecha:"2021-03-14"},{src:"0140.jpg",distrito:7,lugar:"\xC1lamos",fecha:"2021-03-14"},{src:"0141.jpg",distrito:7,lugar:"\xC1lamos",fecha:"2021-03-14"},{src:"0142.jpg",distrito:7,lugar:"\xC1lamos",fecha:"2021-03-14"},{src:"0143.jpg",distrito:7,lugar:"Navojoa",fecha:"2021-03-16"},{src:"0144.jpg",distrito:7,lugar:"Navojoa",fecha:"2021-03-16"},{src:"0145.jpg",distrito:7,lugar:"Navojoa",fecha:"2021-03-16"},{src:"0146.jpg",distrito:7,lugar:"Huatabampo",fecha:"2021-03-16"},{src:"0147.jpg",distrito:7,lugar:"Huatabampo",fecha:"2021-03-16"},{src:"0148.jpg",distrito:6,lugar:"Esperanza",fecha:"2021-03-17"},{src:"0149.jpg",distrito:6,lugar:"Esperanza",fecha:"2021-03-17"},{src:"0150.jpg",distrito:6,lugar:"Esperanza",fecha:"2021-03-17"},{src:"0151.jpg",distrito:6,lugar:"Esperanza",fecha:"2021-03-17"},{src:"0152.jpg",distrito:7,lugar:"Ejido El Chinal \xC1lamos",fecha:"2021-03-17"},{src:"0153.jpg",distrito:7,lugar:"Ejido El Chinal \xC1lamos",fecha:"2021-03-17"},{src:"0154.jpg",distrito:7,lugar:"Ejido El Chinal \xC1lamos",fecha:"2021-03-17"},{src:"0155.jpg",distrito:7,lugar:"Ejido El Chinal \xC1lamos",fecha:"2021-03-17"},{src:"0156.jpg",distrito:7,lugar:"Ejido El Chinal \xC1lamos",fecha:"2021-03-17"},{src:"0157.jpg",distrito:7,lugar:"Ejido El Chinal \xC1lamos",fecha:"2021-03-17"},{src:"0158.jpg",distrito:7,lugar:"Ejido El Chinal \xC1lamos",fecha:"2021-03-17"},{src:"0159.jpg",distrito:7,lugar:"Navojoa",fecha:"2021-03-18"},{src:"0160.jpg",distrito:7,lugar:"Navojoa",fecha:"2021-03-18"},{src:"0161.jpg",distrito:7,lugar:"Navojoa",fecha:"2021-03-18"},{src:"0162.jpg",distrito:7,lugar:"Huatabampo",fecha:"2021-03-18"},{src:"0163.jpg",distrito:7,lugar:"Huatabampo",fecha:"2021-03-18"},{src:"0164.jpg",distrito:6,lugar:"Capacitaci\xF3n Virtual",fecha:"2021-03-18"},{src:"0165.jpg",distrito:5,lugar:"Capacitaci\xF3n Virtual",fecha:"2021-03-18"}// { src: '', distrito: , lugar: '', fecha: '' },
];window.addEventListener("load",function(){var a=document.getElementById("galeria");a.innerHTML="";var b,c=_createForOfIteratorHelper(galeria_data);try{for(c.s();!(b=c.n()).done;){var d=b.value,e=document.createElement("a"),f=document.createElement("img"),g=document.createElement("div");e.classList.add("galeria__item"),e.href="/img/galeria/"+d.src,f.classList.add("galeria__image"),f.src="/img/galeria/"+d.src,g.classList.add("galeria__descr"),g.innerHTML=d.fecha+" Distrito "+d.distrito+" en "+d.lugar,e.appendChild(f),e.appendChild(g),a.appendChild(e)}}catch(a){c.e(a)}finally{c.f()}});