"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 10;
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
// export {a, func, Dog2}      // 对应导入方式：import {a, func, Dog2} from "./md1"
exports.default = { a: a, func: func, Dog2: Dog2 }; // 对应导入方式：import md1 from "./md1"    使用：md1.a,  md1.func()
