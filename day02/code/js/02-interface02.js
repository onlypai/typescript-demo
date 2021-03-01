"use strict";
// 对实参和函数进行约束
// interface SumOfNums{
//     (num1:number,num2:number):number;     // ：前是对实参的约束，：后是对返回值的约束
// }
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.drink = function () {
        console.log("\u559D-----");
    };
    Dog.prototype.eat = function () {
        console.log("\u5403-----");
    };
    return Dog;
}());
var dog1 = new Dog();
dog1.eat();
dog1.drink();
