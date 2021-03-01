"use strict";
// function logMethod(p:any){    
//     //这里的代码在开始装饰的时候就会执行了！
//     return function(target:any,methodName:any,desc:any){
//         // console.log(target)   //target对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
//         // console.log(methodName);   // 被装饰的方法名
//         // console.log(desc);   // 属性描述符,它的value属性就是被装饰的这个函数
//         // console.log(p)  // p接收装饰器参数
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//         //保存原有指向
//         let oMethod = desc.value;
//         desc.value = function(...res:any){
//             console.log("log: 调用了sum1这个方法");
//             oMethod(...res)
//         }
//     }
// }
// //向装饰器传递参数
// class MyClass{
//     @logMethod("")
//     sum1(n1:number,n2:number){
//         console.log(`和是：${n1+n2}`)
//     }
// }
// let obj = new MyClass()
// obj.sum1(10,20)   //相当于每次调用这个函数，都会多执行 desc.value中的
// obj.sum1(30,40)
//--------------------------------------------------------------------------
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
            var timestamp1 = new Date().getTime();
            oMethod.apply(void 0, res);
            var timestamp2 = new Date().getTime();
            var ret = (timestamp2 - timestamp1) / 1000;
            console.log(ret);
        };
    };
}
//向装饰器传递参数
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.sum1 = function () {
        var n = 0;
        for (var i = 0; i < 10000000000; i++) {
            n += 1;
        }
        console.log(n);
    };
    __decorate([
        logMethod("")
    ], MyClass.prototype, "sum1", null);
    return MyClass;
}());
var obj = new MyClass();
obj.sum1(); //相当于每次调用这个函数，都会多执行 desc.value中的
// obj.sum1(30,40)
//--------------------------------------------------------------------------
// //实现一个装饰器，每次定义一个方法，都可以往数组arr中追加函数名作为数组的元素
// function logProperty(p:any){    
//     return function(target:any,attr:any){
//         console.log(target);  //对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
//         console.log(attr);   //成员的名字
//         console.log(p);  //p接收装饰器参数
//     }
// }
// class MyClass{
//     @logProperty("aaa")
//     public name:string="zhangsan";
//     @logProperty("bbb")
//     static gender="男"
// }
