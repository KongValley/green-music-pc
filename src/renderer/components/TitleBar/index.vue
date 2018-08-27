<template>
    <div :class="titleClass">
        <el-row class="title-contain">
            <el-col :span="8" >
                <div class="title-empty"></div>
            </el-col>
            <el-col :span="8" class="ft-20">
                Music
            </el-col>
            <el-col :span="8" class="title-btn ft-20">
              <!-- 由于svg的点击时间需要鼠标点击到svg的线条上面 -->
              <!-- 所以会造成click事件不敏感 -->
              <!-- 可以在svg加层div，把click事件绑定在div上 -->
              <div v-for="button in buttons" :key="button" @click="sendMessage(button)" class="buttons">
                <svg-icon :icon-class="button" class-name="btn-cell"></svg-icon>
              </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      buttons: ['min', 'max', 'close']
    }
  },
  props: {
    titleColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    titleClass () {
      if (this.titleColor) {
        return 'title-wrap-' + this.titleColor
      }
    }
  },
  methods: {
    sendMessage (type) {
      console.log(type)
      this.$electron.ipcRenderer.send(type)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.title-contain {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: $white;
  -webkit-app-region: drag;
}
.title-btn {
  text-align: right;
} 

.title-empty {
  min-height: 20px;
}

.buttons{
  display: inline-block;
}

.btn-cell {
  padding-right: 5px;
  padding-left: 5px;
  min-width: 20px;
  min-height: 30px;
  -webkit-app-region: no-drag;
  &:hover {
    background-color: transparent;
    background-color: rgba(0, 0, 0, 0.25); 
  }
}
</style>
