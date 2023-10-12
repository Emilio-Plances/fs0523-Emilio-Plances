let tombola=document.querySelector(`#tombola`);


/**********************************************
 *  Genero l'header
 * */

let tombolaHeader=document.createElement(`div`);
tombolaHeader.className=`tombola-header`;

let h3=document.createElement(`h3`);
h3.innerText=`TOMBOLONE`;

let number=document.createElement(`div`);
let numberOut=document.createElement(`div`);
let numberInside=document.createElement(`div`);
let rollButton=document.createElement(`button`);

numberOut.className=`number-out`;
number.className=`number`;
numberInside.className=`number-inside`;
rollButton.innerText=`Roll`;
rollButton.className=`rollButton`;
let p=document.createElement(`p`);
let tombolaBody=document.createElement(`div`);
tombolaBody.className=`tombolaBody`;

/* * *
 *  fine dell'header
 **********************************************/

generateNumeroTombola();
let numeriUsciti=[];
rollButton.addEventListener(`click`,function(){

    p.innerText=Math.floor(Math.random()*90)+1;
    

    controlEvent(p.innerText);
    
    tombolaBody.childNodes[Number(p.innerText)-1].style.backgroundColor=`#c7161f`;
    tombolaBody.childNodes[Number(p.innerText)-1].style.color=`rgb(242, 243, 216)`;
});

numberInside.append(p);
numberOut.append(numberInside);
number.append(numberOut,rollButton);
tombolaHeader.append(h3,number);


function controlEvent(p){

    let verifica;
    verifica=numeriUsciti.find(element=>element==p);

    if(numeriUsciti.length>=90){
        alert(`OPS! Sono finiti i numeri!`);
        return;
    }

    if(!verifica){
        numeriUsciti.push(p);
    }else{
        controlEvent();
    }
}

function generateNumeroTombola(){
    for(let i=1;i<=90;i++){
        let numeroTombola=document.createElement(`div`); 
        
        numeroTombola.classList.add('numeroTombola');
    
        if(i%5==0){
            numeroTombola.classList.add(`border-right`);
        }
        if(i>20&&i<=30 || i>50&&i<=60 || i>80&&i<=90){
            numeroTombola.classList.add(`border-bottom`);
        }
        numeroTombola.innerText=i;
    
        tombolaBody.append(numeroTombola);
    }
    
    tombola.append(tombolaHeader,tombolaBody);
}




