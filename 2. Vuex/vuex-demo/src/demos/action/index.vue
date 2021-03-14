<template>
    <div>
        <h2>Action 及 mapActions</h2>
        <p>{{num}}</p>
        <p>Action 的分发方式：(以下操作均会延迟1秒执行，具体过程可查看控制台输出)</p>
        <div>
            <h4>直接分发</h4>
            <button @click="increment">递增</button>
            <nodes>%c1this.$store%c0.dispatch("incrementAsync");</nodes>
        </div>
        <div>
            <h4>载荷分发</h4>
            <input type="text" v-model.number="addNum1">
            <button @click="addition">加法</button>
            <nodes>this.$store.dispatch("additionAsync", %c1this.addNum1%c0);</nodes>
        </div>
        <div>
            <h4>以对象风格分发</h4>
            <input type="text" v-model.number="addNum2">
            <button @click="dispatchAsObject">加法</button>
            <nodes>this.$store.dispatch(%c1{ %c0type: "additionObjAsync", addNum: this.addNum2 %c1}%c0)}, %c2//注意载荷是整个传入的对象</nodes>
        </div>
        <div>
            <h4>使用 mapActions 映射到 methods</h4>
            <button @click="incrementDoubleAsync">2倍</button>
            <button @click="triple">3倍</button>
            <nodes> mapActions(%c1['incrementDoubleAsync']%c0) 或 mapActions(%c1{ triple: 'incrementTripleAsync' }%c0)</nodes>
        </div>
        <div>
            <h4>分发返回 Promise 的 Action</h4>
            <button @click="incrementAsyncReturn">递增</button>
            <span v-show="complete1==1" style="color:#f00;">执行中..</span>
            <span v-show="complete1==2" style="color:#46bd87;">执行完成</span>
            <!-- <nodes> mapActions(%c1['incrementDoubleAsync']%c0) 或 mapActions(%c1{ triple: 'incrementTripleAsync' }%c0)</nodes> -->
        </div>
        <div>
            <h4>分发组合的 Action</h4>
            <button @click="incrementSixfoldAsync">六倍</button>
            <!-- <nodes> mapActions(%c1['incrementDoubleAsync']%c0) 或 mapActions(%c1{ triple: 'incrementTripleAsync' }%c0)</nodes> -->
        </div>
    </div>
</template>
<script>
import store from './store'
import {mapActions} from 'vuex'
export default {
    store,
    data(){
        return {
            addNum1: 0,
            addNum2: 0,
            complete1: 0,
        }
    },
    computed:{
        num(){
            return this.$store.state.num;
        }
    },
    methods:{
        //直接分发
        increment(){
            this.$store.dispatch("incrementAsync");
        },
        //载荷分发
        addition(){
            this.$store.dispatch("additionAsync", this.addNum1);
        },
        //对象风格分发
        dispatchAsObject(){
            this.$store.dispatch({
                type: "additionObjAsync",
                addNum: this.addNum2
            })
        },
        //映射到methods
        ...mapActions(['incrementDoubleAsync']),
        ...mapActions({
            triple: 'incrementTripleAsync'
        }),
        //处理返回Promise的Action
        incrementAsyncReturn(){
            this.complete1 = 1;
            this.$store.dispatch('incrementAsyncReturn').then(()=>{
                this.complete1 = 2;
            })
        },
        //组合的action
        ...mapActions(['incrementSixfoldAsync'])
    }
}
</script>
