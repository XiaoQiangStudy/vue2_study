<template>
    <div>
        <h2>基本使用</h2>
        
        <span>{{num}}</span>
        <button @click="increment">累加</button>
        <p></p>
        <hr>
        <p>基本使用流程：</p>
        <h4>安装</h4>
        <code-box>npm install <i>vuex --save</i></code-box>
        <h4>注册</h4>
        <code-box>Vue<i>.use</i>(Vuex)</code-box>
        <h4>创建store</h4>
        <p>通常是创建一个独立的store文件或目录，使用 new Vuex.Store() 创建</p>
        <code-box>
const store = <i>new Vuex.Store</i>({
    state: {
        num: 0
    },
    mutations:{
        increment(state){
            console.log(`vuex:: state.num has been change`);
            state.num++;
        }
    }
});
        </code-box>
        <h4>注入store</h4>
        在根组件中(通常是Vue实例)以 store 选项注入，以便在其本身和所有子组件中能够直接调用(例如 this.$store)，以及使用各个映射器
        <code-box>
new Vue({
  <i>store</i>,
  el: '#app',
  components: { App },
  template: '&lt;App/&gt;'
})
        </code-box>
    </div>
    <!-- 
        【基本使用】
        安装：npm install vuex --save
        注册：Vue.use(Vuex)
        创建store：通常是创建一个独立的store文件或目录，使用 new Vuex.Store() 创建
        注入store：在根组件中(通常是Vue实例)以 store 选项注入，以便在其本身和所有子组件中能够直接调用(例如 this.$store)，以及使用各个映射器
     -->
</template>

<script>
import store from './store'
export default {
    store,
    methods:{
        increment(){
            this.$store.commit('increment');
        }
    },
    computed:{
        num(){
            return this.$store.state.num;
        }
    }
}
</script>
