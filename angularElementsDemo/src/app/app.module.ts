import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

import { MyTodoComponent } from './my-todo/my-todo.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MyTodoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
    constructor(private injector: Injector) { }

    ngDoBootstrap() {
        const myTodoElement = createCustomElement(MyTodoComponent, { injector: this.injector });
        customElements.define('mytodo-element', myTodoElement);
    }
}
