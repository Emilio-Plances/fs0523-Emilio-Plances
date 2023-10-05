// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let numero=6;
let newArray=giveMeRandom(numero);
checkArray(newArray);

function giveMeRandom(numero){
    let myArray=[];
    for(i=0;i<numero;i++){
        myArray.push(Math.round(Math.random()*10));
    }
    return myArray;
}

function checkArray(myArray){
    myArray.forEach(function (element){
        if(element>5)
            console.log( element +  " È maggiore di 5");
        else if(element==5)
            console.log("Il numero è " + element);
        else
            console.log(element+ " È minore di 5");
    });
}


/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let shoppingCart=[
    {
        name: 'cuffie',
        price: 20,
        id: 'CF2003',
        quantity:1
    },
    {
        name: 'computer',
        price: 500,
        id: 'L3N0V0',
        quantity: 1
    },
    {
        name: 'tastiera',
        price: 70,
        id: 'TST432',
        quantity: 2
    },
    {
        name: 'batteria',
        price: 2,
        id: 'BT510',
        quantity: 5
    }
]
let new_object='computer';
console.log("Totale è " + shoppingCartTotal(shoppingCart));


shoppingCart=addToShoppingCart(new_object, shoppingCart);

console.log("Il nuovo Totale è " + shoppingCartTotal(shoppingCart));
console.log("L'oggetto più costoso è -> "+maxShoppingCart(shoppingCart));
console.log("L'ultimo oggetto comprato è -> "+latestShoppingCart(shoppingCart));





function shoppingCartTotal(myArray) {
    let somma=0;
    myArray.forEach(element => somma += (element.price*element.quantity));
    return somma;

}

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function addToShoppingCart(oggetto, myArray){
   
    myArray.forEach(function (element){
        if(element.name==oggetto){
            element.quantity++;
        }
    })
    return myArray;
}


/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart(myArray){
    let prezzo=0;
    let higher;
    
    myArray.forEach(function (element){
    
        if(element.price > prezzo){

            prezzo=element.price;
            higher=element.name;
        }
    })
    return higher;
}




/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*
/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart(myArray){
    return myArray.pop().name;
}

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

loopUntil(1);
function loopUntil(intero){
    let hold=0;
    let count=0;
    let sfizio=0;
    while(count!=3){
        hold=Math.round(Math.random()* 9);
        console.log(hold);
        if(hold>=intero)
            count++;
        else
            count=0;

        sfizio++;
    }
    console.log("Per finire ci sono voluti "+sfizio+" cicli");
}
/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function average(...myArray){
    totale=0;
    myArray.forEach(num => totale +=num);
    let media=totale/myArray.length;
    return media;
}

console.log("Questa è la media " + average(10,10,10));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function longest(...myArray){
   memo='0';
    myArray.forEach(function (element){
        if(element.length > memo.length)
            memo=element;
    });
    return memo;
}

console.log("La parola più lunga è " + longest('banana','mela','super','ciao'));


/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function antiSpam(emailContent){

    let email=emailContent.toLowerCase();
    if (email.includes("spam"))
        return true;
    if (email.includes("scam"))
        return true;
    return false;
}

if(antiSpam("Questo è un messaggio di spam")){
    console.log("In questa Mail c'è uno SPAM!");
}else{
    console.log("In questa Mail non c'è uno SPAM");
}

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let data=new Date(2025,10,5);
function time(tempo){
    let ora=new Date();
    tempo=Math.ceil((tempo-ora) / (1000 * 60 * 60 * 24));
    return tempo;
} 

console.log("Per il giorno "+data.getFullYear()+" "+ data.getMonth()+" " +data.getDay()+" mancano ancora: "+ time(data)+" giorni");

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function matrixGenerator(x,y){
    matrix=[];
    for(let i=0; i<x;i++){
        let newArray=[]
        for(let a=0;a<y;a++){

           newArray.push(i.toString() +a);
        }
        matrix[i]=newArray;
    }
    console.log(matrix);
}

matrixGenerator(5,5);