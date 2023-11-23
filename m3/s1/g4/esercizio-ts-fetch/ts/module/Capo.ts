import {Abbigliamento} from "./Utility";

export class Capo {
   protected id:number;
   protected codprod:number;
   protected collezione:string;
   protected capo:string;
   protected modello:number;
   protected quantita:number;
   protected colore:string;
   protected prezzoivaesclusa:number;
   protected prezzoivainclusa:number;
   protected disponibile:string;
   protected saldo:number;

   constructor({
      id,
      codprod,
      collezione,
      capo,
      modello,
      quantita,
      colore,
      prezzoivaesclusa,
      prezzoivainclusa,
      disponibile,
      saldo
      }:Abbigliamento){
         this.id=id;
         this.codprod=codprod;
         this.collezione=collezione;
         this.capo=capo;
         this.modello=modello;
         this.quantita=quantita;
         this.colore=colore;
         this.prezzoivaesclusa=prezzoivaesclusa;
         this.prezzoivainclusa=prezzoivainclusa;
         this.disponibile=disponibile;
         this.saldo=saldo;
   }
   get getSaldo():number{
      return this.saldo;
   }
   get getAcquisto():number{
      return this.prezzoivainclusa-(this.saldo*0.01);
   }
}