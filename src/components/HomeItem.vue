<template>


    <div class="item">
        <text class="title">{{data.title}}</text>
    </div>


</template>

<script>



    export default {

        props:["data"],


        data(){
            return{
            }

        }


    }





</script>

<style>
    .item{
        height: 300px;
        flex:1;
    }
</style>