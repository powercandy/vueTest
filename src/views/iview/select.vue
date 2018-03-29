<template>
    <div class="select-page">
         <v-header title="selectIview" prev="true"></v-header>
         <div class="wrapper">
             <select-ie @on-change="changeSelect" v-model="item">
                <option-ie value="清华"></option-ie>
                <option-ie value="哈弗"></option-ie>
             </select-ie>
             <select-ie v-model="seItem">
                <option-ie v-for="(i, index) in seList.data" :key="index" :value="i"></option-ie>
             </select-ie>
            <!-- <select v-model="item" @change="changeSelect">
                <option value="清华">清华</option>
                <option value="哈弗">哈弗</option>
            </select>
            <select v-model="seItem">
                <option v-for="(i, index) in seList.data" :key="index" :value="i">{{ i }}</option>
            </select> -->
         </div>
        <div class="component-select">
            <div class="defalut-value" @click.stop="isShowList = !isShowList">
                <span>{{defalutValue}}</span>
            </div>
            <ul class="drop-down" v-show="isShowList">
                <li @click="changeValue(value, index)" v-for="(value, index) in schoolList ">
                    <span>{{value}}</span>
                </li>
            </ul>
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
            selectData: selectData,
            item: '清华',
            seItem: '土建',
            list: [
                {
                    data: ['土建', '音乐']
                },
                {
                    data: ['neptune', 'music']
                }
            ],
            currentIndex: 0,
            isShowList: false,
            schoolList: ['清华', '哈弗', '北大'],
            schoolIndex: 0
        };
    },
    computed: {
        seList() {
            return this.list[this.currentIndex];
        },
        defalutValue() {
            return this.schoolList[this.schoolIndex];
        }
    },
    components: {
        selectIe: Select,
        optionIe: Option,
        formIe: Form,
        formItem: FormItem
    },
    methods: {
        changeSelect(val) {
            if (this.item === '清华') {
                this.currentIndex = 0;
            } else {
                this.currentIndex = 1;
            }
        },
        changeValue(v, i) {
            this.schoolIndex = i;
            this.isShowList = !this.isShowList;
        }
    }
};
</script>

<style lang="less" scoped>
.wrapper {
    padding: 5%;
    select {
        width: .8rem;
        height: .3rem;
        border: 1px solid #000;
        // appearance: none;
        // -webkit-appearance: none;
        // padding-right: .14rem;
        option {
            width: .4rem !important;
            border: none;
            background: #f99;
            width: inherit;
        }
    }
}
.component-select {
    div {
        box-sizing: border-box;
    }
}
.defalut-value {
    width: .8rem;
    height: .3rem;
    span {
        box-sizing: border-box;
        display: inline-block;
        width: inherit;
        height: inherit;
        line-height: .3rem;
        padding-left: .1rem;
        border: 1px solid #000;
    }
}
.drop-down {
    width: .8rem;
    border-width: 0px 1px 0 1px;
    border-color: #000;
    border-style: solid;
    li {
        height: .3rem;
        border-bottom: 1px solid #000;
        line-height: .3rem;
        padding-left: .1rem;
    }
}
</style>
