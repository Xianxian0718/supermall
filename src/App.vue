<template>
  <div id="app" class="wrapper">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar.vue'
export default {
  name: 'App',
  components: {
    MainTabBar,
  }
}
</script>

<style>
  /* @import url('./assets/css/base'); */
</style>
