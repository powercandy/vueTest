<template>
    <div class="iview-home">
        <v-list :listArray="listArray" :title="title"></v-list>
    </div>
</template>

<script>
    import { listArray } from '@/config/list/iviewList.js';
    export default {
        data() {
            return {
                listArray: listArray,
                title: 'Iview-list'
            };
        }
    };
</script>
