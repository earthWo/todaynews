<template>
    <div class="main">
        <Tab></Tab>
        <MainContain :count="4"></MainContain>
    </div>
</template>


<script>
    import Tab from "./components/TabComponent"
    import MainContain from "./components/MainComponent"
    export default {

        components: {Tab,MainContain},

        created: function() {
            console.log("created");
        },

    }

</script>


<style>


    .main{

        flex-direction: column;


    }
</style>

