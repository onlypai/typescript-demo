"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//实现一个装饰器，每次定义一个方法，都可以往数组arr中追加函数名作为数组的元素
function logProperty(p) {
    return function (target, attr) {
        console.log(target); //对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        console.log(attr); //被装饰成员的属性名，例如name
        console.log(p); //p接收装饰器参数
    };
}
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.name = "zhangsan";
    }
    MyClass.gender = "男";
    __decorate([
        logProperty("aaa")
    ], MyClass.prototype, "name", void 0);
    __decorate([
        logProperty("bbb")
    ], MyClass, "gender", void 0);
    return MyClass;
}());
console.log(MyClass.prototype); //类的原型对象
