<template>
    <main class="s-main">
        <slot></slot>
    </main>
</template>
<script>
export default {
    name:'s-main'
}
</script>

<style lang="scss">
.s-main{
    flex:1;
    padding:20px;
}
</style>