import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IToDo } from '../Models/IToDo';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})

export class ToDoListComponent {
  @Input() toDoArr:IToDo[]=[];
  @Output() onDeleteClick:EventEmitter<number> = new EventEmitter()
  @Output() onCompleteClick:EventEmitter<IToDo> = new EventEmitter()
  @Output() onEditClick:EventEmitter<IToDo> = new EventEmitter()

  sendIdDelete(id:number){
    this.onDeleteClick.emit(id);
  }

  switchComplete(todo:IToDo){
    this.onCompleteClick.emit(todo);
  }

  editToDo(todo:IToDo){
    this.onEditClick.emit(todo);
  }
}
