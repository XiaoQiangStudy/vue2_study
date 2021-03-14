//(1) 引入 vue 及 vuex
import Vue from 'vue'
import Vuex from  'vuex'
//(2) 注册 vuex
Vue.use(Vuex);

//(3) 定义 vuex plugin
const storagePlugin = store => {
    const STORAGE_KEY_USER_NAME = 'user_info';
    //读取storage
    const userInfo = JSON.parse(localStorage.getItem(STORAGE_KEY_USER_NAME));
    if(userInfo){
        // store.replaceState(userInfo); //不建议，官网已给出用途：仅用状态合并或时光旅行调试
        store.commit('initUserInfo', userInfo);
    }
    //更新storage
    store.subscribe((mutation, state)=>{
        if(mutation.type === 'initUserInfo') return;
        localStorage.setItem(STORAGE_KEY_USER_NAME, JSON.stringify(state.userInfo));
        console.log("持久化成功", mutation.type, mutation.payload);
    })
}

//(4) 创建 store
const store = new Vuex.Store({
    plugins: [storagePlugin],
    state: {
        userInfo: {
            userName: "游客",
            isLogin: false
        }
    },
    mutations:{
        login: (state, userName) => {
            state.userInfo.userName = userName;
            state.userInfo.isLogin = true;
        },
        logout: state => {
            state.userInfo.userName = "游客";
            state.userInfo.isLogin = false;
        },
        initUserInfo: (state, userInfo) => {
            state.userInfo = userInfo;
        }
    }
});
//导出 store
export default store;