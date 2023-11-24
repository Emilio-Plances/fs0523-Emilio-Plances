import { utenti } from "./variables.js";

export class Chiamata{
   constructor(
      public durata:number,
      public orarioChiamata:String,
      public IDdestinatario:number,
      public IDmittente:number,
   ){
      [IDmittente,IDdestinatario].forEach(ID=>{
         utenti[ID].numeroChiamate++;
         utenti[ID].registroChiamate.push(this)
      })
   }
}
