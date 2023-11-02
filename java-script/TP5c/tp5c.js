const conteneur = document.querySelector('.conteneur');
const Quiz = document.getElementById('Quiz');

var tabquiz= [
    {
        question:   "Quel est le Meilleur Langage de Programmation en 2022",
        reponses:[
                "Java",
                "C",
                "Python",
                "JavaScript",
            ],
        correct :3
    },
    {
        question:"Quelle année JavaScript est lancé?",
        reponses:[
            "1996",
            "1995",
            "1994",
            "aucune des dates",
        ],
       correct:1,
    },
    {
        question:"Que signifie CSS?",
        reponses:[
            "Central Style Sheets",
            "Cascading Style Sheets",
            "Cascading Simple Sheets",
            "Cars SUVs Sailboats",
        ],    
        correct:1,
    },
    {
        question:"Que signifie HTML?",
        reponses:[
            "Hypertext Markup Language",
            "Hypertext Mardown Language",
            "Hyperloop Machine Language",
            "Hypertext  Motorboats Lamborginis",
        ],
        correct:0,
    },
        
]
// function createText(){
//     const label=document.createElement('label');
//     Quiz.appendChild(label);
//     label.setAttribute('for','0')
// }

const h1 = document.createElement('h1');
Quiz.appendChild(h1);
h1.textContent = "Quizz(Jeu de Question/Réponse)"

const position=0
const score=0

function createOptions(element,title){
    const question=document.createElement('div')
    question.className="question";
    const titreQuestion=document.createElement('h2');
    titreQuestion.innerText=title;
    Quiz.appendChild(titreQuestion);
    Quiz.appendChild(question)
    for(let i=0;i<element.length;i++){
        question.appendChild(createAnOption(element[i],i));
        }

  
}

 function createAnOption(option, pos) {
   
    let label=document.createElement("label");
    label.innerText=option;
    label.setAttribute('for',pos);
    let input=document.createElement("input");
    input.type="radio";
    input.id=pos;
    input.name="pos";
    input.className="optionReponse"
    let divOption=document.createElement("div");
    divOption.className="option";
    divOption.appendChild(input);
    divOption.appendChild(label);
    return divOption;
    
 }


createOptions(tabquiz[position].reponses,tabquiz[position].question);
const button=document.createElement('button')
Quiz.appendChild(button);
button.innerText="VALIDER";
button.id="btn"
const btn=document.getElementById('btn');
const optionReponse=document.querySelectorAll('input[class="optionReponse"]');
const idAll=document.querySelectorAll('id')
const zero=document.getElementById('0')
const un=document.getElementById('1')
const deux=document.getElementById('2')
const trois=document.getElementById('3')

function getSelected(){
    let quest  
    optionReponse.forEach(reponseEl=>{
        if(reponseEl.checked){
            quest=reponseEl.id

        }
    })
    return quest
}
console.log(getSelected())

btn.addEventListener('click',()=>{
    const quest = getSelected()
        if(quest){
            if(quest==tabquiz[position].correct){
                score++
            }
            position++
            if(position < tabquiz.length){
                
            createOptions(tabquiz[position].reponses,tabquiz[position].question);
            }else{
                innerHTML=`<h2 > Vous avez trouver ${score}/${tabquiz.length} questions correcte</h2>          
                        <button onclick="location.reload()">Rejouer</button>`
            }
        }

})
// function valide(){
//     const quest = getSelected()
//     if(quest){
//         if(quest===Quiz1[currentQuiz].correct){
//             score++
//         }
//         currentQuiz++
//         if(currentQuiz < Quiz1.length){
//             loadQuiz()
//         }else{
            
//             // const final=document.getElementById('final');
//            innerHTML=`<h2 > Vous avez trouver ${score}/${Quiz1.length} questions correcte</h2> 
//            <p>${messages}</p>           
//             <button onclick="location.reload()">Rejouer</button>`
            
//             // final.style.height="20%";
//             // final.style.backgroundColor="white"

//         }
      


//     }
// };