<template>
<div>
    <h1>this is Nesting Page</h1>
    <router-link to="/nesting/a">子页面A</router-link>
    <router-link to="/nesting/b">子页面B</router-link>
    <hr>
    <h4>child page:</h4>
    <router-view></router-view>
</div>
</template>
