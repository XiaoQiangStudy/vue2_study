export default {
    namespaced: true, //开启命名空间
    state: {
        num: 0
    },
    getters: {
        double: state => state.num * 2
    },
    mutations: {
        increment(state){
            state.num++;
        }
    },
    actions: {
        incrementAsync({ commit }){
            return new Promise((resolve, reject)=>{
                console.log("incrementAsync begin");
                setTimeout(()=>{
                    commit('increment');
                    console.log("incrementAsync complete");
                    resolve();
                }, 1000);
            })
        }
    }
}