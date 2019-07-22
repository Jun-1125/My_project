<template>
  <div class="LoginContainer">
    <Header/>
    <div class="Content">
      <div class="ContentTop">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>

      <!-- 手机号码登录验证 validation-->
      <div class="LoginValidation">
        <input class="Getphone" type="tel" maxlength='11' v-model="phone" placeholder="请输入手机号"> 

        <div class="Getmessages" :class="{on: loginPassword}" @click="loginPassword=true;isShow=false" v-if="isShow">
          <a class="GetMessage">
            <input class="GetInput" type="text" placeholder="请输入短信验证码">
            <button class="placeholder" :disabled="!isRightPhone || computeTime>0" 
              :class="{right_phone_number:isRightPhone}">{{computeTime>0?`已发送验证码(${computeTime}s)`:'获取验证码'}}</button>
          </a>
          <div class="Getproblem">
            <input class="Geterror" type="text" placeholder="遇到问题?">
            <span>使用密码验证登录</span>
          </div>
        </div>

        <div class="Getmessages" :class="{on: !loginPassword}" @click="loginPassword=false,isShow=true" v-if="!isShow">
          <a class="GetMessage">
            <input class="GetInput" type="password" placeholder="请输入密码">
          </a>
          <div class="Getproblem">
            <input class="Geterror" type="text" placeholder="忘记密码?">
            <span>使用短信验证登录</span>
          </div>
        </div>
        
        <button class="btn active">登录</button>
        <button class="btn" @click="$router.push('/personal')">其他登录方式</button>
        <a href="javascript:;" @click="$router.push('/registered')">注册账号></a>
      </div>
      <!-- <section class="login_verification">
        <input type="tel" maxlength="8" placeholder="验证码" name="code" v-model="code">
      </section> -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '../../components/Header/Header.vue'

  export default {
    name:'Login',
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

.LoginContainer
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
      img 
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
        border-bottom 2px solid #eee
        line-height 40px
      .Getmessages
        margin-bottom 60px
        height 100%
        .GetMessage
          display inline-block
          height 100%
          width 100%
          border-bottom 2px solid #eee
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
          line-height 30px
          position relative
          .Geterror
            position absolute
            left 0
            bottom -50px
          span 
            position absolute
            right 0
            bottom -50px
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
      a
        color #333
        font-size 16px
        text-align center 
        width 100%
 
</style>
