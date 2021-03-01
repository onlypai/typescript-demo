// function getData(val:string):string{
//     return val
// }

// getData("hello")
// getData(10)


// function getData(val:any):any{
//     return val
// }
//-----------------------------------------------------
// function getData<T>(val:T):T{     // 当中出现的T类型由调用的时候的<>中的类型决定
//     return val
// }
// console.log(getData<number>(30));
// console.log(getData<string>("hello"));
// console.log(getData<boolean>(true));
//-----------------------------------------------------
// class GetElem<T>{   //该类中需要写到类型的地方(T表示)，都可以用调用时候传进来的<>中的类型来代替，

//     arr2:T[] = [];

//     add(val:T){
//         this.arr2.push(val)
//     }

//     getSecondElem():T{
//         return this.arr2[1]
//     }
// } 
// let obj1 = new GetElem<number>();
// obj1.add(10);
// obj1.add(20);
// obj1.add(30);
// console.log(obj1.getSecondElem());


// let obj2 = new GetElem<string>();
// obj2.add("hello");
// obj2.add(" world");
// obj2.add(" and ts");
// console.log(obj2.getSecondElem());
//-----------------------------------------------------
// 泛型接口,方式1
interface funcItf{
    <T>(value:T):T;
}

var getValue:funcItf = function<T>(value:T):T{
    return value
}
console.log(getValue<number>(30));
console.log(getValue<string>("3000"));
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