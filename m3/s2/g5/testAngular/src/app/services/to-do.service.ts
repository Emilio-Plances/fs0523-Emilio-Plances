import { Injectable } from '@angular/core';
import { IToDo } from '../Models/IToDo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor() { }

  API:string="http://localhost:3000/todo";

  getAll():Promise<IToDo[]>{
    return fetch(this.API,{
      method:"GET",
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res=>res.json())
  }
  getById(id:number):Promise<IToDo>{
    return fetch(this.API+`/${id}`,{
      method:"GET",
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res=>res.json())
  }
  create(toDo:Partial<IToDo>):Promise<IToDo>{
    return fetch(this.API,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(toDo)
    }).then(res=>res.json())
  }

  edit(toDo:IToDo|Partial<IToDo>):Promise<IToDo>{
    return fetch(this.API+`/${toDo.id}`,{
      method:"PUT",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(toDo)
    }).then(res=>res.json())
  }
  delete(id:number):Promise<IToDo>{
    return fetch(this.API+`/${id}`,{
      method:"DELETE",
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res=>res.json())
  }
}
