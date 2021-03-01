let a = 10;

function func(){
    console.log("这是md1中的func函数")
}

class Dog2{

    eat(){
        console.log("吃------")
    }
}

// export {a, func, Dog2}      // 对应导入方式：import {a, func, Dog2} from "./md1"


export default {a, func, Dog2}   // 对应导入方式：import md1 from "./md1"    使用：md1.a,  md1.func()