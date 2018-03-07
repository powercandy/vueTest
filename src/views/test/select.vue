<template>
	<div class="select-page">
        <v-header title="选择框如何选中" prev="true"></v-header>   
        <p>1.选择框如何选择</p>
        <p>2.input框过滤非数字字符</p>
        <section>
            <form action="">
                <select v-model="selecValue" @change="isOptions">
                    <option v-for="(item, index) in list" :key="index">{{item.a}}</option>
                </select>
            </form>
            <p class="font-16">选择框的值为：<em>{{selecValue}}</em></p>
            <ul v-show="isSelected">
                <li v-for="(item,index) in list" :key="index" @click="closeList" :class="{[`list1${index}`]: true}">{{item.a}}</li>
            </ul>
            <label>
                <p>输入框限制：只允许输入数字</p>
                <input type="text" name="number" v-model="iphone" @input="regNum($event)" maxlength="4">
            </label>
        </section>
	</div>
</template>

<script type="text/javascript">
    /* 选择框如何选中demo */
    export default {
        data() {
            return {
                list: [{'a': '123'}, {'a': '333'}, {'a': '444'}],
                selecValue: '',
                isSelected: true,
                iphone: '',
                word: 'list'
            };
        },
        mounted() {
            // 设置一个默认的初始选中项
            this.selecValue = this.list[0].a;
            // console.log(this.$root.$data.message);
        },
        methods: {
            isOptions() {
                console.log(this.selecValue);
            },
            closeList() {
                this.isSelected = false;
            },
            regNum(e) {
                this.iphone = this.iphone.replace(/\D/g, '');
            }
        },
        filter: {
            validIphone(val) {
                return val.replace(/\D/g, '');
            }
        }
    };
</script>

<style lang="less" scoped="">
    .select-page{
        height: 6.67rem;
        background: #d3d7d4;
        section {
            padding: .2rem .15rem .2rem;
            p{
                margin-top: .1rem;
                em {
                    color: #f10
                }
            }
        }
    }
</style>
