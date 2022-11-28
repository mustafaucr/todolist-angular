import { Component } from '@angular/core';
import { Model } from '../model';
// import { TodoItem } from '../todoitems';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  message = "merhaba"

  constructor() { }

  // model tanımladığımız için alttakine ihtiyaç yok artık
  // name: string = 'Mustafa';  // private denirse başka sayfalarda ulaşılamaz bunun için getname fonk yazılabilir

  // // alttaki statik
  // // items: any[] = [
  // //   { id: "1", description: "kahvaltı", action: "yes" },
  // //   { id: "2", description: "spor", action: "yes" },
  // //   { id: "3", description: "alışveriş", action: "no" },
  // // ]
  // //alttaki model ile olutşur
  // items: TodoItem[] = [
  //   // interface tanımlaması aşağıdaki gibi
  //   { description: "kahvaltı", action: "yes" },
  //   { description: "spor", action: "yes" },
  //   { description: "alışveriş", action: "no" },
  //   // class tanımlaması aşağıdaki gibi
  //   // new TodoItem("kahvaltı", "yes"),
  //   // new TodoItem("spor", "yes"),
  //   // new TodoItem("alışveriş", "no"),
  //   // new TodoItem("alışveriş", "no"),
  // ]

  model = new Model();  // her new model dendiğinde o modeldeki değerler döneceği için varsa eklemeler başka çağrılan yyerde görülmeyecek bunun için servis gerekir

  getName() {
    return this.model.name
  }

  getItems() {
    return this.model.items
  }

  // addItem(newTodoWork: any) {
  //   console.log(newTodoWork.value)
  // }

  addItem(value: string) {
    this.model.items.push({ description: value, action: "no" })
  }
}
