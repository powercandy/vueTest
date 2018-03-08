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
            <form-ie class="flow-flex" v-for="(v, x) in arrList" :key="x">
                <formData v-for="(i,index) in v.value" :data="i" :key="i.value" @change="getIndex" :dataIndex="v.id"></formData>
            </form-ie>
         </div>
    </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Select, Option, Form, FormItem } from 'iview';
import formData from '@/components/formItem.vue';
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
            propList: [{prop: 'people', model: '星期一'}, {prop: 'student', model: '星期一'}],
            arrList: [
                {
                    id: 'one_1',
                    value: [
                        {
                            props: 'people',
                            data: [
                                {
                                    value: 'one',
                                    id: '1'
                                },
                                {
                                    value: 'two',
                                    id: '2'
                                }
                            ],
                            value: 'one'
                        },
                        {
                            props: 'role',
                            data: [
                                {
                                    value: 'abc',
                                    id: '1'
                                },
                                {
                                    value: 'def',
                                    id: '2'
                                }
                            ],
                            value: 'abc'
                        }
                    ]
                },
                {
                    id: 'one_2',
                    value: [
                        {
                            props: 'people',
                            data: [
                                {
                                    value: 'one',
                                    id: '1'
                                },
                                {
                                    value: 'two',
                                    id: '2'
                                }
                            ],
                            value: 'one'
                        },
                        {
                            props: 'role',
                            data: [
                                {
                                    value: 'abc',
                                    id: '1'
                                },
                                {
                                    value: 'def',
                                    id: '2'
                                }
                            ],
                            value: 'abc'
                        }
                    ]
                }
            ]
        };
    },
    components: {
        Checkbox,
        CheckboxGroup,
        selectIe: Select,
        optionIe: Option,
        formIe: Form,
        formItem: FormItem,
        formData
    },
    methods: {
        getId(e) {
            // console.log(e);
            // console.log(this.arr);
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
        getIndex(index) {
            console.log(index);
            // console.log(this);
            // this.c();
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
.flow-flex {
    display: flex;
}
</style>
