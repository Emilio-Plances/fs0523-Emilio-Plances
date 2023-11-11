const LINK=`https://striveschool-api.herokuapp.com/api/product`;
const KEY=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkMmU2YjI1NGU4ODAwMTgzZjE4MzgiLCJpYXQiOjE2OTk1NTY5NzEsImV4cCI6MTcwMDc2NjU3MX0.Bw85wsGQ_w4_HDb0l363JSSETGI-ppbZn9-M49vw3NU`;

let url = new URLSearchParams(location.search);
let selectedID=url.get("id");
let admin=document.querySelector(`#admin`);

getSelected(selectedID);

admin.addEventListener(`change`, function(){
   if(admin.checked)
       loginRequest();
   else
       hideElements();
})

function getSelected(selectedID) {
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
   let priceInput=document.querySelector(`#price`);
   let imageInput=document.querySelector(`#image`);
   let descriptionInput=document.querySelector(`#description`);
   
   nameInput.innerText=item.name;
   priceInput.innerText=item.price;
   imageInput.src=item.imageUrl;
   descriptionInput.innerText=item.description;
}

function loginRequest() {
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
      } else {
         admin.checked = false;
      }
   });
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

function hideElements(){
   let linkEdit=document.querySelector(`#link-edit`);
   linkEdit.href= `edit.html?id=${selectedID}`;
   linkEdit.classList.toggle(`hidden`);
}