说明：格式化注释组件
<template>
    <p class="nodes">
        //<span v-for="item in styleSpans" :key="item.id" :class="item.className">{{item.text}}</span>
    </p>
</template>
<script>
export default {
    data(){
        return{
            styleSpans: []
        }
    },
    created(){
        if(!this.$slots.default){
            return;
        }
        const innerText = " " + this.$slots.default[0].text;
        let rgx = new RegExp(/(?:^|\%(c\d))(.*?)(?=%|$)/ig);
        let id = 0;
        do{
            let result = rgx.exec(innerText);
            if(result){
                let [,className, text] = result;
                id++;
                this.styleSpans.push({
                    id,
                    className,
                    text
                })
            }
        }while(rgx.lastIndex > 0)
        
    }
}
</script>
<style scoped>
    .nodes{
        display: inline;
        color: #46bd87;
        margin-left: 3em;
        font-family: monospace;
        font-size: 1.2em;
    }
    .c0{
        color: #46bd87;
    }
    .c1{
        color: #f90;
    }
    .c2{
        color: #99f;
    }
    .c3{
        color: #f59;
    }
</style>


