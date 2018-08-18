<template>
    <div>
        <el-row class="title-contain">
            <el-col :span="8" >
                <div class="title-empty"></div>
            </el-col>
            <el-col :span="8" class="ft-20">
                Music
            </el-col>
            
            <el-col :span="8" class="title-btn ft-18">
                <svg-icon icon-class="fish" class-name="btn-cell"></svg-icon>
                <svg-icon icon-class="crayfish" class-name="btn-cell"></svg-icon>
                <svg-icon icon-class="crab" class-name="btn-cell"></svg-icon>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import'@/styles/variables.scss';
.title-contain{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: $white;
    -webkit-app-region: drag;
}
.title-btn{
    text-align: right;
    padding-right: 20px;
}

.title-empty{
    min-height: 20px;
}

.btn-cell{
    padding-right: 5px;
    &:last-child{
        padding-right: 0px;
    }
}
</style>
