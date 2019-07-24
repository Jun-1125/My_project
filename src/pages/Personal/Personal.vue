<template>
  <div class="Personal">
    <Header/>
    <div class="content">
      <div class="ContentTop">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="Login">
        <button class="btn active" @click="$router.push('/login')">
          <i class="iconfont icon-phone"></i>
          <span>手机号码登录</span>
        </button>
        <button class="btn" @click="$router.push('/emaillogin')">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱账号登录</span>
        </button>
        <span class="Iphone" @click="$router.push('/registered')">手机号码快捷注册></span>
      </div>
      <footer class="footer">
        <span><i class="iconfont icon-xiangmulan-weixinhao"></i>微信</span>
        <span>|</span>
        <span><i class="iconfont icon-icon5"></i>QQ</span>
        <span>|</span>
        <span><i class="iconfont icon-weibo"></i>微博</span>
      </footer>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '../../components/Header/Header.vue'
  export default {
    name:'Personal',
    components:{
      Header
    },
    data(){
      return{
        loginType:false
      }
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'

.Personal
  height 100%
  width 100%
  overflow hidden
  position fixed
  .content
    height 100%
    width 100%
    background-color #eee
    position absolute
    .ContentTop
      height 100%
      width 10%
      line-height 40px
      text-align center
      position absolute
      top 60px
      left 30%
      img 
        height 40px
        width 128px
    .Login
      height 75px
      position absolute
      top 150px
      left 15%
      bottom 100px
      display flex
      flex-direction column
      width 100%
      .btn
        width 280px
        height 30px
        margin-bottom 20px
        border 1px solid #b4282d
        color #b4282d
        background #fff
        &.active
          background #b4282d
          color #fff
      .Iphone
        color #333
        font-size 16px
        text-align center 
        width 70%
    .footer
      position absolute
      left 0
      bottom 80px
      left 20%
      color #979797
      span
        margin-left 10px
        .iconfont
          margin-right 6px
</style>
