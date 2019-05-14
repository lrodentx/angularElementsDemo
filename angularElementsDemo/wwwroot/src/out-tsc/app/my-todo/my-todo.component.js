import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
var MyTodoComponent = /** @class */ (function () {
    function MyTodoComponent() {
        this.myTodos = [];
    }
    MyTodoComponent.prototype.ngOnInit = function () {
        this.myTodos = ["Pay Bills", "Clean Car", "Pay Taxes"];
    };
    MyTodoComponent.prototype.addMyTodo = function () {
        this.myTodos.push(this.newTodo);
        this.newTodo = "";
    };
    MyTodoComponent = tslib_1.__decorate([
        Component({
            selector: "app-my-todo",
            templateUrl: "./my-todo.component.html",
            styleUrls: ["./my-todo.component.css"]
            // encapsulation: ViewEncapsulation.Native
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MyTodoComponent);
    return MyTodoComponent;
}());
export { MyTodoComponent };
//# sourceMappingURL=my-todo.component.js.map