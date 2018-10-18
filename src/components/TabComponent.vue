<template>
    <div class="tab_bar">


        <scroller scroll-direction="horizontal" class="scroller">

            <div v-for="position in tabs" class="tab">

                <text class="tab_text">{{position.name}}</text>

            </div>
        </scroller>

    </div>
</template>


<script>


    export default {
        name: 'App',
        components: {},

        data() {


            return {
                tabs: [
                    { name: '热点', value: 'news_hot'},
                    { name: '视频', value: 'video'},
                    { name: '社会', value: 'news_society'},
                    { name: '娱乐', value: 'news_entertainment'},
                    { name: '问答', value: 'question_and_answer'},
                    { name: '图片', value: '组图'},
                    { name: '科技', value: 'news_tech'},
                    { name: '汽车', value: 'news_car'},
                    { name: '体育', value: 'news_sport'},
                    { name: '财经', value: 'news_finance'},
                    { name: '军事', value: 'news_military'},
                    { name: '国际', value: 'news_world'},
                    { name: '段子', value: "essay_joke'"},
                    { name: '趣图', value: 'image_funny'}
                ]
            }
        },


        methods :{

            getCategory(){
                return this.tabs[0].value;
            }




        }
    }
</script>

<style scoped>


    .tab_bar {
        flex-direction: row;
        height: 80px;
        width: 1000px;
    }


    .scroller {
        flex-direction: row;
    }

    .tab {
        background-color: #DC143C;
        width: 120px;
        height: 80px;
        justify-content: center;
        align-items: center;

    }

    .tab_text {
        color: #ffffff;
        font-size: 28px;
    }

</style>
