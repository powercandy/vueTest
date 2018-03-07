<template>
    <div>
        <v-header title="接口测试" prev="true"></v-header>
        <button @click="getDiscList">点击请求List接口</button>
        <button @click="getLyric">点击请求Lyric接口</button>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        getDiscList() {
            this.api.getDiscList().then((res) => {
                console.log(res);
            });
        },
        getLyric() {
            this.api.getLyric().then(res => {
                console.log(res);
            });
        }
    }
};
</script>

<style lang="less" scoped>
    button {
        margin-top: .1rem;
        margin-left: .1rem;
    }
</style>


