<template>
    <div class="checkbox-page">
        <v-header title="checkboxIview" prev="true"></v-header>
        <Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
            <iview-button type="ghost">upload files</iview-button>
        </Upload>
    </div>
</template>

<script>
import { Button, Upload } from 'iview';
export default {
    name: 'iview-upload',
    data() {
        return {
        };
    },
    components: {
        Upload,
        iviewButton: Button
    },
    methods: {
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
