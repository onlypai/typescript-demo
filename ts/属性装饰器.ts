//实现一个装饰器，每次定义一个方法，都可以往数组arr中追加函数名作为数组的元素
function logProperty(p:any){    
    return function(target:any,attr:any){
        console.log(target);  //对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        console.log(attr);   //被装饰成员的属性名，例如name
        console.log(p);  //p接收装饰器参数
    }
}

class MyClass{//类的构造函数就是Myclass本身
    @logProperty("aaa")
    public name:string="zhangsan";

    @logProperty("bbb")
    static gender="男"
}
console.log(MyClass.prototype);//类的原型对象
