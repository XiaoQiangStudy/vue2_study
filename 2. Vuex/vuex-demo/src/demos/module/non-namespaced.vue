<template>
    <div>
        <!-- <h4>user 模块</h4> -->
        <p>userName: {{userName}} </p>
        <p>nicName: {{nicName}} </p>
        <p>englishName: {{englishName}} </p>
        <p>birthday: {{birthday}} </p>
        <p>gender: {{gender}} </p>
        <p>age: {{age}} </p>
        <p>withRoot: {{withRoot}}</p>
        <div>
            是否登录: 
            <span v-show="!isLogin" style="color:#ccc;">未登录</span>
            <span v-show="isLogin" style="color:#46bd87;">已登录</span>
            (最后登录时间：{{lastLoginTimeFormat}})
            <p>
                <button @click="login">登录</button>
                <button @click="logout">退出</button>
                <button @click="loginAsync">延迟登录</button>
                <button @click="logoutAsync">延迟退出</button>
            </p>
        </div>
    </div>
</template>
<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    computed:{
        userName(state){
            return this.$store.state.user.name;
        },
        ...mapState({
            nicName: state => state.user.nicName,//目前为止，使用 mapState 获取子模块State的唯一可行方式
            englishName: state => state.user.englishName,
            birthday: state => state.user.birthday,
            gender: state => state.user.gender,
            isLogin: state => state.user.isLogin,
            lastLoginTime: state => state.user.lastLoginTime,

            // englishName: 'englishName' //什么都获取不到
            // englishName: 'user/englishName' //什么都获取不到
            // englishName: 'user.englishName' //什么都获取不到
        }),
        // ...mapState(['englishName']), //什么都获取不到
        // ...mapState(['user/englishName']), //什么都获取不到，甚至因为 englishName 不存在且视图有引用而报错
        // ...mapState(['user.englishName']), //什么都获取不到，甚至因为 englishName 不存在且视图有引用而报错
        // ...mapState('user', {
        //     englishName: state=> state.englishName //什么都获取不到, 这种方式只能加了 namespaced 才能用，否则报 “找不到命名空间user/” 的错误
        // }),
        ...mapGetters(['age','lastLoginTimeFormat','withRoot']) //可如同根节点getter一样读取(官网：默认情况下，模块内部的 action、mutation 和 getter 注册在全局命名空间)
    },
    methods:{
        login(){
            this.$store.commit('login', Date.now());
        },
        ...mapMutations(['logout']),
        loginAsync(){
            this.$store.dispatch('loginAsync');
        },
        ...mapActions(['logoutAsync'])
    }
}
</script>
