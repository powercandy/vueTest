<template>
  <div>
      <slot  ref="btn" v-color="type" name="btn">
      </slot>
  </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: ['type'],
    mounted() {
        // console.log(this.type);
        // this.$refs.btn.style.color = this.type;
    }
};
</script>

