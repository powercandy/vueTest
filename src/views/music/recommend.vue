<template>
    <div>
        <scroll>
            <div>
            <!-- slider 部分 start-->
                <div v-if="carouselList">
                    <slider>
                        <div v-for="item, index in carouselList" :key="index">
                            <a :href="item.linkUrl">
                                <img :src="item.picUrl" alt="轮播图">
                            </a>
                        </div>
                    </slider>
                </div>
            <!-- slider 部分 end-->   
            <!-- 热门歌单列表比方 start -->
                <!-- <div class="recommend-list">
                    <h1 class="list-title">热门歌单推荐</h1>
                    <ul>
                        <li class="item" v-for="item in discList">
                            <div class="icon">
                                <img :src="item.imgurl" alt="">
                            </div>
                            <div class="text">
                                <h2 class="name">{{item.creator.name}}</h2>
                                <p class="desc">{{item.dissname}}</p>
                            </div>
                        </li>
                        <li class="item">
                            <div class="icon">
                                <img src="http://p.qpic.cn/music_cover/IFaat4Bgz8qGFbBX18ic3CaM2iadGp8ticSHHpKEib6qTNcQr6FjmMialxQ/600?n=1" alt="">
                            </div>
                            <div class="text">
                                <h2 class="name">9命猫</h2>
                                <p class="desc">适合在失眠的午夜耳朵里回味；夜森＂协奏曲</p>
                            </div>
                        </li>
                    </ul>
                </div> -->
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
        components: {
            slider,
            scroll
        },
        data() {
            return {
                carouselList: [],
                discList: []
            };
        },
        mounted() {
            this.getCarouselList();
            // this.getDiscList();
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
                    if (res.code === ERR_OK) {
                        this.discList = res.data.list;
                    }
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
    
</style>