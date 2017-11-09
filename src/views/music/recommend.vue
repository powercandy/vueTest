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
            </div>
        </scroll>
    </div>
</template>

<script>
    import slider from '~/music/slider';
    import scroll from '~/music/scroll';
    export default {
        components: {
            slider,
            scroll
        },
        data() {
            return {
                carouselList: ''
            };
        },
        mounted() {
            this.getCarouselList();
        },
        methods: {
            getCarouselList() {
                this.api.getRecommend().then(res => {
                    if (res.code === 0) {
                        this.carouselList = res.data.slider;
                    }
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
    
</style>