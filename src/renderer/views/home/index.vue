<template>
  <div class="bg">
    <title-bar></title-bar>
    <div class="bg-blur"></div>
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
.bg{
  width: 100%;
  height: 100%;
}
.bg-blur{
  position: absolute;
  width:500%;
  height:100%;
  margin-left:-150%;
  top:-10px;
  background: url('../../assets/back.png') no-repeat center center fixed;
  filter: blur(400px);
  z-index: -1;
}
</style>
