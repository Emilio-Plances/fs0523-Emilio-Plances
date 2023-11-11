import {Phone} from "./class/Phone.js";
const LINK=`https://striveschool-api.herokuapp.com/api/product`;
const KEY=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkMmU2YjI1NGU4ODAwMTgzZjE4MzgiLCJpYXQiOjE2OTk1NTY5NzEsImV4cCI6MTcwMDc2NjU3MX0.Bw85wsGQ_w4_HDb0l363JSSETGI-ppbZn9-M49vw3NU`;

let submit=document.querySelector(`#submit`);
let reset=document.querySelector(`#reset`);

let admin=document.querySelector(`#admin`);
let deleteBtn=document.querySelector(`#delete`);

let url = new URLSearchParams(location.search);
let selectedID=url.get("id");

getSelected(selectedID);

reset.addEventListener(`click`, (e)=>{
   e.preventDefault();
   getSelected(selectedID);
});

admin.addEventListener(`change`, function(){
   Swal.fire({
      icon: "error",
      text: `Non hai più i permessi per stare qui!`
      
  }).then(() => {location.href=`index.html`});
});

submit.addEventListener(`click`, (e)=>{
   e.preventDefault();
   
   Swal.fire({
      title: "Modificare il prodotto?",
      showDenyButton: true,
      confirmButtonColor: '#bf9f63',
      confirmButtonText: `Salva`,
      denyButtonText: `Non Salvare`
   }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
         let phone= new Phone();
         updateProduct(phone,selectedID);
      }
   });
});

deleteBtn.addEventListener('click',(e)=> {
   e.preventDefault();
   Swal.fire({
      title: "Eliminare il prodotto?",
      showDenyButton: true,
      confirmButtonText: `Elimina`,
      confirmButtonColor: '#DC3545',
      denyButtonText: `Non Eliminare`,
      denyButtonColor: '#bf9f63',
   }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
         deleteProduct(selectedID);
      }
   });
});

function deleteProduct(phone_id){
   fetch(`${LINK}/${phone_id}`, {
       method:"DELETE",
       headers: {
           "Content-Type": "application/json",
           Authorization: KEY
       }
   }).then(res => {
       if(res.status === 200){

         Swal.fire({
            icon: "success",
            text: `Dati eliminati correttamente!`
        }).then(() => {location.href=`index.html`});
       }
   })
}

function getSelected() {
   fetch(`${LINK}/${selectedID}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         Authorization: KEY
      }
   })
   .then(res => res.json())
   .then(selectedItem => {
      setVariables(selectedItem);
   })
}

function setVariables(item) {
   let nameInput=document.querySelector(`#model`);
   let brandInput=document.querySelector(`#brand`);
   let priceInput=document.querySelector(`#price`);
   let imageInput=document.querySelector(`#image`);
   let descriptionInput=document.querySelector(`#description`);
   
   nameInput.value=item.name;
   brandInput.value=item.brand;
   priceInput.value=item.price;
   imageInput.value=item.imageUrl;
   descriptionInput.value=item.description;
}

function updateProduct(phone,phone_id){
   fetch(`${LINK}/${phone_id}`, {
       method:"PUT",
       headers: {
           "Content-Type": "application/json",
           Authorization: KEY
       },
       body: JSON.stringify(phone)
   }).then (res => {
      if (res.status==200){
         Swal.fire({
             icon: "success",
             text: `Dati caricati correttamente!`
         }).then(() => {location.href=`index.html`});
      }else{
         Swal.fire({
             icon: "error",
             title: "Attenzione!",
             text: `Inserire dati validi!`
         });
      }
   })
}
