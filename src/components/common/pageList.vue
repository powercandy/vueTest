<template>
    <div class="test-page">
        <v-header title="Test" prev="true" next="true"></v-header>
        <ul class="test-nav">
            <router-link tag="li" v-for="(item, index) in listArray" :to="item.path" :key="index">
                <span>{{ item.name }}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            listArray: {
                type: Array,
                default: ''
            }
        },
        data() {
            return {
            };
        }
    };
</script>

<style lang="less">
    // 测试页-首页
    .test-page {
        background: #d3d7d4;
        // 头部
        .common-header {
            height: .44rem;
            line-height: .44rem;
            color: #fff;
            font-size: .18rem;
        }
        // 测试页-导航
        .test-nav {
            padding: .2rem .15rem .3rem;
            line-height: .24rem;
            font-size: .16rem;
            min-height: 6.67rem;
            li{
                padding-bottom: .1rem;
                span {
                    display: inline-block;
                    padding: .05rem;
                    border: 1px solid #000;
                    border-radius: 5%;
                    box-shadow: .05rem .05rem .05rem;
                }
            }
        }
    }

</style>
