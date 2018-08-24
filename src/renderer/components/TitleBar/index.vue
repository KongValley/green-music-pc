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
                <svg-icon icon-class="min" class-name="btn-cell" @click="sendMessage('window-min')"></svg-icon>
                <svg-icon icon-class="max" class-name="btn-cell" @click="sendMessage('window-max')"></svg-icon>
                <svg-icon icon-class="close" class-name="btn-cell" @click="sendMessage('window-close')"></svg-icon>
            </el-col>
        </el-row>
    </div>
</template>

<script>
const {ipcRenderer: ipc} = require('electron')

export default {
  name: '',
  data () {
    return {}
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
    sendMessage: function (type) {
      ipc.send('window-close')
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
  padding-right: 20px;
}

.title-empty {
  min-height: 20px;
}

.btn-cell {
  margin-right: 5px;
  -webkit-app-region: no-drag;
  &:last-child {
    margin-right: 0px;
  }
  &:hover {
      color: $light-red;
    opacity: 0.5;
  }
}
</style>
