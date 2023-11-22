abstract class Tassa{
   private tINPS: number;
   private tIRPEF: number;
   private appliedcodred:number;
   constructor(
      private codred: number,
      private ral: number,
   ){
      this.appliedcodred=this.ral-(this.ral*this.codred/100);
      this.tINPS=this.findtINPS();
      this.tIRPEF=this.findtIRPEF();
   }

   private findtINPS():number{
      return this.appliedcodred*26.23/100;
   }
   private findtIRPEF():number{
      if(this.ral<=15000)
         return this.appliedcodred*23/100;
      else if(this.ral<=28000)
         return this.appliedcodred*25/100;
      else if(this.ral<=50000)
         return this.appliedcodred*35/100;
      else
         return this.appliedcodred*43/100;
   }
   get getUtileTasse():number {
      return this.tINPS+this.tIRPEF;
   }
   get getTasseInps():number {
      return this.tINPS;
   }
   get getTIrpef():number{
      return this.tIRPEF;
   }
   get getran():number{
      let utile:number=this.getUtileTasse
      return this.ral-utile;
   }
}

class Lavoratore extends Tassa{}

let Mauro:Lavoratore=new Lavoratore(78,27000);