<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <slot></slot> 
        </div>
        <div class="dots">
            <span v-for="item, index in dots" :key="index" :class="{active : currentPageIndex === index}" class="dot">
            </span>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    import {addClass} from '@/assets/js/music/dom';
    export default {
        name: 'slider',
        /*
        *   [[ Boolean ]]   [loop]          是否循环轮播
        *   [[ Boolean ]]   [autoPlay]      是否开启自动播放时间
        *   [[ Number ]]    [interval]      自动播放间隔时间
        *   [[ Boolean ]]   [showDot]       是否显示滑动图标
        *   [[ Boolean ]]   [click]         better-scroll默认阻止浏览器的原生click事件；默认值为false
        */
        props: {
            loop: {
                type: Boolean,
                default: true
            },
            autoPlay: {
                type: Boolean,
                default: true
            },
            interval: {
                type: Number,
                default: 3000
            },
            showDot: {
                type: Boolean,
                default: true
            },
            click: {
                type: Boolean,
                default: true
            }
        },
        /*
        *   [[ Array ]] [dots]                  轮播图下标
        *   [[ Number ]] [currentPageIndex]     轮播图播放的当前页数
        *   [[ Array ]] [children]              图片列表的dom节点
        */
        data() {
            return {
                dots: [],
                currentPageIndex: 0,
                children: []
            };
        },
        mounted() {
            /* 确保dom结构渲染完毕 */
            setTimeout(() => {
                this._setSliderWidth(); // 设置容器宽度
                if (this.showDot) {     // 创建滑动记录图标
                    this._initDots();
                }
                this._initSlider();     // 实例化slider
                if (this.autoPlay) {    // 开启自动播放
                    this._play();
                }
            }, 20);
                /* 监听屏幕变化 */
            window.addEventListener('resize', () => {
                console.log('resize change');
                if (!this.slider || !this.slider.enabled) {     // enabled 判断当前scroll是否处于启动状态
                    return;
                }
                clearTimeout(this.resizeTimer);
                this.resizeTimer = setTimeout(() => {
                    if (this.slider.isInTransition) {           // 判断当前scroll是否处于滚动动画过程中
                        this._OnScrollEnd();
                    } else {
                        if (this.autoPlay) {
                            this._play();
                        }
                    }
                    this.refresh();
                }, 60);
            });
        },
        /* keep-alive组件激活时调用 */
        activated() {
            // console.log('activated');
            if (!this.slider) return;
            // console.log('this.slider excited');
            this.slider.enable();      // 启用better-scroll
            let pageIndex = this.slider.getCurrentPage().pageX;     // 获取当前轮播页的页码
            if (pageIndex < this.dots.length) {
                pageIndex = pageIndex % this.dots.length;
            }
            this.slider.goToPage(pageIndex, 0, 0);
            if (this.loop) {
                pageIndex -= 1;
            }
            this.currentPageIndex = pageIndex;
            if (this.autoPlay) {
                this._play();
            }
        },
        /* keep-alive组件停用时调用 */
        deactivated() {
            // console.log('deactivated');
            this.slider.disable();
            clearTimeout(this.timer);
        },
        beforeDestroy() {
            // console.log('beforeDestroy');
            this.slider.disable();      // 禁用better-scroll, DOM事件的回调函数不再响应
            clearTimeout(this.timer);   // 关闭自动播放定时器
        },
        methods: {
            /* 刷新slider */
            refresh() {
                // console.log('refresh');
                this._setSliderWidth(true);  // 设置容器宽度
            },
            /* 初始化slider */
            _initSlider() {
                // console.log('initSlider');
                console.assert(this.$refs.slider, '获取不到slider节点');
                this.slider = new BScroll(this.$refs.slider, {
                    scrollX: true,      // true时开启横向滚动，默认值为false
                    momentum: false,    // 关闭滚动动画，默认值为true
                    snap: {
                        loop: this.loop,
                        threshold: 0.3,
                        speed: 400
                    },
                    click: this.click
                });
                // console.log(this.slider);
                this.slider.on('scrollEnd', this._OnScrollEnd); // 滚动结束时触发
                this.slider.on('touchEnd', () => {              // 鼠标/手指离开时触发
                    if (this.autoPlay) {
                        this._play();
                    }
                });
                this.slider.on('beforeScrollStart', () => {     // 滚动开始之前触发
                    if (this.autoPlay) {
                        clearTimeout(this.timer);
                    }
                });
            },
            /* 设置容器宽度 */
            _setSliderWidth(resize) {
                // console.log('setWidth');
                this.children = this.$refs.sliderGroup.children;
                let width = 0;
                let sliderWidth = this.$refs.slider.clientWidth; // iphone 6下 375px
                for (var i = 0; i < this.children.length; i++) {
                    addClass(this.children[i], 'slider-item');
                    this.children[i].style.width = sliderWidth + 'px';
                    width += sliderWidth;
                }
                if (this.loop && !resize) {
                    width += 2 * sliderWidth;
                }
                this.$refs.sliderGroup.style.width = width + 'px';
            },
            /* 滚动结束时的回调 */
            _OnScrollEnd() {
                let pageIndex = this.slider.getCurrentPage().pageX;  // 获取当前轮播页的页码
                if (this.loop) {
                    pageIndex -= 1;
                }
                this.currentPageIndex = pageIndex;
                if (this.autoPlay) {
                    this._play();
                }
            },
            /* 设置滑动图标 */
            _initDots() {
                this.dots = new Array(this.children.length);
            },
            /* 开启自动播放 */
            _play() {
                let pageIndex = this.slider.getCurrentPage().pageX + 1;
                clearTimeout(this.timer);   // 关闭自动播放定时器
                this.timer = setInterval(() => {
                    this.slider.goToPage(pageIndex, 0, 400);
                }, this.interval);
            }
        },
        watch: {
            currentPageIndex: function(val, oldVal) {
                // console.log(val);
            }
        }
    };
</script>

<style lang="scss">
    .slider {
        position: relative;
    }
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
                    display: block;
                    width: 100%;
                    border: 0;
                }
            }
        }
    }
    .dots {
        position: absolute;
        right: 0;
        left: 0;
        bottom: .12rem;
        font-size: 0;
        text-align: center;
        .dot {
            display: inline-block;
            margin: 0 .04rem;
            width: .08rem;
            height: .08rem;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            &.active {
                width: .2rem;
                border-radius: .05rem;
                background: rgba(255, 255, 255, 0.8);
            }
        }
    }
</style>