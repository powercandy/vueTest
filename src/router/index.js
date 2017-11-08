import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/music/recommend'
        },
        /* 登录页面 */
        {
            path: '/login',
            name: 'login',
            meta: {
                title: 'login'
            },
            component(r) {
                require.ensure([], () => r(require('@/views/test/login')));
            }
        },
        /* vue欢迎页面 */
        {
            path: '/hello',
            name: 'Hello',
            meta: {
                title: 'Hello'
            },
            component(r) {
                require.ensure([], () => r(require('@/views/Hello')));
            }
        },
        /* vue测试页 */
        {
            path: '/test',
            name: 'Test',
            meta: {
                title: 'Test'
            },
            component(r) {
                require.ensure([], () => r(require('@/views/test/index')));
            },
            children: []
        },
        /* 如何获取选择框里的值 */
        {
            path: '/select',
            name: 'Select',
            component(r) {
                require.ensure([], () => r(require('@/views/test/select')));
            }
        },
        /* 测试页1- cordova插件camera测试 */
        {
            path: '/cordovaCamera',
            name: 'cordovaCamera',
            component(r) {
                require.ensure([], () => r(require('@/views/test/cordovaCamera')));
            }
        },
        /* 测试页2 - cordova插件geolocation测试 */
        {
            path: '/cordovaGps',
            name: 'cordovaGps',
            component(r) {
                require.ensure([], () => r(require('@/views/test/cordovaGps')));
            }
        },
        /* 测试页2 - 弹窗测试 */
        {
            path: '/popup',
            name: 'popup',
            component(r) {
                require.ensure([], () => r(require('@/views/test/popup')));
            }
        },
        /* 测试页2 - 意见反馈测试 */
        {
            path: '/suggest',
            name: 'suggest',
            component(r) {
                require.ensure([], () => r(require('@/views/test/suggestDemo')));
            }
        },
        /* 测试页2 - 新建标签测试 */
        {
            path: '/createLabel',
            name: 'createLabel',
            component(r) {
                require.ensure([], () => r(require('@/views/test/createLabel')));
            }
        },
        /* 测试页2 - 隐藏金额 */
        {
            path: '/hideMoney',
            name: 'hideMoney',
            component(r) {
                require.ensure([], () => r(require('@/views/test/hideMoney')));
            }
        },
        /* 测试页2 - 插入MarkDwon */
        {
            path: '/insertMd',
            name: 'insertMd',
            component(r) {
                require.ensure([], () => r(require('@/views/test/insertMd')));
            }
        },
        /* 测试页2 - Music */
        {
            path: '/music',
            name: 'Home',
            component(r) {
                require.ensure([], () => r(require('@/views/music')));
            },
            children: [
                {
                    path: '/music/recommend',
                    name: 'recommend',
                    component(r) {
                        require.ensure([], () => r(require('@/views/music/recommend')));
                    }
                },
                {
                    path: '/music/singer',
                    name: 'singer',
                    component(r) {
                        require.ensure([], () => r(require('@/views/music/singer')));
                    }
                },
                {
                    path: '/music/rank',
                    name: 'rank',
                    component(r) {
                        require.ensure([], () => r(require('@/views/music/rank')));
                    }
                },
                {
                    path: '/music/search',
                    name: 'search',
                    component(r) {
                        require.ensure([], () => r(require('@/views/music/search')));
                    }
                },
                {
                    path: '/music/user',
                    name: 'user',
                    component(r) {
                        require.ensure([], () => r(require('@/views/music/user')));
                    }
                }
            ]
        },
        /* 测试页2 - Vue-demo */
        {
            path: '/vue',
            name: 'vueDemo',
            redirect: '/vue/list',
            component(r) {
                require.ensure([], () => r(require('@/views/vue/index')));
            },
            children: [
                {
                    path: '/vue/list',
                    name: 'one',
                    component(r) {
                        require.ensure([], () => r(require('@/views/vue/list')));
                    }
                },
                {
                    path: '/vue/directive',
                    name: 'directive',
                    component(r) {
                        require.ensure([], () => r(require('@/views/vue/directive')));
                    }
                },
                {
                    path: '/vue/apiTest',
                    name: 'apiTest',
                    component(r) {
                        require.ensure([], () => r(require('@/views/vue/apiTest')));
                    }
                }

            ]
        }
    ]
});