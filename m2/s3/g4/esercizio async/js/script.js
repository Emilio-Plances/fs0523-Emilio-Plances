class Image{
   constructor(_id,_src,_alt){
      this.id=_id;
      this.url=_src;
      this.alt=_alt;
      this.HTMLinit();
      
   }

   HTMLinit(){
      let temp= document.querySelector(`#template-images`);
      let clone= temp.content.cloneNode(true);

      this.setVariables(clone);
      containerImages.append(clone);
   }

   setVariables(clone){
      let cloneImg= clone.querySelector(`.card-image`);
      
      cloneImg.src= this.url;
      cloneImg.alt= this.alt;
   }
}

let containerImages=document.querySelector(`#images-container`)
let btnQuery1=document.querySelector(`#btn-query1`);
let btnQuery2=document.querySelector(`#btn-query2`);  

let query1=`japan`;
let query2=`pizza`;

btnQuery1.addEventListener(`click`,()=>{
   while(containerImages.firstChild){
      containerImages.removeChild(containerImages.firstChild);
   }
   getImages(query1);
})

btnQuery2.addEventListener(`click`,()=>{
   while(containerImages.firstChild){
      containerImages.removeChild(containerImages.firstChild);
   }
   getImages(query2);
})




























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



