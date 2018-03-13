<template>
    <div class="cordova-list">
        <v-list :listArray="listArray" :title="title"></v-list>
    </div>
</template>

<script>
    import { listArray } from '@/config/list/cordovaList.js';
    export default {
        name: 'cordova-list',
        data() {
            return {
                listArray: listArray,
                title: 'Cordova-list'
            };
        }
    };
</script>
