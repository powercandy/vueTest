<template>
    <div class="money-page">
        <v-header title="隐藏金额" prev="true"></v-header>
        <form class="money-box">
            <input type="text" name="money" v-model="money" placeholder="请输入金额">
            <p>{{money | hideMoney}}</p>
        </form>
         <audio id="Jaudio" class="media-audio" src="http://game.163.com/weixin/gfxm3_gc/images/bg.mp3" preload loop="loop"></audio>
    </div>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                money: ''
            };
        },
        filters: {
            hideMoney(val) {
                return val.replace(/\w/g, '*');
            }
        },
        created() {
            // setTimeout(() => {
            //     document.addEventListener('WeixinJSBridgeReady', () => {
            //         alert('jianting');
            //         this.audioAutoPlay('Jaudio');
            //     }, false);
            // }, 4000);
        },
        mounted() {
            this.audioAutoPlay('Jaudio');
            setTimeout(() => {
                this.audioAutoPlay('Jaudio');
            }, 3000);
        },
        methods: {
            audioAutoPlay (id) {
                let audio = document.getElementById(id);
                // console.log(audio.play());
                audio.play();
                // document.addEventListener('WeixinJSBridgeReady', () => {
                //     alert('wx');
                //     audio.play();
                // }, false);
                // document.addEventListener('YixinJSBridgeReady', function() {
                //     alert('yx');
                //     audio.play();
                // }, false);
            }
        }
    };
</script>

<style type="text/css" lang="scss" scoped>
    .money-page {
        .money-box {
            padding: .15rem;
            input {
                margin-bottom: .2rem;
            }
        }
    }
</style>