import { Chiamata } from "./Chiamata.js";
import { utenti } from "./variables.js";
export let index:number=0;

interface ISim{
   carica:number;
   numeroChiamate:number;
   costoMinuto:number;
   registroChiamate:{}[];
   id:number;
   get numero404():string;
   get getNumeroChiamate():number;
   ricarica(euro:number):void;
   chiamata(min:number):void;
   azzeraChiamate():void;
   effettuaChiamata(destinatario:number,durata:number,ora:Date):void;
   mostraRegistroChiamate():void;
   filtraChiamatePerDataOra(filtro:string):void;
}

export class Phone implements ISim{
   registroChiamate:Chiamata[]=[];
   id:number=index;
   numeroChiamate: number=0;

   constructor(
      public carica: number=0,
      public costoMinuto: number,
   ){
      index++;
      utenti.push(this);
   }

   get numero404(): string {
      return `${this.carica}€`;
   }

   get getNumeroChiamate(): number {
      return this.numeroChiamate;
   }

   ricarica(euro: number): void {
      this.carica+=euro;
      console.log(`Nuovo credito: ${this.carica}€`);
   }
   
   effettuaChiamata(destinatario:number,durata:number):void{
      this.chiamata(durata);
      let dataCorrente:Date = new Date();
      let mese:number = dataCorrente.getMonth() + 1;
      let giorno:number = dataCorrente.getDate();
      let ora:number = dataCorrente.getHours();
      let minuti:number = dataCorrente.getMinutes();
      let orarioChiamata:string=`${mese}/${giorno} - ${ora}:${minuti}`
      new Chiamata(durata,orarioChiamata,destinatario,this.id);
   }

   chiamata(min: number): void {
      this.carica -= min*this.costoMinuto;
      console.log(`Nuovo credito: ${this.carica}€`);
   }

   azzeraChiamate(): void {
      this.numeroChiamate = 0;
      this.registroChiamate=[];
   }

   mostraRegistroChiamate(): void {
      if(this.registroChiamate.length==0){
         console.log(`Non ci sono chiamate`);
         return
      }
      this.registroChiamate.forEach(chiamata=>{
         console.log(chiamata);
      })
   }

   filtraChiamatePerDataOra(filtro:string):void{
      console.log(this.registroChiamate.filter(chiamata=>chiamata.orarioChiamata.includes(filtro)));
   }
}