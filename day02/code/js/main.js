"use strict";
// import {a, func, Dog2} from "./md1"
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(a)
// func()
// var objDog = new Dog2()
// objDog.eat()
//---------------------------------------------
// import {a as myA, func, Dog2} from "./md1"
// console.log(myA)
//-----------------------------------------------
// import md1 from "./md1"
// // func()
// console.log(md1.a)
//-----------------------------------------------
var md1_1 = __importDefault(require("./md1"));
console.log(md1_1.default.a);
