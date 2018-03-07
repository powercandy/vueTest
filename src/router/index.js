import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const Hello = r => require.ensure([], () => r(require('@/views/Hello')));

/* test测试页路由 */

const Login = r => require.ensure([], () => r(require('@/views/test/login')));

const Index = r => require.ensure([], () => r(require('@/views/test/index')));

const Select = r => require.ensure([], () => r(require('@/views/test/select')));

const cordovaCamera = r => require.ensure([], () => r(require('@/views/test/cordovaCamera')));

const cordovaGps = r => require.ensure([], () => r(require('@/views/test/cordovaGps')));

const popup = r => require.ensure([], () => r(require('@/views/test/popup')));

const suggest = r => require.ensure([], () => r(require('@/views/test/suggestdemo')));

const createLabel = r => require.ensure([], () => r(require('@/views/test/createLabel')));

const hideMoney = r => require.ensure([], () => r(require('@/views/test/hideMoney')));

const insertMd = r => require.ensure([], () => r(require('@/views/test/insertMd')));

const tabbar = r => require.ensure([], () => r(require('@/views/test/tabbar')));

const checkboxIview = r => require.ensure([], () => r(require('@/views/test/checkboxIview')));

/* Music路由 */

const music = r => require.ensure([], () => r(require('@/views/music')));

const recommend = r => require.ensure([], () => r(require('@/views/music/recommend')));

const disc = r => require.ensure([], () => r(require('@/views/music/disc')));

const singer = r => require.ensure([], () => r(require('@/views/music/singer')));

const rank = r => require.ensure([], () => r(require('@/views/music/rank')));

const search = r => require.ensure([], () => r(require('@/views/music/search')));

const user = r => require.ensure([], () => r(require('@/views/music/user')));

/* Vue-指令测试页路由 */

const vueIndex = r => require.ensure([], () => r(require('@/views/vue/index')));

const list = r => require.ensure([], () => r(require('@/views/vue/list')));

const directive = r => require.ensure([], () => r(require('@/views/vue/directive')));

const apiTest = r => require.ensure([], () => r(require('@/views/vue/apiTest')));

const swipeout = r => require.ensure([], () => r(require('@/views/vue/swipeout')));

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/test'
        },
        /* 登录页面 */
        {
            path: '/login',
            name: 'login',
            meta: {
                title: 'login'
            },
            component: Login
        },
        /* vue欢迎页面 */
        {
            path: '/hello',
            name: 'Hello',
            meta: {
                title: 'Hello'
            },
            component: Hello
        },
        /* vue测试页 */
        {
            path: '/test',
            name: 'Test',
            meta: {
                title: 'Test'
            },
            component: Index,
            children: []
        },
        /* 如何获取选择框里的值 */
        {
            path: '/select',
            name: 'Select',
            component: Select
        },
        /* 测试页1- cordova插件camera测试 */
        {
            path: '/cordovaCamera',
            name: 'cordovaCamera',
            component: cordovaCamera
        },
        /* 测试页2 - cordova插件geolocation测试 */
        {
            path: '/cordovaGps',
            name: 'cordovaGps',
            component: cordovaGps
        },
        /* 测试页2 - 弹窗测试 */
        {
            path: '/popup',
            name: 'popup',
            component: popup
        },
        /* 测试页2 - 意见反馈测试 */
        {
            path: '/suggest',
            name: 'suggest',
            component: suggest
        },
        /* 测试页2 - 新建标签测试 */
        {
            path: '/createLabel',
            name: 'createLabel',
            component: createLabel
        },
        /* 测试页2 - 隐藏金额 */
        {
            path: '/hideMoney',
            name: 'hideMoney',
            component: hideMoney
        },
        /* 测试页2 - 插入MarkDwon */
        {
            path: '/insertMd',
            name: 'insertMd',
            component: insertMd
        },
         /* 测试页2 - tabbar */
        {
            path: '/tabbar',
            name: 'tabbar',
            component: tabbar
        },
         /* 测试页2 - checkboxIview */
        {
            path: '/checkboxIview',
            name: 'checkboxIview',
            component: checkboxIview
        },
        /* 测试页2 - Music */
        {
            path: '/music',
            name: 'Home',
            component: music,
            children: [
                {
                    path: '/music/recommend',
                    name: 'recommend',
                    component: recommend,
                    children: [
                        {
                            path: ':id',
                            component: disc
                        }
                    ]
                },
                {
                    path: '/music/singer',
                    name: 'singer',
                    component: singer
                },
                {
                    path: '/music/rank',
                    name: 'rank',
                    component: rank
                },
                {
                    path: '/music/search',
                    name: 'search',
                    component: search
                },
                {
                    path: '/music/user',
                    name: 'user',
                    component: user
                }
            ]
        },
        /* 测试页2 - Vue-demo */
        {
            path: '/vue',
            name: 'vueDemo',
            redirect: '/vue/list',
            component: vueIndex,
            children: [
                {
                    path: '/vue/list',
                    name: 'one',
                    component: list
                },
                {
                    path: '/vue/directive',
                    name: 'directive',
                    component: directive
                },
                {
                    path: '/vue/apiTest',
                    name: 'apiTest',
                    component: apiTest
                },
                {
                    path: '/vue/swipeout',
                    name: 'swipeout',
                    component: swipeout
                }
            ]
        }
    ]
});