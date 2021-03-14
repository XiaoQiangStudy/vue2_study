import Vuex from 'vuex'
//由于 ../base/store.js 中已经执行过 Vue.use(Vuex)，这里不重复执行（虽然重复执行也没什么问题）
const store = new Vuex.Store({
    state: {
        num: 1
    },
    mutations:{
        increment(state){
            state.num++;
        },
        incrementDouble(state){
            state.num *= 2;
        },
        incrementTriple(state){
            state.num *= 3;
        },
        //具有载荷的mutation
        addition(state, addNum){
            state.num+= addNum;
        },
        additionObj(state, payloadObj){
            state.num+= payloadObj.addNum;
        },
    }
});
export default store;