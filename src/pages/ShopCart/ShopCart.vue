<template>
  <div class="Physical">
    <div class="Wrap">
      <header class="header">
        <span class="left">购物车</i></span>
        <span class="Right">领劵</span>
      </header>
      <div class="content">
        <div class="Servesafety">
          <span class="text">
            <span> 网易自营品牌 </span>
            <span>0天无忧退货</span>
            <span>48小时快速退款</span>
          </span>
        </div>
        <div class="main">
          <i class="iconfont icon-iconfontgouwuche"></i>
          <button  @click="$router.push('/login')">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name:'Physical',
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'

.Physical
  width 100%
  .Wrap
    height 25px
    width 100%
    .header
      height 25px
      width 100%
      margin-top 20px
      padding-bottom 10px
      .left
        float left
        font-size 22px
        margin-left 10px
      .Right
        float right 
        color #b4282d
        margin-right 10px
        font-size 18px
    .content
      height 300px
      width 100%
      background #eee
      .Servesafety
        width 100%
        height 100%
      .text
        font-size 12px
        height 100%
        width 100%
        line-height 36px
        margin 0 10%
        span 
          margin-right 30px
      .main
        height 100%
        width 100%
        background #eee
        text-align center
</style>
