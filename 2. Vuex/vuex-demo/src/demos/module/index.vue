<template>
    <div>
        <h2>Module</h2>
        <fieldset>
            <legend>user 模块</legend>
            <non-namespaced></non-namespaced>
        </fieldset>
         <fieldset>
            <legend>increment 模块（带命名空间）</legend>
            <namespaced></namespaced>
         </fieldset>
    </div>
</template>
<script>
import store from './store'
import NonNamespaced from './non-namespaced'
import Namespaced from './namespaced'
export default {
    store,
    components: {
        NonNamespaced,
        Namespaced
    }
}
</script>
