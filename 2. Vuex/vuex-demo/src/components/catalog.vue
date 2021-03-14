说明：左边目录组件
<template>
    <ul class="catalog">
        <li class="catalog-item" v-for="item in catalogList" :key="item.title"
            :class="{active: current==item.title}" @click="catalogChange(item)">
            {{item.title}}
        </li>
    </ul>
</template>
<script>
export default {
    props: ['catalogList'],
    data(){
        let current = this.catalogList.length > 0 ? this.catalogList[0].title : null;
        return{
            current
        }
    },
    methods:{
        catalogChange(item){
            this.current = item.title;
            this.$emit('change', item);
        }
    }
}
</script>
<style scoped>
    .catalog{
        margin: 0;
        padding: 10px 0;
    }
    .catalog-item{
        list-style: none;
        font-size: 18px;
        cursor: pointer;
        padding: 10px 20px;
    }
    .catalog-item:hover,
    .catalog-item.active{
        color: #46bd87;
        font-weight: bolder;
    }
</style>


