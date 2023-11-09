class Image{
   constructor(_id,_src,_alt){
      this.id=_id;
      this.src=_src;
      this.alt=_alt;
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

let query1=`japan`;
let query2=`pizza`;

inputQueryButton.addEventListener(`click`,()=>{
   let declaredQuery= inputQuery.value;
   inputQuery.value= ``;
   changeImgs(declaredQuery);
});


btnQuery1.addEventListener(`click`,()=>{
   changeImgs(query1);
})

btnQuery2.addEventListener(`click`,()=>{
   changeImgs(query2);
})

function changeImgs(query) {
   while(containerImages.firstChild){
      containerImages.removeChild(containerImages.firstChild);
   }
   getImages(query);
}


























async function getImages (query){
   let res=await fetch(`https://api.pexels.com/v1/search?query=${query}`,{
      method:"GET",
      headers: {
         "Authorization": "U2umvBgzh7BceXBe4TGgpJjb8PjTnT0s5BPabQ73VRg71ALCMSfh9Oqx"
      }
   })
   let imgArr= await res.json();

   let imgPhoto= imgArr.photos;

   imgPhoto.forEach(element=> new Image(element.id,element.src.medium,element.alt))

   console.log(imgPhoto); 
}



