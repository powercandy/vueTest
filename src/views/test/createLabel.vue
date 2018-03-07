<template>
    <div class="create-label txt-center">
        <v-header title="新建标签" prev="true"></v-header>
        <div class="newLabel" v-for="(item, index) in listArry" :key="index">
            <div class="imgBox" v-if="item.type === 'img'">
                <img src="" alt="">
                <p>{{item.content}}</p>
            </div>
            <div class="txtBox" v-if="item.type=== 'txt'">
                <p>{{item.content}}</p>
            </div>
        </div>
        <div class="create-btn">
            <span class="create-img" @click="createLabel('img')">新建图片</span>
            <span class="create-txt" @click="createLabel('txt')">新建内容</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                listArray: []
            };
        },
        computed: {
            listArry() {
                return this.listArray;
            }
        },
        methods: {
            createLabel(content) {
                if (content === 'img') {
                    this.listArray.push({
                        type: 'img',
                        content: 'i am picture label'
                    });
                } else if (content === 'txt') {
                    this.listArray.push({
                        type: 'txt',
                        content: 'i am txt label'
                    });
                }
            }
        }
    };
</script>

<style lang="less" scoped>
    .create-label {
        h2 {
            margin-bottom: .2rem;
        }
        .imgBox, .txtBox {
            width: 3rem;
            height: .5rem;
            border: 1px solid #ddd;
            margin: 0 auto;
            margin-bottom: .1rem;
        }
        .txtBox {
            p {
                height: 100%;
            }
            line-height: .5rem;
        }
        .create-btn {
            display: flex;
            height: .3rem;
            align-items: center;
            span {
                flex: 1;
                color: #f99;
                font-size: .16rem;
            }
        }
    }

</style>
