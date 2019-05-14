import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
import { MyTodoComponent } from './my-todo/my-todo.component';
import { AppComponent } from './app.component';
var AppModule = /** @class */ (function () {
    function AppModule(injector) {
        this.injector = injector;
    }
    AppModule.prototype.ngDoBootstrap = function () {
        var myTodoElement = createCustomElement(MyTodoComponent, { injector: this.injector });
        customElements.define('mytodo-element', myTodoElement);
    };
    AppModule = tslib_1.__decorate([
        NgModule({
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
        }),
        tslib_1.__metadata("design:paramtypes", [Injector])
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map