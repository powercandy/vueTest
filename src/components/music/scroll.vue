<template>
    <div class="scroll-wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    export default {
        name: 'scroll',
        props: {
            probeType: {
                type: Number,
                default: 1
            },
            click: {
                type: Boolean,
                default: true
            },
            refreshDelay: {
                type: Number,
                defalut: 20
            },
            data: {
                type: Array,
                default: null
            }
        },
        mounted() {
            setTimeout(() => {
                this._initScroll();
            }, 20);
        },
        methods: {
            _initScroll() {
                if (!this.$refs.wrapper) return;
                this.wrapper = new BScroll(this.$refs.wrapper, {
                    probeType: this.probeType,
                    click: this.click
                });
            },
            /* wrapper滚动重新计算 */
            refresh() {
                this.wrapper && this.wrapper.refresh();
            }
        },
        /* 监听列表数据变化，第一次data为null值，后台异步获取数据后，更新data,从而刷新wrapper滚动 */
        watch: {
            data() {
                setTimeout(() => {
                    this.refresh();
                }, this.refreshDelay);
            }
        }
    };
</script>

<style lang="scss" scoped=""></style>