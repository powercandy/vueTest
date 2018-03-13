<template>
    <div class="">
        <page-list :listArray="listArray" :title="title"></page-list>
    </div>
</template>

<script>
    import pageList from '@/components/common/pageList';
    import { listArray } from '@/config/list/testList.js';
    export default {
        components: {
            pageList
        },
        data() {
            return {
                listArray: listArray,
                title: 'Test-list'
            };
        }
    };
</script>
