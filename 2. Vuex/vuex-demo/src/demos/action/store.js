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
        }
    },
    actions:{
        incrementAsync(context){
            console.log("incrementAsync begin");
            setTimeout(()=> {
                context.commit('increment');
                console.log("incrementAsync complete");
            }, 1000);
        },
        incrementDoubleAsync({ commit }){
            console.log("incrementDoubleAsync begin");
            setTimeout(()=> {
                commit('incrementDouble');
                console.log("incrementDoubleAsync complete");
            }, 1000);
        },
        incrementTripleAsync(context){
            console.log("incrementTripleAsync begin");
            setTimeout(()=> {
                context.commit('incrementTriple');
                console.log("incrementTripleAsync complete");
            }, 1000);
        },
        //具有载荷的action
        additionAsync(context, addNum){
            console.log("additionAsync begin");
            setTimeout(()=>{
                context.commit('addition', addNum);
                console.log("additionAsync complete");
            }, 1000)
        },
        additionObjAsync(context, payloadObj){
            console.log("additionObjAsync begin");
            setTimeout(()=>{
                context.commit('addition', payloadObj.addNum);
                console.log("additionObjAsync complete");
            }, 1000)
        },
        //返回 Promise 的 action
        incrementAsyncReturn(context){
            return new Promise((resolve, reject)=>{
                console.log("incrementAsyncReturn begin");
                setTimeout(()=>{
                    context.commit('increment');
                    console.log("incrementAsyncReturn complete");
                    resolve();
                }, 1000);
            })
        },
        //组合 action
        incrementDoubleAsyncReturn({ commit }){
            return new Promise((resolve, reject)=>{
                console.log("incrementDoubleAsyncReturn begin");
                setTimeout(()=> {
                    commit('incrementDouble');
                    console.log("incrementDoubleAsyncReturn complete");
                    resolve();
                }, 1000);
            });
        },
        incrementSixfoldAsync({ dispatch, commit }){
            console.log("%cincrementSixfoldAsync begin", "color:#f90");
            //先分发 2 倍的 action
            dispatch('incrementDoubleAsyncReturn').then(()=>{
                //再提交 3 倍的 mutation
                commit('incrementTriple');
                console.log("%cincrementSixfoldAsync complete", "color:#f90");
            })
        }
    }
});
export default store;