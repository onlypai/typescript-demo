// 对实参和函数进行约束
// interface SumOfNums{
//     (num1:number,num2:number):number;     // ：前是对实参的约束，：后是对返回值的约束
// }

// let sum:SumOfNums = function(num1:number,num2:number):number{
//     return num1+num2
// }

// console.log(sum(10, 20));
//------------------------------------------------------
// // 对数组进行约束
// interface ArrItf{
//     [index:number]:number;     // ：前是对索引的约束，：后是每一个元素的类型的约束
// }
// let arr1:ArrItf = [10, 20]    //正确写法
// // let arr1:ArrItf = [10, 20, "hello"]  //报错
// console.log(arr1);
// 对对象进行约束
// interface ObjItf{
//     [index:string]:any
// }

// var arr:ObjItf={name:'张三', age:17};
// console.log(arr);
//------------------------------------------------------
// 对类进行约束
// interface DogItf{
//     name:string;   //将来定义的类必须有name这个实例属性
//     eat(food:string):void;  //将来定义的类必须有eat这个实例方法
// }
// class Animal{
//     drink(){
//         console.log("喝");
        
//     }
// }

// class Dog extends Animal implements DogItf{

//     name:string;
//     constructor(n:string){
//         super()
//         this.name = "小狗"
//     }

//     eat(food:string){
//         console.log(`${this.name}正在吃${food}`);
//     }
// }
// let dog1 = new Dog("小白");
// dog1.eat("骨头");
// dog1.drink();
//------------------------------------------------------
// 接口可以继承
interface AnimalItf{
    eat():void;
}
interface DogItf extends AnimalItf{
    drink():void;
}

class Dog implements DogItf{
    drink(){
        console.log(`喝-----`);
    }

    eat(){
        console.log(`吃-----`);
    }
}
let dog1 = new Dog();
dog1.eat();
dog1.drink();