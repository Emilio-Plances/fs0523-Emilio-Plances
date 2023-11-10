import {Phone} from "./class/Phone.js";
const LINK=`https://striveschool-api.herokuapp.com/api/product`;
const KEY=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkMmU2YjI1NGU4ODAwMTgzZjE4MzgiLCJpYXQiOjE2OTk1NTY5NzEsImV4cCI6MTcwMDc2NjU3MX0.Bw85wsGQ_w4_HDb0l363JSSETGI-ppbZn9-M49vw3NU`;

let submit=document.querySelector(`#submit`);
let reset=document.querySelector(`#reset`);

reset.addEventListener(`click`, (e)=>{
    e.preventDefault();
    resetInputs();
});

submit.addEventListener(`click`, (e)=>{
    e.preventDefault();

    Swal.fire({
        title: "Salvare il nuovo prodotto",
        showDenyButton: true,
        confirmButtonText: `Salva`,
        denyButtonText: `Non Salvare`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

          let phone= new Phone();
          addProduct(phone);

        }
      });
    
});

function addProduct(phone){
    fetch(`${LINK}`, {
        "method":"POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: KEY
        },
        body: JSON.stringify(phone)
    }).then(res => {
        
        if(res.status == 200){
            Swal.fire({
                icon: "success",
                text: `Dati caricati correttamente!`
            });
        }else{
            Swal.fire({
                icon: "error",
                title: "Attenzione!",
                text: `Inserire dati validi!`
            });
        }
    })
}

function resetInputs(){
    let nameInput=document.querySelector(`#model`);
    let brandInput=document.querySelector(`#brand`);
    let priceInput=document.querySelector(`#price`);
    let imageInput=document.querySelector(`#image`);
    let descriptionInput=document.querySelector(`#description`);

    nameInput.value=``;
       brandInput.value=``;
       descriptionInput.value=``;
       priceInput.value=``;
       imageInput.value=``;
};