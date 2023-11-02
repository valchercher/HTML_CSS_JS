const conteneur=document.querySelector('.conteneur')
const header=document.querySelector('.header');



const Quiz1=[
    {
        question:"Quel est le Meilleur Langage de Programmation en 2022",
        a:"Java",
        b:"C",
        c:"Python",
        d:"JavaScript",
        correct:"d",
    },
    {
        question:"Quelle année JavaScript est lancé?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"aucune des dates",
        correct:"b",
    },
    {
        question:"Que signifie CSS?",
        a:"Central Style Sheets",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Cars SUVs Sailboats",
        correct:"b",
    },
    {
        question:"Que signifie HTML?",
        a:"Hypertext Markup Language",
        b:"Hypertext Mardown Language",
        c:"Hyperloop Machine Language",
        d:"Hypertext  Motorboats Lamborginis",
        correct:"a",
    },
   
];
const quiz=document.getElementById('quiz');
const questionEls=document.querySelectorAll('.answer');
const questionEl=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const valider=document.getElementById('valider');


let currentQuiz=0;
let score=0
loadQuiz()

function loadQuiz(){
    deselectAnswers()
    const QuizDonne=Quiz1[currentQuiz]
    questionEl.innerText=QuizDonne.question
    a_text.innerText=QuizDonne.a
    b_text.innerText=QuizDonne.b
    c_text.innerText=QuizDonne.c
    d_text.innerText=QuizDonne.d

}
function deselectAnswers(){
    questionEls.forEach(answerEl => answerEl.checked=false)
}
function getSelected(){
    let quest  
    questionEls.forEach(answerEl=>{
        if(answerEl.checked){
            quest=answerEl.id

        }
    })
    return quest
}

function valide(){
    const quest = getSelected()
    if(quest){
        if(quest===Quiz1[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if(currentQuiz < Quiz1.length){
            loadQuiz()
        }else{
            
            const final=document.getElementById('final');
           final.innerHTML=`<h2 > Vous avez trouver ${score}/${Quiz1.length} questions correcte</h2> 
           <p>${messages}</p>           
            <button onclick="location.reload()">Rejouer</button>`
            
            final.style.height="20%";
            final.style.backgroundColor="white"

        }
      


    }
};