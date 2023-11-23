export type Abbigliamento={
   id:number,
   codprod:number
   collezione:string,
   capo:string,
   modello:number,
   quantita:number,
   colore:string,
   prezzoivaesclusa:number,
   prezzoivainclusa:number,
   disponibile:string,
   saldo:number
}

export async function getFunction(link:string):Promise<Abbigliamento[]>{
   
   let res:Response=await fetch(link,{
      method: `GET`,
      headers: {
         contentType: 'application/json'
      }
   })
   let data:Abbigliamento[]= await res.json();
   return data
}