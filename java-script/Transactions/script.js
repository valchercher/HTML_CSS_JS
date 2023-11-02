const lastname = document.getElementById("lastname");
const firstname= document.getElementById("firstname");
const phone    = document.getElementById("phone");
const email    = document.getElementById("email");
const solde    = document.getElementById("solde");
const tbody    = document.querySelector('tbody');
const img      = document.querySelector('img');
const code     = document.querySelector('code');
const form     = document.querySelector('.form');
const trans    = document.getElementById("trans");
const save     = document.getElementById("save");
const mnt      = document.getElementById("mnt");
const tlph     = document.getElementById("tlph");
const champText= document.getElementById("champText");
const xol      = document.getElementById("xol")
const users=[
    {  id:1,nom:"Ndiaye",prenom:"Abdou",tel:'771235420',email:"ndiaye@gmail.com",solde:'2700',
        imgProf:"https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW1lcmljYW4lMjBib3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        transactions:[
           {
             numero:'1',
             date:'10/01/2022',
             sens:'1',
             montant:'1200',
           },
           {
            numero:'2',
            date:'10/02/2022',
            sens:'1',
            montant:'1500',
          },
          {
            numero:'3',
            date:'15/03/2023',
            sens:'-1',
            montant:'1500',
          },
          {
            numero:'4',
            date:'10/05/2023',
            sens:'1',
            montant:'2500',
          },
          {
            numero:'5',
            date:'03/07/2023',
            sens:'-1',
            montant:'1000',
          } 
        ]
    },
    { id:2,nom:"Boy",prenom:"Moustapha",tel:'771530420',email:"boy@gmail.com",solde:'2000',
        imgProf:"https://images.unsplash.com/photo-1563452965085-2e77e5bf2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YW1lcmljYW4lMjBib3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        transactions:[
           {
             numero:'1',
             date:'10/02/2022',
             sens:'1',
             montant:'1400',
           },
           {
            numero:'2',
            date:'02/12/2022',
            sens:'1',
            montant:'3000',
          },
          {
            numero:'3',
            date:'10/05/2023',
            sens:'-1',
            montant:'2400',
          } 
        ]
    },
    { id:3,nom:"Sall", prenom:"Awa",tel:'700035629',email:"awasall@gmail.com",solde:0,
        imgProf:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW1lcmljYW4lMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        transactions:[
           { 
            numero:'1',
            date:'10/03/2022',
            sens:'1',
            montant:'5000',
           },{ 
            numero:'2',
            date:'30/09/2022',
            sens:'-1',
            montant:'5000',
           } 
        ],
    },
    { id:4,nom:"Sarr", prenom:"Djim",tel:'775546878',email:"djim@gmail.com",solde:'500',
        imgProf:"https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYW4lMjBnaXJsJTIwYWZyaWNhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        transactions:[
           { 
            numero:'1',
            date:'10/04/2022',
            sens:'1',
            montant:'6500',
           },{ 
            numero:'2',
            date:'30/11/2022',
            sens:'-1',
            montant:'6000',
           } 
        ],
    },
    { id:5,nom:"Niouky", prenom:"Marisa",tel:'785142378',email:"niouky@gmail.com",solde:'100',
        imgProf:"https://images.unsplash.com/photo-1593351799227-75df2026356b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFtZXJpY2FuJTIwJTIwYWZyaWNhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        transactions:[
           { 
            numero:'1',
            date:'10/07/2022',
            sens:'1',
            montant:'500',
           },{ 
            numero:'2',
            date:'30/01/2022',
            sens:'-1',
            montant:'400',
           } 
        ],
    }    

]
const now=new Date();
let annee=now.getFullYear();
let mois=now.getMonth()+1;
let jour=now.getDate();
let heure=now.getHours();
let minute=now.getMinutes();
let seconde=now.getSeconds();
const date=jour+"/"+mois+"/"+annee+" "+heure+":"+minute+":"+seconde
function getDataById(id,users) {
    return users.find(t=>t.id==id)
}
function toggleForm(){
    form.classList.toggle('disabled');
}
function getDataPersonne(id) {
    let user=getDataById(id,users);
    lastname.innerHTML = user.nom;
    firstname.innerHTML = user.prenom;
    phone.innerHTML = user.tel;
    email.innerHTML = user.email;
    solde.innerHTML = user.solde+""+"F";
    img.src=user.imgProf;
    let p="";
    let j=0;
    user.transactions.forEach(use => {
        p+=`<tr>
        <td>${use.numero}</td>
        <td>${use.date}</td>
        <td>${use.sens==1?'Dépôt':'Retrait'}</td>
        <td>${use.montant}F</td>
        </tr>`
        tbody.innerHTML=p;
        j++;
    });
    code.innerHTML=j;   
}
function TransactionDépot(numero,montant) {
  let personne=getNumero(numero);
  let compte=parseInt(personne.solde);
  const result=eval(compte+ montant);
  personne.solde=result;
  solde.innerHTML=result+""+"F";
  let q= parseInt(code.innerHTML)+1;
    let p='';
    personne.transactions.push({numero:q,date,sens:1,montant})
    p+=`<tr>
        <td>${q}</td>
        <td>${date}</td>
        <td>dépôt</td>
        <td>${montant}F</td>
        </tr>`
        tbody.innerHTML+=p;
       code.innerHTML++;
       q++;
}
function TransactionRetrait(numero,montant) {
  let personne=getNumero(numero);
  let compte=parseInt(personne.solde);
  const result=eval(compte - montant);
  personne.solde=result;
  solde.innerHTML=result+""+"F"
  let q= parseInt(code.innerHTML)+1;
    let p='';
    personne.transactions.push({numero:q,date,sens:-1,montant})
    p+=`<tr>
        <td>${q}</td>
        <td>${date}</td>
        <td>${personne.sens==1?'Depôt':'Retrait'}</td>
        <td>${montant}F</td>
        </tr>`
        tbody.innerHTML+=p;
       code.innerHTML++;
       q++;
}
function getNumero(telephone){
   return users.find(p=>p.tel==telephone)   
}
function getDataObject(nom) {
  return users.find(et=>et.nom==nom)
  
}
function Transfert(numSend,numDest,montant) {
  let personne=getNumero(numSend);
  const compte=parseInt(personne.solde);
  const result=eval(compte-montant);
  personne.solde=result;
  solde.innerHTML=result+"F";
  let r=parseInt(code.innerHTML)+1;
  let k=parseInt(code.innerHTML)+1
  personne.transactions.push({numero:r,date:date,sens:'-1',montant:montant})
  let q=0;
  let p="";
  p+=`<tr>
  <td>${r}</td>
  <td>${date}</td>
  <td>${personne.sens==1?'Depôt':'Retrait'}</td>
  <td>${montant}F</td>
  </tr>`
  tbody.innerHTML+=p;
  q++;

  let person=getNumero(numDest);
  const compt=parseInt(person.solde);
  const resul=eval(compt+montant);
  person.solde=resul;
  person.transactions.push({numero:k,date:date,sens:'1',montant:montant})
  code.innerHTML++;
}
let id=1;
getDataPersonne(id);
document.querySelector(".next").addEventListener('click',()=>{
    id++;
    getDataPersonne(id)
    if(id==users.length){
        id=0;
    }
})
document.getElementById("btnDetail").addEventListener('click',()=>{
    form.style.display="block";
})

save.addEventListener('click',()=>{
  choice=trans.selectedIndex;
  valcherchee=trans.options[choice].value
    montant=parseInt(mnt.value);
   const teleph =getNumero(phone.textContent);
   
    const telephone=teleph.tel;
   if (valcherchee=='d' && tlph.value=='') {
    TransactionDépot(telephone,montant) 
    
   } else if(valcherchee=='d'&& tlph!=''){

   Transfert( telephone,tlph.value,montant)  
   }else{
    TransactionRetrait(telephone,montant)
   }  
})

champText.addEventListener('keyup',()=>{
  const input=champText.value;
  let result=users.filter(item=>item.nom.toLocaleLowerCase().includes(input.toLocaleLowerCase()) || item.prenom.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
  let suggestion='';
  result.forEach(telItem=>{

    suggestion+=`<div class="cher">
    <div>${telItem.nom+" "+telItem.prenom}</div>
    <img src="${telItem.imgProf}" id="imgSug">
    </div>`
  })
  document.getElementById("suggestiontext").innerHTML=suggestion;
  const cher=document.querySelectorAll('.cher');
  cher.forEach(che=>{
   
    che.addEventListener('click',()=>{
      champText.value=che.textContent;
                // console.log(champText.value);
                const text=champText.value
                const txt=text.trim();
                const re=getDataObject(txt.split(' ')[0]);
        lastname.innerHTML = re.nom;
    firstname.innerHTML = re.prenom;
    phone.innerHTML = re.tel;
    email.innerHTML = re.email;
    solde.innerHTML = re.solde+""+"F";
    img.src=re.imgProf;
    let p="";
    let j=0;
    re.transactions.forEach(use => {
        p+=`<tr>
        <td>${use.numero}</td>
        <td>${use.date}</td>
        <td>${use.sens==1?'Dépôt':'Retrait'}</td>
        <td>${use.montant}F</td>
        </tr>`
        tbody.innerHTML=p;
    
      })
      document.getElementById("suggestiontext").innerHTML=""
      cher.textContent=""
    })
  })
})
tlph.addEventListener('keyup',()=>{
  const input=tlph.value;
  let result=users.filter(item=>item.tel.includes(input));
  let suggestion='';
  result.forEach(telItem=>{
    suggestion+=`<div class="ter">
    ${telItem.tel}
    </div>`
  })
  document.getElementById("suggestionTel").innerHTML=suggestion;
  const ter=document.querySelectorAll('.ter');
  ter.forEach(te=>{  
    te.addEventListener('click',()=>{
      const t=te.innerHTML;
      tlph.value =t.trim();
      document.getElementById("suggestionTel").innerHTML=""
    })
  })
})
xol.addEventListener('click',()=>{
  const re=getNumero(tlph.value);
lastname.innerHTML = re.nom;
firstname.innerHTML = re.prenom;
phone.innerHTML = re.tel;
email.innerHTML = re.email;
solde.innerHTML = re.solde+""+"F";
img.src=re.imgProf;
let p="";
let j=0;
re.transactions.forEach(use => {
p+=`<tr>
<td>${use.numero}</td>
<td>${use.date}</td>
<td>${use.sens==1?'Dépôt':'Retrait'}</td>
<td>${use.montant}F</td>
</tr>`
tbody.innerHTML=p;

})

})