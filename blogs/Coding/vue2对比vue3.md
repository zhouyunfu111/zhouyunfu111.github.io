---

categories:
  - coding
tags:
  - vue
date: 2019-05-30
title: vue2对比vue3 !
---


1. vue3中template支持多个根标签
2. main.js
3. setup（取代data methods） ref
4. v-model在组件中的运用
5. 新组件 Teleport

## main.js
``` js
//vue3
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')
```
```js
//vue2
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```
## 建立数据 data

这里就是Vue2与Vue3 最大的区别 — Vue2使用选项类型API（Options API）对比Vue3合成型API（Composition API）

旧的选项型API在代码里分割了不同的属性（properties）：data，computed属性，methods，等等。新的合成型API能让我们用方法（function）来分割，相比于旧的API使用属性来分组，这样代码会更加简便和整洁。

**vue2** 
``` js
export default{
  props:{
    title: String
  },
  data() {
    return {
      count: 0
    },
  methods:{
    add(){
      return this.count++
    }
  }
}

}
```
在**Vue3.0**，我们就需要使用一个新的`setup()`方法，此方法在组件初始化构造的时候触发。

为了可以让开发者对反应型数据有更多的控制，我们可以直接使用到 `Vue3` 的反应`API（reactivity API`）。

使用以下三步来建立反应性数据:

从`vue`引入`reactive`
使用`reactive()`方法来声名我们的数据为反应性数据
使用`setup()`方法来返回我们的反应性数据，从而我们的`template`可以获取这些反应性数据

**vue3**
``` js
// Vue3
import { reactive } from 'vue'

export default {
  props: {
    title: String
  },
  setup () {
    const state = reactive({
      username: '',
      password: ''
    })

    return { state }
  }
}

```
目前已支持使用<script setup>语法糖,相比script语法，它具有更多优势：

- 更少的样板内容，更简洁的代码。
- 能够使用纯 Typescript 声明 props 和抛出事件。
- 更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)。
- 更好的 IDE 类型推断性能 (减少语言服务器从代码中抽离类型的工作)。


基本语法：
要使用这个语法，需要将 setup attribute 添加到 <script> 代码块上：
``` js
<script setup>
  console.log('hello script setup')
</script>
```
里面的代码会被编译成组件 setup() 函数的内容。这意味着与普通的 <script> 只在组件被首次引入的时候执行一次不同，<script setup> 中的代码会在每次组件实例被创建的时候执行。




这里构造的反应性数据就可以被`template`使用，可以通过`state.username`和`state.password`获得数据的值。

## v-model在组件中的运用


在vue3中子组件中的props属性值与父组件中的data属性值实现了双向绑定，比vue2更加简化

**vue2组件通信**
``` html
//子组件
<template>
  <div>
   <p v-if="pVisible">
      For a guide and recipes on how to configure / customize this project      
   </p>
   <div @click="control">切换p标签显示</div>
  </div>
<template>
<script>
export default {
  name: 'children',
  props: {
    pVisible:Boolean
  },
  methods: {
    control(){
      this.$emit('control',!this.pVisible)
    }
  },
}
</script>
```
``` html
//父组件
<template>
  <div >
    <children  :pVisible="isVisible" @control="abc"/>//@control="isVisible=$event"这样也可
  </div>
</template>
<script>
import children from './components/children.vue'
export default {
  name: 'Father',
  data() {
    return {
      isVisible:true
    }
  },
  components: {children},
  methods: {
    abc($event){
      this.isVisible=$event
    }
  },
}
</script>
```

**vue3组件通信**

``` html
//子组件
<template>
   <p v-if="pVisible">
      For a guide and recipes on how to configure / customize this project      
   </p>
   <div @click="control">切换p标签显示</div>
<template>
<script>
export default {
  name: 'children',
  props: {
    pVisible:Boolean
  },
   setup(props,context){
        const control=()=>{
            context.emit('update: pVisible',!props.pVisible)
        }
        return{control}
    }
}
</script>
```

``` html
//父组件
<template>
  <div >
    <children  v-model:pVisible="isVisible" />
  </div>
</template>
<script>
import { ref } from 'vue'
import children from './components/children.vue'
export default {
  name: 'Father',
  components: {children},
  setup(){
    const isVisible=ref(true)
    return{isVisible}
  },
}
</script>
```

## Vue2 对比 Vue3的 methods 编写

`Vue2` 的选项型`API`是把`methods`分割到独立的属性区域的。我们可以直接在这个属性里面添加方法来处理各种前端逻辑。

``` js 
export default {
  props: {
    title: String
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      // 登陆方法
    }
  }
}
```

Vue3 的合成型`API`里面的`setup()`方法也是可以用来操控`methods`的。创建声名方法其实和声名数据状态是一样的。— 我们需要先声名一个方法然后在`setup()`方法中`返回(return)`， 这样我们的组件内就可以调用这个方法了。

``` js
export default {
  props: {
    title: String
  },
  setup () {
    const state = reactive({
      username: '',
      password: ''
    })

    const login = () => {
      // 登陆方法
    }
    return { 
      login,
      state
    }
  }
}
```

## 生命周期钩子 — Lifecyle Hooks


在 Vue2，我们可以直接在组件属性中调用Vue的生命周期的钩子。以下使用一个`组件已挂载（mounted）生命周期触发钩子`。

``` js
export default {
  props: {
    title: String
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {
    console.log('组件已挂载')
  },
  methods: {
    login () {
      // login method
    }
  }
}
```
现在 Vue3 的合成型`API`里面的`setup()`方法可以包含了基本所有东西。生命周期的钩子就是其中之一！

但是在 Vue3 生周期钩子不是全局可调用的了，需要另外从vue中引入。和刚刚引入`reactive`一样，生命周期的挂载钩子叫`onMounted`。

引入后我们就可以在`setup()`方法里面使用`onMounted`挂载的钩子了。

``` js
import { reactive, onMounted } from 'vue'

export default {
  props: {
    title: String
  },
  setup () {
    // ..

    onMounted(() => {
      console.log('组件已挂载')
    })

    // ...
  }
}
```

## 计算属性 - Computed Properties

我们一起试试添加一个计算属性来转换`username`成小写字母。

在 Vue2 中实现，我们只需要在组件内的选项属性中添加即可

``` js
export default {
  // .. 
  computed: {
    lowerCaseUsername () {
      return this.username.toLowerCase()
    }
  }
}
```

Vue3 的设计模式给予开发者们按需引入需要使用的依赖包。这样一来就不需要多余的引用导致性能或者打包后太大的问题。Vue2就是有这个一直存在的问题。

所以在 Vue3 使用计算属性，我们先需要在组件内引入`computed`。

使用方式就和`反应性数据（reactive data）`一样，在`state`中加入一个计算属性:

``` js
import { reactive, onMounted, computed } from 'vue'

export default {
  props: {
    title: String
  },
  setup () {
    const state = reactive({
      username: '',
      password: '',
      lowerCaseUsername: computed(() => state.username.toLowerCase())
    })

    // ...
  }
```


## 接收 Props

接收组件`props`参数传递这一块为我们带来了Vue2和Vue3之间最大的区别。—`this`在vue3中与vue2代表着完全不一样的东西。

在 Vue2，`this`代表的是当前组件，不是某一个特定的属性。所以我们可以直接使用`this`访问`prop`属性值。就比如下面的例子在挂载完成后打印处当前传入组件的参数`title`。

``` js
mounted () {
    console.log('title: ' + this.title)
}
```

但是在 Vue3 中，`this`无法直接拿到props属性，emit events（触发事件）和组件内的其他属性。不过全新的setup()方法可以接收两个参数：

1. `props` - 不可变的组件参数
2. `context` - Vue3 暴露出来的属性（emit，slots，attrs）

所以在 Vue3 接收与使用`props`就会变成这样：

``` js
setup (props) {
    // ...

    onMounted(() => {
      console.log('title: ' + props.title)
    })

    // ...
}
``` 

## 事件 - Emitting Events

在 Vue2 中自定义事件是非常直接的，但是在 Vue3 的话，我们会有更多的控制的自由度。

举例，现在我们想在点击提交按钮时触发一个`login`的事件。

在 Vue2 中我们会调用到`this.$emit`然后传入事件名和参数对象。

``` js
login () {
    this.$emit('login', {
    username: this.username,
    password: this.password
    })
 }
```

但是在 Vue3中，我们刚刚说过`this`已经不是和vue2代表着这个组件了，所以我们需要不一样的自定义事件的方式。

那怎么办呀？! ლಠ益ಠ)ლ

不用慌，在`setup()`中的第二个参数`content`对象中就有`emit`，这个是和`this.$emit`是一样的。那么我们只要在`setup()`接收第二个参数中使用分解对象法取出`emit`就可以在`setup`方法中随意使用了。

然后我们在login方法中编写登陆事件：

``` js
setup (props, { emit }) {
    // ...

    const login = () => {
      emit('login', {
        username: state.username,
        password: state.password
      })
    }

    // ...
}
```
## Teleport
有两个div分别是box1和box2，据经验所知，即使box1的孩子el1的z-index为10，el1的层级也没有box2高，一些情况下el1也会被box2遮住（因为即使el1的层级再高，也是在box1的层级下生存），这时候就可以用teleport组件包住el1，使其脱离box1层级的掌控,to表示重新寻找父级
``` html
<div class="box1" style="position:relative z-index:2">
   <div class="el1" style="position:absolte z-index:10"></div>
</div>
<div class="box2" style="position:relative z-index:3"></div>

//Teleport
<div class="box1" style="position:relative z-index:2">
    <Teleport to="body">
       <div class="el1" style="position:absolte z-index:10"></div>
    </Teleport>
</div>
<div class="box2" style="position:relative z-index:3"></div>
```

## 最终的vue2对比vue3代码

你们现在基本都看到vue2与vue3其实概念与理念都是一样的。只是有一些属性获取方式和声名和定义方式稍微变了。

总结一下，我觉得 `Vue3` 给我们前端开发者带来了全新的开发体验，更好的使用弹性，可控度也得到了大大的提升。如果你是一个学过或者接触过 `React` 然后现在想使用Vue的话，应该特别兴奋，因为很多使用方式都和`React`非常相近了 ！

全新的合成式`API（Composition API）`可以提升代码的解耦程度 —— 特别是大型的前端应用，效果会更加明显。还有就是按需引用的有了更细微的可控性，让项目的性能和打包大小有更好的控制。


最后我把完成的 `Vue2` 和 `Vue3` 的组件代码发出来给大家：

**vue2**

``` html
<template>
  <div class='form-element'>
    <h2> {{ title }} </h2>
    <input type='text' v-model='username' placeholder='Username' />
    
    <input type='password' v-model='password' placeholder='Password' />

    <button @click='login'>
      Submit
    </button>
    <p> 
      Values: {{ username + ' ' + password }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {
    console.log('title: ' + this.title)
  },
  computed: {
    lowerCaseUsername () {
      return this.username.toLowerCase()
    }
  },
  methods: {
    login () {
      this.$emit('login', {
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>
```

**Vue3**

``` js
<template>
  <div class='form-element'>
    <h2> {{ state.title }} </h2>
    <input type='text' v-model='state.username' placeholder='Username' />
    
    <input type='password' v-model='state.password' placeholder='Password' />

    <button @click='login'>
      Submit
    </button>
    <p> 
      Values: {{ state.username + ' ' + state.password }}
    </p>
  </div>
</template>
<script>
import { reactive, onMounted, computed } from 'vue'

export default {
  props: {
    title: String
  },
  setup (props, { emit }) {
    const state = reactive({
      username: '',
      password: '',
      lowerCaseUsername: computed(() => state.username.toLowerCase())
    })

    onMounted(() => {
      console.log('title: ' + props.title)
    })

    const login = () => {
      emit('login', {
        username: state.username,
        password: state.password
      })
    }

    return { 
      login,
      state
    }
  }
}
</script>
```

希望这篇文章能让大家体验到一个比较全面的Vue2与Vue3的开发区别。