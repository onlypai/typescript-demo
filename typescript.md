https://github.com/JasonkayZK/typescript_learn/tree/1-type笔记地址

## **1、TypeScript中的基本类型**

TypeScript中的基本类型：

- 类型声明

  - 通过类型声明可以指定TS中变量（参数、形参）的类型；

  - 指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错；

  - 语法：

    - ```typescript
      let 变量: 类型;
      let a: number;//后续a只能赋值为number
      
      let 变量: 类型 = 值;
      let b: string='haha'//类型小写
      
      function fn(参数: 类型, 参数: 类型): 类型{
          ...
      }
      function fn(aa:number,bb:number):number {
          ...
      }
      fn(11,22)//参数不能多不能少
      //括号外的number是返回值的类型
      ```

- 自动类型判断

  - 当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型
  - 所以如果你的变量的声明和赋值时同时进行的，可以省略掉类型声明

  ```typescript
  let b=true  //TS自动会检测b为boolean类型，不能赋值为其他类型
  ```

  

- 类型：

  | **类型** |     **例子**      |            **描述**            |
  | :------: | :---------------: | :----------------------------: |
  |  number  |    1, -33, 2.5    |            任意数字            |
  |  string  | 'hi', "hi", `hi`  |           任意字符串           |
  | boolean  |    true、false    |       布尔值true或false        |
  |  字面量  |      其本身       |  限制变量的值就是该字面量的值  |
  |   any    |         *         |            任意类型            |
  | unknown  |         *         |         类型安全的any          |
  |   void   | 空值（undefined） |     没有值（或undefined）      |
  |  never   |      没有值       |          不能是任何值          |
  |  object  |  {name:'孙悟空'}  |          任意的JS对象          |
  |  array   |      [1,2,3]      |           任意JS数组           |
  |  tuple   |       [4,5]       | 元素，TS新增类型，固定长度数组 |
  |   enum   |    enum{A, B}     |       枚举，TS中新增类型       |

- number

  - ```typescript
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    let big: bigint = 100n;
    ```

- boolean

  - ```typescript
    let isDone: boolean = false;
    ```

- string

  - ```typescript
    let color: string = "blue";
    color = 'red';
    
    let fullName: string = `Bob Bobbington`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${fullName}.
    
    I'll be ${age + 1} years old next month.`;
    ```

- 字面量

  - 也可以使用字面量去指定变量的类型，通过字面量可以确定变量的取值范围

  - ```typescript
    let color: 'red' | 'blue' | 'black';
    let num: 1 | 2 | 3 | 4 | 5;//num是number类型且只能是这几个值
    
    //联合类型
    let c:number|string//c可以是这两种类型的值
    c=12
    c='haha'
    ```

- any             任意类型

  - ```typescript
    let d: any = 4;//d是任意类型，关闭了TS 的类型检测，使用TS时不建议使用any
    d = 'hello';
    d = true;
    
    //这种是显式的any，如果直接let b=1,这种就是隐式的any
    //any类型的值可以赋值给任意类型的变量，不会报错
    ```

- unknown         未知类型

  - ```typescript
    let notSure: unknown = 4;
    notSure = 'hello';
    
    //unknown是一个类型安全的any，unknown不能直接赋值给其他变量，如果想赋值要判断或进行断言：
    let a:string;
    let b:unknown
    b='hgah'
    //a=b//直接赋值是错误的
    if(typeof b==='string'){
        a=b
    }
    //类型断言：告诉解析器变量的类型
    a=b as string;//方式一：变量 as 类型
    a=<string>b;//方式二：<类型>变量
    ```

void和never用于变量的不多，多用于函数返回值

- void    空，**以函数为例，表示函数没有返回值**

  - ```typescript
    let unusable: void = undefined;
    function fn():void{
        //该函数没有返回值，可以写一个return，后面可以跟undefined或null
        return
    }
    ```

- never   永远不会返回结果，多用于报错

  - ```typescript
    function error(message: string): never {
      throw new Error(message);
    }
    ```

- object

  - ```typescript
    let obj: object = {};
    
    //{}可以用来指定对象中包含哪些属性，
    let b:{name:string}
    b={name:'hah'}//赋值时对象b有且仅有name属性
    
    let c:{name:string,age?:number}
    c={name;"hah"}//属性age有没有都行
    
    let d:{name:string, [propNameee:string]:any }
    d={name;"hah",bb:'haha',cc:12}
    //[propNameee:string]:any表示任意类型的属性都可有可无
    
    //设置函数结构的类型声明
    let d:(aa:number,bb:number)=>number;//两个参数是数字类型，返回值也是数字类型
    d=function (aa:number,bb:number):number{
        return 10
    }
    
    ```

- array

  - ```typescript
    //值类型相同的数组//两种方式
    let arr: number[] = [1, 2, 3];
    let arr: Array<number> = [1, 2, 3];
    ```

- tuple     元组：固定长度的数组

  - ```typescript
    let x: [string, number];
    x = ["hello", 10]; //不能多不能少，类型也要对应
    ```

- enum

  - ```typescript
    //一个属性的值是在几个值之间选择的时候，适合用枚举
    //定义枚举类
    enum Color {
      Red,
      Green,
      Blue,
    }
    let i:{name:string,color:Color}
    i={
        name:'哈哈'，
        color:Color.Red
    }
    ```

- 类型断言

  - 有些情况下，变量的类型对于我们来说是很明确，但是TS编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式：

    - 第一种

      - ```typescript
        let someValue: unknown = "this is a string";
        let strLength: number = (someValue as string).length;
        ```

    - 第二种

      - ```typescript
        let someValue: unknown = "this is a string";
        let strLength: number = (<string>someValue).length;
        ```

- &表示同时

  ```typescript
  let j:{name:string}&{age:number}
  j={name:'haha',age:16}
  ```

- 类型别名

  ```typescript
  type myType=1|2|3|4|5
  let k=myType
  let m=myType
  ```

  



## 2、编译选项

### 自动编译文件

编译文件时，使用 -w 指令后，TS编译器会**自动监视文件的变化**，并在文件发生变化时对文件进行重新编译。

示例：

```powershell
  tsc xxx.ts -w
```

### 自动编译整个项目

如果直接使用tsc指令，则可以自动**将当前项目下的所有ts文件编译为js文件**。

```shell
tsc
tsc -w//监视项目下所有文件
```



**但是能直接使用tsc命令的前提时，要先在项目根目录下创建一个ts的配置文件 tsconfig.json**

tsconfig.json是一个JSON文件，添加配置文件后，只需 tsc 命令即可完成对整个项目的编译,

项目文件下：自动生成tsconfig.json文件

```shell
tsc --init
```



配置选项：

#### **include**

  - 定义希望被编译文件所在的目录
  - 默认值：["\*\*/\*"]

示例：

**表示任意目录，   *表示任意文件

```json
  "include":["./src/**/*", "tests/**/*"]
```

上述示例中，所有src目录和tests目录下的文件都会被编译

#### **exclude**

  - 定义需要排除在外的目录
  - 默认值：["node_modules", "bower_components", "jspm_packages"]

示例：

```json
  "exclude": ["./src/hello/**/*"]
```

上述示例中，src下hello目录下的文件都不会被编译

#### **extends**

-   定义被继承的配置文件

示例：

```json
"extends": "./configs/base"
```

上述示例中，当前配置文件中会自动包含config目录下base.json中的所有配置信息

#### **files**

-   指定被编译文件的列表，**只有需要编译的文件少时才会用到**

示例：

```json
"files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "tsc.ts"
  ]
```

- 列表中的文件都会被TS编译器所编译

#### compilerOptions 

  - 编译选项是配置文件中非常重要也比较复杂的配置选项
  - 在compilerOptions中包含多个子选项，用来完成对编译的配置

项目选项：

  - target

    - 设置ts代码编译的目标版本

    - 可选值：

      -  'es3', 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'esnext'

    - 示例：

      - ```json
        "compilerOptions": {
            "target": "ES6"
        }
        ```

    - 如上设置，我们所编写的ts代码将会被编译为ES6版本的js代码

  - lib      前端项目一般不需要设置

    - 指定代码运行时所包含的库（宿主环境）

    - 可选值：

      - ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost ......

    - 示例：

      - ```json
        "compilerOptions": {
            "target": "ES6",
            "lib": ["ES6", "DOM"],
            "outDir": "dist",
            "outFile": "dist/aa.js"
        }
        ```

  - module

    - 设置编译后代码使用的模块化系统

    - 可选值：

      - 'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'es2020', 'esnext'

    - 示例：

      - ```typescript
        "compilerOptions": {
            "module": "CommonJS"
        }
        ```

  - outDir

    - 编译后文件的所在目录

    - 默认情况下，编译后的js文件会和ts文件位于相同的目录，设置outDir后可以改变编译后文件的位置

    - 示例：

      - ```json
        "compilerOptions": {
            "outDir": "./dist"
        }
        ```

      - 设置后编译后的js文件将会生成到dist目录

  - outFile

    - 将所有的文件编译为一个js文件

    - 默认会将所有的编写在全局作用域中的代码**合并为一个js文件**，如果module制定了None、System或AMD则会将模块一起合并到文件之中

    - 示例：

      - ```json
        "compilerOptions": {
            "outFile": "dist/app.js"
        }
        ```

  - rootDir

    - 指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过rootDir可以手动指定根目录

    - 示例：

      - ```json
        "compilerOptions": {
            "rootDir": "./src"
        }
        ```

  - allowJs

    - 是否对js文件编译

  - checkJs

    - 是否对js文件进行检查，像ts文件一样进行检测

    - 示例：

      - ```json
        "compilerOptions": {
            "allowJs": true,
            "checkJs": true
        }
        ```

  - removeComments

    - 是否删除注释
    - 默认值：false

  - noEmit

    - 不对代码进行编译
    - 默认值：false

  - sourceMap

    - 是否生成sourceMap
    - 默认值：false

- 严格检查

  - strict
    - 启用所有的严格检查，默认值为true，设置后相当于开启了所有的严格检查
  - alwaysStrict
    - 总是以严格模式对代码进行编译
  - noImplicitAny
    - 禁止隐式的any类型
  - noImplicitThis
    - 禁止类型不明确的this
  - strictBindCallApply
    - 严格检查bind、call和apply的参数列表
  - strictFunctionTypes
    - 严格检查函数的类型
  - strictNullChecks
    - 严格的空值检查
  - strictPropertyInitialization
    - 严格检查属性是否初始化

- 额外检查

  - noFallthroughCasesInSwitch
    - 检查switch语句包含正确的break
  - noImplicitReturns
    - 检查函数没有隐式的返回值
  - noUnusedLocals
    - 检查未使用的局部变量
  - noUnusedParameters
    - 检查未使用的参数

- 高级

  - allowUnreachableCode
    - 检查不可达代码
    - 可选值：
      - true，忽略不可达代码
      - false，不可达代码将引起错误
  - noEmitOnError
    - 有错误的情况下不进行编译
    - 默认值：false



## 3、TypeScript打包

#### 初始化项目

进入项目根目录，执行命令 ` npm init -y`，创建package.json文件

#### 下载构建工具

命令如下：

```shell
npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin html-webpack-plugin
```



共安装了7个包:

  - webpack：构建工具webpack    //必须
  - webpack-cli：webpack的命令行工具    //必须
  - webpack-dev-server：webpack的开发服务器    //npm start
  - typescript：ts编译器    //必须
  - ts-loader：ts加载器，用于在webpack中编译ts文件    //必须
  - html-webpack-plugin：webpack中html插件，用来自动创建html文件    //生成index.html
  - clean-webpack-plugin：webpack中的清除插件，每次构建都会先清除目录,在生成新的文件

#### 配置webpack

根目录下创建webpack的配置文件`webpack.config.js`：

 ```javascript
const path = require("path");
//引入html-webpack-plugin插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
//引入clean-webpack-plugin插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    optimization:{
        minimize: false // 关闭代码压缩，可选
    },

    entry: "./src/index.ts",//指定入口文件

    devtool: "inline-source-map",

    devServer: {
        contentBase: './dist'
    },
    
	//指定打包文件所在目录
    output: {
        //指定打包文件目录
        path: path.resolve(__dirname, "dist"),
        //打包后文件名
        filename: "bundle.js",
        environment: {
            arrowFunction: false // 关闭webpack的箭头函数，可选
        }
    },
	
    //设置引入模块：这些文件可以作为模块使用
    resolve: {
        extensions: [".ts", ".js"]
    },

    //打包时所使用的模块
    module: {
        rules: [
            {
                //规则：生效的文件
                test: /\.ts$/,
                //要使用的loader
                use: {
                    loader: "ts-loader"     
                },
                //要排除的打包文件
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'TS测试'
        }),
    ]
}
 ```

#### 配置TS编译选项

根目录下创建tsconfig.json，配置可以根据自己需要

 ```json
{
    "compilerOptions": {
        "target": "ES2015",
        "module": "ES2015",
        "strict": true
    }
}
 ```

#### 修改package.json配置

修改package.json添加如下配置

 ```json
{
    ...
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack",
        "start": "webpack serve --open chrome.exe"
    },
    ...
}
 ```

#### 项目使用

在src下创建ts文件，并在并命令行执行```npm run build```对代码进行编译；

或者执行```npm start```来启动开发服务器；

<br/>

### Babel

除了webpack，开发中还经常需要结合babel来对代码进行转换；

以使其可以**兼容到更多的浏览器**，在上述步骤的基础上，通过以下步骤再将babel引入到项目中；

>   虽然TS在编译时也支持代码转换，但是只支持简单的代码转换；
>
>   对于例如：Promise等ES6特性，TS无法直接转换，这时还要用到babel来做转换；

安装依赖包：

   `npm i -D @babel/core @babel/preset-env babel-loader core-js`

共安装了4个包，分别是：

  - @babel/core：babel的核心工具

  - @babel/preset-env：babel的预定义环境

  - @babel-loader：babel在webpack中的加载器

  - core-js：core-js用来使老版本的浏览器支持新版ES语法

修改webpack.config.js配置文件

```javascript
...
module: {
    rules: [
        {
            test: /\.ts$/,
            use: [
                {
                    loader: "babel-loader",
                    options:{
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "targets":{
                                        "chrome": "58",
                                        "ie": "11"
                                    },
                                    "corejs":"3",
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ]
                    }
                },
                {
                    loader: "ts-loader",

                }
            ],
            exclude: /node_modules/
        }
    ]
}
...
```

如此一来，使用ts编译后的文件将会再次被babel处理；

使得代码可以在大部分浏览器中直接使用；

同时可以在配置选项的targets中指定要兼容的浏览器版本；

## 4、面向对象

要想面向对象，操作对象，首先便要拥有对象；

要创建对象，必须要先定义类，所谓的类可以理解为对象的模型；

程序中可以根据类创建指定类型的对象；

举例来说：

可以通过Person类来创建人的对象，通过Dog类创建狗的对象，不同的类可以用来创建不同的对象；

### 定义类

```typescript
class 类名 {
    属性名: 类型;
    
    constructor(参数: 类型){
        this.属性名 = 参数;
    }
    
    方法名(){
        ....
    }

}
```

示例：

```typescript
    class Person{
        name: string;
        age: number;
    
        constructor(name: string, age: number){
            this.name = name;
            this.age = age;
        }
    
        sayHello(){
            console.log(`大家好，我是${this.name}`);
        }
    }
```

使用类：

```typescript
const p = new Person('孙悟空', 18);
p.sayHello();
```

### 构造函数

可以使用`constructor`定义一个构造器方法；

>   **注1：在TS中只能有一个构造器方法！**

例如：

```typescript
class C{
    name: string;
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
```

同时也可以直接将属性定义在构造函数中：

```typescript
class C {
    constructor(public name: string, public age: number) {
    }
}
```

上面两种定义方法是完全相同的！

**注2：子类继承父类时，必须调用父类的构造方法（如果子类中也定义了构造方法）！**

例如：

```typescript
class A {
    protected num: number;
    constructor(num: number) {
        this.num = num;
    }
}

class X extends A {
    protected name: string;
    constructor(num: number, name: string) {
        super(num);
        this.name = name;
    }
}
```

如果在X类中不调用`super`将会报错！

### 封装

对象实质上就是属性和方法的容器，它的主要作用就是存储属性和方法，这就是所谓的封装

默认情况下，对象的属性是可以任意的修改的，为了确保数据的安全性，在TS中可以对属性的权限进行设置

  - 静态属性（static）：

    - 声明为static的属性或方法不再属于实例，而是属于类的属性；

  - 只读属性（readonly）：

    - 如果在声明属性时添加一个readonly，则属性便成了只读属性无法修改

  - TS中属性具有三种修饰符：

    - public（默认值），可以在类、子类和对象中修改
    - protected ，可以在类、子类中修改
    - private ，可以在类中修改

示例：

public：

```typescript
class Person{
    public name: string; // 写或什么都不写都是public
    public age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以在类中修改
        this.age = age;
    }

    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}

class Employee extends Person{
    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中可以修改
    }
}

const p = new Person('孙悟空', 18);
p.name = '猪八戒';// 可以通过对象修改
```

protected：

```typescript
class Person{
    protected name: string;
    protected age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以修改
        this.age = age;
    }

    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}

class Employee extends Person{

    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中可以修改
    }
}

const p = new Person('孙悟空', 18);
p.name = '猪八戒';// 不能修改
```

private：

```typescript
class Person{
    private name: string;
    private age: number;

    constructor(name: string, age: number){
        this.name = name; // 可以修改
        this.age = age;
    }

    sayHello(){
        console.log(`大家好，我是${this.name}`);
    }
}

class Employee extends Person{

    constructor(name: string, age: number){
        super(name, age);
        this.name = name; //子类中不能修改
    }
}

const p = new Person('孙悟空', 18);
p.name = '猪八戒';// 不能修改
```

### 属性存取器

对于一些不希望被任意修改的属性，可以将其设置为private

直接将其设置为private将导致无法再通过对象修改其中的属性

我们可以在类中定义一组读取、设置属性的方法，这种对属性读取或设置的属性被称为属性的存取器

读取属性的方法叫做setter方法，设置属性的方法叫做getter方法

示例：

```typescript
class Person{
    private _name: string;

    constructor(name: string){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(name: string){
        this._name = name;
    }

}

const p1 = new Person('孙悟空');
// 实际通过调用getter方法读取name属性
console.log(p1.name);
// 实际通过调用setter方法修改name属性 
p1.name = '猪八戒'; 
```

### 静态属性

静态属性（方法），也称为类属性。使用静态属性无需创建实例，通过类即可直接使用

静态属性（方法）使用static开头

示例：

```typescript
class Tools{
    static PI = 3.1415926;
    
    static sum(num1: number, num2: number){
        return num1 + num2
    }
}

console.log(Tools.PI);
console.log(Tools.sum(123, 456));
```

### this

在类中，使用this表示当前对象

### 继承

继承时面向对象中的又一个特性

通过继承可以将其他类中的属性和方法引入到当前类中

示例：

```typescript
class Animal{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal{

    bark(){
        console.log(`${this.name}在汪汪叫！`);
    }
}

const dog = new Dog('旺财', 4);
dog.bark();
```

通过继承可以在不修改类的情况下完成对类的扩展

### 重写

发生继承时，如果子类中的方法会替换掉父类中的同名方法，这就称为方法的重写

示例：

```typescript
class Animal{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    run(){
        console.log(`父类中的run方法！`);
    }
}

class Dog extends Animal{

    bark(){
        console.log(`${this.name}在汪汪叫！`);
    }

    run(){
        console.log(`子类中的run方法，会重写父类中的run方法！`);
    }
}

const dog = new Dog('旺财', 4);
dog.bark();
```

**在子类中可以使用super来完成对父类的引用**

### 抽象类（abstract class）

抽象类是专门用来被其他类所继承的类，它只能被其他类所继承不能用来创建实例

```typescript
abstract class Animal{
  abstract run(): void;
  bark(){
      console.log('动物在叫~');
  }
}

class Dog extends Animals{
  run(){
      console.log('狗在跑~');
  }
}
```

使用abstract开头的方法叫做抽象方法，抽象方法没有方法体只能定义在抽象类中，继承抽象类时抽象方法必须要实现;

## 5、接口（Interface）

接口的作用类似于抽象类，不同点在于：接口中的所有方法和属性都是没有实值的，换句话说接口中的所有方法都是抽象方法；

接口主要负责定义一个类的结构，接口可以去限制一个对象的接口：对象只有包含接口中定义的所有属性和方法时才能匹配接口；

同时，可以让一个类去实现接口，实现接口时类中要保护接口中的所有属性；

示例（检查对象类型）：

```typescript
interface Person{
    name: string;
    sayHello():void;
}

function fn(per: Person){
    per.sayHello();
}

fn({name:'孙悟空', sayHello() {console.log(`Hello, 我是 ${this.name}`)}});
```

示例（实现）：

 ```typescript
interface Person{
    name: string;
    sayHello():void;
}

class Student implements Person{
    constructor(public name: string) {
    }

    sayHello() {
        console.log('大家好，我是'+this.name);
    }
}
 ```

## 6、泛型（Generic）

定义一个函数或类时，有些情况下无法确定其中要使用的具体类型（返回值、参数、属性的类型不能确定）；

此时泛型便能够发挥作用；

举个例子：

```typescript
function test(arg: any): any{
    return arg;
}
```

上例中，test函数有一个参数类型不确定，但是能确定的时其返回值的类型和参数的类型是相同的；

由于类型不确定所以参数和返回值均使用了any，但是很明显这样做是不合适的：

首先使用any会关闭TS的类型检查，其次这样设置也不能体现出参数和返回值是相同的类型；

### 泛型函数

#### 创建泛型函数

```typescript
function test<T>(arg: T): T{
    return arg;
}
```

这里的`<T>`就是泛型；

T是我们给这个类型起的名字（不一定非叫T），设置泛型后即可在函数中使用T来表示该类型；

所以泛型其实很好理解，就表示某个类型；

那么如何使用上边的函数呢？

#### 使用泛型函数

##### 方式一（直接使用）：

```typescript
test(10)
```

使用时可以直接传递参数使用，类型会由TS自动推断出来，但有时编译器无法自动推断时还需要使用下面的方式

##### 方式二（指定类型）：

```typescript
test<number>(10)
```

也可以在函数后手动指定泛型；

#### 函数中声明多个泛型

可以同时指定多个泛型，泛型间使用逗号隔开：

```typescript
function test<T, K>(a: T, b: K): K{
  return b;
}

test<number, string>(10, "hello");
```

使用泛型时，完全可以将泛型当成是一个普通的类去使用；

### 泛型类

类中同样可以使用泛型：

```typescript
class MyClass<T>{
  prop: T;

  constructor(prop: T){
      this.prop = prop;
  }
}
```

### 泛型继承

除此之外，也可以对泛型的范围进行约束

```typescript
interface MyInter{
  length: number;
}

function test<T extends MyInter>(arg: T): number{
  return arg.length;
}
```

使用T extends MyInter表示泛型T必须是MyInter的子类，不一定非要使用接口类和抽象类同样适用；

## 7、命名空间

命名空间:
    在代码量较大的情况下，为了避免各种变量命名相冲突，可将相似功能的函数、类、接口等放置到命名空间内
    同Java的包、.Net的命名空间一样，TypeScript的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象。命名空间内的对象通过export关键字对外暴露。

命名空间和模块的区别：

命名空间：内部模块，主要用于组织代码，避免命名冲突。

模    块：ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间。

namespace1.ts

``` typescript
export namespace A{
    export let aaa:string='haha'//命名空间内部变量导出才可以使用
    let bbb:number=123
    export function ccc():void{
        console.log('kongjian');
    }
}
console.log(A.aaa);
// console.log(A.bbb);//报错
```

namespace1.ts

```typescript
import{A} from './nameSpace1'
console.log(A.aaa);//haha
// console.log(A.bbb);//报错
```

## 8、装饰器

装饰器:装饰器是一种特殊类型的声明,它能够被附加到类声明,方法,属性上,可以为原本的代码添加额外的功能。
通俗的讲装饰器就是一个**函数**,可以注入到类、方法、属性参数上来扩展类、属性、方法的功能。
常见的装饰器有:**类装饰器、属性装饰器、方法装饰器**
装饰器的写法:普通装饰器(无传参)、装饰器工厂 (可传参)
装饰器是过去几年中js最大的成就之一。

使用装饰器前，记得将compilerOptions中"experimentalDecorators"设置为true

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
        console.log(p)  // p变成了装饰器参数
    }
}

@logClass("aaa")     //向装饰器传递参数
class MyClass{
   
}
```

### 8.2 属性装饰器

属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：

1. **对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。**
1. 成员的属性名字。

```typescript
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





