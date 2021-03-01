// function logMethod(p:any){    
//     //这里的代码在开始装饰的时候就会执行了！
//     return function(target:any,methodName:any,desc:any){
//         // console.log(target)   //target对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
//         // console.log(methodName);   // 被装饰的方法名
//         // console.log(desc);   // 属性描述符,它的value属性就是被装饰的这个函数
//         // console.log(p)  // p接收装饰器参数

//         //保存原有指向
//         let oMethod = desc.value;
//         desc.value = function(...res:any){

//             console.log("log: 调用了sum1这个方法");
//             oMethod(...res)
//         }
//     }
// }

// //向装饰器传递参数
// class MyClass{

//     @logMethod("")
//     sum1(n1:number,n2:number){
//         console.log(`和是：${n1+n2}`)
//     }
// }
// let obj = new MyClass()
// obj.sum1(10,20)   //相当于每次调用这个函数，都会多执行 desc.value中的
// obj.sum1(30,40)

//--------------------------------------------------------------------------

function logMethod(p:any){    
    //这里的代码在开始装饰的时候就会执行了！
    return function(target:any,methodName:any,desc:any){
        // console.log(target)   //target对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        // console.log(methodName);   // 被装饰的方法名
        // console.log(desc);   // 属性描述符,它的value属性就是被装饰的这个函数
        // console.log(p)  // p接收装饰器参数

        //保存原有指向
        let oMethod = desc.value;
        desc.value = function(...res:any){

            var timestamp1=new Date().getTime();
            oMethod(...res)
            var timestamp2=new Date().getTime();
            let ret = (timestamp2 - timestamp1)/1000
            console.log(ret);
            
        }
    }
}

//向装饰器传递参数
class MyClass{

    @logMethod("")
    sum1(){
        let n = 0;
        for(let i =0;i<10000000000;i++){
            n+=1
        }
        console.log(n);
    }
}
let obj = new MyClass()
obj.sum1()   //相当于每次调用这个函数，都会多执行 desc.value中的
// obj.sum1(30,40)
//--------------------------------------------------------------------------

// //实现一个装饰器，每次定义一个方法，都可以往数组arr中追加函数名作为数组的元素
// function logProperty(p:any){    
//     return function(target:any,attr:any){
//         console.log(target);  //对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
//         console.log(attr);   //成员的名字
//         console.log(p);  //p接收装饰器参数
//     }
// }

// class MyClass{
//     @logProperty("aaa")
//     public name:string="zhangsan";

//     @logProperty("bbb")
//     static gender="男"
// }
