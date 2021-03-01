// 定义字符串
// let str2:string = "hello, typescript"
// console.log(str2);

// 定义布尔值
// let bool2:boolean = true
// bool2 = false
// console.log(bool2);

// 定义数字
// let num2:number = 20
// num2 = 30
// console.log(num2);

// 定义数组(第一种方式)
// let arr2:number[] = [10, 20, 30]
// arr2[1] = 40
// let arr2:string[] = ["hello", "ts", "js"]
// console.log(arr2);

// 定义数组(第二种方式)
// let arr2:Array<number> = [10, 50, 60]
// let arr2:Array<string> = ["hello", "ts", "js", "css"]
// console.log(arr2);

// 定义元组
// let tup2:[number, string] = [10, "hello"]
// tup2[1] = "ts"
// console.log(tup2);


// 定义枚举
// enum Color {red, blue, "orange"}
// let cor2:Color = Color.orange;    //没有给值的时候，获取到的是下标
// console.log(cor2);

// enum Color {red, blue, "orange"="hello"}
// let cor2:Color = Color.orange;    
// console.log(cor2);

// enum Color {red, blue=30, "orange"}
// let cor2:Color = Color.orange;    
// console.log(cor2);

// enum Err {"undefined"=-1, "null"=0, "success"=1}
// let successCode:Err = Err.success
// let undefinedCode:Err = Err.undefined
// console.log(successCode);


// 定义任意类型
// let num2:any = 10
// num2 = "hello"
// console.log(num2);


// 定义null和undefined
// let num2:number;
// console.log(num2);  // 编译时候会报错， 结果是undefined

// let num2:undefined;
// console.log(num2);     // 编译时候不会报错， 结果是undefined

// let num2:null;
// console.log(num2);    // 编译时候会报错， 结果是undefined
  
// let num2:null;
// num2 = null;
// console.log(num2);   // 编译时候不会报错， 结果是null


// 定义never
// let a:never
// a = (()=>{
//     throw new Error("错了！")
// })()
// console.log(a);



// 定义函数，void类型的函数
function func():void{
    console.log("run.....");
}
func()


