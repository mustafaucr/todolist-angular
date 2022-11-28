import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [  // modülü çalıştırılan compoennetleri de burada
    AppComponent, TodoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TodoComponent]  // başlangıç compoenenti de burada
})
export class AppModule { }
