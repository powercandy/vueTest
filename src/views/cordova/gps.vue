<template>
    <div class="test-page1">
        <v-header title="cordova定位测试" prev="true"></v-header>
        <section>
            <div class="get-location">
                <button @click="getLocation">点击获取定位信息</button>
            </div>
            <ul v-if="position" class="show-location">
                <li>
                    <p>
                        <em>纬度：</em>
                        <i>{{position.coords.latitude}}</i>
                    </p>
                </li>
                <li>
                    <p>
                        <em>经度</em>
                        <i>{{position.coords.longitude}}</i>
                    </p>
                </li>
                <li>
                    <p>
                        <em>海拔：</em>
                        <i>{{position.coords.altitude}}</i>
                    </p>
                </li>
                <li>
                    <p>
                        <em>水平精度：</em>
                        <i>{{position.coords.accuracy}}</i>
                    </p>
                </li>
                <li>
                    <p>
                        <em>垂直精度：</em>
                        <i>{{position.coords.altitudeAccuracy}}</i>
                    </p>
                </li>
                <li>
                    <p>
                        <em>方向：</em>
                        <i>{{position.coords.heading }}</i>
                    </p>
                </li>
                <li>
                    <p>
                        <em>速度：</em>
                        <i>{{position.coords.speed}}</i>
                    </p>
                </li>
                <li>
                    <p>
                        <em>时间戳：</em>
                        <i>{{position.timestamp}}</i>
                    </p>
                </li>
            </ul>
        </section>
    </div>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {
                position: false
            };
        },
        methods: {
            // 获取位置信息
            getLocation () {
                // eslint-disable-next-line
                navigator.geolocation.getCurrentPosition(this.getSuccess, this.getError);
            },
            // 获取成功
            getSuccess (position) {
                this.position = position;
                console.log(position);
            },
            // 获取失败
            getError (error) {
                alert('code' + error.code + '\n' + 'message' + error.message + '\n');
            }
        }
    };
</script>

<style  lang="less" scoped>
    .test-page1 {
        background: #d3d7d4;
        height: 6.67rem;
        section {
            padding-top: .3rem;
            padding-left: .15rem;
            .get-location {
                button {
                    width: 1.2rem;
                    height: .3rem;
                    background: orange;
                    border-radius: 5%;
                    border: none;
                }
            }
            .show-location {
                margin-top: .2rem;
            }
        }
    }
</style>
