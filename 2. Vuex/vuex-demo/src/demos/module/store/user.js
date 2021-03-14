export default {
    state: {
        name: "蔡卓妍",
        nicName: 'Sa',
        englishName: "Charlene Choi",
        birthday: new Date('1982-11-22'),
        gender: 'women',
        isLogin: false,
        lastLoginTime: null
    },
    getters: {
        age(state){
            const times = Date.now() - state.birthday.getTime();
            return parseInt(times / 1000 / 60 / 60 / 24 / 365);
        },
        lastLoginTimeFormat(state){
            if(state.lastLoginTime){
                return new Date(state.lastLoginTime);
            }
            else{
                return "Unknown";
            }
        },
        //获取根节点 state 及 getters
        withRoot(state, getters, rootState, rootGetters){
            return `我是${state.name}，今年${getters.age}岁，还有root先生打个招呼吧：${rootState.rootData}, 带盐一下Getter: ${rootGetters.rootGetter}`
        }
    },
    mutations:{
        login(state, time){
            state.isLogin = true;
            state.lastLoginTime = time;
        },
        logout(state){
            state.isLogin = false;
        }
    },
    actions:{
        loginAsync(context){
            return new Promise((resovle, reject)=>{
                console.log("正在登录，请稍候..");
                setTimeout(()=>{
                    context.commit('login', Date.now());
                    console.log("用户已登录成功");
                    resovle();
                }, 2000);
            });
        },
        logoutAsync(context){
            return new Promise((resovle, reject)=>{
                console.log("正在退出登录，请稍候..");
                setTimeout(()=>{
                    context.commit('logout');
                    console.log("用户已退出");
                    console.log("根节点信息：", context.rootState.rootData, context.rootGetters.rootGetter);//context可获取到根节点信息
                    resovle();
                }, 2000);
            });
        }
    }
}