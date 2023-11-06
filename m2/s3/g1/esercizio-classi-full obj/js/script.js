class Pets{
   constructor(container){
      this.container=document.querySelector(container);
      this.getText();
      this.createRow();
      
   }

   getText(){
      let slotName=document.querySelector('#pet-name');
      let slotOwner=document.querySelector('#pet-owner');
      let slotSpecies=document.querySelector('#pet-species');
      let slotBreed=document.querySelector('#pet-breed');

      this.name=slotName.value;
      this.owner=slotOwner.value;
      this.species=slotSpecies.value;
      this.breed=slotBreed.value;
      
      slotName.value='';
      slotOwner.value='';
      slotSpecies.value='';
      slotBreed.value='';
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
}

document.querySelector('#submit').addEventListener('click',function(e){
   e.preventDefault();
   let namePet= document.querySelector('#pet-name');
   new Pets('#pet-table tbody');
   document.querySelector(`#pet-table`).classList.remove(`hidden`);
});