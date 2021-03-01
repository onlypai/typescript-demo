"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var A;
(function (A) {
    A.a = 10;
    function func() {
        console.log("这是md1中的func函数");
    }
    var Dog2 = /** @class */ (function () {
        function Dog2() {
        }
        Dog2.prototype.eat = function () {
            console.log("吃------");
        };
        return Dog2;
    }());
})(A = exports.A || (exports.A = {}));
console.log(A.a); //10
var B;
(function (B) {
    var a = 100;
    function func() {
        console.log("这是md1中的func函数");
    }
    var Dog2 = /** @class */ (function () {
        function Dog2() {
        }
        Dog2.prototype.eat = function () {
            console.log("吃------");
        };
        return Dog2;
    }());
})(B || (B = {}));
