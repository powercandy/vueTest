<template>
    <scroll class="list-view">
        <ul>
            <li class="list-group">
                <h2 class="list-group-title font-12">热门</h2>
                <ul>
                    <li class="list-group-item">
                        <img class="avatar" src="https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000" alt="">
                        <span class="name font-14">薛之谦</span>
                    </li>
                    <li class="list-group-item">
                        <img class="avatar" src="https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000" alt="">
                        <span class="name font-14">薛之谦</span>
                    </li>
                    <li class="list-group-item">
                        <img class="avatar" src="https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000" alt="">
                        <span class="name font-14">薛之谦</span>
                    </li>
                </ul>
            </li>  
        </ul>
    </scroll>
</template>

<script>
import Scroll from './scroll';
export default {
    name: 'ListView',
    components: {
        Scroll
    },
    props: {
        data: {
            type: Array,
            default: []
        }
    },
    computed: {
        // shortcutList() {
        //     const shortcut = this.data.map(v =>
        //         v.title.substr(0, 1)
        //     );
        // }
    },
    watch: {
        data() {
            console.log(this.data);
        }
    }
};
</script>

<style lang="scss"> 
    .list-group-item {
        display: flex;
        align-items: center;
        padding: .2rem 0 0 .3rem;
        .avatar {
            width: .5rem;
            height: .5rem;
            border-radius: 50%;
        }
        .name {
            margin-left: .2rem;
            color: rgba(255, 255, 255, .5);
        }
    }
    .list-group-title {
        height: .3rem;
        line-height: .3rem;
        padding-left: .2rem;
        color: rgba(255, 255, 255, .5);
        background-color: #333;
    }
</style>


