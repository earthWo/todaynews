<template>


    <text>{{count}}</text>
    
</template>

<script>
    export default {
        count: 0,


        methods: {
            update (count) {
                this.count = count
            }
        }
    }
</script>

<style scoped>

</style>