import { Component } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { IToDo } from '../../Models/IToDo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private toDoSrv:ToDoService){}
  toDoArr!:IToDo[];
  notCompletedArr!:IToDo[];
  editingToDo!:IToDo;
  loading:boolean=false;
  edit:boolean=false;
  editing:boolean=false;

  ngOnInit(){
    this.toDoSrv.getAll().then(res=>{
      this.notCompletedArr=res.filter(element=>!element.completed)
    });
  }

  newToDoCreate(newToDo:Partial<IToDo>){
    if(!newToDo.title){alert("Please enter a title");return;}

    this.loading=true;
    newToDo.createDate=new Date();

    this.toDoSrv.create(newToDo).then(res=>{
      this.loading=false;
      this.notCompletedArr.push(res);
      alert(`${res.title} è stato creato`)
    });
  }

  deleteToDo(id:number){
    this.edit=true;
    this.toDoSrv.delete(id).then(()=>{

      let index=this.notCompletedArr.findIndex(element=>element.id==id);
      this.notCompletedArr.splice(index,1);
      alert(`Eliminato con successo!`)
      this.edit=false;
    })
  }

  completeToDo(toDo:IToDo){
    this.edit=true;
    toDo.completed=true;
    toDo.completeDate=new Date();

    this.toDoSrv.edit(toDo).then(() =>{
      let index=this.notCompletedArr.findIndex(element=>element.id==toDo.id);
      this.notCompletedArr.splice(index,1);
      alert(`Modificato con successo`)
      this.edit=false;
    })
  }

  startEditToDo(toDo:IToDo){
    this.editing=true;
    this.editingToDo=toDo
  }

  finishEditToDo(toDo:Partial<IToDo>){
    this.editing=false;
    this.toDoSrv.edit(toDo).then(() =>{});
  }
}