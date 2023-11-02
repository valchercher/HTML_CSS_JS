const conteneur = document.getElementById("conteneur");
const onbtn = document.getElementById("onbtn");
const box1  = document.querySelector(".box1");
const box2  = document.querySelector(".box2");
const box3  = document.querySelector(".box3");
const clic  = document.querySelector('input[class="clic"]');
const cours = document.querySelector(".cours");
const heure = document.querySelector('.heure');
const lund  = document.querySelector("#lund");
 const lund1 = document.querySelectorAll(".lund1");
const span1 = document.getElementById("span1");
const jour = document.querySelectorAll('#jour');
const jourOuvrable=document.querySelector(".jourOuvrable");
const planing = document.getElementById('planing')
const cour = document.getElementById('cours')
const span = document.getElementsByTagName('span')
const teacher= document.getElementById('teacher')
const enseignant = document.querySelector(".enseignant");
const classe     = document.querySelector('.classe')
const salle      = document.querySelector('.salle');
const module     = document.querySelector(".module");
const selection  = document.getElementsByClassName('selection');
const room       = document.getElementById('room')

console.log(span.length)
document.body.appendChild(conteneur);
onbtn.addEventListener('click',()=>{
    let col="#ee9d9d";
    let coul="#9e9c9c"
    let noir="black"
    if(onbtn.checked){
        for(let i=0;i<span.length;i++){
            span[i].style.color="black"
        }
        for(let i=0;i<lund.length;i++){
            lund[i].style.background=col
        }
        for(let i=0;i<span1.length;i++){
            span1[i].style.background=col
        }
        for(let i=0;i<lund1.length;i++){
            lund1[i].style.background=col;
        }
       for(let i=0;i<jour.length;i++){
        jour[i].style.background=coul;
       }
        cours.style.background="#f2a4b1";
        box3.style.background=col;
        jourOuvrable.style.background="#FFC0CB"
        box1.style.background=coul;
        heure.style.background=coul;
        planing.style.color=noir
        

    }else{
        
        for(let i=0;i<span.length;i++){
            span[i].style.color=""
        }
        for(let i=0;i<lund.length;i++){
            lund[i].style.background=""
        }
        for(let i=0;i<span1.length;i++){
            span1[i].style.background=""
        }
        for(let i=0;i<lund1.length;i++){
            lund1[i].style.background="";
        }
       for(let i=0;i<jour.length;i++){
        jour[i].style.background="";
       }
        cours.style.background="";
        box3.style.background="";
        jourOuvrable.style.background=""
        box1.style.background="";
        heure.style.background="";
        planing.style.color=""
        

    }
    
})
var administration=[
    {
        enseignants:[
            "Aly",
            "Baila",
            "Ndoye",
            "Mbaye",
            "Djiby",
            "Seckouba",  
        ]
    },
    {
        salles:[
            "salles",
            "101",
            "102",
            "103",
            "104",
            "201",
            "incub" 
         ]
    },
    {
        classes:[
            "classes",
             "L2 GLRS A",
             "L2 GLRS B",
             "L2 ETSE",
             "L1A",
             "IAGE B",
             "L2 CDSD",
        ]
    },
    {
        modules:[
            "modules",
            "ALGO",
            "PHP",
            "PYTHON",
            "LC",
            "JAVASCRIPT",
            "JAVA",
        ]
    }
    
]
getSelection();
 
function getSelection(){
     
    const ensg=document.querySelector(".selection");
    if(enseignant){
        enseignant.addEventListener('click',()=>{
            for(let i=0;i<administration[0].enseignants.length;i++){
                const option=document.createElement('option');
                option.id="opt"
                option.value="opt"+i
                ensg.appendChild(option);
                option.textContent=administration[0].enseignants[i]        
            }  
            
        enseignant.style.background="rgb(18, 152, 248)"
                          
        })
    }
     if(salle){
        salle.addEventListener('click',()=>{  
            for(let i=0;i<administration[1].salles.length;i++){
                const option=document.createElement('option');
                option.id="opt"
                option.value="opt"+i
                ensg.appendChild(option);
                option.textContent=administration[1].salles[i]       
            } 
            salle.style.background="rgb(7, 176, 7)"                     
        })
    }
     if(classe){
        classe.addEventListener('click',()=>{
            for(let i=0;i<administration[2].classes.length;i++){
                const option=document.createElement('option');
                option.id="opt"
                option.value="opt"+i
                ensg.appendChild(option);
                option.textContent=administration[2].classes[i]        
            } 
            classe.style.background="orange"

        })
    }
    if(module.click) {
    
        module.addEventListener('click',()=>{
            for(let i=0;i<administration[3].modules.length;i++){
                const option=document.createElement('option');
                option.id="opt"
                option.value="module"
                ensg.appendChild(option);
                option.textContent=administration[3].modules[i]
            } 
            module.style.background="red"         
        })
    
    }

}

const select=document.querySelector('select')

select.addEventListener('change',getValueSelected)
function getValueSelected(){
    const option=document.querySelector('option')
    const choice=option.textContent;
    console.log(choice)
    if(choice=="Aly"){
        
        const l1=document.getElementById('l1');
        const span1 =document.createElement('span')
        span1.innerHTML="L2 CDSD"
        l1.appendChild(span1)
        const span2=document.createElement('span')
        span2.id="pyth"
        l1.appendChild(span2)
        span2.innerHTML="PYTHON"
        const span3=document.createElement('span')
        span3.innerHTML="201"
        l1.appendChild(span3)
        const al = document.getElementById('al');
        al.style.background="orange"
        const spa =document.createElement('span')
        spa.innerHTML="L2 CDSD"
        al.appendChild(spa)
        const span=document.createElement('span')
        span.id="pyth"
        al.appendChild(span)
        span.innerHTML="JAVASCRIPT"
        const sp=document.createElement('span')
        sp.innerHTML="102"
        al.appendChild(sp)

    }
}