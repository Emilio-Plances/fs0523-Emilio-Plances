export class ProductCard{
   constructor(_id,_name, _brand, _price, _imageUrl, _description,_container){
      this._id=_id;
      this.name=_name;
      this.brand=_brand;
      this.price=_price;
      this.imageUrl=_imageUrl;
      this.description=_description;
      this.container=_container;
      this.HTMLinit();
   }

   HTMLinit(){
      let temp= document.querySelector(`#card-template`);
      let clone= temp.content.cloneNode(true);

      this.setVariables(clone);
      this.setLinks(clone);

      this.container.append(clone);
   }
   
   setVariables(clone){
      let cloneImg= clone.querySelector(`.card-img`);
      let cloneName= clone.querySelector(`.card-name`);
      let clonePrice= clone.querySelector(`.card-price`);
      let cloneDescription= clone.querySelector(`.card-description`);
      let cloneBrand= clone.querySelector(`.card-brand`);

      cloneImg.src=this.imageUrl;
      cloneImg.alt=this.name;
      cloneName.innerText=this.name;
      cloneBrand.innerText=this.brand;
      cloneDescription.innerText=this.description;
      clonePrice.innerText=this.price;
   }

   setLinks(clone){
      let linkEdit=clone.querySelector(`.link-edit`);
      let linkDetails=clone.querySelector(`.link-details`);
      linkEdit.href=`edit.html?id=${this._id}`;
      linkDetails.href=`details.html?id=${this._id}`;
   }
}