// author xiaofan
// create time 2017-9-9 17:12
// description study knowledge of vue

import Vue from 'vue';
import router from './router';

// 引入iview
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
// Vue.use(iView);

/* 按需引入iview */
import 'iview/dist/styles/iview.css';

import valid from '@/assets/js/valid';
Vue.use(valid);

/* 添加全局方法api */
import api from './assets/js/music/api.js';
Vue.prototype.api = api;

/* 注册header为全局组件 */
import vHeader from '@/components/common/header.vue';
Vue.component('v-header', vHeader);
import App from './App';
// Vue.use(require('vue-wechat-title'));

/* cordova 打包 */
/* eslint-disable no-new */
// document.addEventListener('deviceready', function() {
// 	new Vue({
// 		el: '#app',
// 		router,
// 		render: h => h(App)
// 	});
//     // window.navigator.splashscreen.hide();
// }, false);

// 正常开发
new Vue({
	el: '#app',
	router,
	...App,
	// render: h => h(App),
	data: {
		message: 'hello'
	}
});

