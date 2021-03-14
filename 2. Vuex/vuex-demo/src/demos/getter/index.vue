<template>
    <div>
        <h2>Getter 及 mapGetters</h2>
        <p>Getter 的读取方式</p>
        <div>
            <h4>直接从 store 中读取 getter</h4>
            year: {{year}} 
            <nodes>%c1this.$store%c0.getters.year;</nodes>
        </div>
        <div>
            <h4>mapGetters, 传入字符串数组</h4>
            <p>
                month: {{month}} 
                <nodes>mapGetters(%c1['month','day']%c0)</nodes>
            </p>
            <p>
                day: {{day}} 
                <nodes>mapGetters(['month','day'])</nodes>
            </p>
        </div>
        <div>
            <h4>mapGetters, 传入对象，设置别名</h4>
            theYear: {{theYear}} 
            <nodes>mapGetters(%c1{ theYear: 'year' }%c0) %c3//注意这里不能像state那样写成函数的形式</nodes>
            <code-box>mapGetters({ theYear: state => state.year }) <i type="node">//报错，不能类似 mapState 那样操作</i></code-box>
        </div>
        <div>
            <h4>读取组合的 getter</h4>
            dateString: {{dateString}}
            <nodes>dateString是一个组合 getter，将 year, month, day 组合到一起</nodes>
        </div>
        <div>
            <h4>读取返回函数的 getter</h4>
            dateAdd: {{dateAdd(2)}}
            <nodes>dateAdd 是一个函数，这里以 %c2dateAdd(2) %c0调用</nodes>
        </div>
    </div>
</template>
<script>
import store from './store'
import {mapGetters} from 'vuex'
export default {
    store,
    computed:{
        //读取 getter 的几种方式
        year(){
            return this.$store.getters.year; //直接从store读取
        },
        ...mapGetters(['month','day']), //以字符串数组获取
        ...mapGetters({
            theYear: 'year', //设置别名
            // theYear: state => state.year, //报错，不能类似 mapState 那样操作
        }),
        //特别的getter（组合、返回函数）
        ...mapGetters(['dateString','dateAdd'])
    }
}
</script>
