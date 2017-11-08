<template>
    <div class="recommend">
        <slider>
            <div v-for="item in recommends" class="carousel">
                <a :href="item.linkUrl">
                    <img :src="item.picUrl" class="carousel-item">
                </a>
            </div>
        </slider>
    </div>
</template>
<script>
    import slider from '@/components/music/slider';
    import { ERR_OK } from '@/assets/js/music/config';
    export default {
        components: {
            slider
        },
        data() {
            return {
                recommends: []
            };
        },
        mounted() {
            this.api.getRecommend().then(res => {
                if (res.code === ERR_OK) {
                    this.recommends = res.data.slider;
                }
            });
        }
    };
</script>