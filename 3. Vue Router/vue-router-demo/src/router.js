//(0) 安装: npm unstall 'vue-router'
import Vue from 'vue'
import VueRouter from 'vue-router'
import pageHome from './components/page-home'
import pageA from './components/page-a'
import pageB from './components/page-b'
import pageDynamic from './components/page-dynamic'
import pageNesting from './components/nesting-pages'
import pageNestingChildA from './components/nesting-pages/children/child-a'
import pageNestingChildB from './components/nesting-pages/children/child-b'
import pageNestingHome from './components/nesting-pages/home'
import page404 from './components/page-404'
import page404_2 from './components/page-404-2'
import pageProps from './components/page-props'

//(1) 插件注册
Vue.use(VueRouter);

//(2) 创建 router 实例
const router = new VueRouter({
    mode: 'history', //开启 H5 history 模式（在实际项目中，需要后端配合，当 URL 匹配不到任何资源时返回 index.html）
    routes: [
        //用空路径配置主页
        { path: '', component: pageHome }, //或者用单斜杆： { path: '/', component: pageHome }
        //★普通路由配置
        { path: '/a', component: pageA, meta: { sayHello: 'Hi'} },//这里额外配置了元信息meta
        { path: '/b', component: pageB },
        //★动态参数路由
        { path: '/dynamic/:id', component: pageDynamic },
        //嵌套路由
        { path: '/nesting', component: pageNesting,
            children: [
                {path: '', component: pageNestingHome},
                {path: '/nesting/a', component: pageNestingChildA},
                {path: '/nesting/b', component: pageNestingChildB},
            ]
        },
        //指定重定向
        { path: '/redirect', redirect: '/a' },
        //指定路由别名
        { path: '/a', alias: '/alias' },
        //路由懒加载
        { path: '/lazy', component: () => import('./components/page-lazy') },
        //props 传参
        // { path: '/props/:id', component: pageProps, props: true }, //这种写法没办法满足传递查询参数的情况
        { path: '/props/:id', component: pageProps, props: route => ({ id: route.params.id, msg: route.query.msg }) }, //采用函数写法，将查询参数转化为 prop 返回
        //命名视图（针对需要显示多个route-view的情况）
        { path: '/multi', components:{
            default: pageA,
            second: pageB
        } },
        //★用通配符配置404页面
        { path: '/user-*', component: page404_2 }, /* 通配符路由建议放置于最后 */
        { path: '*', component: page404 },
    ]
});

//(3) 在根组件中注入 router 实例(演示代码请看main.js)
export default router;