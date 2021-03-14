说明：格式化代码块组件
<template>
    <code>
        <slot />
    </code>
</template>
<script>
export default {
    props: ['language']
}
</script>
<style scoped>
    code{
        white-space: pre;
        /* background: #2c3e50; */
        background: #517191;
        color: #eee;
        border-radius: 5px;
        margin: 16px 0px;
        padding: 10px 20px;
        display: block;
        width: fit-content;
        min-width: 200px;
    }
    i{
        color: #ff0;
        font-style: normal;
        font-weight: bold;
    }
    i[type=node]{
        color: #9ef378;
        font-weight: normal;
    }
</style>


