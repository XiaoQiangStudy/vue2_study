<template>
    <div>
        <h2>本地持久化 ( Plugin 及 store.subscribe() 示例 )</h2>
        <p>如果持久化成功，则刷新或关闭浏览器后，下面的登录状态仍然保持不变</p>
        <div class="user-info">
            <p v-if="userInfo.isLogin">
                用户<span class="user-info_name">{{userInfo.userName}}</span>已经登录
                <button @click="logout">退出</button>
            </p>
            <p v-if="!userInfo.isLogin">
                <span class="user-info_unlogin">游客</span>
                请<button @click="showLogin">登录</button>
            </p>
        </div>
        <login-box v-if="showLoginBox" @submit="login" ></login-box>
    </div>
</template>

<script>
import store from './store'
import {mapState} from 'vuex'
import loginBox from '../../components/login-box'
export default {
    store,
    components: {
        loginBox
    },
    data(){
        return{
            showLoginBox: false
        }
    },
    methods:{
        login(userName){
            //提交 mutation
            let x = this.$store.commit('login', userName);
            this.hideLogin();
        },
        logout(){
            this.$store.commit('logout');
        },
        showLogin(){
            this.showLoginBox = true;
        },
        hideLogin(){
            this.showLoginBox = false;
        }
    },
    computed:{
        ...mapState(['userInfo'])
    }
}
</script>

<style scoped>
    .user-info{
        margin: 10px;
    }
    .user-info_name{
        margin: 0 5px;
        color: #46bd87;
        font-weight: bolder;
    }
    .user-info_unlogin{
        margin: 0 5px;
        color: #999;
    }
</style>
