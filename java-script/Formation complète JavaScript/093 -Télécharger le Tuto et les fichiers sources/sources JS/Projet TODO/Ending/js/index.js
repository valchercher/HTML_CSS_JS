'use strict';// DOM selection
function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}var list=document.getElementById("list"),input=document.getElementById("input"),add=document.getElementById("add"),clear=document.getElementById("clear"),url=document.getElementById("url"),load=document.getElementById("load"),storage=new ArrayStorage("tasks"),tasks=storage.list;// Une fonction qui ajoute les tâches au DOM avec un bouton de suppression auquel on attache un évènement
function taskToDOM(a){// Si on a une chaîne non-vide
if("string"==typeof a&&a){var b=document.createElement("li"),c=document.createElement("button");return b.textContent=a,c.textContent="REMOVE",c.addEventListener("click",function(){var a=c.parentNode.firstChild.textContent;storage.remove(a),list.removeChild(c.parentNode)}),b.appendChild(c),list.insertBefore(b,list.firstChild),!0}return!1}// On ajoute chaque tâche à la liste à puces
tasks.forEach(function(a){return taskToDOM(a)});// On gère l'ajout de tâche avec le bouton ADD et la touche 'Enter'
function newTask(){-1===storage.list.indexOf(input.value)&&taskToDOM(input.value)&&(storage.set(input.value),input.value=""),input.focus()}// On supprime la liste du DOM et du navigateur
// On gère l'importation de tâches
add.addEventListener("click",newTask),input.addEventListener("keydown",function(a){"Enter"===a.key&&newTask()}),clear.addEventListener("click",function(){storage.clear(),list.innerHTML=""}),load.addEventListener("click",function(){fetch(url.value).then(function(a){if(a.ok)return a.json();throw new Error("".concat(a.statusText," (").concat(a.status,")"))}).then(function(a){if(Array.isArray(a))return void a.forEach(function(a){-1===storage.list.indexOf(a)&&taskToDOM(a)&&storage.set(a)});throw new TypeError("La r\xE9ponse n'est pas un tableau JSON (type: ".concat(_typeof(a),")"))})});
