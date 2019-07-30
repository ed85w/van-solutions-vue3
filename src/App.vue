<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view class="view one"></router-view>
    <router-view class="view two" name="pageFooter"></router-view>
  </div>
</template>

<script>

import appNavbar from './components/AppNavbar.vue'

export default {
  components: {
    'app-navbar': appNavbar,
  }
  
}
</script>
