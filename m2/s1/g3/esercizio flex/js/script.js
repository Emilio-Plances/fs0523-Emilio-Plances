let navbar=document.querySelector(`#navbar`)
let menuButton=document.querySelector(`.open-menu`);

menuButton.addEventListener(`click`,()=>{
   navbar.classList.toggle(`to-side`);
   menuButton.classList.toggle(`clicked`);
})