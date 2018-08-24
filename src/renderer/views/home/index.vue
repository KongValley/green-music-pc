<template>
  <div class="wrapper">
    <title-bar title-color="green"></title-bar>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar/index.vue'
export default {
  name: 'home',
  data () {
    return {

    }
  },
  components: {
    TitleBar
  }
}
</script>

<style lang="scss" scoped>
@import'@/styles/variables.scss';
.bg{
  width: 100%;
  height: 100%;
  background-color: $white;
}
</style>
