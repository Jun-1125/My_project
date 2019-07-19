<template>
  <div class="Home">
    <!-- 头部-->
      <div class="headerTop">
        <Header class="header">
        <img class="logo" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
        <div class="input">
          <i class="iconfont icon-search"></i>
          <span class="placeholder">搜索商品，共21702款好物</span>
        </div>
        <a href="javascript:">登录</a>
      </Header>
      <!-- 头部导航 -->
      <div class="headerNav" ref="wrapper">
        <ul class="headerList">
          <li class="item" v-for="(item,index) in navList" :key="index" @click="newindex=index" 
          :class="index===newindex? 'item active':'item'">{{item}}</li>
        </ul>
        
        <!-- 箭头arrow -->
        <div class="arrow" @click="handleArrow">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png"
               :class="isArrow ? 'downArrow' : 'upArrow'" alt="">
        </div>
        <!-- 遮罩层上的所有商品 -->
        <div class="maskShop" v-show="isShow">
          <div class="maskTitle">全部频道</div>
          <ul class="headerList ">
            <li class="item" v-for="(item,index) in navList" :key="index" @click="newindex=index" 
            :class="index===newindex? 'item active':'item'">{{item}}</li>
          </ul>
        </div>
      </div>
      <!--home头部遮罩层-->
      <section class="mask" v-show="isShow" @click="handleArrow"></section>
      </div>
      <!-- 轮播图 Shuffling figure-->
      <div class="Shuffling swiper-container">
        <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="./imgs/1.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./imgs/2.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./imgs/3.jpg" alt="">
              </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!-- 服务保障，安全 -->
      <div class="Servesafety">
        <span class="text">
          <span>
            <i class="iconfont icon-yi" style="color:#b4282d"></i>
            网易自营品牌
          </span>
          <span>
            <i class="iconfont icon-dunpai1" style="color:#b4282d"></i>
            0天无忧退货
          </span>
          <span>
            <i class="iconfont icon-qian" style="color:#b4282d"></i>
            48小时快速退款
          </span>
        </span>
      </div>
      <!-- 滚动条的产品信息 -->
      <div class="ProductInfo">
        <!-- 事物图片 -->
        <div class="icon">
          <ul class="list">
            <li>
              <img src="./imgs/1.jpg" style="height:55px;width:55px" alt="">
              新品首发
            </li>
            <li>
              <img src="./imgs/1.jpg" style="height:55px;width:55px" alt="">
              居家生活
            </li>
            <li>
              <img src="./imgs/1.jpg" style="height:55px;width:55px" alt="">
              服饰鞋包
            </li>
            <li>
              <img src="./imgs/1.jpg" style="height:55px;width:55px" alt="">
              美食酒水
            </li>
            <li>
              <img src="./imgs/1.jpg" style="height:55px;width:55px" alt="">
              个护清洁
            </li>
            <li>
              <img src="./imgs/1.jpg" style="height:55px;width:55px" alt="">
              母婴亲子
            </li>
            <li>
              <img src="./imgs/1.jpg" style="height:55px;width:55px" alt="">
              母婴亲子
            </li>
            <li>
              <img src="./imgs/1.jpg" style="height:55px;width:55px" alt="">
              母婴亲子
            </li>
            <li>
              <img src="./imgs/1.jpg" style="height:55px;width:55px" alt="">
              母婴亲子
            </li>
            <li>
              <img src="./imgs/1.jpg" style="height:55px;width:55px" alt="">
              母婴亲子
            </li>
          </ul>
        </div>
        <!-- 新人专享礼 -->
        <div class="PerGift">
          <h3>-新人专享礼-</h3>
          <div class="content">
            <div class="left">
              <span class="LeftText">新人专享礼包</span>
              <div class="imgWrap">
                <img src="./imgs/3.jpg" alt="" style="width:100%;height:130px">
              </div>
            </div>
            <div class="right">
              <div class="top"></div>
              <div class="bottom"></div>
            </div>
          </div>
        </div>
        <!-- 品牌制造商直供manufacturers -->
        <div class="Manufacturers">
          <div>
            <span>品牌制造商直供</span>
            <span>
              更多
              <span>></span>
            </span>
          </div>
        </div>
      </div>

  </div>
</template>

<script type="text/ecmascript-6">
 import BScroll from 'better-scroll'
 import Swiper from 'swiper'
 import 'swiper/dist/css/swiper.css'
  export default {
    name:'Home',
    data(){
      return{
        isArrow:true,
        isShow:false,
        newindex:0,
        navList:['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运动旅行','数码家电','全球特色']
      }
    },
    
    methods:{
      handleArrow () {
        this.isArrow = !this.isArrow
        this.isShow = !this.isShow
      }
    },
    mounted(){
      new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })

      new BScroll('.headerNav', {
        scrollX: true,
        scrollY:false,
        click: true
      })
    },

   
  }

   
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'

.Home
  padding-bottom 100px
  height 100%
  width 100%
  overflow hidden
  .headerTop
    position fixed
    margin-bottom 44px
    z-index 30
    .header
      height 44px
      display flex
      align-items center
      line-height 36px
      padding 4px 20px
      background-color #fff
      z-index 40
      .logo
        height 20px
      .input
        height  29px
        width 221px
        margin 0 4px 0 5px
        line-height 28px
        border-radius 1px
        background-color #ededed
        text-align center
        margin 0 10px
        .iconfont
          width 14px
        .placeholder
          height 21px
          width 159px
          font-size 14px
          color #666
          text-indent 14px
      a
        color #b4282d
        font-size 12px
        display block
        width 40px
        height 20px
        border 1px solid #b4282d
        text-align center
        line-height 20px
        border-radius 4px
    .headerNav
      width 375px
      height 33px
      position relative
      .headerList
        color #333
        font-size 14px
        white-space nowrap
        float left
        background-color white
        .item
          height 33px
          margin 0 6px
          line-height 33px
          display inline-block
          text-align center
          &.active
            border-bottom 1px solid #b4282d
            color #b4282d
      .arrow
        width 60px
        height 30px
        background-color #fff
        z-index 60
        position absolute
        top 0
        right 0
        transition all 1s
        img 
          position absolute
          top 0
          right 10px
        .downArrow
          transform rotate(0deg)
          transition all 0.5s
        .upArrow
          transform rotate(180deg)
          transition all 0.5s
      .maskShop
        background-color #fff
        height 186px
        width 100%
        color #333
        position absolute
        top 0
        left 0
        z-index 10
        .maskTitle
          width 100%
          height 30px
          line-height 30px
          font-size  14px
          padding-left 15px
        .headerList
          padding 24px 0 0 0
          li
            width 75px
            height 28px
            line-height 28px
            text-align center
            border 1px solid #ccc
            border-radius 2px
            float left
            font-size 12px
            margin 0 0 20px 15px
            background-color #fafafa
            &.active
              color #b4282d
              border-color #b4282d

    .mask
      position absolute
      left 0
      right 0
      top 40px
      bottom 0
      margin auto
      background-color white
  .Shuffling
    height 185px
    width 100%
    background-color pink 
    margin-top 88px
    position fixed
      // 轮播图
    .swiper-container
      height 100%
      width 100%
      .swiper-wrapper
        .swiper-slide
          img 
            height 100%
            width 100%        
      // 服务保障
  .Servesafety
    width 100%
    height 36px
    .text
        font-size 12px
        height 100%
        width 100%
        line-height 36px
        margin 0 16px
        span 
          margin-right 12px
      // 滚动条的产品信息
  .ProductInfo
    height 3448px
    width 100%
    .icon
      width 100%
      height 186px
      border-bottom 10px solid #eee
      box-sizing border-box
      .list
        margin-left 10px
        li
          display flex
          flex-direction column
          margin 10px 4px
          float left
    // 新人专享礼
  .PerGift
    width 100%
    height 280px
    border-bottom 10px solid #eee
    h3
      height 45px
      width 100%
      line-height 45px
      text-align center
      color #333
    .content
      height 220px
      width 100%
      .left
        display block
        height 217px
        width 172px
        background-color #F9E9CF
        float left
        margin-left 12px
        border-right 3px solid #eee
        .LeftText
          height 36px
          line-height 36px
          padding 0 35px
        .imgWrap
          height 150px
          width 130px
          position relative
          margin 10px auto
          img 
            width 150px
            height 150px
      .right
        height 219px
        width 172px
        float right 
        margin-right 12px
        .top
          width 100%
          height 108px
          background-color #FBE2D3 
          border-bottom 3px solid #eee
        .bottom
          width 100%
          height 108px
          background-color #FFECC2
  //品牌制造商直供
  .Manufacturers
    height 327px
    width 100%
    border-bottom 10px solid #eee
    background-color red
</style>
