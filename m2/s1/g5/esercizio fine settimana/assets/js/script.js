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
createBlock();

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

function createBlock(){
   let profilePopup=document.createElement(`div`);
   profilePopup.id=`profile-Popup`;

   //Creazione div Nickname
   let nickname=document.createElement(`div`);
   let linkImage=document.createElement(`a`);
   let urlImage=document.createElement(`img`);
   let linkName=document.createElement(`a`);
   nickname.id=`nickname`;
   nickname.classList.add(`flex`);
   urlImage.currentSrc=profiles[0].image;
   appearDisappear.innerText=profiles[0].name;

   //creazione Descrizione
   let describe=document.createElement(`a`);
   describe.innerText=profiles[0].description;

   //creazione Follow

   let follow=document.createElement(`div`);
   follow.classList.add(`follow`,`flex`);

   let numberFollower=document.createElement(`p`);
   numberFollower.innerText=`${profiles[0].follower} Followers`
   let followMe=document.createElement(`button`);
   followMe.classList.add(`button`);


   
   linkImage.append(urlImage);
   nickname.append(linkImage,linkName);
   follow.append(numberFollower,followMe)
   profilePopup.append(nickname,describe, follow);
   body.append(profilePopup);
}
/* 

   <div id="profile-popup"> V
        <div id="nickname" class="flex"> V
            <a href="#"><img src="assets/imgs/image01.jpeg" alt="Profile"></a> V
            <a href="#">Name</a>
        </div>
        <a href="#">Description</a>
        <div class="follow flex">
            <p>Followers</p>
            <button class="button">Follow</button>
        </div>
    </div>

*/