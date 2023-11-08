class Book{
   constructor(_title, _img, _price, _category){
      this.title = _title;
      this.img = _img;
      this.price = _price;
      this.category = _category;
      this.HTMLinit();
   }
   
   HTMLinit(){
      let book = document.createElement(`div`);
      let bookImg = document.createElement(`img`);
      let bookBody = document.createElement(`div`);
      let bookTitle = document.createElement(`h5`);
      let bookPrice = document.createElement(`p`);
      let bookCategory = document.createElement(`p`);
      let footerCard = document.createElement(`div`);
      let deleteButton = document.createElement(`button`);
      let addCartButton= document.createElement(`button`);
      let buttonDiv = document.createElement(`div`);

      book.classList.add(`card`,`col-3`,`pt-3`);

      bookImg.src = this.img;
      bookImg.alt = this.title;
      bookImg.classList.add(`card-img-top`);
      
      bookBody.classList.add(`card-body`);
      
      bookTitle.textContent = this.title;
      bookTitle.classList.add(`card-title`);

      bookCategory.textContent = this.category;
      bookCategory.classList.add(`card-text`);

      bookPrice.textContent = `€${this.price}`;
      bookPrice.classList.add(`card-text`);
      
      footerCard.classList.add(`d-flex`,`justify-content-between`,`align-items-center`,`book-footer`);

      this.cartButtonConfig(addCartButton);
      this.buttonDeleteConfig(deleteButton, book);
      
      buttonDiv.append(addCartButton,deleteButton);
      footerCard.append(bookPrice,buttonDiv);
      bookBody.append(bookTitle,bookCategory,footerCard);
      book.append(bookImg,bookBody);
      
      containerCard.append(book);
   }
   
   buttonDeleteConfig(button, book){
      button.innerText = `Delete`;
      button.classList.add(`btn`,`btn-danger`,`btn-sm`,`ms-2`);
      button.addEventListener(`click`,()=> {
         book.remove();
      });
   }
   
   cartButtonConfig(button){
      button.innerText = `Add to Cart`;
      button.classList.add(`btn`,`btn-primary`,`btn-sm`);
      button.addEventListener(`click`,()=> {
         this.addToCart();
      });
   }
   
   addToCart(){ 
      cart.push(this);
      localStorage.setItem(`cart`,JSON.stringify(cart));
      new CartElement(this.img,this.title,this.price);
   }
}

class CartElement{
   constructor(_img,_title,_price){
      this.img = _img;
      this.title = _title;
      this.price = _price;
      this.HTMLinit();
   }

   HTMLinit(){

      let cartElement=document.createElement(`div`);
      let infoBox = document.createElement(`div`);
      let imgBox = document.createElement(`img`);
      let bookName = document.createElement(`p`);
      let priceBox = document.createElement(`div`);
      let price = document.createElement(`p`);
      let quantity= document.createElement(`p`);
      let deleteButton= document.createElement(`button`);

      cartElement.classList.add(`cart-element`,`d-flex`,`justify-content-between`,`align-items-center`,`mb-3`);
      
      infoBox.classList.add(`d-flex`, `align-items-center`);

      imgBox.src = this.img;
      imgBox.classList.add(`rounded`)

      
      bookName.innerText=this.title;
      bookName.classList.add(`m-0`,`mx-1`);
      
      priceBox.classList.add(`d-flex`,`align-items-center`);
      
      price.innerText = `€${this.price}`;
      price.classList.add(`me-3`);

      quantity.innerText=`1`;

      deleteButton.classList.add(`btn`,`btn-danger`,`btn-sm`,`ms-2`);
      deleteButton.innerText = `Delete`;
      this.deleteButtonConfig(deleteButton, cartElement);

      priceBox.append(price,quantity,deleteButton);
      infoBox.append(imgBox,bookName);
      cartElement.append(infoBox,priceBox);
      containerCart.append(cartElement);
      this.newPrice();
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
      let price = cart.reduce((a,b)=>a + b.price ,0);
      price=price.toFixed(2);
      slotTotalPrice.innerText=price;
      console.log(slotTotalPrice.innerText);
   }

}

let containerCard = document.querySelector(`#library`);
let containerCart = document.querySelector(`#cart-box`);
let cart = localStorage.getItem(`cart`) ? JSON.parse(localStorage.getItem(`cart`)) : [];
let slotTotalPrice=document.querySelector(`#slot-total span`);

fetch(`https://striveschool-api.herokuapp.com/books`)
.then(res=>res.json())
.then(library=>{
   library.forEach(element => {
      new Book(element.title,element.img,element.price,element.category);
   });
})

if(cart){
   cart.forEach(element => {
      new CartElement(element.img,element.title,element.price);
   })
}