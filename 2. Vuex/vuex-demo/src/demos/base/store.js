//(1) 引入 vue 及 vuex
import Vue from 'vue'
import Vuex from  'vuex'
//(2) 注册 vuex
Vue.use(Vuex);
//(3) 创建 store
const store = new Vuex.Store({
    state: {
        num: 0
    },
    mutations:{
        increment(state){
            console.log(`vuex:: state.num has been change`);
            state.num++;
        }
    }
});
//导出 store
export default store;