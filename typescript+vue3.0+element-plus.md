# vue3.0+typescript+element-plus

### 1、Vue插槽

（2.6.0以后版本弃用slot和slot-scope，改用v-slot)

#### 具名插槽：v-solt:header

```vue
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```



```vue
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <template v-slot:default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

渲染之后

```vue
  <header>
    <h1>Here might be a page title</h1>
  </header>
```

#### 作用域插槽：身上绑定了数据data的slote。

```vue
<template>
  <div class="hello">
    <child>
      <template v-slot:default="slotProps">
        {{slotProps.data.name}}
      </template>
    </child>
  </div>
</template>
<template v-slot:other="otherSlotProps">
    ...
</template>
```

如果只有默认插槽，default可以省略，简写成`v-slot="slotProps`

### 2、vue3.0中v-on.native修饰符被移除

### 3、element-plus

全局方法和单独引用：

$message用法升级 Elmessage

$confirm用法升级 ElMessageBox.confirm

、、、







