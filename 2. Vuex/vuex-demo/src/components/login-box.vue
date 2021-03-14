<template>
    <div class="login-box">
        <h3>请登录</h3>
        <p>
            <input class="login-box_username" ref="login_username" type="text" placeholder="请输入用户名"
             v-model.trim="userName" @keyup.enter="login" />
        </p>
        <button class="login-box_submit" @click="login">登录</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            userName: ""
        }
    },
    methods:{
        login(){
            //输入验证
            if(!this.userName.length){
                alert("请输入用户名");
                this.$refs.login_username.focus();
                return;
            }
            //触发提交事件
            this.$emit('submit', this.userName);
        },
    },
    mounted(){
        this.$refs.login_username.focus();
    }
}
</script>
<style scoped>
    .login-box{
        background: #f0f0f0;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 0px 10px #999;
        width: 300px;
        height: 200px;
        padding-bottom: 20px;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-left: -150px;
        margin-top: -100px;
    }
    .login-box_username{
        height: 40px;
        width: 200px;
        display: flex;
        outline: none;
        border: none;
        box-sizing: border-box;
        padding: 0 0.3em;
    }
    .login-box_submit{
        background: #46bd87;
        color: #fff;
        outline: none;
        border: none;
        height: 30px;
        height: 40px;
        width: 200px;
        cursor: pointer;
    }
    .login-box_submit:hover{
        opacity: .8;
    }
</style>


