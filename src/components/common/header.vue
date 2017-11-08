<template>
        <header class="common-header">
            <i v-if="prev" class="pre" @click="goPrev" ><</i>
            <span class="title font-18">{{title}}</span>
            <i v-if="next" class="next" @click="goNext" >></i>
        </header>
</template>
<script>
    export default {
        data() {
            return {
            };
        },
        props: ['arrCallBack', 'nextPage', 'title', 'prev', 'next'],
        methods: {
            // 前进按钮
            goNext() {
                this.$router.go(1);
            },
            goPrev() {
                if (this.arrCallBack) {
                    this.arrCallBack();
                } else {
                    this.$router.go(-1);
                }
            }
        }
    };
</script>
<style lang="scss" scoped>
/* common header style */
    .common-header {
        height: .44rem;
        background: #4e72b8;
        color: #fff;
        position: relative;
        line-height: .44rem;
        .title {
            display: inline-block;
            height: .44rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        i {
            display: inline-block;
            height: .44rem;
            font-size: .28rem;
            &.pre {
                position: absolute;
                left: .15rem;
            }
            &.next {
                position: absolute;
                right: .15rem;
            }

        }
    }
</style>
