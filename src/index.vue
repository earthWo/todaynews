<template>
    <div class="main">
        <tab ref='tab'></tab>
        <MainContain ref='contain' :name="6555"></MainContain>
    </div>
</template>


<script>
    import Tab from "./components/TabComponent"
    import MainContain from "./components/MainComponent"
    const modal = weex.requireModule('modal')

    import {get} from "./http/index"

    import {getHomeUrl} from "./http/index"

    export default {

        components: {Tab,MainContain},

        data:{
            category:''
        },

        mounted: function() {
            const $tab = this.$refs.tab;
            if($tab){
                get(getHomeUrl($tab.getCategory()),res=>{
                    this.$refs.contain.update(res.data);
                })
            }else{
                modal.toast({ message: '加载数据失败', duration: 0.3 })
            }
        },






    }

</script>


<style>


    .main{

        flex-direction: column;
        flex:1;
    }
</style>

