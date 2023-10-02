/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numero=5;                     //Assegna alla variabile un numero intero o decimale
let stringa='Hello world';        //Caratterizzato da apice o doppio apice assegna alla variabile una sequenza di caratteri
let boolean=true;                 //Assegna alla variabile il valore True o False
let array=[0,1,2,3];              //Assegna alla variabile un array 
let oggetto = {                     //Assegna alla variabile un oggetto
  nome: 'Emilio' ,
  cognome:' Plances '
};                   
console.log("Esercizio 1");
console.log("Numero="+numero);
console.log("Stringa="+stringa);
console.log("Boolean="+boolean);
console.log("Array="+array);
console.log("Oggetto=");
console.log(oggetto);


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 2");
let name="Emilio";
console.log("Il mio nome è " + name); 


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 3");
console.log("12+20="+(12+20));


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 4:");
let x=12;
console.log("x="+x);


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 5:");
const NAME='Emilio';
console.log("Visualizzare il codice per verificare");
//NAME='Plances';


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 6:");
console.log("4"+"-"+x+'='+(4-x));


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 7:");
let name1='john';
let name2='John';

console.log( name1 +' e '+name2+' sono uguali? '+ (name1==name2));
console.log('Ma sono composti dalle stesse lettere? '+ (name1.toLowerCase()==name2.toLowerCase()));



