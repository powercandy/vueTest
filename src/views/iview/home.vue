<template>
    <div class="iview-home">
        <page-list :listArray="listArray"></page-list>
    </div>
</template>

<script>
    import pageList from '@/components/common/pageList';
    import { listArray } from '@/config/list/iviewList.js';
    export default {
        name: 'iview-home',
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
