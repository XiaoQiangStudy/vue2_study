import Vuex from 'vuex'
import numbers from './numbers'
import user from './user'

const store = new Vuex.Store({
    state: {
        rootData: "Hi~我是根节点State"
    },
    getters:{
        rootGetter(state){
            return "root getter has been called";
        }
    },
    modules: {
        numbers,
        user,
    }
});
export default store;