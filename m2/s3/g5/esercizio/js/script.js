import {ProductCard} from "./class/ProductCard.js";

const LINK=`https://striveschool-api.herokuapp.com/api/product`;
const KEY=`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRkMmU2YjI1NGU4ODAwMTgzZjE4MzgiLCJpYXQiOjE2OTk1NTY5NzEsImV4cCI6MTcwMDc2NjU3MX0.Bw85wsGQ_w4_HDb0l363JSSETGI-ppbZn9-M49vw3NU`;

let cardContainer=document.querySelector(`#card-container`);
let moderator=document.querySelector(`#moderator`);

moderator.addEventListener(`change`, function(){
    if(this.checked){
        console.log(`true`);
    }else{
        console.log(`false`);
    }
})
getProducts();

async function getProducts(){ 
   let res= await fetch(`${LINK}`, {
       method:"GET",
       headers: {
           "Content-Type": "application/json",
           Authorization: KEY
       }
   })

   let products= await res.json();
   console.log(products);

   products.forEach(element => {
      new ProductCard(element._id,element.name,element.brand,element.price,element.imageUrl,element.description,cardContainer);
   });
}

function deleteProduct(phone_id){
   fetch(`${LINK}/${phone_id}`, {
       method:"DELETE",
       headers: {
           "Content-Type": "application/json",
           Authorization: KEY
       }
   }).then(res => {
       if(res.status === 200){

           console.log(`Eliminato`)
       }
   })
}


