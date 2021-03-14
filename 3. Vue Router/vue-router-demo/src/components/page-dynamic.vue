动态路由演示
<template>
    <div>
        <h1>动态路由演示</h1>
        收到参数：id={{$route.params.id}}
    </div>
</template>
<script>
export default {
    mounted(){
        console.log("page dynamic mounted");
    },
    destroyed(){
        console.log("page dynamic destroyed");
    },
}
</script>

