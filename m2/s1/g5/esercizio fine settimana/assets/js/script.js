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
let arrayProfilesPhoto=document.querySelectorAll(`.account-photo`);
let profilePopup=document.querySelector(`#profile-popup`);
let profiles=[];

for(let i=0; i<arrayNames.length; i++){
   profiles.push(createProfiles(arrayNames[i].innerText, arrayProfilesPhoto[i].currentSrc));

   arrayNames[i].addEventListener(`mouseover`,()=>{
      profilePopup.classList.remove(`hidden`);
      createBlock(i);
   })

   arrayNames[i].addEventListener(`mouseleave`,()=>{
      profilePopup.classList.add(`hidden`);
   })
}

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

function createBlock(i){

   while(profilePopup.firstChild){
      profilePopup.removeChild(profilePopup.firstChild);
   }

   //Creazione div Nickname
   let nickname=document.createElement(`div`);
   let linkImage=document.createElement(`a`);
   let urlImage=document.createElement(`img`);
   let linkName=document.createElement(`a`);
   nickname.id=`nickname`;
   nickname.classList.add(`flex`);

   urlImage.src = profiles[i].image;
   linkName.innerText=profiles[i].name;

   console.log( urlImage.currentSrc);
   console.log(profiles[i].image);

   //creazione Descrizione
   let describe=document.createElement(`a`);
   describe.innerText=profiles[i].description;

   //creazione Follow

   let follow=document.createElement(`div`);
   follow.classList.add(`follow`,`flex`);

   let numberFollower=document.createElement(`p`);
   numberFollower.innerText=`${profiles[i].follower} Followers`
   let followMe=document.createElement(`button`);
   followMe.innerText=`Follow`;
   followMe.classList.add(`button`);
   
   linkImage.append(urlImage);
   nickname.append(linkImage,linkName);
   follow.append(numberFollower,followMe)
   profilePopup.append(nickname,describe, follow);
   body.append(profilePopup);
}