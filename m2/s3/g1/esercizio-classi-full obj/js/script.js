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
      return this.owner == pet.owner ? true : false;
   }
}
let pets={}

function getData(slot){
   let value=slot.value;
   slot.value='';
   return value;
}

document.querySelector('#submit').addEventListener('click',function(e){
   e.preventDefault();
   
   let name=getData(document.querySelector('#pet-name'));
   let owner=getData(document.querySelector('#pet-owner'));
   let species=getData(document.querySelector('#pet-species'));
   let breed=getData(document.querySelector('#pet-breed'));
   
   if(!name ||!owner ||!species ||!breed){
      alert('Please fill in all fields');
      return;
   }

   pets[`${name}`] = new Pets('#pet-table tbody',name,owner,species,breed);
   document.querySelector(`#pet-table`).classList.remove(`hidden`);
});