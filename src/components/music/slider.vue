<template>
    <div class="slider" ref="slider">
        <div class="slider-group" ref="sliderGroup">
            <slot></slot>
        </div>
        <div class="dots">
            <span class="dot" v-for="(item, index) in dots"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'slider',
        props: {
            lop: {
                type: Boolean,
                default: true
            },
            autoPlay: {
                type: Boolean,
                default: true
            },
            interval: {
                type: Number,
                default: 4000
            }
        },
        data() {
            return {
                dots: [],
                currentPageIndex: 0
            };
        },
        mounted() {
        },
        methods: {
        }
    };
</script>