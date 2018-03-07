<template>
  <div>
      <v-header title="Login" prev="true"></v-header>
      <form action="/api/login" class="entry-box">
          <label for="">
              <span>用户名：</span>
              <input type="text" name="account" v-model="account" placeholder="请输入账号">
          </label>
          <label for="">
              <span>密 码：</span>
              <input type="password" name="password" v-model="password" placeholder="请输入密码">
          </label>
          <label for="" style="text-align: center">
              <input type="button" value="登录" @click="goIndex">
          </label>
      </form>
      
  </div>
</template>

<script>
export default {
    data() {
        return {
            account: '',
            password: ''
        };
    },
    methods: {
        goIndex () {
            const data = {
                account: this.account,
                password: this.password
            };
            this.api.goLogin(data).then(res => {
                console.log(res);
                // console.assert(res.data.code === '000', '登录验证失败！');
                // if (res.data.code === '000') {
                //     console.log('登录成功！');
                //     // setTimeout(() => {
                //     //     this.$router.push('/');
                //     // }, 1500);
                // } else {
                //     console.log(res.data.msg);
                // }
            });
        }
    }
};
</script>

<style lang="less" scoped>
    .entry-box {
        padding-top: .2rem;
        label {
            display: block;
        }
        span {
            display: inline-block;
            width: 20%;
            text-align: center;
        }
        input[type='text'], input[type='password'] {
            width: 70%;
            height: .3rem;
            margin-top: .1rem;
            padding-left: .1rem;
            border: 1px solid #ddd;
            border-radius: 5%;
        }
        input[type='button'] {
            display: inline-block;
            width: 60%;
            height: .3rem;
            margin-top: .3rem;
            border: 1px solid #ddd;
            background-color: #f1f1f1;
            color: #000;
        }
    }
    
</style>


