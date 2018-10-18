<template>
    <div class="main">
        <tab ref='tab'></tab>
        <MainContain ref='contain'></MainContain>
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
            this.onrefresh();
        },

        created: function () {
            this.$on('refresh', function(e) {
               this.onrefresh();
            });
            this.$on('loadmore', function(e) {
                this.loadmore(e);
            })
        },



        methods :{



            onrefresh(){
                const $tab = this.$refs.tab;
                if($tab){
                    get(getHomeUrl($tab.getCategory()),res=>{
                        this.$refs.contain.setData(res.data);
                    })
                }else{
                    modal.toast({ message: '加载数据失败', duration: 0.3 })
                }
            },

            loadmore(){
                const $tab = this.$refs.tab;
                this.$refs.contain.addData('');


            }

        }

    }

</script>


<style>


    .main{
        flex:1;
    }
</style>

