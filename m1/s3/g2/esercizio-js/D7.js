 /* ESERCIZIO 1
    Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/

changeTitle();

function changeTitle(){
    let title = document.getElementsByTagName(`h1`);   
    title[0].innerHTML=`Ciao! Benvenuto in Epicode`;
}


/* ESERCIZIO 2
    Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

addClassToTitle();

function addClassToTitle(){
    let title=document.getElementsByTagName(`h1`);
    title[0].className= `myHeading`;
}
 

/* ESERCIZIO 3
    Scrivi una funzione che cambi il testo dei p figli di un div
*/

changePcontent();

function changePcontent(){
    let paragrafi= document.querySelectorAll(`div p`);
    paragrafi.forEach(element=> element.innerHTML=`CLICCA IL LINK!`);
}
 
/* ESERCIZIO 4
    Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

changeUrls();

function changeUrls(){
    let anchor= document.querySelectorAll(`a:not(:last-child)`);
    anchor.forEach(element=> element.href =`https://www.youtube.com/watch?v=dQw4w9WgXcQ`);
}
   
 
/* ESERCIZIO 5
    Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

addToTheSecond();

function addToTheSecond(){
    let secondList= document.getElementById(`secondList`); //Si aggancia alla 2^ Lista
    let newLi=document.createElement(`li`);              //Crea un elemento HTML(Elemento lista)
    secondList.append(document.createTextNode(`4th`));   //Crea all'interno di li un testo 
    secondList.append(newLi);                         //Facendo riferimento alla lista aggiunge in coda(al contrario di prepend che mette in cima) il nuovo elemento lista
}
 

/* ESERCIZIO 6
    Scrivi una funzione che aggiunga un paragrafo al primo div
*/
 
addParagraph();

function addParagraph(){
    let firstBlock=document.querySelector(`div`);
    let newP=document.createElement(`p`);
    newP.append(document.createTextNode(`Questo è un paragrafo creato da JS`));
    firstBlock.append(newP);
}
 

/* ESERCIZIO 7
    Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

hideFirstUl();

function hideFirstUl (){
    document.getElementById(`firstList`).hidden= `True`;
}
 
/* ESERCIZIO 8 
    Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

paintItGreen();

function paintItGreen (){
    let getUList=document.querySelectorAll(`ul`);
    getUList.forEach(element=>element.style.backgroundColor=`Green`);
}
 
/* ESERCIZIO 9
    Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

makeItClickable();

function makeItClickable(){
    let text=``;
    let h1=document.querySelector(`h1`);
    h1.addEventListener(`click`,function(){
        text=h1.innerText.slice(0,-1);
        h1.innerText= text;
    })
        
}
 
/* ESERCIZIO 10
    Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/
 
revealFooterLink();

function revealFooterLink (){

    let footer=document.querySelector(`footer`);
    footer.addEventListener('click',()=>{
        alert(`Il link in questo footer port a: ${document.querySelector(`footer a`).href}`)
    })
}
 
/* ESERCIZIO 11
    Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
    La tabella avrà 4 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/

generateTable();

function generateTable (){
    tableArea=document.getElementById(`tableArea`);

    let th=document.createElement(`th`);
    let tr=document.createElement(`tr`);
    let td1=document.createElement(`td`);
    let td2=document.createElement(`td`);
    let td3=document.createElement(`td`);
    let td4=document.createElement(`td`);
    let tbody=document.createElement(`tbody`);

    td1.append(document.createTextNode(`Immagine`));
    td2.append(document.createTextNode(`Nome Prodotto`));
    td3.append(document.createTextNode(`Quantità`));
    td4.append(document.createTextNode(`Prezzo`));
    tr.append(td1,td2,td3,td4);
    th.append(tr);
    tableArea.append(th);

    addRow(tbody);
    addRow(tbody);
    addRow(tbody);

    tableArea.append(tbody);
}


/* ESERCIZIO 12
    Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/
 
function addRow(tbody){
    let tr=document.createElement(`tr`);
    let td1=document.createElement(`td`);
    let td2=document.createElement(`td`);
    let td3=document.createElement(`td`);
    let td4=document.createElement(`td`);
    td1.append(document.createTextNode(`Immagine Contenuto`));
    td2.append(document.createTextNode(`Nome Contenuto`));
    td3.append(document.createTextNode(`Quantità Contenuto`));
    td4.append(document.createTextNode(`Prezzo Contenuto`));
    tr.append(td1,td2,td3,td4);
    tbody.append(tr);
}

/* ESERCIZIO 14
    Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

hideAllImages();

function hideAllImages(){
    tdImmagini=document.querySelectorAll(`tbody tr td:first-child`)
    tdImmagini.forEach(element=>element.hidden=true);
}
 
/* EXTRA ESERCIZIO 15
    Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

changeColorWithRandom();

function changeColorWithRandom (){
    let h2=document.querySelector(`h2`);
    let random=Math.floor(100000+ Math.random()*900000);
    h2.style.backgroundColor=`#${random}`;
}
 
/* EXTRA ESERCIZIO 16
    Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
*/

deleteVowels();

function deleteVowels (){
    let body=document.querySelector(`body`);
   
    let noVowel=body.textContent.replace(/[aeiou]/g, ``)
    console.dir(body)
    body.append(noVowel)

}