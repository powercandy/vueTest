<template>
    <div class="test-page">
        <v-header title="Test" prev="true" next="true"></v-header>
        <ul class="test-nav">
            <router-link tag="li" to="/select">
                <span>测试页-选择框</span>
            </router-link>
            <router-link tag="li" to="/cordovaCamera">
                <span>cordova拍照测试</span>
            </router-link>
            <router-link tag="li" to="/cordovaGps">
                <span>cordova定位测试</span>
            </router-link>
            <router-link tag="li" to="/popup">
                <span>弹窗测试</span>
            </router-link>
            <router-link tag="li" to="/suggest">
                <span>正则测试</span>
            </router-link>
            <router-link tag="li" to="/createLabel">
                <span>新建标签测试</span>
            </router-link>
            <router-link tag="li" to="/suggest">
                <span>上传图片</span>
            </router-link>
            <router-link tag="li" to="/hideMoney">
                <span>隐藏金额</span>
            </router-link>
            <router-link tag="li" to="/insertMd">
                <span>Insert MarkDown</span>
            </router-link>
            <router-link tag="li" to="/music/recommend">
                <span>Music</span>
            </router-link>
            <router-link tag="li" to="/login">
                <span>Login</span>
            </router-link>
            <router-link tag="li" to="/vue">
                <span>Vue-demo</span>
            </router-link>
        </ul>
    </div>
</template>

<style lang="scss">
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
            height: 6.23rem;
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
