# TypeScript学习笔记


## 五、typeScript中的接口

接口的作用：在面向对象的编程中，接口是一种**规范的定义**，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，**接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。** typescrip中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。

### 5.1 属性接口
定义接口，使用接口对传入参数进行约束：

```typescript
// 定义属性接口
interface FullName{
    firstName:string;
    secondName:string;
}
// 使用接口对形参进行约束
function func(name:FullName):void{    //name是对象，接收的实际参数必须包含有firstName和secondName属性
    console.log(`姓：${name.firstName}，名:${name.secondName}`);
}
func({firstName:"张",secondName:"三"})   // 这种传递方式不能有多余的属性， 否则编译报错
let obj = {
    firstName:"李",
    secondName:"四",
    age:19
}
func(obj)  // 这种传递方式可以有多余的属性
```

接口规范可以被不同的方法使用，即对批量方法进行约束：

```typescript
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

```

可选属性：

```typescript
interface FullName{
    firstName:string;
    secondName:string;
    age?:number;
}
// 使用接口对实际参数进行约束
function func(name:FullName):void{    
    console.log(`姓：${name.firstName}，名:${name.secondName}`);
}
// 使用接口对实际参数进行约束
function func2(info:FullName):void{    
    if(info.age){
        console.log(`${info.firstName}----${info.secondName}----${info.age}`);
    }
    else{
        console.log(`${info.firstName}----${info.secondName}`);
    }
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
```

(了解)使用举例：

```typescript
// 定义接口
interface Config{
    type:string;
    url:string;
    data?:string;
    dataType:string;
}

//原生js封装的ajax 
function ajax(config:Config){

   var xhr = new XMLHttpRequest();

   xhr.open(config.type,config.url,true);

   xhr.send(config.data);

   xhr.onreadystatechange = function(){

        if(xhr.readyState == 4 && xhr.status == 200){
            console.log('chengong');


            if(config.dataType=='json'){

                console.log(JSON.parse(xhr.responseText));
            }else{
                console.log(xhr.responseText)

            }
        }
   }
}

// 调用
ajax({
    type:'get',
    data:'name=zhangsan',
    url:'http://**.com/api/productlist', //api
    dataType:'json'
})
```

### 5.2 函数类型接口--对方法进行约束
对方法传入的参数以及返回值进行约束，也是批量约束

```typescript
//对实参和函数进行约束
interface SumOfNums{
    (num1:number,num2:number):number;     // ：前是对实参的约束，：后是对返回值的约束
}
let sum:SumOfNums = function(num1:number,num2:number):number{
    return num1+num2
}
console.log(sum(10, 20));
```
### 5.3 可索引接口（了解即可，不常用）

对数组、对象的约束

对数组进行约束：

```typescript
// 对数组进行约束
interface ArrItf{
    [index:number]:number;     // ：前是对索引的约束，：后是每一个元素的类型的约束
}
let arr1:ArrItf = [10, 20]    //正确写法
// let arr1:ArrItf = [10, 20, "hello"]  //报错
console.log(arr1);
```
 对对象进行约束：

```typescript
interface ObjItf{
    [index:string]:any
}
var arr:ObjItf={name:'张三', age:17};
console.log(arr);
```

### 5.4 类类型接口

对类的约束和抽象类抽象有点相似

```typescript
//对类进行约束
interface DogItf{
    name:string;   //将来定义的类必须有name这个实例属性
    eat(food:string):void;  //将来定义的类必须有eat这个实例方法
}
class Animal{
    drink(){
        console.log("喝");
     
    }
}

class Dog extends Animal implements DogItf{

    name:string;
    constructor(n:string){
        super()
        this.name = "小狗"
    }

    eat(food:string){
        console.log(`${this.name}正在吃${food}`);
    }
}
let dog1 = new Dog("小白");
dog1.eat("骨头");
dog1.drink();
```
### 5.5 接口的扩展--接口可以继承、被继承

```typescript
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
```
## 六、typeScript中的泛型
### 6.1 泛型的定义
泛型：软件工程中，我们不仅要创建一致的、定义良好的API，同时也要考虑**可重用性**。 组件**不仅能够支持当前的数据类型，同时也能支持未来的数据类型**，这在创建大型系统时为你提供了十分灵活的功能。

在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。

通俗理解：泛型就是解决类、接口、方法的复用性，以及对不特定数据类型的支持(类型校验)。

### 6.2 泛型函数

```typescript
/*只能返回string类型的数据*/
    function getData(value:string):string{
        return value;
    }

/*同时返回 string类型 和number类型  （代码冗余）*/
    function getData1(value:string):string{
        return value;
    }

    function getData2(value:number):number{
        return value;
    }


/*同时返回 string类型 和number类型       any可以解决这个问题*/
    function getData(value:any):any{
        return '哈哈哈';
    }
    getData(123);
    getData('str');

```

any放弃了类型检查,传入什么 返回什么。比如:传入number 类型必须返回number类型  传入 string类型必须返回string类型。

泛型：可以支持不特定的数据类型，T表示泛型，具体什么类型是调用这个方法的时候决定的：

```typescript
function getData<T>(val:T):T{     // 当中出现的T类型由调用的时候的<>中的类型决定
    return val
}
console.log(getData<number>(30));
console.log(getData<string>("hello"));
console.log(getData<boolean>(true));
```
### 6.3 泛型类

```typescript
class GetElem{  

    arr2:number[] = [];

    add(val:number){
        this.arr2.push(val)
    }

    getSecondElem():number{
        return this.arr2[1]
    }
} 
```

上面代码，将类型规定为number之后，对字符串不适用，但如果使用泛型就可以解决：

```typescript
class GetElem<T>{   //该类中需要写到类型的地方(T表示)，都可以用调用时候传进来的<>中的类型来代替，

    arr2:T[] = [];

    add(val:T){
        this.arr2.push(val)
    }

    getSecondElem():T{
        return this.arr2[1]
    }
} 
let obj1 = new GetElem<number>();
obj1.add(10);
obj1.add(20);
obj1.add(30);
console.log(obj1.getSecondElem());


let obj2 = new GetElem<string>();
obj2.add("hello");
obj2.add(" world");
obj2.add(" and ts");
console.log(obj2.getSecondElem());
```
### 6.4 泛型接口
泛型类接口一般有两种写法

第一种：

```typescript
interface ConfigFn{
    <T>(value:T):T;
}

var getData:ConfigFn=function<T>(value:T):T{
    return value;
}

// getData<string>('张三');
// getData<string>(1243);  //错误
```

第二种：

```typescript
interface ConfigFn<T>{
    (value:T):T;
}

function getData<T>(value:T):T{
    return value;
}

var myGetData:ConfigFn<string>=getData;     

myGetData('20');  /*正确*/

// myGetData(20)  //错误
```


## 七、模块
### 7.1 模块的的概念
关于术语的一点说明: 请务必注意一点，TypeScript 1.5里术语名已经发生了变化。 
“**内部模块**”现在称做“**命名空间**”。“外部模块”现在则简称为“模块”，模块在其自身的作用域里执行，而不是在全局作用域里；
         这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的，除非你明确地使用export形式之一导出它们。 
         相反，如果想使用其它模块导出的变量，函数，类，接口等的时候，你必须要导入它们，可以使用 import形式之一。

### 7.2 模块引入的几种方法

根据导出方式，可以有对应的导入格式：

```typescript
export {a, func, Dog2}      
// 对应导入方式：import {a, func, Dog2} from "./md1"   使用： a    func()


export default {a, func, Dog2}   
// 对应导入方式：import md1 from "./md1"    使用：md1.a    md1.func()
```

main.ts:

```typescript
// import {a, func, Dog2} from "./md1"

// console.log(a)

// func()

// var objDog = new Dog2()
// objDog.eat()
//---------------------------------------------
// import {a as myA, func, Dog2} from "./md1"
// console.log(myA)
//-----------------------------------------------
// import md1 from "./md1"
// func()
// console.log(md1.a)


//-----------------------------------------------
// import A from "./md1"
// console.log(A.a)
```
md1.ts：

```typescript
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
```


### 7.3 命名空间

命名空间:
    在代码量较大的情况下，为了避免各种变量命名相冲突，可将相似功能的函数、类、接口等放置到命名空间内
    同Java的包、.Net的命名空间一样，TypeScript的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象。命名空间内的对象通过export关键字对外暴露。

命名空间和模块的区别：

命名空间：内部模块，主要用于组织代码，避免命名冲突。

模    块：ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间。

main.ts中：

```typescript
import A from "./md1"
console.log(A.a)
```

md2.ts中：

```typescript
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
```

## 八、装饰器
装饰器:装饰器是一种**特殊类型的声明**，它能够被附加到类声明，方法，属性上，可以为原本的代码添加额外的功能。

通俗的讲装饰器就是一个函数，可以注入到类、方法、属性参数上来扩展类、属性、方法的功能。

常见的装饰器有：类装饰器、属性装饰器、方法装饰器

装饰器的写法：普通装饰器（无传参） 、 装饰器工厂（可传参）

装饰器是过去几年中js最大的成就之一。


### 8.1 类装饰器

#### 8.1.1 类装饰器:普通装饰器（无法传参）

```typescript
function logClass(p:any){    
    //这里的代码在开始装饰的时候就会执行了！
    console.log(p);      // p接收这个被装饰的类
    
}

@logClass
class MyClass{
   
}
```
#### 8.1.2 类装饰器:装饰器工厂（可传参）

```typescript
function logClass(p:any){    
    //这里的代码在开始装饰的时候就会执行了！
    return function(target:any){
        console.log(target)   //target是类
        console.log(p)  // p接收装饰器参数
    }
}

@logClass("aaa")     //向装饰器传递参数
class MyClass{
   
}
```

### 8.2 属性装饰器
属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
1. 成员的名字。

```typescript
//实现一个装饰器，每次定义一个方法，都可以往数组arr中追加函数名作为数组的元素
function logProperty(p:any){    
    return function(target:any,attr:any){
        console.log(target);  //对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
        console.log(attr);   //成员的名字
        console.log(p);  //p接收装饰器参数
    }
}

class MyClass{
    @logProperty("aaa")
    public name:string="zhangsan";

    @logProperty("bbb")
    static gender="男"
}
```

### 8.3 方法装饰器

```typescript
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
            oMethod(...res)
        }
    }
}

class MyClass{

    @logMethod("")
    sum1(n1:number,n2:number){
        console.log(`和是：${n1+n2}`)
    }
}
let obj = new MyClass()
obj.sum1(10,20)   //相当于每次调用这个函数，都会执行 desc.value中的
obj.sum1(30,40)

```



### 8.4 小练习

需求：动态追加数组元素：

实现一个装饰器，每次定义一个方法，都可以往数组arr中追加函数名作为数组的元素 

```typescript
let arr:any[] = [];
function addMethod(p:any){    
    return function(target:any,methodName:any,desc:any){
        arr.push(p)
    }
}

class MyClass{
    @addMethod("eat")
    eat(){

    }

    @addMethod("drink")
    drink(){

    }
}
console.log(arr)
```

### 8.5 小练习2

实现一个装饰器，在不影响原有计算功能的基础上，计算0加到10亿花了多少秒

```typescript
function logMethod(p:any){    
    return function(target:any,methodName:any,desc:any){
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
obj.sum1() 
```










