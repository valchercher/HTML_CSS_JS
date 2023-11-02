const lastname = document.getElementById("lastname");
const firstname= document.getElementById("firstname");
const phone    = document.getElementById("phone");
const email    = document.getElementById("email");
const next     = document.querySelector(".next");
const img      = document.querySelector('img');
const tbody    = document.querySelector("tbody");
const btnDetail= document.getElementById("btnDetail");
const form     = document.querySelector('.form');
const code     = document.querySelector("code");
const sauvegarder   = document.querySelector('#sauvegarder');
const solde    = document.getElementById('solde');
const mnt      =parseInt(document.getElementById('mnt').textContent);
const champNumero=document.getElementById('champNumero');
const faPlus   = document.getElementById('faPlus');
const ajoutPers= document.getElementById('ajoutPers');
const champText= document.getElementById("champText");
const eye      = document.getElementById('eye');
const lasname  = document.getElementById("lasname");
const firsname = document.getElementById("firsname");
const phon     = document.getElementById("phon");
const mail     = document.getElementById("mail");
const slde     = document.getElementById('slde');
const enregistrer=document.getElementById('enregistrer');
const annuler  = document.getElementById('annuler');
const removeUser = document.getElementById("removeUser");
const infos    = document.querySelector(".infos");
const annulTrans= document.querySelector("#annulTrans")
const annul    = document.querySelector('.annul')
const content  = document.querySelector('.content')
const td       = document.querySelectorAll('#td') 
const suppTrans  = document.querySelectorAll("#suppTrans");
const faSolid  = document.querySelectorAll("#faSolid");
const depot    = document.querySelectorAll("#depot")
console.log(suppTrans.textContent);

// const users=[
//     {  id:1,nom:"Ndiaye",prenom:"Abdou",tel:'771235420',email:"abdoundiaye@gmail.com",solde:0,
//         imgProf:"https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW1lcmljYW4lMjBib3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//         transactions:[
//            {
//              numero:'1',
//              date:'10/01/2022',
//              sens:'1',
//              montant:'1200',
//            },
//            {
//             numero:'2',
//             date:'10/02/2022',
//             sens:'1',
//             montant:'1500',
//           },
//           {
//             numero:'3',
//             date:'15/03/2023',
//             sens:'-1',
//             montant:'1500',
//           },
//           {
//             numero:'4',
//             date:'10/05/2023',
//             sens:'1',
//             montant:'2500',
//           },
//           {
//             numero:'5',
//             date:'03/07/2023',
//             sens:'-1',
//             montant:'1000',
//           } 
//         ]
//     },
//     { id:2,nom:"Boy",prenom:"Moustapha",tel:'771530420',email:"moustapha@gmail.com",solde:500,
//         imgProf:"https://images.unsplash.com/photo-1563452965085-2e77e5bf2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YW1lcmljYW4lMjBib3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//         transactions:[
//            {
//              numero:'1',
//              date:'10/02/2022',
//              sens:'1',
//              montant:'1400',
//            },
//            {
//             numero:'2',
//             date:'02/12/2022',
//             sens:'1',
//             montant:'3000',
//           },
//           {
//             numero:'3',
//             date:'10/05/2023',
//             sens:'-1',
//             montant:'2400',
//           } 
//         ]
//     },
//     { id:3,nom:"Sall", prenom:"Awa",tel:'700035629',email:"awasall@gmail.com",solde:0,
//         imgProf:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW1lcmljYW4lMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//         transactions:[
//            { 
//             numero:'1',
//             date:'10/03/2022',
//             sens:'1',
//             montant:'5000',
//            },{ 
//             numero:'2',
//             date:'30/09/2022',
//             sens:'-1',
//             montant:'1000',
//            } 
//         ],
//     },
//     { id:4,nom:"Sarr", prenom:"Djim",tel:'775546878',email:"djimsarr@gmail.com",solde:0,
//         imgProf:"https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYW4lMjBnaXJsJTIwYWZyaWNhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//         transactions:[
//            { 
//             numero:'1',
//             date:'10/04/2022',
//             sens:'1',
//             montant:'1000',
//            },{ 
//             numero:'2',
//             date:'30/11/2022',
//             sens:'-1',
//             montant:'6000',
//            } 
//         ],
//     },
//     { id:5,nom:"Niouky", prenom:"Marisa",tel:'785142378',email:"niouky@gmail.com",solde:1000,
//         imgProf:"https://images.unsplash.com/photo-1593351799227-75df2026356b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFtZXJpY2FuJTIwJTIwYWZyaWNhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//         transactions:[
//            { 
//             numero:'1',
//             date:'10/07/2022',
//             sens:'1',
//             montant:'2000',
//            },{ 
//             numero:'2',
//             date:'30/01/2022',
//             sens:'-1',
//             montant:'1000',
//            } 
//         ],
//     }    

// ]
content.appendChild(annul)
// localStorage.setItem("silmang", JSON.stringify(users))
   const users = JSON.parse(localStorage.getItem("nom"))

console.log(users);
function donneMoiId(id,data) {
    return data.find(p=>p.id==id)
}
 const now = new Date();
let annee   = now.getFullYear();
let mois    = now.getMonth()+1;
let jour    = now.getDate();
let heure   = now.getHours();
let minute  = now.getMinutes();
let seconde = now.getSeconds();
const DateActu=jour+"/"+mois+"/"+annee+" "+heure+":"+minute+":"+seconde
// console.log(donneMoiId(2,users));
function getUsers(id) {
    let use=donneMoiId(id,users);
    firstname.innerHTML=use.prenom;
    lastname.innerHTML=use.nom;
    phone.innerHTML=use.tel;
    email.innerHTML=use.email;
    solde.innerHTML=use.solde+" "+"FCFA"
    img.src=use.imgProf
    let p="";
    let j=1
    const  depot=document.querySelector("#depot")
    use.transactions.forEach(element => {
        p+=`<tr>
        <td>${element.numero}</td>
        <td>${element.date}</td>
        <td id="depot">${element.sens==1 ?'Dépôt':'Retrait'+"&nbsp"+'<button id="suppTrans"><i class="fa-sharp fa-solid fa-xmark" id="faSolid"></i></button>'}</td>
        <td>${element.montant} FCFA</td>
        </tr>`
        tbody.innerHTML=p;
        code.innerHTML=j;
        j++; 
    }); 
}
let q=1;
function faireRetrait(valChercher,tel) {
    let m=1;
    let p="";
    let user='';
    const soldeInit=parseInt(solde.textContent);
    const soldeCourt=parseInt(document.getElementById('mnt').value);
    const SoldeActuel=soldeInit-soldeCourt;
    if (soldeInit<soldeCourt) {
        afficherNotification("Le solde de votre compte ne vous permet pas d'effectuer cette opération.Merci de recommencer")
    } else {       
          let user=getPersonne(tel) ;
            user.solde=SoldeActuel
            // console.log(user.transactions)
            user.transactions.push({numero:q,date:DateActu,sens:-1,montant:soldeCourt})      
            solde.innerHTML=SoldeActuel+"FCFA";
        p+=`<tr>
            <td>${q}</td>
            <td>${date}</td>
            <td id="td">${valChercher=='Rétrait'+'<button id="suppTrans"><i class="fa-sharp fa-solid fa-xmark" id="faSolid"></i></button>'}</td>
            <td>${soldeCourt} FCFA</td>
        </tr>`
      tbody.innerHTML+=p;
    }
    m++;
    q++;
}
function faireDépôt(valChercher,tel) {
    let m=1;
    const soldeInit=parseInt(solde.textContent);
    let p="";
    let q=1;
    const soldeCourt=parseInt(document.getElementById('mnt').value);
    const SoldeActuel=soldeInit + soldeCourt;
    if (soldeCourt<500) {
        afficherNotification('Vous ne pouvez pas faire un dépôt inférieur a 500f')        
    } else {             
        // let user= donneMoiId(m,users) ;
        let user=getPersonne(tel)
             user.solde=SoldeActuel
            // console.log(user.transactions)
            user.transactions.push({numero:q,date:DateActu,sens:1,montant:soldeCourt})      
            solde.innerHTML=SoldeActuel+"FCFA";  
        p+=`<tr>
        <td>${q}</td>
        <td>${DateActu}</td>
        <td>${valChercher}</td>
        <td>${soldeCourt}${" "}FCFA</td>
        </tr>`
        tbody.innerHTML+=p;
    }         
    m++;
    q++;   
}

function faireDepotRetrait(valChercher,val,tel){
    const soldeInit=parseInt(solde.textContent);
    let p="";
    let m=1;
    let k=0;
    let user=getPersonne(tel)
    if(user.tel==val){
        afficherNotification('impossible de faire la transactions le numero est identiques ');
        k++;
    }else{
        const soldeCourt=parseInt(document.getElementById('mnt').value);
       const SoldeActuel=soldeInit - soldeCourt;    
    if (soldeInit<soldeCourt) {
        afficherNotification("Le solde de votre compte ne vous permet pas d'effectuer cette opération.Merci de recommencer")
    }            
    else {              
        // let user= donneMoiId(m,users);
        user.solde=SoldeActuel
        console.log(user.solde);
        user.transactions.push({numero:4,date:DateActu,sens:-1,montant:soldeCourt})      
        solde.innerHTML=SoldeActuel+"FCFA";
        if(!Annuler(val)){
            setTimeout(function() {
                solde.innerHTML=SoldeActuel+soldeCourt +" "+"FCFA"
            p+=`<tr>
            <td>4</td>
            <td>${DateActu}</td>
            <td id="styl">Retrait<button id="suppTrans"><i class="fa-sharp fa-solid fa-xmark"></i id="faSolid"></button></td>
            <td>${soldeCourt}${" "}FCFA</td>
            </tr>`
            tbody.innerHTML+=p;   
            },5000)
        }else{
            p+=`<tr>
        <td>4</td>
        <td>${DateActu}</td>
        <td>Retrait<button id="suppTrans"><i class="fa-sharp fa-solid fa-xmark"></i id="faSolid"></button></td>
        <td>${soldeCourt}${" "}FCFA</td>
        </tr>`
        tbody.innerHTML+=p;
        }
        const pers=getPersonne(val)
        if( pers){
            const sold=pers.solde
        //   console.log(pers.solde);
            const soldeDepot = sold+soldeCourt;     
            pers.solde = soldeDepot
            pers.solde.innerHTML    = soldeDepot;
            pers.transactions.push({numero:4,date:DateActu,sens:1,montant:soldeCourt})      
            solde.innerHTML=SoldeActuel+"FCFA";            
            p+= `<tr>
                    <td>4</td>
                    <td>${DateActu}</td>  
                    <td>${valChercher}</td> 
                    <td>${soldeCourt}${" "}FCFA</td>              
                </tr>`;   
        }
    }
}
m++;
} 
function afficherNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.style.display = "block";
    setTimeout(function () {
      notification.style.display = "none";
    }, 5500); // Masquer la notification après 5 secondes
}
function getPersonne(telephone){
  for (let index = 0; index < users.length; index++) {
    const user = users[index];   
    if (telephone==user.tel) {
      return  user;
    }
  }
 }
 function getDataObject(nom) {
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if(nom==element.nom){
            return element;
        }      
    }   
 }
//  function AnnuleTransactions(val){
//     for (let index = 0; index < users.length; index++) {
//         t= users[index];
//         if(val==t.tel){
//              console.log(t.tel);
//            return true
//         } 
//         return false    
//     }
//  }
 function Annuler(val) {
    let transactionTrouvee = false;
    for (let i = 0; i < users.length; i++) {
      if (users[i].tel == val) {
        transactionTrouvee = true;
        // users[i].etat = 'annulé';
        break;
      }
    }
    if (transactionTrouvee) {
       return val  
    }
}
function getTransactions() {
    const trans=document.getElementById("trans")
    choice=trans.selectedIndex;
    valChercher=trans.options[choice].textContent;    
    if(valChercher=="Dépôt" && !champNumero.value==''){
        let val=champNumero.value
        faireDepotRetrait(valChercher,val,phone.textContent);
    }else if(valChercher=="Dépôt" && champNumero.value==''){
        faireDépôt("Dépôt",phone.textContent);       
    }else if(valChercher=='Retrait'){
        faireRetrait(valChercher,phone.textContent);
    }     
}
let id=1;
getUsers(id)
next.addEventListener('click',()=>{
    id++;
    +getUsers(id);
    if(id==users.length){
        id=0;
    }
})
btnDetail.addEventListener('click',()=>{
    form.style.display='block';
})
sauvegarder.addEventListener('click',()=>{
    getTransactions();
    // form.style.display="none"
})
champNumero.addEventListener('keyup',()=>{
    const input=champNumero.value;
    const resultat=users.filter(item=>item.tel.includes(input))
    let suggestion='';
     if (input!='') {
         resultat.forEach(resultItem=>
             suggestion+=`<ul id="sugg">${resultItem.tel}</ul>`            
         )
        }       
        document.getElementById("champSuggestion").innerHTML=suggestion;
        document.querySelectorAll('#sugg').forEach(sug=>{
            sug.addEventListener('click',()=>{
                champNumero.value=sug.textContent;
                document.getElementById("champSuggestion").textContent=""
            })
    })
})
faPlus.addEventListener('click',()=>{
    const ajout=document.getElementById('ajout');
    ajout.style.display="block"
})
enregistrer.addEventListener('click',()=>{
     lastname.innerHTML=lasname.value;
     firstname.innerHTML=firsname.value;
     phone.innerHTML=phon.value;
     email.innerHTML=mail.value;
     solde.innerHTML=slde.value;
     let p='';
     let j=0;
     users.push({nom:lasname.value,prenom:firsname.value,telephone:phon.value,mail:mail.value,sold:slde.value})
    console.log(users);  
        tbody.innerHTML=p;
        code.innerHTML=j;
        j++;       
    ajout.textContent=''
})
annuler.addEventListener('click',()=>{
    ajout.style.display="none"
})
champText.addEventListener('keyup',()=>{
    const input=champText.value;
    const resultat=users.filter(item=>item.nom.toLocaleLowerCase().includes(input.toLocaleLowerCase())|| item.prenom.toLocaleLowerCase().includes(input.toLocaleLowerCase()) ||item.tel.toLocaleLowerCase().includes(input.toLocaleLowerCase()) || item.email.toLocaleLowerCase().includes(input.toLocaleLowerCase()));   
    let suggestion='';
     if (input!='') {
         resultat.forEach(resultItem=>
             suggestion+=` <div id="sugg">
             <div id="text">${resultItem.prenom+" "+ resultItem.nom }</div>
             <img src="${resultItem.imgProf}",alt="..." id="imgSugg">
             </div>`            
         )}       
        document.getElementById("suggestiontext").innerHTML=suggestion;
        document.querySelectorAll('#text').forEach(sug=>{
            sug.addEventListener('click',()=>{
                champText.value=sug.textContent;
                // console.log(champText.value);
                const txt=champText.value
                const person=getDataObject(txt.split(' ')[1]);
                // console.log(persons);
                //   console.log(person);
                  lastname.innerHTML=person.nom;
                  firstname.innerHTML=person.prenom;
                  phone.innerHTML=person.tel;
                  email.innerHTML=person.email;
                  solde.innerHTML=person.solde+" "+"FCFA"
                  img.src=person.imgProf;
                  let p="";
                  let j=1
                  person.transactions.forEach(element => {
                      p+=`<tr>
                      <td>${element.numero}</td>
                      <td>${element.date}</td>
                      <td>${element.sens==1 ?'Dépôt':'Retrait'+"&nbsp"+'<button id="suppTrans"><i class="fa-sharp fa-solid fa-xmark" id="faSolid"></i></button>'}</td>
                      <td>${element.montant}</td>
                      </tr>`
                      tbody.innerHTML=p;
                      code.innerHTML=j;
                      j++;       
                  }); 
                //   console.log(person);
               
                document.getElementById("suggestiontext").textContent=''
            })
    })
})
eye.addEventListener('click',()=>{
    let a="";
    const vue=getPersonne(champNumero.value);
    a+=`<div class="vue">
    <div id="voir">${vue.prenom +"  "+vue.nom}</div> 
    <img src="${vue.imgProf} alt="..." id="imgSugg">      
    </div>`
    document.querySelector(".vue").innerHTML=a;
   document.querySelectorAll('#voir').forEach(voie=>{
    voie.addEventListener('click',()=>{
            const voirepers=champNumero.value;
            console.log(voirepers);
    const perso=getPersonne(voirepers);
    console.log(perso);
    lastname.innerHTML=perso.nom;
    firstname.innerHTML=perso.prenom;
    phone.innerHTML=perso.tel;
    email.innerHTML=perso.email;
    solde.innerHTML=perso.solde+" "+"FCFA"
    img.src=perso.imgProf;
    let p="";
    let j=1
    perso.transactions.forEach(element => {
        p+=`<tr>
        <td>${element.numero}</td>
        <td>${element.date}</td>
        <td>${element.sens==1 ?'Dépôt':'Retrait'+"&nbsp"+'<button id="suppTrans"><i class="fa-sharp fa-solid fa-xmark" id="faSolid"></i></button>'}</td>
        <td>${element.montant}</td>
        </tr>`
        tbody.innerHTML=p;
        code.innerHTML=j;
        j++;       
     }); 
     document.querySelector(".vue").textContent=''
    })
    document.getElementById("suggestiontext").textContent=''
     })
  
})
annulTrans.addEventListener('click',AnnuleTransactions)
    // event.preventDefault();
    // setTimeout(function() {
    // }, 3000); 
    
// })
function AnnuleTransactions() {
     
    users.forEach(el=>{
        if(el.transactions>0){
            console.log(el.transactions);
            const dernierTrans=el.transactions.pop();
        }
    })
    
}
console.log(AnnuleTransactions());