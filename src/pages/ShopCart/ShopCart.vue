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
          <span class="img"></span>
          <div class="maintext">去添加点什么吧</div>
          <button class="btn" @click="$router.push('/login')">登录</button>
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
        position absolute
        top 0
        right 0
        bottom -400px
        left 0
        margin auto
        .img
          height 130px
          width 130px
          display inline-block
          vertical-align middle
          background-size 130px 130px
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png)
          background-repeat no-repeat
        .maintext
          color #999
          line-height 10px
          font-size 15px 
          margin-bottom 20px
        .btn
          height 50px
          width 260px
          color #fff
          background #b4282d
          border-radius 3px
          margin auto
</style>
