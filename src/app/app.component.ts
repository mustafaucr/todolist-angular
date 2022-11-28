import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // seçici özelliği app-root. bu çağrıldığında bu compoenent çağrılmıl olur.
  templateUrl: './app.component.html',  // bu cpompenenti çağırmak demek templateurl'yi çağırmak demek
  //html ifadeyi olduğu gibi template key'i ile tanımlayabiliyoruz.
  // burada template'a compoenent yazarak da aynı anda diğer bi component çağrılabilir
  // template: `<product></product>`
  // template: `
  //   <h1>{{ title }}</h1>
  //   <h1>{{ getTitle() }}</h1>
  //   <p>
  //     {{ todoItem.description }}
  //     {{ todoItem.action }}
  //   </p>
  //   `,
  styleUrls: ['./app.component.css'],  // css kodları da burada,
  // css aşağıdaki gibi direkt de verilebilir
  // styles: [
  //   `
  //     p {
  //       color: red
  //     }
  //   `
  // ]
})
export class AppComponent {
  title = 'todo app';  // ts classı içinde tanımlanan değerler public olarak tanımlandı
  // varsayılan olarak any ve yine publictir. objeler
  todoItem = {
    description: "kahvaltı",
    action: true
  }

  getTitle() {
    return this.title;  // bu func da public tanımlanır
  }
}
