<template>
    <div>
        <v-header title="tabbar" prev="true"></v-header>
        <div class="tab">
            <ul>
                <li v-for="(item, index) in list" :key="index">
                    <a>{{ item }}</a>
                </li>
            </ul>
        </div>
        <div>
            <p>你好啊</p>
            <i class="music-font icon-tree"></i>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
            };
        }
    };
</script>

<style lang="less" scoped>
    @font-face {
        font-family: 'music-font';
        src: url('/static/music-icon.ttf') format('truetype')
    }
    .music-font {
        font-family: 'music-font' !important;
        font-style: normal;
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
       /*  display: inline-block;
       width: .2rem;
       height: .3rem;
       font-size: .24rem; */
    }
    .icon-tree:after {content: '\e901';}
    .tab {
        overflow-x: auto;
        ul {
            display: flex;
            flex-flow: row nowrap;
            flex-shrink: 0;
            min-width: 100%;
            height: .4rem;
            border-bottom: 1px solid #ddd;
        }
        li {
            flex-grow: 1;
            text-align: center;
            &:not(:first-child) {
                margin-left: .1rem;
            }
            padding: .1rem;
        }
    }
</style>

