<template>
  <div id="app">
    <title-bar></title-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar/index.vue'
export default {
  name: 'green-music-pc',
  components: {
    TitleBar
  }
}
</script>

<style lang="scss" scoped>

</style>
