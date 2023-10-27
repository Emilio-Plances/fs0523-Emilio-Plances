let header=document.querySelector(`#header`);
let headerButton=header.querySelector(`#nav-button`);
let heroButton=document.querySelector(`#hero-button`);

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

