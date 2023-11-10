export class Phone{
   constructor(){
       this.name=null
       this.brand=null;
       this.price=null;
       this.imageUrl=null;
       this.description=null;
       this.getData();
   }

   getData(){
       let nameInput=document.querySelector(`#model`);
       let brandInput=document.querySelector(`#brand`);
       let priceInput=document.querySelector(`#price`);
       let imageInput=document.querySelector(`#image`);
       let descriptionInput=document.querySelector(`#description`);
    
       this.name=nameInput.value;
       this.brand=brandInput.value;
       this.price=priceInput.value;
       this.imageUrl=imageInput.value;
       this.description=descriptionInput.value;

       nameInput.value=``;
       brandInput.value=``;
       description.value=``;
       priceInput.value=``;
       imageInput.value=``;
   }
}