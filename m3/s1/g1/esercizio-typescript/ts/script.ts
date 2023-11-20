class UsefulFunctions{
   closer():string {
      let randomNumber:number = Math.floor(Math.random() * 100) + 1;
      let players=this.getPlayers();
      let [g1,g2]:{name:string,number:string}[] = players;
      console.log(`Il numero uscito è il ${randomNumber}`);
      
      if(parseInt(g1.number)==parseInt(g2.number)&& parseInt(g1.number)==randomNumber)
         return `State palesemente barando`;
      if (parseInt(g1.number) == randomNumber)
         return `Complimenti ${g1.name} hai indovinato!`;
      if (parseInt(g2.number) == randomNumber)
         return `Complimenti ${g2.name} hai indovinato!`;
      
      let diff1: number;
      let diff2: number;
      diff1 = Math.abs(randomNumber - parseInt(g1.number));
      diff2 = Math.abs(randomNumber - parseInt(g2.number));
      if (diff1 == diff2)
         return `Questo è un pareggio!`
      return `Nessuno di voi due ha indovinato ma si è avvicinato di più ${diff1 < diff2 ? g1.name : g2.name}!`;
      
   }

   getPlayers(){
      let g1:HTMLInputElement|null= <HTMLInputElement>document.querySelector(`#g1`);
      let g2:HTMLInputElement|null= <HTMLInputElement>document.querySelector(`#g2`);
      let numG1:HTMLInputElement|null= <HTMLInputElement>document.querySelector(`#num-g1`);
      let numG2:HTMLInputElement|null= <HTMLInputElement>document.querySelector(`#num-g2`);
      let player1:{name:string,number:string}={
         name: g1?.value||``,
         number:numG1?.value||``
      }
      let player2:{name:string,number:string}={
         name: g2?.value||``,
         number:numG2?.value||``
      }
      return [player1, player2];
   }
}
let compare=new UsefulFunctions();
let btnCompare:HTMLInputElement|null= document.querySelector(`#submit`);

btnCompare?.addEventListener(`click`, () => {
   console.log(compare.closer());
})