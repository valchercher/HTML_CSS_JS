'use strict';// Stockage local de nos tâches
function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var ArrayStorage=/*#__PURE__*/function(){// Un constructeur pour initialiser l'objet avec le nom de la clé et son contenu (valeur)
function a(b){_classCallCheck(this,a),this.name=b,this.list=this.get()}// Un méthode pour récupérer un tableau des valeurs ou par défaut, le créer
return _createClass(a,[{key:"get",value:function get(){return localStorage.getItem(this.name)||localStorage.setItem(this.name,"[]"),JSON.parse(localStorage.getItem(this.name))}// Une méthode pour ajouter une valeur dans le tableau
},{key:"set",value:function set(a){this.list.push(a),localStorage.setItem(this.name,JSON.stringify(this.list))}// Une méthode pour supprimer une valeur du tableau
},{key:"remove",value:function remove(a){var b=this.list.indexOf(a);this.list.splice(b,1),localStorage.setItem(this.name,JSON.stringify(this.list))}// Une méthode pour vider tout le tableau
},{key:"clear",value:function clear(){localStorage.removeItem(this.name)}}]),a}();