let header=document.querySelector(`#header`);
let headerButton=header.querySelector(`#nav-button`);
let heroButton=documet.querySelector(`#hero-button`);

{ 
   /*Cambio header scrollando*/
addEventListener(`scroll`,()=>{
   let scroll= window.scrollY;
   if (scroll>365){
      header.classList.add(`scrolled`);
   }else{
      header.classList.remove(`scrolled`);
   }
})

