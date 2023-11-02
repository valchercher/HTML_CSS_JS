const champtext = document.getElementById("champtext");
const champresult=document.getElementById("champresult")
const egal      = document.getElementById("egal")
const onOff    = document.getElementById("onOff")
const desactive= document.querySelectorAll('.desactive');
let val1;
let val2;
let operat;
let result;
champresult.value='0'
function valClick(valeur) {
    champtext.value +=valeur
    return valeur    
}
function vider(val) {
    champtext.value=''
    champresult.value='0'
}
function effacer(val) {
    champtext.value=champtext.value.slice(0,-1);
}
function operateur(op) {
    operat=op
    val1=parseFloat(champtext.value); 
    champtext.value+=op;
    
}
function Ans(r) {
    champtext.value=result;
}
function calcul(op){
    val2=parseFloat(champtext.value.split(op)[1]);
    let cal=' ';
   if (op=="+") {
    cal=val1 + val2
   }
   else  if (op=="-") {
    cal=val1 - val2  
   }
   else  if (op=="*") {
    cal=val1 * val2;

   } else if(op=="/") {
    cal=val1 / val2 

   }else if(op=='**'){
    cal= val1 ** val2

   }
   else{
    cal=val1 * (10**val2)
   }
   return champresult.value=cal;  
}
egal.addEventListener('click',()=>{
    if(isNaN(champresult)){
        champresult.value="is not a number";
        champresult.style.color="red"
        return;
    }
    champresult.value=calcul(operat)

})

onOff.addEventListener('click',()=>{
    if(onOff.checked){
        champtext.style.display=""
        desactive.forEach(element => {
            const input=element.querySelectorAll('input');
                input.forEach(el=>{el.disabled=true })               
            });
            champresult.value=""
            champtext.value=""
    }else{
        desactive.forEach(element => {
            const input=element.querySelectorAll('input');
                input.forEach(el=>{el.disabled=false })               
            });
            champresult.value=""
        champtext.style.display=""
    }
})
