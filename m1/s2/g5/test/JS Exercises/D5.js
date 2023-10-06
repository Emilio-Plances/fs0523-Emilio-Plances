/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

//readString(pets);

function readString(myArray){
   myArray.forEach(element => console.log(element));
}


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

//console.log(sortPets(pets));

function sortPets(myArray){
  return myArray.sort();
}



/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

//console.log(reversePets(pets));

function reversePets(myArray){
  return myArray.reverse();
}



/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

//console.log(firstIsLast(pets));

function firstIsLast(myArray){
  myArray.push(myArray.shift());
  return myArray;
}
 

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
];

//console.log(licensePlate(cars));

function licensePlate(myArray){
  let plate='';

  myArray.forEach(function (element){
    plate = Math.random().toString(36).slice(3,9);
    plate= plate.toUpperCase();
    element['licensePlate']=plate;
  });

  return myArray;
}


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const car={
  brand: 'Fiat',
  model: '500XL',
  color: 'Dark-Blue',
  trims: ['life', 'style'],
}

//console.log(addCar(cars,car));

function addCar(myArray, item){
  myArray.push(item);

  myArray.forEach(function (element){
    element.trims.pop();
  })

  return myArray;
}


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

//console.log(getFirstTrims(cars, justTrims));

function getFirstTrims(myArray, trimContainer=[]){
  let memo='';

  myArray.forEach(function (element){
    memo=element.trims.shift();
    trimContainer.push(memo);
  })

  return trimContainer;
}


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

//fizzBuzz(cars);

function fizzBuzz(myArray){ 
  let memo='';

  myArray.forEach(function (element){
    memo= element.color.charAt(0).toLowerCase();
    console.log( (memo=='b')? "Fizz" : "Buzz");
  })
}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

//console.log(sortUntil(numericArray));

function sortUntil(myArray){
  let newArray=[];
  myArray.sort((a,b) => a-b);

  myArray.forEach(function (element){
    if (element<=32)
      newArray.push(element);
  })

  return newArray;
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];

 console.log(charToNum(charactersArray)); 

// function charToNum(myArray){
//   let newArray=[];
//   myArray.forEach(function (element){
//     newArray.push(element.charCodeAt(0)- 96);
//   })
//   return newArray;
// }

function charToNum(myArray){
  let newArray=[];
  myArray.forEach(function (element){

    element.toLowerCase();
    switch(element){
      case 'a': 
        newArray.push(1);
        break;
      case 'b': 
        newArray.push(2);
        break;
      case 'c': 
        newArray.push(3);
        break;
      case 'd': 
        newArray.push(4);
        break;
      case 'e': 
        newArray.push(5);
        break;
      case 'f': 
        newArray.push(6);
        break;
      case 'g': 
        newArray.push(7);
        break;
      case 'h': 
        newArray.push(8);
        break;
      case 'i': 
        newArray.push(9);
        break;
      case 'j': 
        newArray.push(10);
        break;
      case 'k': 
        newArray.push(11);
        break;
      case 'l': 
        newArray.push(12);
        break;
      case 'm': 
        newArray.push(13);
        break;
      case 'n': 
        newArray.push(14);
        break;
      case 'o': 
        newArray.push(15);
        break;
      case 'p': 
        newArray.push(16);
        break;
      case 'q': 
        newArray.push(17);
        break;
      case 'r': 
        newArray.push(18);
        break;
      case 's': 
        newArray.push(19);
        break;
      case 't': 
        newArray.push(20);
        break;
      case 'u': 
        newArray.push(21);
        break;
      case 'v': 
        newArray.push(22);
        break;
      case 'w': 
        newArray.push(23);
        break;
      case 'x': 
        newArray.push(24);
        break;
      case 'y': 
        newArray.push(25);
        break;
      case 'z': 
        newArray.push(26);
        break;
    }
  })
  return newArray
}