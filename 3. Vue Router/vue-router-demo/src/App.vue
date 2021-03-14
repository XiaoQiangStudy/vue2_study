<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="nav">
      <router-link to="/">HOME</router-link>
      <router-link to="/a">A页面</router-link>
      <router-link to="/b">B页面</router-link>
      <router-link to="/dynamic/50">动态路由页面</router-link>
      <router-link to="/nesting">嵌套路由页面</router-link>
      <router-link to="/a/b/c/d/e/f/g">不存在的页面1</router-link>
      <router-link to="/user-funny">不存在的页面2</router-link>
      <router-link to="/redirect">重定向</router-link>
      <router-link to="/alias">别名</router-link>
      <router-link to="/lazy">懒加载</router-link>
      <router-link to="/props/hello?msg=world">props传参</router-link>
      <router-link to="/multi">命名视图</router-link>
    </div>
    <div class="page">
      <transition name="fade" mode="out-in"><!--设置过渡动效-->
        <router-view class="router-view"></router-view>
      </transition>
        <!-- 命名视图 -->
        <router-view name="second" class="router-view second"></router-view>
    </div>
    <div class="control">
      <router-control></router-control>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    RouterControl: () => import('./components/com-router-control') //懒加载的用法和异步组件的用法是一样的
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
hr{
  border: none;
  border-top: solid 1px #c0edef;
  margin: 20px 0px;
}
.nav{

}
a{
  background:cadetblue;
  color: #fff;
  border: none;
  margin: 5px;
  padding: 5px;
  text-decoration: none;
  font-size: 12px;
  display: inline-block;
}
a.router-link-active{
  /* font-size: 20px; */
  background: rgb(230, 200, 28);
  position: relative;
}
a.router-link-active::after{
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  background: rgb(230, 200, 28);
  transform: rotate(45deg);
  position: absolute;
  left: 50%;
  margin-left: -5px;
  bottom: -4px;
}
.page{
  margin: 50px auto;
  width: 95%;
  border: solid 1px #ccc;
  border-radius: 20px;
  overflow: auto;
  min-height: 450px;
  display: flex;
  justify-content: space-around;
}
.router-view{
  flex: 1;
  padding: 50px 10px;
}
.router-view.second{
  background: #c0edef;
  position: relative;
}
.router-view.second::before{
  content: '<router-view name="second"></router-view>';
  position: absolute;
  top: 0;
  right: 0;
  font-size: 10px;
  background: rgba(0,0,0,.1);
  padding: 3px 13px;
  border-radius: 0px 20px; 
}
/* 设置过渡动效 */
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  /* transform: scale(0); */
  /* transform: translateX(1000px); */
  /* transform: skew(45deg,90deg); */
}
</style>
