<template>
    <div class="iview-page">
        <router-view></router-view>
    </div>
</template>

<script>
    import pageList from '@/components/common/pageList';
    import { listArray } from '@/config/list/iviewList.js';
    export default {
        name: 'iview',
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
