<template>
  <div id="thingsWrap">
    <div class="Top">
      <Header>
        <div slot="title" class="slot">
          <span class="left"><i class="iconfont icon-shouye" @click="$router.push('/home')"></i></span>
          <span style="color:#b4282d;font-weight:bold;font-size:24px" :class="$route.path.indexOf('/find')!=-1?'active':''" @click="$router.push('/fehelper/physical')">发现</span>
          <span :class="$route.path.indexOf('/select')!=-1?'active':''" @click="$router.push('/select')">甄选家</span>
          <span class="Right">
            <i class="iconfont icon-search"></i>
            <i class="iconfont icon-iconfontgouwuche"></i>
          </span>
        </div>
      </Header>
      <div class="headerNav">
        <ul class="headerList">
          <li class="item" v-for="(item,index) in navList" :key="index" @click="newindex=index" 
          :class="index===newindex? 'active':''">{{item}}</li>
        </ul>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script type="text/ecmascript-6">
 import BScroll from 'better-scroll'
 import Find from './Find.vue'
  export default {
    name:'Physical',
    components:{
      Find
    },
    data(){
      return{
        newindex:0,
        navList:['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运动旅行','数码家电','全球特色']
      }
    },
    mounted(){
      new BScroll('.headerNav',{//导航滑动
        scrollX: true,
        click:true
      })
    }
     
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
#thingsWrap
  padding-bottom 50px
  position relative
  .Top
    position fixed
    width 100%
    background #fff
    z-index 20
    .headerNav
      height 33px
      width 375px
      position relative
      .headerList
        color #333
        font-size 14px
        white-space nowrap
        float left
        // z-index 30
        .item
          height 33px
          width 60px
          margin 0 6px
          line-height 33px
          display inline-block
          text-align center
          &.active
            border-bottom 1px solid #b4282d
            color #b4282d
    .slot
      flex 2
      justify-content center
      display flex
      height 25px
      width 100%
      margin-top 20px
      padding-bottom 10px
      color #7F7F7F
      border-bottom 2px solid #7F7F7F
      .left 
        padding-left 8%
        .iconfont
          font-size 22px
      span
        display block
        height 85px
        font-size 18px
        margin-right 42px
      .active
        color #b4282d
        font-weight bold
        font-size 18px
      .Right
        padding-left 3%
        .iconfont
          font-size 22px

           

</style>
