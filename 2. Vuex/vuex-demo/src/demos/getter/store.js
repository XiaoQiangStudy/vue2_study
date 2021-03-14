import Vuex from 'vuex'
//由于 ../base/store.js 中已经执行过 Vue.use(Vuex)，这里不重复执行（虽然重复执行也没什么问题）
const store = new Vuex.Store({
    state: {
        date: new Date()
    },
    getters: {
        //简单返回修饰过的数据
        year: state => state.date.getFullYear(),
        month: state => state.date.getMonth(),
        day: state => state.date.getDate(),
        //组合已有getter
        dateString: (state, getters) => getters.year + "年" + (getters.month+1) + "月" + getters.day + "日",
        //返回函数形式的getter
        dateAdd(state){
            return day => {
                const newDate = new Date(state.date.getTime() + day*24*60*60*1000);
                return `${newDate.getFullYear()}年${newDate.getMonth()+1}月${newDate.getDate()}日`;
            }
        }
    }
});
export default store;