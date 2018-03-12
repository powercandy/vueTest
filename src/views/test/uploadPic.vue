<template>
    <div class="">
        <v-header title="上传图片" prev="true"></v-header>
        <div class="suggest-page">
            <form class="suggest">
                <p class="title color-999">
                    <em class="red-font">*</em>
                    <span class="font-14">问题或建议</span>
                </p>
                <div class="suggest-input">
                    <textarea name="suggest" v-model="sgContent" placeholder="请简要描述您遇到的问题或建议"></textarea>
                    <p class="limit-word"><em :class="{'red-font': sgContent.length > maxWords}">{{sgContent.length}}</em>/{{maxWords}}</p>
                </div>
                <div class="upload-photo">
                    <p class="color-999 font-14">上传图片</p>
                    <div class="picture-box flexbox">
                        <div class="picture" v-for="(item, index) in imgList" :key="index" v-show="imgList.length">
                            <img :src="item" alt="">
                            <span class="icon-close" @click="deleteImg(index)"></span>
                        </div>
                        <div class="add" v-if="imgList.length < 3">
                            <span></span>
                            <span></span>
                            <input type="file" accept="image/*" name="file" class="uploadImg" @change="chooseImg($event)">
                        </div>
                    </div>
                </div>
                <div class="phone-input">
                    <input type="text" v-model="mobile" maxlength="11" placeholder="请留下您的手机号（选填）">
                </div>
            </form>

            <footer class="suggest-btn">
                <button class="btn" type="submit" @click="sendSuggest">提交</button>
            </footer>
            <canvas v-show="false" id="myCanvas"></canvas>
        </div>
    </div>
</template>
<script>
    // import { Flexbox } from 'vux';
    // import validRules from '../assets/js/rules.js';
    // import utils from '../assets/js/utils.js';

    export default {
        /**
         * [数据]
         * @data  {[String]}  maxWords    [ 建议字数最大限制为200 ]
         * @data  {[String]}  sgContent   [ 建议文本内容 ]
         * @data  {[String]}  maxSize     [ 图片最大尺寸kb ]
         * @data  {[String]}  maxHeight   [ 图片最大高度 ]
         * @data  {[String]}  quality     [ 图片质量 ]
         * @data  {[Array]}   imgList     [ 上传图片列表，长度最大为3 ]
         * @data  {[String]}  mobile      [ 输入手机号码 ]
         */
        data() {
            return {
                maxWords: 200,
                sgContent: '',
                maxSize: 800,
                maxHeight: 800,
                quality: 30,
                imgList: [],
                mobile: '',
                press: false
            };
        },
        // components: {Flexbox},
        methods: {
            /**
             * {{ Function }} deleteImg     [ 删除上传的图片]
             */
            deleteImg(index) {
                this.imgList.splice(index, 1);
            },
            /**
             * {{ Function }} chooseImg     [ 选择上传的图片]
             */
            chooseImg(event) {
                const _this = this;
                // 验证图片格式
                if (event.target.files[0]) {
                    const img = event.target.files[0];
                    if (!/\/(?:jpeg|png)/i.test(img.type)) {
                        // alert('请传入png或者jpeg格式的图片');
                        return;
                    }
                    if (img.type.indexOf('image') === 0) {
                        // 对图片进行大小判断
                        let reader = new FileReader();
                        reader.readAsDataURL(img);
                        // 显示loading
                        // this.$store.dispatch('showLoading', true);
                        reader.onload = function(e) {
                            const result = e.target.result;
                            // 当图片大于预定大小时，对图片进行压缩
                            if ((result.length / 1024) > _this.maxSize) {
                                // 调用压缩图片的方法
                                _this.compressImg(result, _this.maxHeight, function (res) {
                                    _this.imgList.push(res);
                                });
                            } else {
                                _this.imgList.push(result);
                            }
                            // 关闭loading
                            // _this.$store.dispatch('showLoading', false);
                            event.target.value = ''; // 清除input缓存(此缓存会导致无法重复选择同一张图片)
                        };
                    }
                }
            },
            /**
             * {{ Function }} compressImg     [ 图片压缩 ]
             * {{ String }}   maxHeight       [ 图片最大高度 ]
             * {{ String }}   imgData         [ 图片路径 ]
             * {{ Function }} onCompress      [ 回调方法 ]
             */
            compressImg(imgData, maxHeight, onCompress) {
                if (!imgData) return;
                onCompress = onCompress || function () {};
                maxHeight = maxHeight || 800; // 默认最大高度为800
                let img = new Image();
                img.src = imgData;
                const _this = this;
                img.onload = function () {
                    if (img.height > maxHeight) { // 按最大高度等比缩放，达到图片压缩后大小的改变
                        img.width *= maxHeight / img.height;
                        img.height = maxHeight;
                    }
                    let canvas = document.getElementById('myCanvas');
                    let ctx = canvas.getContext('2d');
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0, img.width, img.height);
                    onCompress(canvas.toDataURL('image/jpeg'), _this.quality / 100);
                };
            },
            /**
             * {{ Function }} sendSuggest                   [ 发送意见反馈内容（必填），图片，手机号 ]
             * {{ Function }} this.api.sendSuggest          [ 发送接口 ]
             * {{ String }}   content                       [ 意见内容 ] [ 必传 ]
             * {{ String }}   app_platform                  [ 当前问题所在终端 ] [ 必传 ]
             * {{ String }}   equipmentId                   [ 当前问题所在终端的唯一标识(用以限制发送次数)，h5通过sid判断,所以传空值 ] [ 必传 ]
             * {{ String }}   feedbackCellphone             [ 手机号码 ] [ 可选 ]
             * {{ Array }}    screenshots                   [ 上传图片 ] [ 可选 ]
             * {{ Object }}   res                           [ 接口返回值 ]
             */
            sendSuggest() {
                if (this.press) return;
                // 对内容进行验证
                if (!this.sgContent.length > 0) {
                    alert('请简要描述您遇到的问题或建议');
                    return;
                } else if (this.sgContent.length > this.maxWords) {
                    alert(`输入字数超限，请不要超过${this.maxWords}字哦`);
                    return;
                }
                // 上传图片大小验证
                this.imgList.map(value => {
                    if ((value.length / 1024) > this.maxSize) {
                        alert('图片过大，请更换图片后提交');
                    }
                });
                // 若输入手机号，则对其进行验证
                // if (this.mobile.length > 0) {
                //     const mobileResult = validRules.mobile(this.mobile, '手机号');
                //     if (!mobileResult.valid) {
                //         alert(mobileResult.message);
                //         return;
                //     }
                // };
                // 防重点击
                this.press = true;
                setTimeout(() => {
                    this.press = false;
                }, 2000);
                // sid验证，防止用户通过url直接进入此页面
                if (!sessionStorage.getItem('jie-sid')) {
                    alert('请登录后再提交反馈');
                    return;
                };
                // 请求后端接口，发送数据
                // const data = {
                //     content: this.sgContent,
                //     app_platform: 'H5',
                //     equipmentId: '',
                //     feedbackCellphone: this.mobile,
                //     screenshots: this.imgList.length > 0 ? this.handleImg(this.imgList) : this.imgList
                // };
                // this.api.sendSuggest(data).then(res => {
                //     if (res.body.code === '000') {
                //         alert('反馈提交成功');
                //         setTimeout(() => {
                //             this.$router.go(-1);
                //         }, 1500);
                //     } else {
                //         alert(res.body.msg);
                //     }
                // });
            },
             /**
             * {{ Function }} handleImg        [ 图片处理,去除图片base64格式带有的前缀信息，只传给后端base64的字符串 ]
             * {{ Array }}    imgList          [ 图片列表 ]
             */
            handleImg(imgList) {
                return imgList.map(res => {
                    return res.split(',')[1];
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
    .suggest-page {
        padding-top: .44rem;
        padding-left: .15rem;
        padding-right: .15rem;
        .suggest {
            .title {
                margin: .1rem 0;
            }
            /* 意见反馈输入框 */
            .suggest-input {
                .limit-word {
                    text-align: right;
                    color: #666;
                    margin-top: .11rem;
                    margin-bottom: .12rem;
                }
            }
            /* 上传图片部分 */
            .upload-photo {
                p {
                    margin-bottom: .1rem;
                }
                /* 图片外层盒子 */
                .picture {
                    width: .82rem;
                    height: .82rem;
                    border: 1px solid #ddd;
                    margin-right: .15rem;
                    position: relative;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                    /* 删除图片按钮 */
                    .icon-close {
                        display: block;
                        width: .17rem;
                        height: .17rem;
                        background-image: url('../../assets/images/uploadPic/close@2x.png');
                        background-repeat: no-repeat;
                        background-position: center center;
                        background-size: .17rem;
                        position: absolute;
                        right: -.05rem;
                        top: -.05rem;
                        &:before {
                            content: '';
                        }
                    }
                }
                /* 添加按钮 */
                .add {
                    width: .82rem;
                    height:.82rem;
                    border: 1px dashed #c5c5c5;
                    background: #fff;
                    position: relative;
                    span {
                        display: block;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: #d8d8d8;
                        &:nth-of-type(1) {
                            width: .24rem;
                            height: .02rem;

                        }
                        &:nth-of-type(2) {
                            width: .02rem;
                            height: .24rem;
                        }
                    }
                    /* 上传文件标签 */
                    input {
                        width: .82rem;
                        height: .82rem;
                        opacity: 0;
                    }
                }
            }
            /* 手机号输入框 */
            .phone-input {
                margin-top: .3rem;
                height: .45rem;
                border: 1px solid #ddd;
                border-radius: .04rem;
                padding: .12rem;
                background: #fff;
                input {
                    width: 100%;
                    height: 100%;
                    background: #fff;

                }
            }
        }
        /* 提交按钮 */
        .suggest-btn {
            margin-top: .5rem;
        }
    }
    /* *红色提示 */
    .red-font {
        color: #FF6045;
    }
    .color-999{
        color: #999;
    }
    .font-14 {
        font-size: .14rem;
    }
    textarea[name='suggest'] {
        border: 1px solid #e9e9e9;
        width: 100%;
        height: 1.33rem;
        padding: .12rem;
        /* 解决ios上两个问题：1.textarea上边框会有阴影；2.删除文字会有卡顿；change */
        -webkit-appearance: none;
    }
    .flexbox {
        display: flex;
    }
</style>
