  
console.log(quiz.length)

const h1 = document.createElement('h1');
Quiz.appendChild(h1);
h1.textContent = "Quizz(Jeu de Question/Réponse)"
h1.style.background = "blueviolet";
h1.style.color = "white"
h1.style.width = '100%'
h1.style.height = '10%'
h1.style.textAlign = "center"

document.body.appendChild(conteneur);
conteneur.appendChild(Quiz);

const h2 = document.createElement('h2');
Quiz.appendChild(h2);


const ul = document.createElement('ul')
Quiz.appendChild(ul);

const j = 0;

function createText(){
    for(let i = 0;i<quiz[j].length;i++)
{ 
    if(i == 0){
        h2.innerHTML = h2.innerHTML+quiz[j][i]
    }
   else{
    const li = document.createElement('li');
    ul.appendChild(li)
    const input = document.createElement("input");
    li.appendChild(input);
    input.setAttribute("type","radio")
    input.setAttribute('id',' abcd'[i])
    input.setAttribute('class','reponse')
    input.setAttribute('name','acces');
    
    const label = document.createElement('label');
    li.appendChild(label);
    label.setAttribute('for', ' abcd'[i]);
    label.setAttribute('id'," text"+i)
    
    label.innerHTML = label.innerHTML+quiz[j][i] 
   }
}
}
createText();

const boutton = document.createElement('button');
Quiz.appendChild(boutton);
boutton.setAttribute('id',"valider");
boutton.textContent = "valider"


let score = 0
const nombreQuiz = 0;



const reponseEls=document.querySelectorAll('.reponse');
const A = document.getElementById('A');
const B = document.getElementById('B');
const C = document.getElementById('C');
const D = document.getElementById('D');
const valider = document.getElementById('valider');
const input=document.getElementsByTagName('input');

const p=document.createElement('p')
Quiz.appendChild(p);
p.id='final'
let selectedSize;
const final = document.querySelector('#final');
const btn = document.getElementById('valider');        
const radioButtons = document.querySelectorAll('input[name="acces"]');
console.log(radioButtons.length)
btn.addEventListener("click", () => {
     let selecteSize;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selecteSize = radioButton.value;
            console.log(selecteSize);
            if(selecteSize===correct[0])
            score++;
        }   

        final.innerHTML=`<h2 > Vous avez trouvé  ${score}/${quiz.length} questions correcte</h2>          
            <button onclick="location.reload()">Rejouer</button>` 
            
            final.style.backgroundColor="white"
    }
    
});