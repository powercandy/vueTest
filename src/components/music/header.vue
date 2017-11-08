<template>  
    <div class="common-header txt-center">
        <div class="icon"></div>
        <h1 class="name">Chicken Music</h1>
        <div class="mine">
           <i class="icon-mine font-20"></i> 
        </div>
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
    @mixin bg-image($url) {
        background-image: url($url + "@2x.png");
        @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
            background-iamge: url($url + "@3x.png");
        }
    }
    .common-header {
        position: relative;
        height: .44rem;
        color: #ffcd32;
        .icon {
            display: inline-block;
            vertical-align: top;
            margin-top: .06rem;
            margin-right: .09rem;
            width: .3rem;
            height: .32rem;
            @include bg-image("../../assets/images/music/logo");
            background-size: 100%;
        }
        .name {
            display: inline-block;
            line-height: .44rem;
            font-size: .18rem;
        }
        .mine {
            position: absolute;
            right: 0;
            top: 0;
            i {
                display: block;
                padding: .12rem;
            }
        }
    }
</style>