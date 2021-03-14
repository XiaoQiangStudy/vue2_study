通过 props 传参，不依赖于 $route 对象
<template>
    <div>
        <h1>props 传参演示</h1>
        收到参数：id={{id}}, msg={{msg}}
    </div>
</template>
<script>
export default {
    props: ['id', 'msg']
}
</script>

