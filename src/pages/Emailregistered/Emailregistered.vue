<template>
  <div class="RegisteredContainer">
    <div class="Content">
      
      <!-- 邮箱登录验证 validation-->
      <div class="LoginValidation">
        <div class="Getpwd">
          <input class="input" type="tel" maxlength='11'placeholder="6-18位字母数字组合"> 
          <div class="domain">
            "@163.com"
            <i class="btn"></i>
          </div>
        </div>
        <input class="Geterror" type="password" placeholder="6-16位字母数字字符组合密码">
        <button class="btn1">点击进行验证</button>
        <button class="btn active">下一步</button>
        <span class="Rules" href="javascript:;">
          <input type="checkbox">
          用户注册即代表同意
          <a href="javascript:;">《服务条款》</a>
          和
          <a href="javascript:;">《网易隐私政策》</a>
        </span>
      </div>
     
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name:'Emailregistered',
    data(){
      return{
        phone:'',//手机号验证
        code:'',//验证码验证
        computeTime:0,//发送验证码计时剩余的时间，为0时没有计时
        isShowPwd:false//是否显示密码
      }
    },
    computed:{
      isRightPhone(){
        return/^1\d{10}$/.test(this.phone)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'

.RegisteredContainer
  width 100%
  height 100%
  .Content
    height 100%
    width 100%
    background-color #eee
    position relative
    .LoginValidation
      height 75px
      position absolute
      top 60px
      left 5%
      bottom 100px
      display flex
      flex-direction column
      width 90%
      .Getpwd
        margin-bottom 30px
        position relative
        .input 
          height 40px
          width 200px
          border solid 1px #d0d0d0
          border-radius 4px
          font-size 18px
          text-indent 16px
          line-height 40px
          border-radius 4px
        .domain
          position absolute
          right 15px
          bottom 0
          width 130px
          height 40px
          overflow hidden
          border solid 1px #d0d0d0
          border-radius 4px
          font-size 18px
          font-weight bold
          color #333
          line-height 40px
          text-align center
      .Geterror
        border solid 1px #d0d0d0
        line-height 40px
        height 40px
        border-radius 4px
        font-size 18px
        text-indent 16px
        width 340px
      .btn
        width 100%
        margin-top 30px
        border 1px solid #45494c
        color #fff
        background #b4282d
        font-size 16px
        line-height 40px
      .btn1
        width 100%
        margin-top 30px
        border 1px solid #45494c
        color #45494c
        background #fff
        font-size 16px
        line-height 40px
        background-image url("https://cstaticdun.126.net//2.11.4/images/icon_light@2x.5d17769.png")
        background-repeat no-repeat
        background-position 75px -149px
        background-size 32px 544px
        vertical-align middle
        margin-right 8px
        text-align center
      a
        color #333
        font-size 16px
        text-align center 
        width 100%
      .Rules
        color #333
        font-size 16px
        text-align center 
        width 100%
        input 
          display block
          float left
          margin-right: 5px
          width 14px
          margin-top 3px
          height 14px
          cursor pointer
          border solid 1px #aaa
          color #999;
          font-size 12px
        a
          color #007AFF
      .email
        text-align center
        margin-top 20px
</style>
