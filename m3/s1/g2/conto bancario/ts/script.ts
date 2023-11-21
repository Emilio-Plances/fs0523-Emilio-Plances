class SonAccount{
   balance:number;

   constructor(public name:string){
      this.balance=0;
   }

   deposit(incoming:number):void{
      this.balance+=incoming;
      console.log(`Momentaneamente hai ${this.balance}€ nel tuo conto`);
   }

   withdraw(outcoming:number):void{
      this.balance-=outcoming;
      if(this.balance<0)
         console.log(`Bancarotta! Vendi le tue proprietà!`)
      else
         console.log(this.balance);
   }
   control(){
      console.log(`Momentaneamente hai ${this.balance}€ nel tuo conto`);
   }
}

class MomAccount extends SonAccount{
   constructor(_name:string){
      super(_name);
   }
   interesse(){
      this.balance *= 1.1;
      console.log(`Momentaneamente hai ${this.balance}€ nel tuo conto`);
   }
}

let Mario:SonAccount= new SonAccount(`Mario Rossi`);
let Maria:MomAccount=new MomAccount(`Maria Rossi`);