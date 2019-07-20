<template>
  <div class="Personal">
    <div class="Wrap">
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
      <div class="content">
        <div class="ContentTop">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div>
          <button @click="$router.push('/login')">
            <i class="iconfont"></i>
            <span>手机号码登录</span>
          </button>
          <button @click="$router.push('/login')">
            <i class="iconfont"></i>
            <span>邮箱账号登录</span>
          </button>
          <span @click="$router.push('/login')">手机号码快捷注册</span>
        </div>
      </div>
      <footer>
        <span><i class="iconfont"></i>微信</span>
        <span>|<i class="iconfont"></i>QQ|</span>
        <span><i class="iconfont"></i>微博</span>
      </footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'Personal',
    data(){
      return{

      }
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'

.Personal
  width 100%
  .Wrap
    height 25px
    width 100%
    .header
      height 25px
      width 100%
      margin-top 20px
      padding-bottom 10px
      display flex
      font-size 22px
      .left
        padding-left 5%
      .middle
        padding 0 20%
      .Right
        padding-left 5%
    .content
      height 312px
      width 100%
      background-color #eee
      .ContentTop
        height 100px
        width 100%
        img 
          height 24px
          width 70px
</style>
