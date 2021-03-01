"use strict";
// function getData(val:string):string{
//     return val
// }
var getValue = function (value) {
    return value;
};
console.log(getValue(30));
console.log(getValue("3000"));
// 泛型接口,方式2
// interface funcItf<T>{
//     (value:T):T;
// }
// function getValue<T>(value:T):T{
//     return value
// }
// let getStringValue:funcItf<string> = getValue;
// console.log(getStringValue("hello"));
// console.log(getStringValue("3000"));
// let getNumberValue:funcItf<number> = getValue;
// console.log(getNumberValue(100));
