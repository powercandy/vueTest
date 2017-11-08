<template>
  <div class="test-page">
      <v-header title="vue-demo-list" prev="true" next="true"></v-header>
      <ul class="test-nav">
            <li >
                <router-link tag="span" to="/vue/directive">自定义指令测试</router-link>
            </li>
            <li>
                <router-link tag="span" to="/vue/apiTest"> 接口测试 </router-link>
            </li>
        </ul>
  </div>
</template>
