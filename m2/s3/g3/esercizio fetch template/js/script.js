class Book{
   constructor(_asin,_title, _img, _price, _category){
      this.asin = _asin;
      this.title = _title;
      this.img = _img;
      this.price = _price;
      this.category = _category;
      this.quantity=1;

      this.HTMLinit();
   }
   
   HTMLinit(){
      let temp= document.querySelector(`#template-book`);
      let clone= temp.content.cloneNode(true);

      this.setVariables(clone);
      this.buttonsConfig(clone);

      containerBooks.append(clone);
   }
   
   setVariables(clone){
      let cloneImg= clone.querySelector(`.card-img`);
      let cloneTitle= clone.querySelector(`.card-title`);
      let cloneCategory= clone.querySelector(`.card-category`);
      let clonePrice= clone.querySelector(`.card-price`);
      
      cloneImg.src= this.img;
      cloneTitle.innerText= this.title;
      cloneCategory.innerText= this.category;
      clonePrice.innerText= this.price;
   }

   buttonsConfig(clone){
      let cloneCard=clone.querySelector(`.card`);
      let cloneButtonDelete= clone.querySelector(`.btn-delete`);
      let cloneButtonCart= clone.querySelector(`.btn-cart`);

      this.buttonDeleteConfig(cloneButtonDelete, cloneCard);
      this.buttonCartConfig(cloneButtonCart);
   }

   buttonDeleteConfig(button, book){
      button.addEventListener(`click`,()=> {
         book.remove();
      });
   }
   
   buttonCartConfig(button){
      button.addEventListener(`click`,()=> {
         this.addToCart();
      });
   }
   
   addToCart(){ 
      let index= this.checkExist();

      if(index==null){
         this.quantity=1;
         cart.push(this);
         localStorage.setItem(`cart`,JSON.stringify(cart));
         new CartElement(this.asin,this.img,this.title,this.price,this.quantity);
      }else{
         cart[index].quantity++;
         localStorage.setItem(`cart`,JSON.stringify(cart));
         this.createNewCart();
      }     
   }

   checkExist(){
      let verify=null;

      cart.forEach(element => {
         if(element.asin==this.asin){
            verify=cart.indexOf(element);
         }
      });
      
      return verify;
   }

   createNewCart(){
      while(containerCart.firstChild){
         containerCart.removeChild(containerCart.firstChild);
      }
      cart.forEach(element => {
         new CartElement(element.asin, element.img,element.title,element.price,element.quantity);
      })
   }
}

class CartElement{
   constructor(_asin,_img,_title,_price,_quantity=1){
      this.asin = _asin;
      this.img = _img;
      this.title = _title;
      this.price = _price;
      this.quantity = _quantity;

      this.HTMLinit();
      this.newPrice();
   }


   HTMLinit(){
      let temp= document.querySelector(`#template-cart`);
      let clone= temp.content.cloneNode(true);

      this.setVariables(clone);

      this.buttonsConfig(clone);
      
      containerCart.append(clone);
   }

   buttonsConfig(clone){
      let cartElement= clone.querySelector(`.cart-element`);
      let deleteButton= clone.querySelector(`.book-delete`);

      this.deleteButtonConfig(deleteButton, cartElement);
   }

   setVariables(clone){
      let cloneImg=clone.querySelector(`.book-image`);
      let cloneTitle= clone.querySelector(`.book-title`);
      let clonePrice= clone.querySelector(`.book-price`);
      let cloneQuantity= clone.querySelector(`.book-quantity `);

      cloneImg.src = this.img;
      cloneTitle.innerText= this.title;
      clonePrice.innerText= `€${this.price}`;
      cloneQuantity.innerText= this.quantity;
   }

   deleteButtonConfig(button,box){
      button.addEventListener(`click`,()=> {
         cart.splice(cart.indexOf(this), 1);
         localStorage.setItem(`cart`,JSON.stringify(cart));
         box.remove();
         this.newPrice(); 
      })
   }

   newPrice(){
      let price=0;
      cart.forEach(element => {
         price+= parseFloat(element.price)*parseFloat(element.quantity);
      })
      price=price.toFixed(2);
      slotTotalPrice.innerText=price;
   }
}

let containerBooks = document.querySelector(`#library`);
let containerCart = document.querySelector(`#cart-box`);
let cart = localStorage.getItem(`cart`) ? JSON.parse(localStorage.getItem(`cart`)) : [];
let slotTotalPrice=document.querySelector(`#slot-total span`);

fetch(`https://striveschool-api.herokuapp.com/books`)
.then(res=>res.json())
.then(library=>{
   library.forEach(element => {
      new Book(element.asin,element.title,element.img,element.price,element.category);
   });
})

if(cart){
   while(containerCart.firstChild){
      containerCart.removeChild(containerCart.firstChild);
   }
   cart.forEach(element => {
      new CartElement(element.asin, element.img,element.title,element.price,element.quantity);
   })
}


