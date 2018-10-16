<template>


    <text class="text">{{name}}</text>
    
</template>

<script>
    export default {

        props:['name'],

        data(){
            return{
                count: ''
            }
        },


        methods: {
            update (count) {
                this.count = count
            }
        }
    }
</script>

<style scoped>

    .text{
        background-color : #456754;
        flex:1;
    }
</style>