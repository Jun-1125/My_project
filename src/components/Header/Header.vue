<template>
  <div class="Header">
    <header class="header">
      <span class="left"><i class="iconfont icon-shouye" @click="$router.push('/home')"></i></span>
      <div class="middle">
        <a class="Select">网易严选</a>
      </div>
      <span class="Right">
          <i class="iconfont icon-search"></i>
          <i class="iconfont icon-iconfontgouwuche"></i>
      </span>
    </header>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      name:'Header'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'

.Header
  height 100%
  width 100%
  .header
    height 25px
    width 100%
    margin-top 20px
    padding-bottom 10px
    .left
      padding-left 5%
      display inline-block
      .iconfont
        font-size 25px
    .middle
      padding 0 20%
      display inline-block
      .Select
        font-size 19px
        font-weight bold
    .Right
      display inline-block
      padding-left 5%
      .iconfont
        font-size 25px
 
</style>
