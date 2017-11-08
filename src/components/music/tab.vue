<template>
    <div class="tab">
       <router-link tag="div" class="tab-item" to="/music/recommend">
           <span class="tab-link">推荐</span>
       </router-link>
       <router-link tag="div" class="tab-item" to="/music/singer">
           <span class="tab-link">歌手</span>
       </router-link>
       <router-link tag="div" class="tab-item" to="/music/rank">
           <span class="tab-link">排行</span>
       </router-link>
       <router-link tag="div" class="tab-item" to="/music/search">
           <span class="tab-link">搜索</span>
       </router-link>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        }
    };
</script>
<style lang="scss" scoped>
    .tab {
        display: flex;
        height: .44rem;
        line-height: .44rem;
        font-size: .14rem;
        .tab-item {
            flex: 1;
            text-align: center;
            .tab-link {
                padding-bottom: .05rem;
                color: rgba(255,255,255,0.5);
            }
            &.router-link-active .tab-link {
                color: #ffcd32;
                border-bottom: .02rem solid #ffcd32;
            }
        }
    }
</style>