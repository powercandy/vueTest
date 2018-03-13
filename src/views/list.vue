<template>
    <div class="">
        <page-list :listArray="listArray"></page-list>
    </div>
</template>

<script>
    import pageList from '@/components/common/pageList';
    import { listArray } from '@/config/list/home.js';
    export default {
        components: {
            pageList
        },
        data() {
            return {
                listArray: listArray
            };
        }
    };
</script>
