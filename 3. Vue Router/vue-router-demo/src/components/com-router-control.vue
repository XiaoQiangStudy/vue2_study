这个组件演示了“编程式导航”
<template>
    <div class="router-controller">
        <input type="text" placeholder="输入相对路径" v-model.trim="path">
        <input type="text" placeholder="输入查询参数" v-model.trim="query">
        <button @click="routerPush(1)">push(字符串)</button>
        <button @click="routerPush(2)">push(对象)</button>
        <button @click="routerPush(3)">push(命名路由)</button>
        <button @click="routerPush(4)">push(查询参数)</button>
        <button @click="routerReplace">replace</button>
        <input type="text" placeholder="输入步数" v-model.number="goStep" >
        <button @click="go">前进</button>
        <button @click="back">后退</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            path: "",
            query: "",
            goStep: 1,
        }
    },
    methods:{
        routerPush(type){
            switch(type){
                case 1: this.$router.push(this.path); break;
                case 2: this.$router.push({path: this.path}); break;
                // case 3: this.$router.push(this.path); break;
                case 4: this.$router.push({path: this.path, query: {text: this.query}}); break;
                default: this.$router.push(this.path); break;
            }
        },
        routerReplace(){
            this.$router.replace(this.path);
        },
        go(){
            this.$router.go(this.goStep);
        },
        back(){
            this.$router.go(-this.goStep);
        }
    }
}
</script>
<style scoped>
    .router-controller{
        padding: 5px;
        background: #f0f0f0;
    }
</style>

