export namespace A{
    export let a = 10;

    function func(){
        console.log("这是md1中的func函数")
    }

    class Dog2{

        eat(){
            console.log("吃------")
        }
    }
}
console.log(A.a)  //10

namespace B{

    let a = 100;

    function func(){
        console.log("这是md1中的func函数")
    }

    class Dog2{

        eat(){
            console.log("吃------")
        }
    }
}
