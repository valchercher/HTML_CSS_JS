//les objets
var personne ={
    nom: ['Jean', 'Martin'],
    age: 32,
    sexe: 'masculin',
    interets: ['musique', 'skier'],
    bio: function() {
      alert(this.nom[0] + ' ' + this.nom[1] + ' a ' + this.age + ' ans. Il aime ' + this.interets[0] + ' et ' + this.interets[1] + '.');
    },
    salutation: function() {
      alert('Bonjour ! Je suis ' + this.nom[0] + '.');
    }
  };


//les fonctions


//  /* Déclaration de la fonction 'maFonction' */
//  function maFonction(monObjet)
//  {
//    monObjet.marque = "Toyota";
//  }

//  /*
//   * Déclaration de la variable 'mavoiture';
//   * création et initialisation d'un nouvel objet;
//   * assigner une référence à 'mavoiture'
//   */
//  var mavoiture = {
//    marque: "Honda",
//    modele: "Accord",
//    annee: 1998
//  };

//  /* Affiche 'Honda' */
//  console.log(mavoiture.marque);

//  /* Passer la référence de l'objet à la fonction */
//  maFonction(mavoiture);

//  /*
//   * Affiche 'Toyota' pour valeur de la propriété 'marque'
//   * de l'objet. C'est ce que la fonction a changé.
//   */
//  console.log(mavoiture.marque);












//   if (0) {
//     function zero() {
//        console.log("C'est zero.");
//     }
//  }
// if (0) {
//     var zero = function() {
//        console.log("C'est zero");
//     }
//  }


//les conditions
//condition if
// let azerty = 5;
// if(azerty > 1) {
//    console.log('La variable $azerty est strictement plus grand que 1.');
// }

 //condition if else

// let azerty = 0;
// if(azerty > 1) {
//    console.log('La variable $azerty est strictement plus grand que 1.');
// } else {
//    console.log('La variable $azerty est plus petite ou égale à 1.');
// }

//condition else if

// let azerty = 5;
// if(azerty < 1) {
//    console.log('La variable $azerty est plus petit que 1.');
// } else if(azerty > 4) {
//    console.log('La variable $azerty est strictement plus grand que 4.');
// } else {
//    console.log('La variable $azerty entre 1 et 4.');
// }

//Operateurs de comparaisons

// let azerty = 5;
// let qwerty = 10;
// console.log(azerty == qwerty);
// console.log(azerty > qwerty);
// console.log(azerty < qwerty);
// console.log(azerty >= qwerty);
// console.log(azerty <= qwerty);

//Operateurs logiques

// let a = 10;
// let b = 5;
// let c = 0;
// if(a && b && c) {
//    console.log('Les variables a, b et c contiennent des valeurs différentes de false.');
// } else {
//    console.log('Une des variables a, b ou c contient false comme valeur.');
// }

// if(a >= 10 || b >= 10 || c >= 10) {
//    console.log('Une des variables a, b ou c a une valeur supérieure ou égale à 10.');
// } else {
//    console.log('Aucune des variables a, b ou c ne contient une valeur supérieure ou égale à 10.');
// }

// if(!c) {
//    console.log('La variable c a une valeur équivalente à false.');
// } else {
//    console.log('La variable c a une valeur équivalent à true.');
// }

//les boucles

//boucle for
// for (let pas = 0; pas < 5; pas++) {
//     // Ceci sera exécuté 5 fois
//     // À chaque éxécution, la variable "pas" augmentera de 1
//     // Lorsque'elle sera arrivée à 5, le boucle se terminera.
//     console.log('Faire ' + pas + ' pas vers l\'est');
//   }

//boucle while

// let i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);

//boucle while
// let n = 0;
// let x = 0;
// while (n < 3) {
//   n++;
//   x += n;
// }

//l'instruction break
// for (i = 0; i < a.length; i++) {
//     if (a[i] === valeurTest) {
//       break;
//     }
//   }

// let x = 0;
// let z = 0;
// labelAnnuleBoucle: while (true) {
//   console.log("Boucle externe : " + x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("Boucle interne : " + z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelAnnuleBoucle;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }

//l'instruction continue
// let i = 0;
// let n = 0;
// while (i < 5) {
//   i++;
//   if (i === 3) {
//     continue;
//   }
//   n += i;
//   console.log(n);
// }
// // 1, 3, 7, 12

// let i = 0;
// let j = 8;

// vérifIetJ: while (i < 4) {
//   console.log("i : " + i);
//   i += 1;

//   vérifJ: while (j > 4) {
//     console.log("j : "+ j);
//     j -= 1;
//     if ((j % 2) === 0){
//       continue vérifJ;
//     }
//     console.log(j + " est impaire.");
//    }
//    console.log("i = " + i);
//    console.log("j = " + j);
// }


//boucle for...in
// function afficherProps(obj, nomObj) {
//     var result = "";
//     for (var i in obj) {
//       result += nomObj + "." + i + " = " + obj[i] + "\n";
//     }
//     result += "\n";
//     return result;
//   }


//boucle for...of
// let arr = [3, 5, 7];
// arr.toto = "coucou";

// for (let i in arr) {
//   console.log(i); // affiche 0, 1, 2, "toto" dans la console
// }

// for (let i of arr) {
//   console.log(i); // affiche 3, 5, 7 dans la console
// }

//l'instruction label

// let str = '';

// loop1:
// for (let i = 0; i < 5; i++) {
//   if (i === 1) {
//     continue loop1;
//   }
//   str = str + i;
// }

// console.log(str);
// // Expected output: "0234"
