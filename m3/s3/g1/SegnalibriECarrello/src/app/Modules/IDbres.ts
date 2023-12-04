import { IProduct } from "./iproduct";

export interface IDbres {
  products:IProduct[],
  total:number,
  skip:number,
  limit:number
}
