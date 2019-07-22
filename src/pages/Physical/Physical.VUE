<template>
  <div class="Physical">
    <div class="Wrap">
      <header class="header">
        <span class="left"><i class="iconfont icon-shouye" @click="$router.push('/home')"></i></span>
        <div class="middle">
          <a class="Find">发现</a>
          <a class="Select" @click="$router.push('/select')">甄选家</a>
        </div>
        <span class="Right">
          <i class="iconfont icon-search"></i>
          <i class="iconfont icon-iconfontgouwuche"></i>
        </span>
      </header>
      <!-- 头部导航 -->
      <div class="headerNav">
        <ul class="headerList">
          <li class="item" v-for="(item,index) in navList" :key="index" @click="newindex=index" 
          :class="index===newindex? 'item active':'item'">{{item}}</li>
        </ul>
      </div>
    </div>
      <!-- 内容区域轮播图 -->
    
    <div class="fixed">
      <img src="https://yanxuan.nosdn.127.net/bdb121b22f382f1d2a116ace09bcfaf4.jpg?imageView&quality=65&thumbnail=690y376" alt="">
    </div>
    <div class="Bed">
      <div class="InfoTitle">
        <img src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png?imageView&quality=65&thumbnail=56y56" alt="">
        <span class="left">人气推荐</span>
      </div>
      <a class="InfoItem" href="javascript:;">
        <p class="Infodec">夏凉用品购置指南，凉席、空调被、凉感四件套每满100立减20</p>
        <img src="https://yanxuan.nosdn.127.net/85a480bd9a852da923b8d3b5c7f7b759.png?imageView&quality=65&thumbnail=280x280" alt="">
      </a>
      <div>6332人看过</div>
    </div>

    <div class="Bed">
      <div class="InfoTitle">
        <img src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png?imageView&quality=65&thumbnail=56y56" alt="">
        <span class="left">人气推荐</span>
      </div>
      <a class="InfoItem" href="javascript:;">
        <p class="Infodec">夏凉用品购置指南，凉席、空调被、凉感四件套每满100立减20</p>
        <img src="https://yanxuan.nosdn.127.net/85a480bd9a852da923b8d3b5c7f7b759.png?imageView&quality=65&thumbnail=280x280" alt="">
      </a>
      <div>6332人看过</div>
    </div>

    <div class="Bed">
      <div class="InfoTitle">
        <img src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png?imageView&quality=65&thumbnail=56y56" alt="">
        <span class="left">人气推荐</span>
      </div>
      <a class="InfoItem" href="javascript:;">
        <p class="Infodec">夏凉用品购置指南，凉席、空调被、凉感四件套每满100立减20</p>
        <img src="https://yanxuan.nosdn.127.net/85a480bd9a852da923b8d3b5c7f7b759.png?imageView&quality=65&thumbnail=280x280" alt="">
      </a>
      <div>6332人看过</div>
    </div>
      
   
    
    
  </div>
</template>

<script type="text/ecmascript-6">
 import BScroll from 'better-scroll'

  export default {
    name:'Physical',
    data(){
      return{
        newindex:0,
        navList:['推荐','好货内部价','回购榜','晒单','开发者日记','达人','HOME']
      }
    },
    mounted(){
      new BScroll('.headerNav', {
        scrollX: true,
        scrollY:false,
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'

.Physical
  padding-bottom 100px
  width 100%
  height 100%
  overflow hidden
  .Wrap
    margin-bottom 120px
    position fixed 
    background-color #fff
    z-index 30
    .header
      height 25px
      width 100%
      margin-top 20px
      padding-bottom 10px 
      display flex
      color #7F7F7F
      border-bottom 2px solid #7F7F7F
      z-index 40
      .left
        padding-left 3%
        .iconfont
          font-size 22px
      .middle
        padding 0 80px
        font-size 15px
        .Find
          color #b4282d
          font-size 24px
          font-weight bold
          margin-right 10px
      .Right
        padding-left 10px
        .iconfont
          font-size 22px
    .headerNav
      height 33px
      transition all 1s
      border-bottom 10px solid #eee
      .headerList
        color #333
        font-size 14px
        white-space nowrap
        float left
        margin-left 10px
        .item
          height 33px
          margin 0 12px
          line-height 33px
          display inline-block
          text-align center
          &.active
            border-bottom 1px solid #b4282d
            color #b4282d
  // 产品轮播图
  .fixed
    height 185px
    width 100%
    margin-top 120px
    border-bottom 10px solid #eee
    img 
      height 140px
      width 345px
  .Bed
    width 100%
    padding 0 14px
    border-bottom 10px solid #eee
    .InfoTitle
      width 100%
      padding-top 10px
      display flex
      line-height 30px
      img 
        height 28px
        width 28px
        border-radius 50%
      .left
        font-size 12px
    .InfoItem
      width 100%
      height 100%
      margin 2px
      .Infodec
        font-size 20px
        white-space wrap
        line-height 35px
        color #333
      img
        height 160px
        width 85%
           

</style>
