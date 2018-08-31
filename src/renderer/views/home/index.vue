<template>
<div class="wrapper">
  <title-bar 
    :title-color="themeColor"></title-bar>
  <div class="login-container">
    <el-form 
      :inline="true"
      :label-position="labelPosition"
      label-width="50px"
      :model="userForm">
      <el-form-item label="账号">
        <el-input v-model="userForm.userEmail" placeholder="你的账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="userForm.password" placeholder="你的密码" class="pwd-input"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button @click="onSubmit">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
import TitleBar from '@/components/TitleBar/index.vue'
export default {
  name: 'home',
  data () {
    return {
      labelPosition: 'right',
      userForm: {
        userEmail: '',
        password: ''
      }
    }
  },
  components: {
    TitleBar
  },
  computed: {
    themeColor () {
      return this.$store.getters.themeColor
    }
  }
}
</script>
<style lang="scss">
$bg:#2d3a4b;
.login-container {
  .el-input {
    display: inline-block;
    input {
      background: transparent;
      border: 0;
      padding: 0px;
      padding-left: 10px;
      color: #fff;
      font-size: 14px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
      &::-webkit-input-placeholder {
        /* WebKit, Blink, Edge */
        color: #fff;
      }
    }
  }
  .el-form-item {
    border: 2px solid rgba(255, 255, 255, 1);
    background: transparent;
    border-radius: 5px;
    .el-form-item__label{
      color: white;
      border-right: 2px solid white;
    }
  }
}
</style>



<style lang="scss" scoped>
@import'@/styles/variables.scss';
.login-container {
  position: fixed;
  top: 50%;
  left: 50%;
  background: transparent;
  border-radius: 10px;
  width: 250px;
  height: 150px;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
}
</style>
