"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
var A;
(function (A) {
    A.aaa = 'haha';
    var bbb = 123;
    function ccc() {
        console.log('kongjian');
    }
    A.ccc = ccc;
})(A = exports.A || (exports.A = {}));
console.log(A.aaa); //haha
// console.log(A.bbb);//error
