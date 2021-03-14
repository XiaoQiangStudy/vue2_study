<template>
    <div>
        <h2>State 及 mapState</h2>
        <p>State 的读取方式</p>
        <div>
            <h4>直接从 store 读取</h4>
            num1: {{num1}} 
            <nodes>num1(){ return %c1this.$store%c0.state.num1; }</nodes><!-- nodes 是自定义的组件，用来格式化注释文本，阅读代码时可忽略 -->
        </div>
        <div>
            <h4>mapState, 传入字符串数组</h4>
            a,b,c: {{a}}, {{b}}, {{c}} 
            <nodes>mapState(%c1['a','b','c']%c0)</nodes>
        </div>
        <div>
            <h4>mapState, 传入对象，函数读取</h4>
            <p>
                num2: {{num2}} 
                <nodes>mapState({num2: %c1state => state.num2%c0})</nodes>
            </p>
            <p>
                sum: num1+num2={{sum}} 
                <nodes>mapState({sum: %c1state=> state.num1 + state.num2%c0}) %c2//函数返回，并进行额外的运算</nodes>
            </p>
        </div>
        <div>
            <h4>mapState, 传入对象，字符串设置别名</h4>
            object: {{object}}
            <nodes>mapState(%c1{1object: 'object'}%c0)</nodes>
        </div>
    </div>
</template>
<script>
import store from './store'
import {mapState} from 'vuex'
export default {
    store,
    computed:{
        //读取 state 的几种方式
        num1(){
            return this.$store.state.num1; //--- 直接读取 $store.state
        },
        ...mapState(['a','b','c']), //---------- 采用 mapState，以字符串数组的方式批量读取
        ...mapState({
            num2: state => state.num2, //------- 采用 mapState，传入对象，以函数的方式获取
            sum: state=> state.num1 + state.num2,//--- 采用 mapState，传入对象，以函数的方式获取，并进行额外的运算
            object: 'object' //----------------- 采用 mapState，传入对象，以字符串获取
        }),
    }
}
</script>
