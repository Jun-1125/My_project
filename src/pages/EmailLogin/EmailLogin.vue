<template>
  <div class="LoginContainer">
    <Header/>
    <div class="Content">
      <div class="ContentTop">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>

      <!-- 邮箱登录验证 validation-->
      <div class="LoginValidation">
        <input class="Getphone" type="tel" v-model="mail" placeholder="邮箱账号" @blur="Mail"> 
        <input class="Geterror" type="password" placeholder="密码" v-model="pwd">
        <span class="GetMessage">
          <div class="err" v-show="err">{{err}}</div>
          <span class="lg">注册账号</span>
          <span class="pwd">忘记密码</span>
        </span>
        <button class="btn active" @click="login">登录</button>
        <button class="btn" @click="$router.back('/personal')">其他登录方式</button>
      </div>
      <!-- <section class="login_verification">
        <input type="tel" maxlength="8" placeholder="验证码" name="code" v-model="code">
      </section> -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '../../components/Header/Header.vue'
import {reqLoginEmail} from '../../api'
  export default {
    name:'Login',
    components:{
      Header
    },
    data(){
      return{
        mail:'',//邮箱验证
        pwd:'',//密码验证
        err:''
      }
    },
    /* computed:{
      isRightPhone(){
        return/^1\d{10}$/.test(this.phone)
      }
    }, */
    methods:{
      //邮箱验证
      Mail(){
        if(!/^[a-zA-Z\d]+([-_.][a-zA-Z\d]+)*@([a-zA-Z\d][-.])+[a-zA-Z\d]{2,4}$/.test(this.mail) && this.mail){
          this.err = '邮箱格式错误'
        }else{
          this.err = ''
        }
      },

      async login(){
        if(!/^[a-zA-Z\D]+([-_.][a-zA-Z\d]+)*@([a-zA-Z\d]+[-.])+[a-zA-Z\d]{2,4}$/.test(this.mail) && this.mail){
          this.err = '邮箱格式错误'
        }else{
          const {mail,pwd} = this
          const result = await reqLoginEmail(mail,pwd)
          if(result.code===0){
            this.$router.replace('/login')
          }else{
            alert('用户名或者密码错误')
          }
        }
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
      width 90%
      .Getphone
        border-bottom 2px solid #eee
        line-height 40px
        margin-bottom 30px
      .GetMessage
        height 100%
        width 100%
        position relative
        border-bottom 2px solid #eee
        margin-bottom 80px
        line-height 40px
        margin-top 20px
        background #fff
        color #333
        border-bottom 1px solid #eee
        .err
          color #b4282d
        .lg
          position absolute
          left 0
          bottom -50px
        .pwd
          position absolute
          right 0
          bottom -50px
      .btn
        width 100%
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
