import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const Hello = r => require.ensure([], () => r(require('@/views/Hello')));

const listView = r => require.ensure([], () => r(require('@/views/list')));

/* test测试页路由 */

const testLogin = r => require.ensure([], () => r(require('@/views/test/login')));

const testIndex = r => require.ensure([], () => r(require('@/views/test/index')));

const testList = r => require.ensure([], () => r(require('@/views/test/list')));

const testSelect = r => require.ensure([], () => r(require('@/views/test/select')));

const testPopup = r => require.ensure([], () => r(require('@/views/test/popup')));

const testUploadPic = r => require.ensure([], () => r(require('@/views/test/uploadPic')));

const testCreateLabel = r => require.ensure([], () => r(require('@/views/test/createLabel')));

const testHideMoney = r => require.ensure([], () => r(require('@/views/test/hideMoney')));

const testTabbar = r => require.ensure([], () => r(require('@/views/test/tabbar')));

/* Cordova路由 */

const cordova = r => require.ensure([], () => r(require('@/views/cordova/index')));

const cordovaList = r => require.ensure([], () => r(require('@/views/cordova/list')));

const cordovaCamera = r => require.ensure([], () => r(require('@/views/cordova/camera')));

const cordovaGps = r => require.ensure([], () => r(require('@/views/cordova/gps')));

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

const vueList = r => require.ensure([], () => r(require('@/views/vue/list')));

const vueDirective = r => require.ensure([], () => r(require('@/views/vue/directive')));

const vueApiTest = r => require.ensure([], () => r(require('@/views/vue/apiTest')));

const vueSmTest = r => require.ensure([], () => r(require('@/views/vue/smTest')));

/* iview 组件测试demo */

const iview = r => require.ensure([], () => r(require('@/views/iview/index')));

const iviewList = r => require.ensure([], () => r(require('@/views/iview/list')));

const iviewCheckBox = r => require.ensure([], () => r(require('@/views/iview/checkbox')));

const iviewSelect = r => require.ensure([], () => r(require('@/views/iview/select')));

const iviewUpload = r => require.ensure([], () => r(require('@/views/iview/upload')));

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: listView
        },
        {
            path: '*',
            redirect: {
                path: '/'
            }
        },
        {
            path: '/test',
            component: testIndex,
            children: [
                {
                    path: '',
                    component: testList
                },
                {
                    path: '/test/login',
                    name: 'test-login',
                    component: testLogin
                },
                {
                    path: '/test/createLable',
                    name: 'test-createLable',
                    component: testCreateLabel
                },
                {
                    path: '/test/hideMoney',
                    name: 'test-hideMoney',
                    component: testHideMoney
                },
                {
                    path: '/test/popup',
                    name: 'test-popup',
                    component: testPopup
                },
                {
                    path: '/test/select',
                    name: 'test-select',
                    component: testSelect
                },
                {
                    path: '/test/tabbar',
                    name: 'test-tabbar',
                    component: testTabbar
                },
                {
                    path: '/test/uploadPic',
                    name: 'test-uploadPic',
                    component: testUploadPic
                }
            ]
        },
        /* vue欢迎页面 */
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
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
            component: vueIndex,
            children: [
                {
                    path: '/',
                    component: vueList
                },
                {
                    path: '/vue/directive',
                    component: vueDirective
                },
                {
                    path: '/vue/apiTest',
                    component: vueApiTest
                },
                {
                    path: '/vue/smTest',
                    component: vueSmTest
                }
            ]
        },
        /* iview组件demo页面 */
        {
            path: '/iview',
            component: iview,
            children: [
                {
                    path: '/',
                    name: 'iview-list',
                    component: iviewList
                },
                {
                    path: '/iview/checkbox',
                    name: 'iview-checkbox',
                    component: iviewCheckBox
                },
                {
                    path: '/iview/select',
                    name: 'iview-select',
                    component: iviewSelect
                },
                {
                    path: '/iview/upload',
                    name: 'iview-upload',
                    component: iviewUpload
                }
            ]
        },
        {
            path: '/cordova',
            component: cordova,
            children: [
                {
                    path: '/',
                    component: cordovaList,
                    name: 'cordova-list'
                },
                /* 测试页1- cordova插件camera测试 */
                {
                    path: '/cordova/camera',
                    name: 'cordovaCamera',
                    component: cordovaCamera
                },
                /* 测试页2 - cordova插件geolocation测试 */
                {
                    path: '/cordova/gps',
                    name: 'cordovaGps',
                    component: cordovaGps
                }
            ]
        }
    ]
});
