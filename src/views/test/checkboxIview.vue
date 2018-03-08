<template>
    <div class="checkbox-page">
         <v-header title="checkboxIview" prev="true"></v-header>
         <CheckboxGroup class="checkbox-group" @on-change="getId" v-model="arr">
             <Checkbox  v-for="(item, index) in list" :key="index" :label="item.label"></Checkbox>
         </CheckboxGroup>
         <div>
             <button @click="findId">点击</button>
         </div>
         <div>
            <form-ie>
                <form-item v-for="(i,index) in propList" :key="index" :prop="i.prop">
                    <select-ie v-model="i.model" @on-change="getIndex" element-id="index">
                        <option-ie :value="item.label" v-for="(item, n) in list" :key="n"></option-ie>
                    </select-ie>
                </form-item>
            </form-ie> 
         </div>
    </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Select, Option, Form, FormItem } from 'iview';
export default {
    data() {
        return {
            str: '星期一',
            arr: ['星期一'],
            list: [
                {
                    label: '星期一',
                    id: '1'
                },
                {
                    label: '星期二',
                    id: '2'
                },
                {
                    label: '星期三',
                    id: '3'
                },
                {
                    label: '星期四',
                    id: '4'
                },
                {
                    label: '星期五',
                    id: '5'
                },
                {
                    label: '星期六',
                    id: '6'
                },
                {
                    label: '星期日',
                    id: '7'
                }
            ],
            propList: [{prop: 'people', model: '星期一'}, {prop: 'student', model: '星期一'}]
        };
    },
    components: {
        Checkbox,
        CheckboxGroup,
        selectIe: Select,
        optionIe: Option,
        formIe: Form,
        formItem: FormItem
    },
    methods: {
        getId(e) {
            // console.log(e);
            console.log(this.arr);
        },
        findId() {
            let arrId = [];
            this.arr.forEach((value) => {
                this.list.forEach(item => {
                    if (item.label === value) {
                        arrId.push(item.id);
                    }
                });
            });
            console.log(arrId);
        },
        getIndex(val, index) {
            console.log(val);
            this.c();
        }
    }
};
</script>

<style lang="less" scoped>
.checkbox-page {
    font-size: .2rem;
}
.checkbox-group {
    font-size: .8rem;
    padding: 5%;
}
</style>

