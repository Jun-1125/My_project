<template>
  <div class="Physical">
    <div class="Wrap">
      <header class="header">
        <span class="left"><i class="iconfont icon-shouye"></i></span>
        <div class="middle">
          <a class="Find">发现</a>
          <a class="Select">甄选家</a>
        </div>
        <span class="Right">
          <i class="iconfont icon-search"></i>
          <i class="iconfont icon-iconfontgouwuche"></i>
        </span>
      </header>
    
      <div class="headerNav">
        <ul class="headerList">
          <li class="item" v-for="(item,index) in navList" :key="index" @click="newindex=index" 
          :class="index===newindex? 'item active':'item'">{{item}}</li>
        </ul>
      </div>
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
  width 100%
  .Wrap
    height 25px
    position relative
    width 100%
    position fixed !important
    .header
      height 25px
      width 100%
      margin-top 20px
      padding-bottom 10px
      display flex
      font-size 22px
      color #7F7F7F
      border-bottom 2px solid #7F7F7F
      z-index 100
      .left
        padding-left 5%
      .middle
        padding 0 20%
        .Find
          color #b4282d
          font-weight bold
      .Right
        padding-left 5%
    .headerNav
      height 33px
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
</style>
