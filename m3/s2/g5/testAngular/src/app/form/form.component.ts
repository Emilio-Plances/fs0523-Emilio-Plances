import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IToDo } from '../Models/IToDo';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormComponent {

  @Input() newToDo:Partial<IToDo>={
    title: '',
    completed: false,
  }
  @Output() onCreateClick:EventEmitter<Partial<IToDo>> = new EventEmitter()


  sendNewToDo(){
    if(!this.newToDo.createDate) this.newToDo.createDate = new Date();
    this.onCreateClick.emit(this.newToDo)
    if(!this.newToDo.id) this.newToDo.title =``;
  }
}

