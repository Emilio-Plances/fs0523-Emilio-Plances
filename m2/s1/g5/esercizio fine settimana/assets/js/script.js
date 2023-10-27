let body=document.querySelector(`body`);
let header=document.querySelector(`#header`);
let headerButton=header.querySelector(`#nav-button`);
let popup=document.querySelector(`#popup`);
let login=document.querySelector(`#login`);
let closePopup=document.querySelector(`#exit`);
let heroButton=document.querySelector(`#hero-button`);
let buttonInfoPost=document.querySelectorAll(`.post-footer button`)
let arrayM = document.querySelectorAll(`g[stroke-linecap="butt"]`);


/*_________________________________Cambio header scrollando_________________________________*/
window.addEventListener(`scroll`,()=>{
   let scroll= window.scrollY;
   if (scroll>365){
      header.classList.add(`scrolled`);
   }else{
      header.classList.remove(`scrolled`);
   }
})

/*_____________________________________Creazione pop-up___________________________________________*/

headerButton.addEventListener(`click`,apriChiudiPopup);
heroButton.addEventListener(`click`,apriChiudiPopup);
popup.addEventListener(`click`,apriChiudiPopup);
closePopup.addEventListener(`click`,apriChiudiPopup);

function apriChiudiPopup() {
   popup.classList.toggle(`hidden`);
   login.classList.toggle(`hidden`);
}

/*___________________________________Creazione pop-up Segnalibro___________________________________*/

buttonInfoPost.forEach(element=>{
   element.addEventListener(`click`,()=>{
      Swal.fire({
         position: 'top-end',
         icon: 'success',
         title: 'Your bookmark has been saved',
         showConfirmButton: false,
         timer: 1500
      })
   })
})
        
/*___________________________________Animazione Lettere_____________________________________________*/

setInterval(()=> appearDisappear(), 50)

function appearDisappear(){
   let randomPosition = arrayM[Math.floor(Math.random() * arrayM.length)];

   if (randomPosition.style.opacity==0) {
      randomPosition.style.opacity=`1`;
   } else {
      randomPosition.style.opacity=`0`;
   }
}