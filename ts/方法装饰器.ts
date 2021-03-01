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

            console.log("log: 调用了sum1这个方法");
            return oMethod(...res)
        }
    }
}

class MyClass1{

    @logMethod("")
    sum1(n1:number,n2:number){
        console.log(`和是：${n1+n2}`)
    }
}
let obj = new MyClass1()
//需求，在不改变sum1函数的情况下，每调用一次sum1函数，就打印一次日志
obj.sum1(10,20)   //相当于每次调用这个函数，都会执行 desc.value中的
obj.sum1(30,40)