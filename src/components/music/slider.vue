<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <slot></slot> 
        </div>
        <div class="dots">
            <span v-for="item, index in dots" :key="index">
                
            </span>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    import {addClass} from '@/assets/js/music/dom';
    export default {
        name: 'slider',
        data() {
            return {
                slider: Function,
                dots: []
            };
        },
        mounted() {
            console.assert(this.$refs.slider, '获取不到slider节点');
            this.setSliderWidth();
            this.initDots();
            this.initSlider();
        },
        methods: {
            /* 初始化slider */
            initSlider() {
                // const slider = this.$refs.slider;
                const config = {
                    scrollX: true,
                    scrollY: false,
                    momentum: false,
                    snap: true,
                    snapLoop: true,
                    snapThreshold: 0.3,
                    snapSpeed: 400
                };
                this.slider = new BScroll(this.$refs.slider, config);
            },
            /* 设置容器宽度 */
            setSliderWidth() {
                console.assert(this.$refs.sliderGroup, '获取不到sliderGroup节点');
                this.children = this.$refs.sliderGroup.children;
                console.log(this.children);
                let width = 0;
                let sliderWidth = this.$refs.slider.clientWidth; // iphone 6下 375px
                for (var i = 0; i < this.children.length; i++) {
                    addClass(this.children[i], 'slider-item');
                    this.children[i].style.width = sliderWidth + 'px';
                    width += sliderWidth;
                }
                width += 2 * sliderWidth;
                this.$refs.sliderGroup.style.width = width + 'px';
            },
            /* 设置滑动图标 */
            initDots() {
                this.dots = new Array(this.children.length);
            }
        }
    };
</script>

<style lang="scss">
    .slider-group {
        position: relative;
        width: 100%;
        overflow: hidden;
        .slider-item {
            float: left;
            overflow: hidden;
            a {
                display: block;
                width: 100%;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }
        }
    }
</style>