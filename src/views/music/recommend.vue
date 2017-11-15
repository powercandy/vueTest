<template>
    <div class="recommend">
        <scroll class="recommend-content" ref="scroll" :data="discList">
            <div>
            <!-- slider 部分 start-->
                <div v-if="carouselList.length">
                    <slider ref="slider1">
                        <div v-for="item, index in carouselList" :key="index">
                            <a :href="item.linkUrl">
                                <img :src="item.picUrl" @load="refresh" alt="轮播图">
                            </a>
                        </div>
                    </slider>
                </div>
            <!-- slider 部分 end-->   
            <!-- 热门歌单列表比方 start -->
                <div class="recommend-list">
                    <h1 class="list-title txt-center font-14">热门歌单推荐</h1>
                    <ul>
                        <li class="item" v-for="item in discList">
                            <div class="icon">
                                <img :src="item.imgurl" alt="">
                            </div>
                            <div class="text font-14">
                                <h2 class="name font-14">{{item.creator.name}}</h2>
                                <p class="desc">{{item.dissname}}</p>
                            </div>
                        </li>
                        <!-- <li class="item">
                            <div class="icon">
                                <img src="http://p.qpic.cn/music_cover/IFaat4Bgz8qGFbBX18ic3CaM2iadGp8ticSHHpKEib6qTNcQr6FjmMialxQ/600?n=1" alt="">
                            </div>
                            <div class="text font-14">
                                <h2 class="name font-14">9命猫</h2>
                                <p class="desc">适合在失眠的午夜耳朵里回味；夜森＂协奏曲</p>
                            </div>
                        </li> -->
                    </ul>
                </div>
            <!-- 热门歌单列表比方 end -->
            </div>
        </scroll>
    </div>
</template>

<script>
    import slider from '~/music/slider';
    import scroll from '~/music/scroll';
    import {ERR_OK} from '@/assets/js/music/config';
    export default {
        /*
        *   data
        *   [[ Array ]]      [ carouseList ]     轮播图数据列表
        *   [[ Array ]]      [ discList ]        歌单数据列表
        *   [[ Boolean ]]    [ checkLoaded ]     设定一个参数，防止多次触发图片加载load事件
        */
        components: {
            slider,
            scroll
        },
        data() {
            return {
                carouselList: [],
                discList: [],
                checkLoaded: false
            };
        },
        created() {
            this.getCarouselList();
            this.getDiscList();
        },
        methods: {
            /* 获取轮播图数据 */
            getCarouselList() {
                this.api.getRecommend().then(res => {
                    if (res.code === ERR_OK) {
                        this.carouselList = res.data.slider;
                    }
                });
            },
            /* 获取歌单推荐 */
            getDiscList() {
                this.api.getDiscList().then(res => {
                    if (res.data.code === ERR_OK) {
                        this.discList = res.data.data.list;
                    }
                });
            },
            refresh() {
                if (!this.checkLoaded) {
                    // console.log('onload');
                    this.checkLoaded = true;
                    // console.log(this.$refs.scroll);
                    // this.$refs.scroll.refresh();
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    .recommend {
        position: fixed;
        width: 100%;
        top: .88rem;
        bottom: 0;
    }
    .recommend-content {
        height: 100%;
        overflow: hidden;
    }
    .recommend-list{
       .list-title {
        height: .65rem;
        color: #ffcd32;
        line-height: .65rem;
        }
        .item {
            display: flex;
            padding: 0 .2rem .2rem .2rem;
            align-items: center;
            .icon {
                padding-right: .2rem;
                img {
                    width: .6rem;
                    height: .6rem;
                }
            }
            .text {
                line-height: .2rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                .name {
                    margin-bottom: .1rem;
                    color: #fff;
                }
                .desc {
                    color: rgba(255, 255, 255, .3);
                }
            }
            
        }
    }
    
</style>