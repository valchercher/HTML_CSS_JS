let solutElem=document.getElementById('solut');
let clipboard= document.getElementById('clipboard');
let lengthElem=document.getElementById('taille');
let majuscule=document.getElementById('majuscule');
let minuscule=document.getElementById('minuscule');
let symbole=document.getElementById('symbole');
let chiffre=document.getElementById('chiffre');
let generer=document.getElementById('Generer');
let conteneur=document.querySelector('.conteneur');
let header=document.querySelector('.header');



function genererMotpass(){

        let caracteres="";
    
        if(symbole.checked){
             caracteres +="!@#$%^&*(){}[]=<>/,.";
        }
        if(majuscule.checked){
    
         caracteres+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if(minuscule.checked){
            caracteres+="abcdefghijklmnopqrstuvwxyz";
        }
        
        if(chiffre.checked){
            caracteres +="0123456789";
        }
       
        
                if(password>2){
                    document.getElementById('password').textContent="";
                }
        //initialisation de la variable qui stockera le mot de passe
        
        lengthElem=document.getElementById('taille').value;
        console.log(lengthElem)
        var password='';
        
        //generation du mot de passe
        for (let i = 0; i < lengthElem; i++) {
            password+=caracteres(Math.floor(Math.random()*caracteres.length));
            //Affiche le mot de pass generer
            
            document.getElementById('password').textContent=password;
            
            
        }      
   
}

let btn=document.querySelector('.btn');

btn.addEventListener('click',function mycopy(){
    const inputPassword=document.getElementById('password');
    console.log(inputPassword.value)
    //verifier la longueur du mot de passe

    if(inputPassword.value.length<15){
        alert('La Longueur du PassWord contient au moins 15 caracteres')
    }
    
        else{
            //copier le mot de passe
            inputPassword.select();
            document.execCommand('copy');
            //afficher une alerte
            alert("Mot de passe copié !");
    
        }
	
})