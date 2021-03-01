"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logMethod(p) {
    //这里的代码在开始装饰的时候就会执行了！
    return function (target, methodName, desc) {
        // console.log(target)   //target对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        // console.log(methodName);   // 被装饰的方法名
        // console.log(desc);   // 属性描述符,它的value属性就是被装饰的这个函数
        // console.log(p)  // p接收装饰器参数
        //保存原有指向
        var oMethod = desc.value;
        desc.value = function () {
            var res = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                res[_i] = arguments[_i];
            }
            console.log("log: 调用了sum1这个方法");
            return oMethod.apply(void 0, res);
        };
    };
}
var MyClass1 = /** @class */ (function () {
    function MyClass1() {
    }
    MyClass1.prototype.sum1 = function (n1, n2) {
        console.log("\u548C\u662F\uFF1A" + (n1 + n2));
    };
    __decorate([
        logMethod("")
    ], MyClass1.prototype, "sum1", null);
    return MyClass1;
}());
var obj = new MyClass1();
//需求，在不改变sum1函数的情况下，每调用一次sum1函数，就打印一次日志
obj.sum1(10, 20); //相当于每次调用这个函数，都会执行 desc.value中的
obj.sum1(30, 40);
