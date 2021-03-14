<template>
  <div id="app">
    <header>
      <img class="header-logo" src="./assets/logo.png">
      Vuex Demos
    </header>
    <div class="middle">
      <div class="middle-sidebar">
        <catalog :catalog-list="catalog" @change="catalogChange"></catalog>
      </div>
      <main class="middle-content">
        <components :is="current"></components>
      </main>
    </div>
  </div>
</template>

<script>
import Catalog from './components/catalog';
import BaseDemo from './demos/base';
import StateDemo from './demos/state';
import GetterDemo from './demos/getter';
import MutationDemo from './demos/mutation';
import ActionDemo from './demos/action';
import ModuleDemo from './demos/module';
import StorageDemo from './demos/storage';
export default {
  name: 'App',
  components: {
    Catalog,
    BaseDemo, StateDemo, GetterDemo, MutationDemo, ActionDemo, ModuleDemo, StorageDemo
  },
  data(){
    return {
      current: 'BaseDemo',
      catalog: [
        { title: "基本使用", path: "BaseDemo" },
        { title: "State", path: "StateDemo" },
        { title: "Getter", path: "GetterDemo" },
        { title: "Mutation", path: "MutationDemo" },
        { title: "Action", path: "ActionDemo" },
        { title: "Module", path: "ModuleDemo" },
        { title: "本地持久化", path: "StorageDemo" },
      ]
    }
  },
  methods:{
    catalogChange(value){
      this.current = value.path;
    }
  }
}
</script>

<style>
html, body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
header{
  display: flex;
  align-items: flex-end;
  font-size: 32px;
  background: #eee;
  border-bottom: solid 1px #ccc;
  padding: 4px
}
.header-logo{
  width: 32px;
  margin-right: 10px;
}
.middle{
  display: flex;
  position: absolute;
  top: 45px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
.middle-sidebar{
  width: 150px;
  border-right: solid 1px #ccc;
  overflow-y: auto;
}
.middle-content{
  overflow-y: auto;
  padding: 0 20px 50px 20px;
  flex: 1
}
fieldset{
  border: solid 1px #ccc;
  border-radius: 10px;
  margin: 20px 0;
}
legend{
  color: #555;
  padding: 0 5px;
  font-weight: bolder;
}
</style>
