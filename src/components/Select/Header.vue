<template>
  <div class="SelectHeader">
    <div class="Wrap">
      <header class="header">
        <span class="left"><i class="iconfont icon-shouye" @click="$router.push('/home')"></i></span>
        <div class="middle">
          <a  @click="$router.push('/things')">发现</a>
          <a class="Select Find">甄选家</a>
        </div>
        <span class="Right">
          <i class="iconfont icon-search"></i>
          <i class="iconfont icon-iconfontgouwuche"></i>
        </span>
      </header>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'

.SelectHeader
  height 100%
  width 100%
  .Wrap
    height 25px
    position relative
    width 100%
    position fixed !important
  .header
    height 25px
    width 100%
    margin-top 20px
    padding-bottom 10px
    display flex
    color #7F7F7F
    border-bottom 2px solid #7F7F7F
    z-index 100
    .left
      padding-left 5%
      .iconfont
        font-size 22px
    .middle
      padding 0 18%
      font-size 17px
      .Find
        color #b4282d
        font-size 24px
        font-weight bold
        margin-left 10px
    .Right
      padding-left 3%
      .iconfont
        font-size 22px
 
</style>
