<template>
  <div class="wrapper">
    <title-bar :title-color="themeColor"></title-bar>
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
  },
  computed: {
    themeColor () {
      return this.$store.getters.themeColor
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import'@/styles/variables.scss';

</style>
