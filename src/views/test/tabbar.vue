<template>
    <div>
        <v-header title="tabbar" prev="true"></v-header>
        <div class="tab">
            <ul>
                <li v-for="(item, index) in list" :key="index">
                    <span>{{ item }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
            };
        }
    };
</script>
