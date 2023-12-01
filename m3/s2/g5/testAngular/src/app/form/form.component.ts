import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IToDo } from '../Models/IToDo';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})

export class FormComponent {

  @Output() onCreateClick:EventEmitter<Partial<IToDo>> = new EventEmitter()

  @Input() newToDo:Partial<IToDo>={
    title: '',
    completed: false,
  }

  sendNewToDo(){
    this.newToDo.createDate = new Date();
    this.onCreateClick.emit(this.newToDo)
    this.newToDo.title='';
  }
}

