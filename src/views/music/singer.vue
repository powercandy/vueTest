<template>
    <div class="singer" ref="singer">
        <list-view :data="singerList"></list-view>
    </div>
</template>

<script>
    import {ERR_OK} from '@/assets/js/music/config';
    import ListView from '~/music/listView';
    export default {
        components: {
            ListView
        },
        data() {
            return {
                singerList: []
            };
        },
        created() {
            this._getSingerList();
        },
        methods: {
            _getSingerList() {
                this.api.getSingerList().then(res => {
                    if (res.code === ERR_OK) {
                        this.singerList = res.data.list;
                    }
                });
            }
        }
    };
</script>