<template>
    <div>
         <v-header title="directive" prev="true"></v-header>
         <div>
            <p>something is testing</p>
         </div>
    </div>
</template>

<script>
    import testObj from '@/assets/js/vue/smTest.js';
    export default {
        data () {
            return {};
        },
        mounted() {
            console.log(testObj.name);
            console.log('%cImport引入测试', 'color: #f99; font-size: 18px; font-weight: bold;');
        }
    };
</script>