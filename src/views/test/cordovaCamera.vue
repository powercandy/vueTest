<template>
	<div class="test-page1">
		<v-header title="cordova拍照测试" prev="true"></v-header>
		<section>
			<div class="take-photo">
				<button @click="takePhoto">点击拍照</button>
			</div>
			<div class="photoAdress">
				<img :src="imgSrc" title="">
			</div>
		</section>
	</div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                imgSrc: 'http://via.placeholder.com/150x150'
            };
        },
        methods: {
            // 调用本地拍照
            takePhoto () {
                // eslint-disable-next-line
                navigator.camera.getPicture(this.takeSucess, this.takeFail, {
                    // eslint-disable-next-line
                    destinationType: Camera.DestinationType.FILE_URI
                });
            },
            // 调用拍照成功
            takeSucess(imageURI) {
                this.imgSrc = imageURI;
                console.log(imageURI);
            },
            // 调用拍照失败
            takeFail(message) {
                // eslint-disable-next-line
                navigator.notification.alert('拍照失败，原因' + message);
            }
        }
    };
</script>

<style  lang="less" scoped>
	.test-page1 {
		background: #d3d7d4;
		height: 6.67rem;
		section {
			text-align: center;
			padding-top: 30px;
			.take-photo {
				button {
					width: .8rem;
					height: .3rem;
					background: orange;
					border-radius: 5%;
					border: none;
				}
			}
			.photoAdress {
				width: 100%;
				height: 1.5rem;
				line-height: 1.5rem;
                margin-top: .3rem;
                img {
                	width: 1.5rem;
                }
			}
		}
	}
</style>
