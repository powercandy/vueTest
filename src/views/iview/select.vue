<template>
    <div class="checkbox-page">
         <v-header title="selectIview" prev="true"></v-header>
         <div class="wrapper">
         </div>
    </div>
</template>

<script>
import { Select, Option, Form, FormItem } from 'iview';
import { selectData } from '@/config/test/data.js';
export default {
    name: 'iview-select',
    data() {
        return {
            arrList: selectData
        };
    },
    components: {
        selectIe: Select,
        optionIe: Option,
        formIe: Form,
        formItem: FormItem
    },
    methods: {
    }
};
</script>

<style lang="less" scoped>
.flow-flex {
    display: flex;
}
</style>
