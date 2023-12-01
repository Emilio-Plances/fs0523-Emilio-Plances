export interface IToDo {
  id:number;
  title:string;
  completed:boolean;
  createDate:Date;
  completeDate?:Date|string;
}
