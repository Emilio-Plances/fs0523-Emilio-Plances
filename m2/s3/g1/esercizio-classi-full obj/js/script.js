class Pets{
   constructor(container,name,owner,species,breed){
      this.container=document.querySelector(container);
      this.name=name;
      this.owner=owner;
      this.species=species;
      this.breed=breed;
      this.createRow();
   }

   createRow(){
      let tr=document.createElement('tr');
      let td1=document.createElement('td');
      let td2=document.createElement('td');
      let td3=document.createElement('td');
      let td4=document.createElement('td');

      td1.innerText=this.name;
      td2.innerText=this.owner;
      td3.innerText=this.species;
      td4.innerText=this.breed;
      tr.append(td1,td2,td3,td4);

      this.container.append(tr);
   }
   sameOwner(pet){
      return this.owner === pet.owner? true : false;
   }
}

function getName(){
   let slotName=document.querySelector('#pet-name');
   let name=slotName.value;
   slotName.value='';
   return name;
}
function getOwner(){
   let slotOwner=document.querySelector('#pet-owner');
   let owner=slotOwner.value;
   slotOwner.value='';
   return owner;
}
function getSpecies(){
   let slotSpecies=document.querySelector('#pet-species');
   let species=slotSpecies.value;
   slotSpecies.value='';
   return species;
}
function getBreed(){
   let slotBreed=document.querySelector('#pet-breed');
   let breed=slotBreed.value;
   slotBreed.value='';
   return breed;
}

document.querySelector('#submit').addEventListener('click',function(e){
   e.preventDefault();
   
   let name=getName();
   let owner=getOwner();
   let species=getSpecies();
   let breed=getBreed();
   
   window[`${name}`] = new Pets('#pet-table tbody',name,owner,species,breed);
   document.querySelector(`#pet-table`).classList.remove(`hidden`);
});