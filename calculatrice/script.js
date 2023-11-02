const texcont= document.getElementById('texcont')
let resultat = document.getElementById("Resultat");
let operateur;
let chiffre1;
let chiffre2;

function ajouterChiffre(chiffre) {
    texcont.innerHTML += chiffre;   
}

function ajouterOperateur(op) {
  operateur = op;
  resultat.innerHTML = texcont.innerHTML
  chiffre1 = parseInt(resultat.innerHTML);
  resultat.innerHTML += op;
  texcont.innerHTML=''
}

function calculer() {
  resultat.innerHTML = texcont.innerHTML
  chiffre2 = parseInt(resultat.innerHTML);
  let resultatFinal;

  switch (operateur) {
    case "+":
      resultatFinal = chiffre1 + chiffre2;
      break;
    case "-":
      resultatFinal = chiffre1 - chiffre2;
      break;
    case "*":
      resultatFinal = chiffre1 * chiffre2;
      break;
    case "/":
      resultatFinal = chiffre1 / chiffre2;
      break;
  }

  resultat.innerHTML = "le Calcul de " +chiffre1 +" "+operateur+" "+ chiffre2 +" = "+resultatFinal;
  texcont.innerHTML="Resultat :"+ resultatFinal;
  texcont.innerHTML==''
  
}