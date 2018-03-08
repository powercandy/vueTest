<template lang="html">
  <form-item>
      <select-ie v-model="data.value" @on-change="getIndex" style="width: 100px;">
          <option-ie :value="item.value" v-for="(item, n) in data.data" :key="n"></option-ie>
      </select-ie>
  </form-item>
</template>

<script>
import { FormItem, Select, Option } from 'iview';
export default {
    name: 'formdata',
    props: ['data', 'dataIndex'],
    components: {
        FormItem,
        selectIe: Select,
        optionIe: Option
    },
    methods: {
        getIndex(val) {
            console.log(val);
            this.$emit('change', this.dataIndex);
        }
    }
};
</script>

<style lang="css">
</style>
