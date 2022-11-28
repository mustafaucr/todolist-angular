import { TodoItem } from "./todoitems"

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Mustafa';
    this.items = [
      { description: "kahvaltı", action: "yes" },
      { description: "spor", action: "yes" },
      { description: "alışveriş", action: "no" },
    ]
  }
}
