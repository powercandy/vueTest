<template>
    <div class="money-page">
        <v-header title="隐藏金额" prev="true"></v-header>
        <form class="money-box">
            <input type="text" name="money" v-model="money" placeholder="请输入金额">
            <p>{{money | hideMoney}}</p>
        </form>
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