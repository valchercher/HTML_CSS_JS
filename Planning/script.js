const conteneur = document.querySelector(".conteneur")
const onbtn = document.getElementById('onbtn')
const box1 = document.querySelector('.box1')
const caling=document.querySelectorAll(".caling")
const jour =document.querySelectorAll(".jour")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")
const heure =document.getElementById('heure')
const day1 = document.querySelectorAll('.day')
const chColor=document.querySelectorAll('#chColor')
const ul = document.querySelectorAll('ul')
const ad1 =document.querySelectorAll('.ad1')
const boxes = document.querySelectorAll('.box');
const selection = document.querySelector('.selection');
const ajouters = document.querySelectorAll(".ajouter")
const selcted =document.querySelector('.selected')
const main = document.querySelector(".main")
const modaleContent=document.querySelector('.modaleContent')
const fiel= document.querySelector('.fiel')
const btnQuitter = document.getElementById('btnQuitter');
const selectModules=document.querySelector(".selectModules")
const selectEnseignants= document.querySelector(".selectEnseignants")
const selectSalles =document.querySelector(".selectSalles")
const selectheureDebuts=document.querySelector(".selectheureDebuts")
const selectheureFins=document.querySelector(".selectheureFins")
const ajoutBtn =document.querySelector('#ajoutBtn')
const day =document.querySelectorAll(".day")
const footerModale= document.querySelector(".footerModale")
const planing=document.querySelector(".planing")
const afficherplanning=document.querySelector("#afficherplanning")
const messageErreur =document.querySelector('.messageErreur')
let day_actuel=0
let plus_actuel=0
const profs = [
    {id : 1, nom : 'Aly',semaine:'',modules:[1,2,3], plannings : [[],[],[],[]]},
    {id : 2, nom : 'Baila',semaine:'',modules:[6,2], plannings : [[],[],[],[]]},
    {id : 3, nom : 'Ndoye',semaine:'',modules:[4,3,5], plannings : [[],[],[],[]]},
    {id : 4, nom : 'Mbaye',semaine:'',modules:[1,4], plannings : [[],[],[],[]]},
    {id : 5, nom : 'Djiby',semaine:'',modules:[1,3], plannings : [[],[],[],[]]},
    {id : 6, nom : 'Seckouba',semaine:'',modules:[1,6], plannings : [[],[],[],[]]},
];
const modules = [
    {id : 1, nom : 'Javascript',semaine:'', plannings : [[],[],[],[]]},
    {id : 2, nom : 'Python',semaine:'', plannings : [[],[],[],[]]},
    {id : 3, nom : 'Java',semaine:'', plannings : [[],[],[],[]]},
    {id : 4, nom : 'PHP',semaine:'', plannings : [[],[],[],[]]},
    {id : 5, nom : 'ALGO',semaine:'', plannings : [[],[],[],[]]},
    {id : 6, nom : 'LC',semaine:'', plannings : [[],[],[],[]]},
];
const classes = [
    {id : 1, nom : 'L2 GLRS A',semaine:'', plannings : [[],[],[],[]],effectif:30},
    {id : 2, nom : 'L2 GLRS B',semaine:'', plannings : [[],[],[],[]],effectif:29},
    {id : 3, nom : 'L2 ETSE',semaine:'', plannings : [[],[],[],[]],effectif:50},
    {id : 4, nom : 'L1 A',semaine:'', plannings : [[],[],[],[]],effectif:10},
    {id : 5, nom : 'IAGE B',semaine:'', plannings : [[],[],[],[]],effectif:20},
    {id : 6, nom : 'L2 CDSD',semaine:'', plannings : [[],[],[],[]],effectif:25},


    ];
    const salles = [
        {id : 1, nom : '101',semaine:'', plannings : [[],[],[],[]],effectif:30},
        {id : 2, nom : '102',semaine:'', plannings : [[],[],[],[]],effectif:29},
        {id : 3, nom : '103',semaine:'', plannings : [[],[],[],[]],effectif:50},
        {id : 4, nom : '104',semaine:'', plannings : [[],[],[],[]],effectif:10},
        {id : 5, nom : '201',semaine:'', plannings : [[],[],[],[]],effectif:10},
        {id : 6, nom : 'incub',semaine:'', plannings : [[],[],[],[]],effectif:25},


        ];

 const HeuresDebut=[ 
                      {id:1, nom:'8H'},
                      {id:2, nom:'9H'},
                      {id:3, nom:'10H'},
                      {id:4, nom:'11H'},
                      {id:5, nom:'12H'},
                      {id:6, nom:'13H'},
                      {id:7, nom:'14H'},
                      {id:8, nom:'15H'},
                      {id:9, nom:'16H'},
                      {id:10,nom:'17H'}
                ];
const HeuresFin=[
                {id:1, nom:'8H'},
                {id:2, nom:'9H'},
                {id:3, nom:'10H'},
                {id:4, nom:'11H'},
                {id:5, nom:'12H'},
                {id:6, nom:'13H'},
                {id:7, nom:'14H'},
                {id:8, nom:'15H'},
                {id:9, nom:'16H'},
                {id:10,nom:'17H'}
            ];

    const currentClass = {
        nom : 'DevWeb',
        semaine : '13/03/2023 - 18/03/2023',
        effectif: 29,
        plannings : [
            [
                {module : 2, prof:2, salle: 4, debut: 8, duree :4}
            ] , 
            [] , [] , [] , [
                {module : 6, prof:2, salle: 4, debut: 10, duree :2},
                {module : 6, prof:2, salle: 4, debut: 12, duree :2}
            ] , [] ]
    };

onbtn.addEventListener('click',()=>{
    let col="#ee9d9d";
    let coul="#9e9c9c"
    if(onbtn.checked){
        for(let i=0;i<caling.length;i++){
            caling[i].style.background="#9e9c9c"
        }
        for(let i=0;i<jour.length;i++){
            jour[i].style.background="#ee9d9d"
        } 
        for(let i=0;i<ad1.length;i++){
            ad1[i].style.color="black"
        }   
        for(let i=0;i<ul.length;i++){
            ul[i].style.color="black"
        }
        box1.style.background=coul
        box1.style.color="black"
        box2.style.background=col
        box2.style.color="black"
        box3.style.background="#FFC0CB"
        heure.style.color="black"
        for(let i=0;i<chColor.length;i++){
            chColor[i].style.color="black"
        }
        
    }else{
        for(let i=0;i<caling.length;i++){
            caling[i].style.background=""
        }
        for(let i=0;i<jour.length;i++){
            jour[i].style.background=""
        }
        for(let i=0;i<ad1.length;i++){
            ad1[i].style.color=""
        } 
        for(let i=0;i<ul.length;i++){
            ul[i].style.color=""
        } 
        for(let i=0;i<chColor.length;i++){
            chColor[i].style.color=""
        }     
        heure.style.color=""
        box1.style.background=""
        box2.style.background=""
        box3.style.background=""
        box2.style.color=""
    }  
})
    const prof= getDataById(2,classes);
    // console.log(prof== undefined ? 'doesn\'t exist':prof.nom)
    // console.log(prof);
    function getDataById (id,data)
    {
        // let p = undefined;
        // profs.forEach(prof => {
        //     if(prof.id == id)
        //     {
        //         p = prof;
        //         return ;
        //     }
        // });
        // return p;
        // return profs.find((p)=>p.id == id) 
        return data.find((p)=>p.id == id)
    }
    // chargement des données
function chargerSelect (data, selecte,label='Selectionner')
{    let i=1;
     selecte.innerHTML = '';
    const option = creatingElement('option');
    option.innerHTML = label;
    selecte.appendChild(option);
    data.forEach(d => {
        const option = creatingElement('option');
        option.innerHTML = d.nom;
        option.value=i++
        selecte.appendChild(option);
    });
}
function creatingElement(elName)
{
    return document.createElement(elName);
}
boxes.forEach(box => {
    box.addEventListener('click',(e)=>{
        // console.log(e.target)
        // const boxTitle = box.classList[0]; au cas ou ......
        const boxTitle = box.classList;
        if(boxTitle.contains('salle'))
        {
            chargerSelect(salles,selection,'selectionner une salle');
            box.style.background="rgb(9, 119, 9)"
        }
        if(boxTitle.contains('module'))
        {
            chargerSelect(modules,selection,'selectionner  un module');
            box.style.background="red"
        }
        if(boxTitle.contains('enseignant'))
        {
            chargerSelect(profs,selection,'selectionner  un prof');
            box.style.background=" rgb(66, 66, 237)"
        }
        if(boxTitle.contains('classe'))
        {
            chargerSelect(classes,selection,'selectionner  une classe');
            box.style.background="orange"
        }
       
        choicemodul= selection.selectedIndex
        // console.log(choicemodul);
        // for (let i = 0; i <selection.options.length; i++) 
            
        //         if(selection.options[i]){
        //         valeur_chercheeModul = selection.options[i].textContent;
        //         }
        
        // console.log(valeur_chercheeClass)
        // const html=`<span>Plannig :${valeur_chercheeModul} </span>`
        // planing.innerHTML=html
        // generer des couleurs de background
    //     const html=`<span>${valeur_chercheeModul} </span>`
    //             afficherplanning.innerHTML=html
    })
});
function random_bg_color(div) {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    // console.log(bgColor);
  
    div.style.background = bgColor;
    }
    
function printPlanning(debut,duree,selectprof,selectModul,selectclass)
{
    const column = debut-8; //veuillez constantiser le 8
    const div = creatingElement('div');
    div.style.backgroundColor = random_bg_color(div);
    div.style.width = `${duree*10}%`;
    div.style.position = 'absolute';
    div.style.height = '100%';
    div.style.margin="0"
    div.style.marginLeft = `${column*10}%`
    div.className="coursJour"
    caling.forEach(cal=>{
        day_actuel=cal.id
        if(day_actuel==plus_actuel){
            cal.appendChild(div)
        }
    })
    alert(plus_actuel)
    // day.forEach(cal,()=>{
    //     cal.appendChild(div)
    // })  
    // console.log(jours)
    //   jours.forEach(jourEl=>{
    // //      if(jourEl==day_actuel)
    //      jourEl.appendChild(div);
       
    //   }); 
    const span =creatingElement('span')
    div.appendChild(span)
    span.innerHTML=selectprof;
    const span1 =creatingElement('span')
    div.appendChild(span1)
    span1.innerHTML=selectModul;
    const span2 =creatingElement('span')
    div.appendChild(span2)
    span2.innerHTML=selectclass;
}
//  printPlanning(9,3);
//  printPlanning(14,3);
ajouters.forEach(ajouter=>{
    
    ajouter.addEventListener('click',(e)=>{
        // const ajouterEle = ajouter.classList; 
        // if(ajouterEle.contains('lund')){
         fiel.style.display="block"
         plus_actuel=ajouter.id; 
            
         
    })
    
})
chargerSelect(modules,selectModules,'selectionner');
// chargerSelect(profs,selectEnseignants,'selectionner  un prof');
chargerSelect(salles,selectSalles,'selectionner une salle');
chargerSelect(HeuresDebut,selectheureDebuts,'selectionner heure de début');
chargerSelect(HeuresFin,selectheureFins,'selectionner heure de fin');

btnQuitter.addEventListener('click',()=>{
    fiel.style.display="none"
})
selectModules.addEventListener('change',()=>{
    // selectModules.value)
    const idModule=selectModules.value;
    let professeurs=getProfsByIdModule(+idModule);
    chargerSelect(professeurs,selectEnseignants,"choisir un prof");
    // alert(day_actuel)
})
function getProfsByIdModule(idModule)
 {
    const professeurs=[];
    profs.forEach(prof=> {
        if (prof.modules.includes(idModule)) {
            professeurs.push(prof);
        }
    });  
    return professeurs;
   
 }

//  pour l'effectifs des salles de classes
//  selectSalles.addEventListener('change',()=>{
//     // selectModules.value)
//     const idSalle=selectSalles.value;
//     let clases=getProfsBySalle();
//     // chargerSelect(clases,selection,"choisir un classe");
//     // alert(day_actuel)
// })
// function getProfsBySalle()
//  {
//     const clases=[];
//     classes.forEach(classe=> {
//         if (classe.effectif) {
//             // console.log(classe.effectif)
//         }
//         // console.log(classe.id);
//     });  
//     return clases;
   
//  }
let administration=[];
 

 
ajoutBtn.addEventListener('click',()=>{
        choiceD = selectheureDebuts.selectedIndex  // Récupération de l'index du <option> choisi
        choiceF = selectheureFins.selectedIndex
        choiceProf = selectEnseignants.selectedIndex
         choicemodul = selectModules.selectedIndex
        choicesalle = selectSalles.selectedIndex
        valeur_chercheeD = selectheureDebuts.options[choiceD].textContent; // Récupération du texte du <option> d'index "choice"
        valeur_chercheeF = selectheureFins.options[choiceF].textContent;
        valeur_chercheeprof = selectEnseignants.options[choiceProf].textContent
        valeur_chercheeModul = selectModules.options[choicemodul].textContent 
        valeur_chercheesalle = selectSalles.options[choicesalle].textContent 

         valeurF=valeur_chercheeF.split('H')[0];
         valeurD=valeur_chercheeD.split('H')[0];
        duree=valeurF-valeurD;
            if(duree==0){
             span=creatingElement('span');
            span.innerHTML="l'heure de fin doit être supérieur a l'heure de debut"
            messageErreur.appendChild(span)
            console.log(span.textContent)
        }else{
           messageErreur.style.display="none"
            printPlanning(valeurD,duree,valeur_chercheeprof,valeur_chercheeModul,valeur_chercheesalle)
            fiel.style.display="none"
         } 
         m=valeur_chercheeModul
         p=valeur_chercheeprof
         s=valeur_chercheesalle;
         hD=valeur_chercheeD;
         hF=valeur_chercheeF
         const objets=[
            m=m,p=p,s=s,hD=hD,hF=hF
         ]
   console.log(profs[0].plannings.push(objets));  
           console.log(profs[0].plannings);
          
})
chargerSelect(salles,selectSalles,'selectionner une salle');
chargerSelect(HeuresDebut,selectheureDebuts,'selectionner heure de début');
chargerSelect(HeuresFin,selectheureFins,'selectionner heure de fin');

function isProfDispo(prof,hD,hF){
    let resultat=true
    prof[0].plannings[1].forEach(c => {
        if(c.hd == hD && c.hf == hF || c.hd < hD && hD < c.hf || c.hd < hF && hF < c.hf){
            resultat= false
            console.log(c);
        }
     
    });
    return resultat
}
console.log(isProfDispo(profs,10,12))