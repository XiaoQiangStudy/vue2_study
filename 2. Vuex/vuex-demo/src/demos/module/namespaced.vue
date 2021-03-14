<template>
    <div>
        <p>num: {{num}} </p>
        <p>num1: {{num1}} </p>
        <p>num2: {{num2}} </p>
        <p>num3: {{num3}} </p>
        <p>num4: {{num4}} </p>
        <p>double: {{double}} </p>
        <p>double1: {{double1}} </p>
        <p>double2: {{double2}} </p>
        <p>double3: {{double3}} </p>
        <p>
            mutations: 
            <button @click="increment">递增</button>
            <button @click="increment1">递增1</button>
            <button @click="increment2">递增2</button>
            <button @click="increment3">递增3</button>
        </p>
        <p>
            actions:
            <button @click="incrementAsync">延迟递增</button>
            <button @click="incrementAsync1">延迟递增1</button>
            <button @click="incrementAsync2">延迟递增2</button>
            <button @click="incrementAsync3">延迟递增3</button>
        </p>
    </div>
</template>
<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    computed:{
        /* State ------------------------------- */
        num1(){
            return this.$store.state.numbers.num; //state.increment 而非 increment.state
        },
        ...mapState({
            num2: state => state.numbers.num,
            // num2: 'numbers/num', //无法获取
        }),
        //先指明命名空间，爱怎么取怎么取
        ...mapState('numbers', ['num']),
        ...mapState('numbers', {
            num3: 'num',
            num4: state => state.num
        }),
        /* Getter ------------------------------- */
        double1(){
            return this.$store.getters['numbers/double']; //加了命名空间的 double 以“numbers/double”作为 getters 的属性之一，虽然如此，不建议这样调用
            // return this.$store.getters.double; //无法获取(因为已经限制了命名空间，就不会注册到全局中了)
            // return this.$store.getters.numbers.double; //无法获取(vuex不会在 getters 中注册子模块作为属性)
        },
        ...mapGetters({
            double2: 'numbers/double'
        }),
        //先指明命名空间，爱怎么取怎么取
        ...mapGetters('numbers', ['double']),
        ...mapGetters('numbers', {
            double3: 'double'
        })
    },
    methods:{
        /* Mutations ------------------------------- */
        //直接 commit，须带上路径
        increment1(){
            this.$store.commit('numbers/increment'); //采用路径的方式 commit
        },
        //映射，带上路径
        ...mapMutations({
            increment2: 'numbers/increment'
        }),
        //映射，先指明命名空间，可像以往一样调用
        ...mapMutations('numbers', {
            increment3: 'increment'
        }),
        ...mapMutations('numbers', ['increment']),
        // ...mapMutations(['increment']), //开启命名空间后，无法这样获取，因为不会被注册到全局中
        // ...mapMutations(['increment/increment']), //数组内，不能以路径的方式读取

        /* Actions */
        incrementAsync1(){
            this.$store.dispatch('numbers/incrementAsync')
        },
        ...mapActions({
            incrementAsync2: 'numbers/incrementAsync'
        }),
        //先指明命名空间，爱怎么调用怎么调用
        ...mapActions('numbers', ['incrementAsync']),
        ...mapActions('numbers', {
            incrementAsync3: 'incrementAsync'
        })
    }
}

</script>
