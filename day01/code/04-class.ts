// class Animal{

//     eat():void{
//         console.log("吃-----");
//     }
// }

// let ani = new Animal()
// ani.eat()


// class Dog{

//     name:string;   //省略了public

//     constructor(n:string){    //constructor里面的代码什么时候执行
//         this.name = n    //实例属性
//     }

//     eat():void{   //实例方法
//         console.log("吃-----");
//     }

//     say():void{   //实例方法
//         console.log("我的名字叫"+this.name);
//     }
// }

// let dog1 = new Dog("小白");
// dog1.eat();
// console.log(dog1.name);
// dog1.say();
//-----------------------------------------------------------
// 继承
// class Animal{

//     eat():void{
//         console.log("吃-----!");
//     }
// }
// class Dog extends Animal{

// }
// let dog1 = new Dog();
// dog1.eat()


// class Animal{    // Animal类----父类 基类
    
//     public name:string;   // 公有属性 public修饰的这个属性，可以在类里面，子类里面，类的外面使用 
//     // protected name:string;   // 受保护属性 protected修饰的这个属性，可以在类里面，子类里面使用 
//     // private name:string;   // 私有属性 private修饰的这个属性，只可以在类里面使用 
//     constructor(n:string){
//         this.name = n
//     }

//     eat():void{

//     }
//     say():void{
//         console.log("我的名字是"+this.name);
//     }
// }

// let ani = new Animal("小动物");
// ani.say()

// class Dog extends Animal{  // Dog类----子类 派生类

//     color:string
//     constructor(n:string,c:string){
//                     //重写：继承的时候，子类方法名和父类方法名一致
//         super(n)   // 执行父类的constructor方法,目的是为了把父类的属性继承过来
//         this.color = c
        
//     }

//     eat():void{
//         console.log("wangwang,吃-----!");
//     }

//     say():void{
//         console.log("wangwang,我的名字是"+this.name);
//     }

//     static gender = "男";  //定义一个静态属性
//     static drink():void{   //定义一个静态方法
//         console.log("喝----静态方法" + Dog.gender);   //静态方法中，可以对静态属性进行操作，不对实例属性进行操作
//     }
// }

// let dog1 = new Dog("小黑", "黑色");
// console.log(dog1.name);
// console.log(dog1.color);
// dog1.eat();
// dog1.say()


// Dog.drink()   //静态方法通过  类名.方法名()
// console.log(Dog.gender);


// class Cat extends Animal{ 

//     constructor(n:string){
//         super(n)    
//     }

//     eat():void{
//         console.log("miaomiao,吃-----!");
//     }

// }

// let cat1 = new Cat("小花");
// cat1.eat();

//--------------------------------------------------------

abstract class Animal{      // 抽象类
    public name:string;   
    constructor(n:string){
        this.name = n
    }

    abstract eat():any;  // 抽象方法， 这个方法必须在子类中定义
  
    say():void{
        console.log("say------");
    }
}

//let ani = new Animal("小动物");   //抽象类不可以实例化, 专门用来作为"模板"来去给子类继承


class Dog extends Animal{

    eat():void{
        console.log("Dog-eat------");
    }   
}
let dog1 = new Dog("小白");
dog1.say();
dog1.eat();


class Cat extends Animal{

    eat():void{
        console.log("Cat-eat------");
    }  

}
let cat1 = new Cat("小猫");
cat1.eat()