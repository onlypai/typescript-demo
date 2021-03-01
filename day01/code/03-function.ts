// 定义函数和匿名函数
// function func():void{
//     console.log("run");
// }
// func()


// function func():string{
//     return "hello ts"
// }
// console.log(func());

// function func():number{
//     return 30
// }
// console.log(func());


// var func3 = function():number{
//     return 30
// }
// console.log(func3());


// var func3 = function():void{
    
// }
// console.log(func3());

// -------------------------------------------------
// 定义形式参数
// function func(name:string):string{
//     return "名字叫："+name
// }

// console.log(func("张三"));


// function func(name:string, age:number):string{
//     // return "名字叫："+name
//     return `名字叫：${name}, 年龄是${age}`
// }
// console.log(func("张三", 13));

// -------------------------------------------------
// 可选参数
// function func(name:string, age?:number):string{    // 可选参数要放在普通参数的后面,否则会有报错
//     console.log(age);
    
//     if(age){
//         // return "名字叫："+name
//         return `名字叫：${name}, 年龄是${age}`
//     }
//     else{
//         return `名字叫：${name}, 年龄保密`
//     }
// }
// console.log(func("张三", 13));

// -------------------------------------------------
// 默认参数
// function func(name:string, age:number=20):string{    // 形式参数可有默认值
//     console.log(age);
 
//     if(age){
//         // return "名字叫："+name
//         return `名字叫：${name}, 年龄是${age}`
//     }
//     else{  
//         return `名字叫：${name}, 年龄保密`
//     }
// }
// console.log(func("张三", 30));

// -------------------------------------------------
// 剩余参数
// function func3(a:number, b:number, c:number, d:number):number{
//     return a+b+c+d
// }
// console.log(func3(10, 20, 30, 40));


// function func3(...res:number[]):number{
//     //res  [10, 20, 30, 40, 50, 60]

//     let sum = 0;
//     for(let i=0; i<res.length; i++){
//         sum+=res[i]
//     }

//     return sum
// }
// console.log(func3(10, 20, 30));


// function func3(a:number, b:number, ...res:number[]):number{
//     //res  [10, 20, 30, 40, 50, 60]

//     let sum = a+b;
//     for(let i=0; i<res.length; i++){
//         sum+=res[i]
//     }

//     return sum
// }
// console.log(func3(10, 20, 30, 40, 50, 60));


// -------------------------------------------------
// ts函数重载
// 参数个数一致
// function func3(name:string):string;
// function func3(age:number):string;
// function func3(str1:any):string{

//     if(typeof str1 === "string"){
//         return "名字是"+ str1
//     }
//     else{
//         return "年龄是"+ str1
//     }
// }
// console.log(func3("张三"));
// console.log(func3(13));
// console.log(func3(true));

// 参数个数不一致
// function func3(name:string):string;
// function func3(name:string, age:number):string;
// function func3(str1:any,str2?:any):string{

//     if(str2){
//         return `名字是${str1},年龄是${str2}`
//     }
//     else{
//         return `名字是${str1}`
//     }
// }
// console.log(func3("张三"));
// console.log(func3("张三", 13));


// ts的箭头函数(和es6一致)
setTimeout(():void => {
    
    console.log("run...")

}, 1000);