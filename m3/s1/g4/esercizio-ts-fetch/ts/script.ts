import {getFunction as getAbbigliamenti} from "./module/Utility.js";
import {Capo} from "./module/Capo.js";

class App{
   constructor(){
      getAbbigliamenti(`../Abbigliamento.json`)
      .then(abbigliamenti=>{
         console.log(abbigliamenti)
         abbigliamenti.forEach(element=>products.push(new Capo(element)));
         console.log(products);
      });
   }
}

let products:Capo[]=[];
new App();