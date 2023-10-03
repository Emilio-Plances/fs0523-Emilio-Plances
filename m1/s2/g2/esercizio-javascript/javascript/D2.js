/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/console.log("Esercizio 1");
/* SCRIVI QUI LA TUA RISPOSTA */

let num1=5;
let num2=7;

if(num1<num2){
  console.log("Tra il numero "+num1+" e il numero "+num2+" il più grande è "+ num2);
}else if(num1>num2){
  console.log("Tra il numero "+num1+" e il numero "+num2+" il più grande è "+ num1);
}else{
  console.log("I due numeri sono dei "+num1+" e sono uguali");
}


  /* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/console.log("Esercizio 2");
/* SCRIVI QUI LA TUA RISPOSTA */

let numero=5

if(numero==6){
  console.log("Equal");
}else{
  console.log("Not equal");
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/console.log("Esercizio 3");
/* SCRIVI QUI LA TUA RISPOSTA */

let divisore=47;

if(divisore%5==0){
  console.log(divisore+" è divisibile per 5");
}else{
  console.log(divisore+" non è divisibile per 5");
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/console.log("Esercizio 4");
/* SCRIVI QUI LA TUA RISPOSTA */

let int1=11;
let int2=3;

if(int1==8 || int2==8 || int1+int2==8 || Math.abs(int2-int1)==8){
  console.log("L'otto in qualche modo è presente");
}else{
  console.log("L'otto non c'è");
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/console.log("Esercizio 5");
/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart=100;

console.log("Valore Carrello: "+totalShoppingCart);

if(totalShoppingCart >=50){
  console.log("Costo Spedizione: Gratuita");
}else{
  console.log("Costo Spedizione: 10 Euro");
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/console.log("Esercizio 6");
/* SCRIVI QUI LA TUA RISPOSTA */

totalShoppingCart=totalShoppingCart-((totalShoppingCart*20)/100);
console.log("OGGI È IL BLACK FRIDAY! HAI IL 20% DI SCONTO SU OGNI PRODOTTO!");
console.log("Valore Carrello: "+totalShoppingCart);


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/console.log("Esercizio 7");
/* SCRIVI QUI LA TUA RISPOSTA */
let val1=10;
let val2=20;
let val3=5;
let memo=[];
let memoria=[];

if(val1>val2 && val1>val3){
  memo[0]=val1;

  if(val2>=val3){
    memo[1]=val2;
    memo[2]=val3;
  }else{
    memo[1]=val3;
    memo[2]=val2;
  }

}else if(val2>val3){
  memo[0]=val2;

  if(val1 >= val3){
    memo[1]=val1;
    memo[2]=val3;
  }else{
    memo[1]=val3;
    memo[2]=val1;
  }

}else{

  memo[0]=val3;
  if(val1>val2){
    memo[1]=val1;
    memo[2]=val2;
  }

}
console.log("Questo array è memo");
console.log(memo);

/*--------------------------------------------------------------------------------------------------------------------------------------------*/

function inserisci(intero){
  memoria.push(intero);
}

//Più facile da modificare in caso si aggiungano nuovi valori
console.log("Questo è fatto con un altro motodo");
inserisci(val1);
inserisci(val2);
inserisci(val3);
memoria.sort(function(a, b){return a-b;});
memoria.reverse();

console.log("Questo array è memoria");
console.log(memoria);





/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/console.log("Esercizio 8");
/* SCRIVI QUI LA TUA RISPOSTA */
let controllo= 'ciao';

if (typeof(controllo)== 'number'){
  console.log(controllo + " È un numero");
}else{
  console.log(controllo+" Non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/console.log("Esercizio 9");
/* SCRIVI QUI LA TUA RISPOSTA */
let pariDispari=10;

if(pariDispari%2 != 0){
  console.log(pariDispari + " è dispari");
}else{
  console.log(pariDispari+ " è pari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7;
  
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/console.log("Esercizio 10");
/* SCRIVI QUI LA TUA RISPOSTA */
let val = 10;
if (val < 10 && val>=5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/console.log("Esercizio 11");

const ME = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
/* SCRIVI QUI LA TUA RISPOSTA */
ME.city='Toronto';
console.log(ME);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/console.log("Esercizio 12");
/* SCRIVI QUI LA TUA RISPOSTA */
delete ME.lastName;
console.log(ME);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/console.log("Esercizio 13");
/* SCRIVI QUI LA TUA RISPOSTA */
delete ME.skills[ ME.skills.length - 1];
console.log(ME);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/console.log("Esercizio 14");
/* SCRIVI QUI LA TUA RISPOSTA */
let array=[];

for(let i=1;i<=10;i++){
  array.push(i);
}
console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/console.log("Esercizio 15");
/* SCRIVI QUI LA TUA RISPOSTA */
array[ array.length- 1 ]=100;
console.log(array);