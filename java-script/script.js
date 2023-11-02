const lastname = document.getElementById("lastname");
const firstname= document.getElementById("firstname")
const phone    = document.getElementById("phone");
const email    = document.getElementById("email");
const next     = document.querySelector(".next");
const img      = document.querySelector('img');
const tbody    = document.querySelector("tbody");
const btnDetail= document.getElementById('btnDetail');
const form     = document.querySelector('.form');
const button   = document.querySelector('button');
const code     = document.querySelector('code');
const mnt    = document.querySelector('#mnt');
const solde    = document.getElementById('solde');
const trans    = document.getElementById("trans")
const champNumero=document.querySelector('#champNumero');

const personnes=[
        {
            id:1,nom:"Ndiaye",prenom:"Abdou",tel:'771235420',email:"abdoundiaye@gmail.com",solde:0,imgProf:"https://plus.unsplash.com/premium_photo-1664874602568-0304428709b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            numero:[10,11,12,13,14,15],date:['10/01/2022','27/02/2022','01/11/2022','09/01/2023','09/03/2023','12/03/2023'],sens:[1,-1,-1,1,-1,1],montant:[1200,1200,1200,1200,1200,1200],
        },
        {
            id:2,nom:"Boy",prenom:"Moustapha",tel:'771530420',email:"moustapha@gmail.com",solde:0,imgProf:"https://images.unsplash.com/photo-1680035116082-c7cd5e96fdb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
            numero:[8,9],date:['01/02/2023','09/03/2023'],sens:[1,-1],montant:[1200,1200],
       
        },
        {
            id:3,nom:"Sall", prenom:"Awa",tel:'700035629',email:"awasall@gmail.com",solde:0,imgProf:"https://images.unsplash.com/photo-1679753700871-ef1eddfbfd3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMzV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            numero:[1,2,3,4],date:['10/01/2022','27/02/2022','01/02/2022','09/03/2023'],sens:[1,-1,-1,1],montant:[1200,1200,1200,1200],
        },
]

function getDataById (id,data)
{
    return data.find((p)=>p.id == id);
}
const now = new Date(2023,04,10);
const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
const timeOptions = { hour: '2-digit', minute: '2-digit' };
const date = now.toLocaleDateString('fr-FR', dateOptions);
const time = now.toLocaleTimeString('fr-FR', timeOptions);
const DateActu=date;


const tab=[];
let sold2;
function selectedPersonne(id){
    let user = getDataById(id,personnes);
    lastname.innerHTML = user.nom;
    firstname.innerHTML = user.prenom;
    phone.innerHTML = user.tel;
    email.innerHTML = user.email;
    solde.innerHTML = user.solde;
    img.src = user.imgProf;
    let p = "";
    let q = "";
    let j = 0;
    for (let index = 0; index < user.numero.length; index++) {
        p+= `<tr>
                <td>${user.numero[index]}</td>
                <td>${user.date[index]}</td>  
                <td>${user.sens[index]=='1'?'Dépôt':'Retrait'}</td> 
                <td>${user.montant[index]}</td>              
            </tr>`;
        j++       
        tbody.innerHTML =p; 
        code.innerHTML = j;        
    }
}
let r=1;
let z=1;
function faireTransactions() {
  let m=0;
  let p = "";
  
  let sold1=parseInt(document.getElementById('solde').textContent)
  choice = trans.selectedIndex
  valeur_cherchee = trans.options[choice].textContent; 
  const mont = mnt.valueAsNumber;
  sold2=mont;  
  if(valeur_cherchee=='Dépôt' && champNumero.value==''){
    
      if(sold2<500){
          afficherNotification('Vous ne pouvez pas faire un dépôt inférieur a 500f')  
      }else{
      const soldeRestant =sold1+sold2;        
      solde.innerHTML = soldeRestant;
       personnes[m].solde=soldeRestant
        personnes[m].numero.push(r)
        personnes[m].sens.push(1)
        personnes[m].date.push(DateActu)
        personnes[m].montant.push(+mont)           
      p+= `<tr>
            <td>${r}</td>
            <td>${DateActu}</td>  
            <td>${valeur_cherchee}</td> 
            <td>${mont}</td>              
        </tr>`; 
  tbody.innerHTML+=p;
      }
    }
    else if(valeur_cherchee=='Dépôt' && !(champNumero.value=='')){
     
      if(sold2<500){
        afficherNotification('Vous ne pouvez pas faire un dépôt inférieur a 500f')  
    }else  if(sold1<sold2){
      afficherNotification("Le solde de votre compte ne vous permet pas d'effectuer cette opération.Merci de recommencer")
      }else{
        //retrait sur la personne qui fait le transfert
            const soldeRestant = sold1-sold2 ;    
            personnes[m].solde=soldeRestant
            solde.innerHTML =soldeRestant;
            personnes[m].numero.push(r)
            personnes[m].sens.push(-1)
            personnes[m].date.push(DateActu)
            personnes[m].montant.push(+mont)
            p+= `<tr>
                    <td>${r}</td>
                    <td>${DateActu}</td>  
                    <td>Retrait</td> 
                    <td>${mont}</td>              
                </tr>`;      
            tbody.innerHTML+=p;
            //dépôt sur la personne qui reçoit le transfert
            const pers=getPersonne(champNumero.value)
            if( pers){
                const sold=pers.solde
                const soldeDepot = sold+sold2;     
                pers.solde = soldeDepot
                pers.solde.innerHTML    = soldeDepot;
                pers.numero.push(r)
                pers.sens.push(1)
                pers.date.push(DateActu)
                pers.montant.push(+mont)
            p+= `<tr>
                    <td>${r}</td>
                    <td>${DateActu}</td>  
                    <td>Dépôt</td> 
                    <td>${mont}</td>              
                </tr>`;      
            tbody.innerHTML+=p;
             }
          }
  }else{
      if(sold1<=sold2){
          afficherNotification("Le solde de votre compte ne vous permet pas d'effectuer cette opération.Merci!")
      }else{
          const soldeRestant =sold1-sold2 ;    
          personnes[m].solde=soldeRestant
          solde.innerHTML =soldeRestant;
          personnes[m].solde=soldeRestant
          personnes[m].numero.push(r)
          personnes[m].sens.push(1)
          personnes[m].date.push(DateActu)
          personnes[m].montant.push(+mont)
          p+= `<tr>
                  <td>${r}</td>
                  <td>${DateActu}</td>  
                  <td>${valeur_cherchee}</td> 
                  <td>${mont}</td>              
              </tr>`;      
          tbody.innerHTML+=p;      
          }
    }
    r++;
    m++;
   
}
 let i = 1;
selectedPersonne(i);
next.addEventListener('click',()=>{
    i++;
    +selectedPersonne(i);
    if(i == personnes.length){
        i = 0;
    }
})
btnDetail.addEventListener('click',()=>{
    form.style.display="block";
})


button.addEventListener('click',()=>{  
    
    faireTransactions()
   
 
    
})
function afficherNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.style.display = "block";
    setTimeout(function () {
      notification.style.display = "none";
    }, 5500); // Masquer la notification après 5 secondes
}

function getPersonne(telephone){
  for (let index = 0; index < personnes.length; index++) {
    const personne = personnes[index];   
    if (telephone==personne.tel) {
      return  personne;
    }
  }
 }
//  console.log(getPersonne('771530420'));