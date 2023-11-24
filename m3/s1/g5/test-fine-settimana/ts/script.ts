interface ISim{
   carica:number;
   numeroChiamate:number;
   costoMinuto:number;
   
   get numero404():string;
   get getNumeroChiamate():number;
   ricarica(euro:number):void;
   chiamata(min:number):void;
   azzeraChiamate():void;
}

class Phone implements ISim{
   constructor(
      public carica: number=0,
      public numeroChiamate: number,
      public costoMinuto: number
   ){}

   ricarica(euro: number): void {
      this.carica+=euro;
   }

   get numero404(): string {
      return `${this.carica}€`;
   }

   get getNumeroChiamate(): number {
      return this.numeroChiamate;
   }

   chiamata(min: number): void {
      let costoChiamata:number=min*this.costoMinuto;
      this.numeroChiamate ++;
      console.log(`Costo chiamate: ${costoChiamata}€`);
      this.carica -= costoChiamata
   }

   azzeraChiamate(): void {
      this.numeroChiamate = 0;
   }
}

let telefono1:Phone= new Phone(10,0,0.20);
let telefono2:Phone= new Phone(10,0,0.20);
let telefono3:Phone= new Phone(10,0,0.20);