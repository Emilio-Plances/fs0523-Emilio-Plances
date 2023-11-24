import {Phone} from "./modules/Phone.js";
import {utenti} from "./modules/variables.js";

let emilio:Phone= new Phone(10,0.20);
let mauro:Phone= new Phone(10,0.20);
let emanuele:Phone= new Phone(10,0.20);

/*_____________________________COLLEGAMENTI CON L'HTML_________________________________________*/
let callBtn:HTMLButtonElement|null=document.querySelector(`#call-btn`);
let mostraStorico:HTMLButtonElement|null=document.querySelector(`#mostra-storico`)
let minutes:HTMLInputElement|null=document.querySelector(`#minuti`);
let caller:HTMLSelectElement|null=document.querySelector(`#caller`);
let called:HTMLSelectElement|null=document.querySelector(`#called`);
let user:HTMLSelectElement|null= document.querySelector(`#storico`);
let searchBTN:HTMLButtonElement|null=document.querySelector(`#find`);
let search:HTMLInputElement|null=document.querySelector(`#search`);
let filterStorico:HTMLSelectElement|null=document.querySelector(`#select-filter-storico`);

// emilio.ricarica(30);
// emilio.numero404;
// emilio.getNumeroChiamate
// emilio.azzeraChiamate();

callBtn?.addEventListener("click",()=>{
   let tempoChiamata:number=Number(minutes?.value);
   let callerID:number=Number(caller?.value);
   let calledID:number=Number(called?.value);
   if(callerID==calledID){
      alert(`Non puoi chiamarti da solo`)
      return
   }
   utenti[callerID].effettuaChiamata(utenti[calledID].id,tempoChiamata);
   console.log(utenti);
})

mostraStorico?.addEventListener("click",()=>{
   let userID:number = Number(user?.value);
   utenti[userID].mostraRegistroChiamate();
});

searchBTN?.addEventListener("click",()=>{
   let filterStoricoID:number=Number(filterStorico?.value); //
   if(!search?.value) return
      utenti[filterStoricoID].filtraChiamatePerDataOra(search?.value)
})