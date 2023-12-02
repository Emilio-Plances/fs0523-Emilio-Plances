import { Component } from '@angular/core';
import { IToDo } from '../../Models/IToDo';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {
  constructor(private toDoSrv:ToDoService){}
  completedArr!:IToDo[];
  editingToDo!:IToDo;
  loading:boolean=false;
  edit:boolean=false;
  editing:boolean=false;
  check:boolean=false;

  ngOnInit(){
    this.loading=true;
    this.toDoSrv.getAll().then(res=>{
      this.loading=false;
      this.completedArr=res.filter(element=>element.completed)

      if(this.completedArr.length==0) this.check=true;
    });
  }

  newToDoCreate(newToDo:Partial<IToDo>){
    if(!newToDo.title){alert("Please enter a title");return;}

    this.loading=true;
    newToDo.createDate=new Date();

    this.toDoSrv.create(newToDo).then(res=>{
      this.loading=false;
      alert(`${res.title} è stato creato`)
    });
  }

  deleteToDo(id:number){
    this.edit=true;
    this.toDoSrv.delete(id).then(()=>{

      let index=this.completedArr.findIndex(element=>element.id==id);
      this.completedArr.splice(index,1);
      alert(`Eliminato con successo!`);
      if(this.completedArr.length==0) this.check=true;
      this.edit=false;
    })
  }

  completeToDo(toDo:IToDo){
    this.edit=true;
    toDo.completed=false;
    toDo.completeDate=undefined;

    this.toDoSrv.edit(toDo).then(() =>{
      let index=this.completedArr.findIndex(element=>element.id==toDo.id);
      this.completedArr.splice(index,1);
      alert(`Modificato con successo`);
      if(this.completedArr.length==0) this.check=true;
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
