
let bouton=document.querySelector('.bouton');
let conteneur=document.querySelector('.conteneur');
let boutton=document.querySelector('.boutton');

function CreateComposant(){
    let box=document.createElement('div');
    box.className='box';
    conteneur.appendChild(box);
    let icones=document.createElement('div');
    icones.className='icones';
    box.appendChild(icones);
    let pen=document.createElement('i');
    pen.className='fa fa-pen';
    icones.appendChild(pen);
    let trash=document.createElement('i');
    trash.className='fa fa-trash';
    icones.appendChild(trash);
    let textarea=document.createElement('textarea');
    textarea.className='textarea';
    box.appendChild(textarea);
    
    
}

