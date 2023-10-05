/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let area = (l1,l2)=>l1*l2;

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(int1, int2){

    if(int1!=int2)
        return int1+int2;
    else
        return (int1+int2)*3;
}


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(num){
    let risultato=Math.abs(num-19);
    if(num<19)
        return risultato;
    else
        return risultato*3;
}

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(intero){

    if(intero<=intero<=100 || intero==400)
        return true;
}


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function epify(elemento){
    let minuscolo;
    minuscolo=elemento.toLowerCase();
    minuscolo=minuscolo.slice(0,7);
    if (minuscolo=='epicode')
        return elemento;
    else
        return 'EPICODE'+elemento;
}


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(number){
    if(number%7==0)
        return 'È divisibile per 7';
    else if(number%3==0)
        return 'È divisibile per 3';
    else
        return 'Non è divisibile nè per 3 che per 7';
}
console.log(check3and7(9));


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */
//string = variabile
function reverseString(stringa){
    return stringa.split("").reverse().join("");
}


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(...myArray){
    let newArray=[];
    myArray.forEach(element=> newArray.push(element.charAt(0).toUpperCase()+element.slice(1)));
    return newArray;
}


/*function upperFirst(...myArray){
    let newArray=[];
    for(let i=0; i<myArray.length; i++){
        newArray.push(myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1)) ; //C + iao = Ciao
    }
    return newArray;
}
*/
console.log(upperFirst('ciao', 'banana', 'mela','cicoria', 'scazzato','telefono'));


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(myString){
    return myString.slice(1,-1);  
}


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(numero){
    let myArray=[];
    for(i=0;i<numero;i++){
        myArray.push(Math.round(Math.random()*10));
    }
    return myArray;
}