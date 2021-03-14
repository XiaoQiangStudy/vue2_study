<template>
    <div>
        <h2>Mutation 及 mapMutations</h2>
        <p>{{num}}</p>
        <p>Mutation 的提交方式：</p>
        <div>
            <h4>直接提交</h4>
            <button @click="increment">递增</button>
            <nodes>%c1this.$store%c0.commit("increment");</nodes>
        </div>
        <div>
            <h4>载荷提交</h4>
            <input type="text" v-model.number="addNum1">
            <button @click="addition">加法</button>
            <nodes>this.$store.commit("addition", %c1this.addNum1%c0);</nodes>
        </div>
        <div>
            <h4>以对象风格提交</h4>
            <input type="text" v-model.number="addNum2">
            <button @click="commitAsObject">加法</button>
            <nodes>this.$store.commit(%c1{ %c0type: "additionObj", addNum: this.addNum2 %c1}%c0) %c2//注意载荷是整个传入的对象</nodes>
        </div>
        <div>
            <h4>使用 mapMutations 映射到 methods</h4>
            <button @click="incrementDouble">2倍</button>
            <button @click="triple">3倍</button>
            <nodes> mapMutations(%c1['incrementDouble']%c0) 或 mapMutations(%c1{ triple: 'incrementTriple' }%c0)</nodes>
        </div>
    </div>
</template>
<script>
import store from './store'
import {mapMutations} from 'vuex'
export default {
    store,
    data(){
        return {
            addNum1: 0,
            addNum2: 0
        }
    },
    computed:{
        num(){
            return this.$store.state.num;
        }
    },
    methods:{
        //直接提交
        increment(){
            this.$store.commit("increment");
        },
        //载荷提交
        addition(){
            this.$store.commit("addition", this.addNum1);
        },
        //对象风格提交
        commitAsObject(){
            this.$store.commit({
                type: "additionObj",
                addNum: this.addNum2
            })
        },
        //映射到methods
        ...mapMutations(['incrementDouble']),
        ...mapMutations({
            triple: 'incrementTriple'
        })
    }
}
</script>
