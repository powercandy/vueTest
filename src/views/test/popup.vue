<template>
    <div>
        <v-header title="弹窗内容" prev="true"></v-header>
        <div class="popup-test">
           <div class="mask" v-show="popupState" @click="closePopup" @touchmove.prevent>
               <div class="popup txt-center" @click.stop>
                    <div class="popup-content">
                        弹窗内容
                    </div>
                    <span @click="closePopup">关闭</span>
               </div>
           </div>
           <div class="content">
               <p @click="openPopup">点击弹窗显示1</p>
               <p @click="openPopup">点击弹窗显示2</p>
               <p @click="openPopup">点击弹窗显示3</p>
               <p @click="openPopup">点击弹窗显示4</p>
           </div>
        </div>
    </div>
    
</template>
<script type="text/javascript">
    export default {
        data() {
            return {
                popupState: false
            };
        },
        methods: {
            closePopup() {
                this.popupState = false;
            },
            openPopup() {
                this.popupState = true;
            }
        }
    };
</script>

<style type="text/css" lang="scss" scoped>
    .popup-test {
        padding: .15rem;
        font-size: .12rem;
        .content {
            padding: .15rem;
            p {
                width: 2rem;
                height: 3rem;
            }
        }
        .mask {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(0, 0, 0, .4);
            .popup {
                position: fixed;
                width: 2rem;
                height: 1.5rem;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #fff;
                div {
                    width: 100%;
                    height: 100%;
                    line-height: 1.5rem;
                }
                span {
                    display: block;
                    position: absolute;
                    top: 0;
                    right: .1rem;
                    padding: .1rem;
                    font-size: .18rem;
                }
            }
        }
    }
</style>