let tombola=document.querySelector(`#tombola`);


//Genero l'header
let tombolaHeader=document.createElement(`div`);
tombolaHeader.className=`tombola-header`;

let h3=document.createElement(`h3`);
h3.innerText=`TOMBOLONE`;

let number=document.createElement(`div`);
let numberOut=document.createElement(`div`);
let numberInside=document.createElement(`div`);
let rollButton=document.createElement(`button`);

let numeriUsciti=[];

numberOut.className=`number-out`;
number.className=`number`;
numberInside.className=`number-inside`;
rollButton.innerText=`Roll`;
rollButton.className=`rollButton`;
let p=document.createElement(`p`);
let tombolaBody=document.createElement(`div`);
tombolaBody.className=`tombolaBody`;



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

rollButton.addEventListener(`click`,function(){
    let verifica=false; 
    do{
        if(numeriUsciti.length<90){
        numeriUsciti.push(p.innerText);
        }else{
        alert(`ATTENZIONE!Sono finiti i numeri!`);
        break;
        }
        
        p.innerText=Math.floor(Math.random()*90)+1;
        
        numeriUsciti.forEach(element=>{
            if(p.innerText!=element){
                verifica=false;
            }
        })

    }while(verifica);
    console.dir(tombolaBody);
    let position=Number(p.innerText)-1;

    tombolaBody.childNodes[position].style.backgroundColor=`#c7161f`;
    tombolaBody.childNodes[position].style.Color=`rgb(242, 243, 216)`;
});

numberInside.append(p);
numberOut.append(numberInside);
number.append(numberOut,rollButton);
tombolaHeader.append(h3,number);


//Genero il body


// numeroTombola.addEventListener(`click`,function(){

//         if(numeroTombola.style.backgroundColor){
//             numeroTombola.style.backgroundColor=``;
//             numeroTombola.style.color=``;
//         }else{
//             numeroTombola.style.backgroundColor=`#c7161f`;
//             numeroTombola.style.color=`rgb(242, 243, 216)`;
//         }

//     })
















