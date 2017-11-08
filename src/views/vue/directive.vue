<template>
  <div>
      <v-header title="directive" prev="true"></v-header>
      <!-- <input type="text" v-valid="message"> -->
      <form v-valid="['required', 'mobile']"></form>
      <ButtonNav type="red">
         <span slot="btn">点击</span>
      </ButtonNav>  
  </div>
</template>
<script>
import ButtonNav from '@/components/common/button.vue';
export default {
    data () {
        return {
            // message: '1'
        };
    },
    components: {
        ButtonNav
    }
};
</script>
