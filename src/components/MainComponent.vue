<template>

    <list @loadmore="loadmore" loadmoreoffset="10" class="list">
        <refresh @refresh="onrefresh" :display="refreshing?'show':'hide'" class="refresh">

            <loading-indicator class="indicator"></loading-indicator>
            <text class="refresh_text">{{refreshing?'刷新中':'下拉刷新'}}</text>

        </refresh>
        <cell v-for="(item,i) in lists">
            <!--<HomeItem :data="JSON.parse(item.content)"></HomeItem>-->
            <text class="item">{{item}}</text>
        </cell>
    </list>

</template>

<script>

    import HomeItem from './HomeItem'

    const modal = weex.requireModule('modal')

    export default {

        data() {
            return {
                itemdata: [],
                lists: [0,1, 2, 3, 4, 5],
                refreshing: false,
                loadMore: false
            }
        },

        components: {
            HomeItem
        },


        methods: {

            setData(d) {
                this.itemdata = d.data;
                this.refreshing=false;
            },


            addData(d) {
                this.lists.push(this.lists.length);

            },


            onrefresh(event) {
                this.refreshing = true;
                this.$parent.$emit('refresh','');

            },


            loadmore(event){
                modal.toast({ message: '加载', duration: 0.3 });
                this.loadmore=true;
                this.$parent.$emit('loadmore','');
            }
        }
    }
</script>

<style scoped>

    .refresh {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .refresh_text {

        font-size: 30px;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 30px;
        margin-left: 20px;
    }

    .indicator {
        color: red;
        width: 40px;
        height: 40px;
    }

   .item{
       height: 300px;
   }

</style>