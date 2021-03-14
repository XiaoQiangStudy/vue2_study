import Vuex from 'vuex'
//由于 ../base/store.js 中已经执行过 Vue.use(Vuex)，这里不重复执行（虽然重复执行也没什么问题）
const store = new Vuex.Store({
    state: {
        num1: 1,
        num2: 2,
        a: "A",
        b: "BB",
        c: "CCC",
        object: {
            p1: "Hello",
            p2: "World"
        }
    }
});
export default store;