<template>
  <div class="RegisteredContainer">
    <Header/>
    <div class="Content">
      <div class="ContentTop">
        <p class="text">手机号注册</p>
      </div>

      <!-- 手机号码登录验证 validation-->
      <div class="LoginValidation">
        <input class="Getphone" type="tel" maxlength='11' v-model="phone" placeholder="请输入手机号"> 
        <a class="GetMessage">
          <input class="GetInput" type="text" placeholder="请输入短信验证码">
          <button class="placeholder" :disabled="!isRightPhone || computeTime>0" 
            :class="{right_phone_number:isRightPhone}">{{computeTime>0?`已发送验证码(${computeTime}s)`:'获取验证码'}}</button>
        </a>
        <input class="Getproblem" type="text" placeholder="请输入密码">
        <button class="btn active">登录</button>
        <sapn class="Rules" href="javascript:;">
          <input type="checkbox">
          我同意
          <a href="javascript:;">《服务条款》</a>
          和
          <a href="javascript:;">《网易隐私政策》</a>
        </sapn>
        <span class="email" @click="$router.push('/emailregistered')">邮箱账号注册></span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '../../components/Header/Header.vue'

  export default {
    name:'Phoneregistered',
    components:{
      Header
    },
    data(){
      return{
        loginPassword:false,
        isShow:true,
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
    .ContentTop
      height 100%
      width 10%
      line-height 40px
      text-align center
      position absolute
      top 60px
      left 30%
      .text
        height 40px
        width 128px
    .LoginValidation
      height 75px
      position absolute
      top 200px
      left 5%
      bottom 100px
      display flex
      flex-direction column
      .Getphone
        height 100%
        width 100%
        border-bottom 2px solid #eee
        line-height 40px
        margin-bottom 30px
      .GetMessage
        width 100%
        height 100%
        border-bottom 2px solid #eee
        margin-top 40px
        position relative
        .GetInput
          position absolute
          left 0
          bottom 10px
          color #333
        .placeholder
          position absolute
          right 0
          bottom 10px
          background #fff
          color #333
      .Getproblem
        margin-top 30px
        line-height 30px
        margin-bottom 20px
      .btn
        width 300px
        margin-bottom 15px
        border 1px solid #b4282d
        color #b4282d
        background #fff
        font-size 16px
        line-height 40px
        &.active
          background #b4282d
          color #fff
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
