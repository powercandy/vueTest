<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    export default {
        props: {
            // 非实时（屏幕滑动超过一定时间后）派发scroll 事件
            probeType: {
                type: Number,
                default: 1
            },
            // better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件
            click: {
                type: Boolean,
                default: true
            },
            listenScroll: {
                type: Boolean,
                default: false
            },
            data: {
                type: Array,
                default: null
            },
            pullup: {
                type: Boolean,
                default: false
            },
            beforeScroll: {
                type: Boolean,
                default: false
            },
            refreshDelay: {
                type: Number,
                default: 20
            }
        },
        mounted() {
        },
        methods: {
            initScroll() {
                this.scroll = new BScroll(this.$refs.wrapper, {
                    probeType: this.probeType,
                    click: this.click
                });
                if (this.beforeScroll) {
                    // beforeScrollStart 触发时机：滚动开始之前。
                    this.scroll.on('beforeScrollStart', () => {
                        this.$emit('beforeScroll');
                    })
                }
                if (this.listenScroll) {
                    // let _this = this;
                    // scroll 触发时机：滚动过程中，具体时机取决于选项中的 probeType。
                    this.scroll.on('scroll', (pos) => {
                        this.$emit('scroll', pos);
                    })
                }
                if (this.pullup) {
                    // scrollEnd 触发时机：滚动结束。
                    this.scroll.on('scrollEnd', () => {
                        if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                            this.$emit('scrollEnd');
                        }
                    })
                }
            }
        }
    }
</script>