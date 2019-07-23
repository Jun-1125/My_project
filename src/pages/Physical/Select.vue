<template>
  <div class="Select">
    <SelectHeader class="SelectHeader"/>
    <div class="Shuffling">
        <!-- 轮播图 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/2f9c81a130447f34424a16a40d66cbba.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/e1838f8442e7bfef014070ff902a698f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/7c1ce80acc7625c23246cc99e9cd8f4a.png?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
        </div>
         <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- 建议征集 -->
    <div class="Advice">
      <div class="InfoTitle">
        <span class="left">建议征集</span>
        <span class="right">告诉我们，你的好物标准</span>
      </div>
      <a class="InfoItem" href="javascript:;">
        <p class="Infodec">如果我们推出方便菜肴，你会希望有哪些口味呢？比如酸甜口味、香辣口味、咖喱口味或者其他口味；希望推出1人份还是多人份？希望是加热即食还是可以简单烹饪？你对严选的方便菜肴还有哪些期待呢？快来说说吧</p>
        <img src="https://yanxuan.nosdn.127.net/85a480bd9a852da923b8d3b5c7f7b759.png?imageView&quality=65&thumbnail=280x280" alt="">
        <button></button>
      </a>
      <div>我要建议</div>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
import SelectHeader from '../../components/Select/Header.vue'
import Swiper from 'swiper'
 import 'swiper/dist/css/swiper.css'
  export default {
    components:{
      SelectHeader
    },
    mounted(){
      new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'

.Select
  height 100%
  width 90%
  overflow hidden
  position relative
  right 0
  left 15px
  top 0
  bottom 0
  .SelectHeader
    position fixed
    margin-bottom 44px
    padding-right 10px
  .Shuffling
    height 185px
    width 100%
    margin-top 60px
    position absolute
      // 轮播图
    .swiper-container
      height 100%
      width 100%
      .swiper-wrapper
        .swiper-slide
          img 
            height 100%
            width 100%  
  .Advice
    width 100%
    border-bottom 10px solid #eee
    .InfoTitle
      width 100%
      padding-top 10px
      display flex
      flex-direction column
      line-height 30px
      .left
        font-size 14px
        font-weight bold
        text-align center
      .right
        font-size 12px
        text-align center
    .InfoItem
      width 100%
      height 100%
      margin 2px
      align-items center
      .Infodec
        font-size 13px
        white-space wrap
        line-height 35px
        color #333
        text-align center
      img
        height 160px
        width 85%
</style>
