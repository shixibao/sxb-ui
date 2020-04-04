<template>
    <aside class="s-aside" :style="{width}">
        <slot>
            
        </slot>
    </aside>
</template>

<script>
export default {
    name:'s-aside',
    props:{
        width:{
            type:String,
            default:'300px'
        }
    }
}
</script>