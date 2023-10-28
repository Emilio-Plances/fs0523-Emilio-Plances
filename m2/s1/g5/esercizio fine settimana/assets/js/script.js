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
   body.classList.toggle(`no-scroll`)
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

/*___________________________________Profile Popup_______________________________________________*/

let arrayNames=document.querySelectorAll(`.account .name`);
let arrayProfilesPhoto=document.querySelectorAll(`.account-photo`)
let profiles=[];

for(let i=0; i<arrayNames.length; i++){
   profiles.push(createProfiles(arrayNames[i].innerText, arrayProfilesPhoto[i].currentSrc));
}

arrayNames.forEach(element=>element.addEventListener(`mouseover`,createBlock))
console.log(profiles);

function createProfiles(person,image) {
   let profile={
      image:``,
      name:``,
      description:`Something that describe you!`,
      follower:``
   }
   profile.image=image;
   profile.name=person;
   profile.follower=Math.floor(Math.random()*10000);   
   return profile;
}


/* 

   <div id="profile-popup">
        <div id="nickname" class="flex">
            <a href="#"><img src="assets/imgs/image01.jpeg" alt="Profile"></a>
            <a href="#">Name</a>
        </div>
        <a href="#">Description</a>
        <div class="follow flex">
            <p>Followers</p>
            <button class="button">Follow</button>
        </div>
    </div>

*/