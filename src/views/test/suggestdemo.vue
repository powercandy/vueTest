<template>
    <div>
        <v-header title="suggest" prev="true"></v-header>
        <form>
            <textarea v-model="content" maxlength="10" cols="30" rows="10" placeholder="请简要描述您遇到的问题或者建议"></textarea>
            <p>{{watchTxt}}</p>
        </form>
        <p class="upload-txt font-16">上传图片</p>
        <form action="" class="upload-img">
            <div class="show-img" v-if="ImgList.length > 0" v-for="item, index in ImgList" :key="index">
                <img :src="item.imgUrl" alt="">
            </div>
            <div class="add" v-show="isShowAdd">
                <input type="file" accept="image/*" name="file" class="uploadImg" @change="chooseImage($event)">
                <div class="txt-center">+</div>
            </div>
        </form>

        <canvas id="myCanvas" v-show="false"></canvas>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                content: '',
                maxContent: '200',
                maxSize: 8000,
                maxHeight: '100',
                imgUrl: '',
                finished: true,
                compress: false,
                imgList: [],
                showAdd: true
            };
        },
        methods: {
            chooseImage(event) {
                console.log(2);
                const _this = this;
                // 验证图片格式
                if (event.target.files[0]) {
                    const img = event.target.files[0];
                    if (!/\/(?:jpeg|png)/i.test(img.type)) return;
                    if (img.type.indexOf('image') === 0) {
                      // 对图片进行大小判断
                        var reader = new FileReader();
                        reader.readAsDataURL(img);
                        console.log('1');
                        reader.onload = function(e) {
                            const res = e.target.result;
                            if (res.length <= _this.maxSize) {
                                // 获取图片url地址
                                const imgUrl = _this.getImageUrl(img);
                                _this.imgUrl = imgUrl;
                                _this.imgList.push({
                                    imgUrl: imgUrl
                                });
                                _this.finished = false;
                                event.target.value = ''; // 清除input缓存
                                // 上传图片
                            } else {
                                // 压缩图片
                                _this.compressImg(res, _this.maxHeight, function (res) {
                                    _this.compress = true;
                                    _this.imgUrl = res;
                                    _this.imgList.push({
                                        imgUrl: res
                                    });
                                    _this.finished = false;
                                    _this.uploadImg(img);
                                    event.target.value = ''; // 清除input缓存
                                });
                            }
                        };
                    }
                }
            },
            // 获取图片地址
            getImageUrl(file) {
                let url = null;
                if (window.createObjectURL !== undefined) {
                    url = window.createObjectURL(file); // basic
                } else if (window.URL !== undefined) {
                    url = window.URL.createObjectURL(file); // FireFox
                } else if (window.webkitURL !== undefined) {
                    url = window.webkitURL.createObjectURL(file);
                }
                return url;
            },
            // 压缩图片
            compressImg(imgData, maxHeight, onCompress) {
                if (!imgData) return;
                onCompress = onCompress || function () {};
                maxHeight = maxHeight || 800;
                let img = new Image();
                img.src = imgData;
                img.onload = function () {
                    if (img.height > maxHeight) {
                        img.width *= maxHeight / img.height;
                        img.height = maxHeight;
                    }
                    var canvas = document.getElementById('myCanvas');
                    var ctx = canvas.getContext('2d');
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0, img.width, img.height);
                    onCompress(canvas.toDataURL('image/jpeg'));
                };
            },
            uploadImg(file) {
                let formData = new FormData();
                formData.append('files', file);
                // 上传接口
            }
        },
        computed: {
            watchTxt() {
                return this.content.length + '/' + this.maxContent;
            },
            ImgList() {
                console.log(this.imgList);
                return this.imgList;
            },
            isShowAdd() {
                if (this.ImgList.length >= 3) {
                    return false;
                }
                return true;
            }
        }
    };
</script>

<style lang="scss" scoped>
    .upload-txt {
        margin-bottom: .1rem;
    }
    .upload-img {
    }
    .add {
        width: .5rem;
        height: .5rem;
        float: left;
        position: relative;
        .uploadImg {
            width: .5rem;
            height: .5rem;
            display: block;
            border: 1px solid #ddd;
            opacity: 0;
            position: absolute;
            z-index: 100;
        }
        div {
            width: .5rem;
            height: .5rem;
            border: 1px solid #ddd;
            font-size: .36rem;
            line-height: .5rem;
            position: absolute;
        }
    }
    .show-img {
        float: left;
        width: .5rem;
        height: .5rem;
        margin-left: .1rem;
        img {
            width: .5rem;
            height: .5rem;
        }
    }

</style>
