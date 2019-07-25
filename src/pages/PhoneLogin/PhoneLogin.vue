<template>
  <div class="LoginContainer">
    <Header/>
    <div class="Content">
      <div class="ContentTop">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>

      <!-- 手机号码登录验证 validation-->
      <div class="LoginValidation">
        <!-- 请输入手机号 -->
        <div class="Getphone">
          <input class="input" type="tel" maxlength='11' v-model="phone" placeholder="请输入手机号" @blur="PhoneAndCode"> 
          <div class="clear" @click="handleClear" v-if="phone">X</div>
        </div>
        <!-- 输入密码和问题/获取验证码，使用密码，使用密码 -->
        <div class="Getmessages">
          <a class="GetMessage">
            <input class="GetInput" type="text" placeholder="请输入短信验证码" v-model="code" @blur="PhoneAndCode">
            <div class="placeholder" @click="getCode">获取验证码</div>
          </a>
          <div class="Getproblem" v-if="">
            <span class="left">遇到问题？</span>
            <span>使用密码验证登录</span>
            <div class="Geterror" v-show="errPhone || errCode">{{errPhone+'&nbsp;&nbsp;'+errCode}}</div>
          </div>
        </div>
        
        <button class="btn active" @click="login">登录</button>
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
import {reqLoginPhone,reqCode} from '../../api'
  export default {
    components:{
      Header
    },
    data(){
      return{
        phone:'',//手机号验证
        code:'',//验证码验证
        errPhone :'',//手机号码验证错误
        errCode:''//验证码错误信息
      }
    },
   /*  computed:{
      isRightPhone(){
        return/^1\d{10}$/.test(this.phone)
      }
    }, */
    methods:{
      PhoneAndCode(){
        // 手机号码登录验证
        if(!/^1[3456789]\d{9}$/.test(this.phone.trim()) && this.phone){
          this.errPhone = '手机格式错误'
        }else{
          this.errPhone = ''
        }
        if(!/^\d{6}$/.test(this.code.trim()) && this.code){
          this.errCode= '验证码格式错误'
        }else{
          this.errCode = ''
        }
      },
      // 点击取消的叉
      handleClear(){
        this.phone = ''
        this.testPhone()
        // console.log(testPhone())
      },
      //点击获取验证码
      getCode(){
        reqCode(this.phone)
      },
      // 登录
      async login(){
        //登录需要用户的手机号和验证码
        const {phone,code} = this
        const result = await reqLoginPhone(phone,code)
        if(result.code===0){
          this.$router.replace('/login')
        }else{
          alert('手机号或验证码错误')
        }
      }
    },
    
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
      width 90%
      .Getphone
        border-bottom 2px solid #eee
        line-height 40px
        input 
          font-size 20px
        .clear
          width 30px
          height 30px
          line-height 30px
          background-color #ccc
          position absolute
          right 10px
          top 30px
          border-radius 50%
          text-align center
          color #fff
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
          top 20px
          .Geterror
            position absolute
            left 0
            bottom -10px
            color #b4282d
          .left
            position absolute
            left 0
          span 
            position absolute
            right 0
            bottom -50px
      .btn
        width 100%
        margin-bottom 15px
        margin-top 20px
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
