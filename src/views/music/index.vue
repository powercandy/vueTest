<template>
    <div class="music-home">
        <mheader></mheader>
        <keep-alive>
            <router-view></router-view> 
        </keep-alive>
        <tab></tab>
    </div>
</template>

<script>
    require('@/assets/css/music/icon.css');
    import mheader from '@/components/music/header';
    import Tab from '@/components/music/tab';
    export default {
        data() {
            return {};
        },
        components: {
            mheader,
            Tab
        }
    };
</script>
<style lang="scss" scoped>
    .music-home {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #222;
        color: #fff;
        // padding: .15rem;
        font-size: .16rem;
    }
</style>
