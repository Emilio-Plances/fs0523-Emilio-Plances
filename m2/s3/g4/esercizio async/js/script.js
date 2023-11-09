class Image{
   constructor(_id,_src,_alt,_photographer,_photographer_id,_photographer_url){
      this.id=_id;
      this.src=_src;
      this.alt=_alt;
      this.photographer=_photographer;
      this.photographer_id=_photographer_id;
      this.photographer_url=_photographer_url;
      this.HTMLinit();
      
   }

   HTMLinit(){
      let temp= document.querySelector(`#template-images`);
      let clone= temp.content.cloneNode(true);

      this.setButtons(clone);

      this.setVariables(clone);
      containerImages.append(clone);
   }

   setVariables(clone){
      let cloneImg= clone.querySelector(`.card-image`);
      let idSlot= clone.querySelector(`.id-slot`);
      
      cloneImg.src= this.src;
      cloneImg.alt= this.alt;
      idSlot.innerText= this.id;
   }

   setButtons(clone){
      let origin= clone.querySelector(`.origin`);
      let viewButton= clone.querySelector(`.view-button`);
      let hideButton= clone.querySelector(`.hide-button`);

      this.configViewButton(viewButton);
      this.configHideButton(hideButton,origin);
   }

   configViewButton(button){
      button.addEventListener(`click`,()=>{
         Swal.fire({
         imageUrl: this.src,
         imageAlt: this.alt
         });
      });
   }

   configHideButton(button,box){
      button.addEventListener(`click`,()=>{
         box.remove();
      });
   }
}

let containerImages=document.querySelector(`#images-container`)
let btnQuery1=document.querySelector(`#btn-query1`);
let btnQuery2=document.querySelector(`#btn-query2`);  
let inputQueryButton= document.querySelector(`#input-query-button`);
let inputQuery= document.querySelector(`#input-query`);

changeImgs(`mountains`);
inputQueryButton.addEventListener(`click`,()=>{
   let declaredQuery= inputQuery.value;
   inputQuery.value= ``;

   changeImgs(declaredQuery);
});

btnQuery1.addEventListener(`click`,()=>{
   let query1=`japan`;
   changeImgs(query1);
})

btnQuery2.addEventListener(`click`,()=>{
   let query2=`pizza`;
   changeImgs(query2);
})

function changeImgs(query) {
   while(containerImages.firstChild){
      containerImages.removeChild(containerImages.firstChild);
   }
   getImages(query);
}

async function getImages (query){
   const LINK=`https://api.pexels.com/v1/search?query=`;
   const APIKEY=`U2umvBgzh7BceXBe4TGgpJjb8PjTnT0s5BPabQ73VRg71ALCMSfh9Oqx`;

   let res=await fetch(`${LINK}${query}`,{
      method:"GET",
      headers: {
         "content-type": "application/json",
         Authorization: APIKEY
      }
   })
   let imgArr= await res.json();
   let imgPhoto= imgArr.photos;
console.log(imgPhoto);
   imgPhoto.forEach(element=> new Image(element.id,element.src.medium,element.alt,element.photographer,element.photographer_id,element.photographer_url))
}



