class User {
   constructor(_firstName, _lastName, _age, _location){
      this.firstName = _firstName;
      this.lastName = _lastName;
      this.age = _age;
      this.location = _location;
   }

   ageDiff(name){
      if(this.age > name.age){
         console.log(`${this.firstName} is older than ${name.firstName}`); 
      }else if(this.age < name.age){
         console.log(`${this.firstName} is younger than ${name.firstName}`);
      }else{
         console.log(`${this.firstName} and ${name.firstName} are the same age`);
      }
   }
}
let emilio= new User('Emilio','Plances',26,'Palermo');
let barbara= new User('Barbara','Panzetta',26,'Bologna');
emilio.ageDiff(barbara);

class Pet{
   constructor(_name,_owner,_species,_breed){
      this.name = _name;
      this.owner = _owner;
      this.species = _species;
      this.breed = _breed;
   }
   sameOwner(pet){
      if(this.owner === pet.owner){
         return true;
      }else{
         return false;
      }
   }
}


document.querySelector('#submit').addEventListener('click', function(e){
   e.preventDefault();
   let petName= document.querySelector('#pet-name');
   let petOwner= document.querySelector('#pet-owner');
   let petSpecies= document.querySelector('#pet-species');
   let petBreed= document.querySelector('#pet-breed');
   let newPet = new Pet(petName.value,petOwner.value,petSpecies.value,petBreed.value);
   console.table(newPet);
   petName.value='';
   petOwner.value='';
   petSpecies.value='';
   petBreed.value='';
})