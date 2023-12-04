import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { IDbres } from '../Modules/IDbres';
import { IProduct } from '../Modules/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API:string=`https://dummyjson.com/products`;

  subject:BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);
  favourites$ = this.subject.asObservable();

  constructor(private http:HttpClient) { }

  getAll():Observable<IDbres>{
    return this.http.get<IDbres>(this.API);
  }
  newFavArr(newArr:IProduct[]){
    this.subject.next(newArr);
  }
}
