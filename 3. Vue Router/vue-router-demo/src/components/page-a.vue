<template>
    <div>
        <h1>This is page A</h1>
        <button @click="showRouter">show $router</button>
        <button @click="showRoute">show $route</button>
    </div>
</template>
<script>
export default {
    mounted(){
        console.log("page a mounted");
        console.log('show render *****', this.$options.render);
    },
    destroyed(){
        console.log("page A destroyed");
    },
    methods:{
        showRouter(){
            //访问路由器 router
            console.log(this.$router);
        },
        showRoute(){
            //访问本页路由 route
            console.log(this.$route);
        },
    }
}
</script>

