//定义属性接口
// interface FullName{
//     firstName:string;
//     secondName:string;
// }

// // 使用接口对形参进行约束
// function func(name:FullName):void{    //name是对象，接收的实际参数必须包含有firstName和secondName属性
//     console.log(`姓：${name.firstName}，名:${name.secondName}`);
// }

// func({firstName:"张",secondName:"三"})   // 这种传递方式不能有多余的属性， 否则编译报错

// let obj = {
//     firstName:"李",
//     secondName:"四",
//     age:19
// }
// func(obj)  // 这种传递方式可以有多余的属性

//------------------------------------------------------------
对批量的函数进行约束
interface FullName{
    firstName:string;
    secondName:string;
}
// 使用接口对实际参数进行约束
function func(name:FullName):void{    
    console.log(`姓：${name.firstName}，名:${name.secondName}`);
}
// 使用接口对实际参数进行约束
function func2(info:FullName):void{    
    console.log(`${info.firstName}----${info.secondName}`);
}

func({firstName:"张",secondName:"三"})  
let obj = {
    firstName:"李",
    secondName:"四",
    age:19
}
func(obj)  

func2({firstName:"张",secondName:"三"})
func2(obj)