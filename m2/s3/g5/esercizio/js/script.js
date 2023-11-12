import {ProductCard} from "./class/ProductCard.js";
const LINK=`https://striveschool-api.herokuapp.com/api/product`;
const KEY=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkMmU2YjI1NGU4ODAwMTgzZjE4MzgiLCJpYXQiOjE2OTk1NTY5NzEsImV4cCI6MTcwMDc2NjU3MX0.Bw85wsGQ_w4_HDb0l363JSSETGI-ppbZn9-M49vw3NU`;

let cardContainer=document.querySelector(`#card-container`);
let admin=document.querySelector(`#admin`);


getProducts();

function controlIfLoggedIn(){
    if(sessionStorage.getItem(`loggedIn`)==`true`){  
        admin.checked=true;
        hideElements();
    }else{
        admin.checked=false;
    }
}

admin.addEventListener(`change`, function(){
    if(admin.checked)
        loginRequest();
    else{
        hideElements();
        sessionStorage.setItem(`loggedIn`, ``);
    }
})

async function getProducts(){ 
   let res= await fetch(`${LINK}`, {
       method:"GET",
       headers: {
           "Content-Type": "application/json",
           Authorization: KEY
       }
   })
   let eventDetails=document.querySelector(`#event-details`);
   let products= await res.json();
   console.log(products);

   eventDetails.classList.add(`hidden`);
   products.forEach(element => {
      new ProductCard(element._id,element.name,element.brand,element.price,element.imageUrl,element.description,cardContainer);
   });
   controlIfLoggedIn();
}

function loginRequest(){
    Swal.fire({
        title: 'Login',
        html: document.querySelector(`#loginTemplate`).innerHTML,
        showCancelButton: true,
        confirmButtonText: 'Login',
        confirmButtonColor: '#bf9f63',
        cancelButtonText: 'Cancel',
        preConfirm: () => {
           const email = Swal.getPopup().querySelector('#email').value;
           const password = Swal.getPopup().querySelector('#password').value;
           return rightData(email, password);
        }
     }).then((result) => {
        console.log(result);
        if (result.isConfirmed) {
           hideElements();
           sessionStorage.setItem(`loggedIn`, true);
        } else {
           admin.checked = false;
        }
     });
}

function hideElements(){
    let linksEdit=document.querySelectorAll(`.link-edit`);
    let linksBuy=document.querySelectorAll(`.link-buy`);
    let linksDetails=document.querySelectorAll(`.link-details`);
    let linkAddProduct=document.querySelector(`.link-add-product`);

    linksDetails.forEach(element=>element.classList.toggle(`admin`));
    linksEdit.forEach(element => element.classList.toggle(`hidden`));
    linksBuy.forEach(element=> element.classList.toggle(`hidden`));
    linkAddProduct.classList.toggle(`hidden`);
}

function rightData (email, password){
    email=email.toLowerCase();
    let rightEmail=`michele@pizza.com`;
    let rightPassword=`Diavola`;
    if(email==rightEmail && password==rightPassword)
        return {email, password};
    else{
        Swal.showValidationMessage('Invalid email or password');
        return false;
    }
}