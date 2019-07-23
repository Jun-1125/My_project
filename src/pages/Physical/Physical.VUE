<template>
  <div id="thingsWrap">
    <Header>
      <div slot="title" class="slot">
        <span class="left"><i class="iconfont icon-shouye" @click="$router.push('/home')"></i></span>
        <span :class="$route.path.indexOf('/find')!=-1?'active':''" @click="$router.push('/fehelper/physical')">发现</span>
        <span :class="$route.path.indexOf('/select')!=-1?'active':''" @click="$router.push('/select')">甄选家</span>
        <span class="Right">
        <i class="iconfont icon-search"></i>
        <i class="iconfont icon-iconfontgouwuche"></i>
      </span>
      </div>
    </Header>
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
    }
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
#thingsWrap
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
      padding-left 5%
      .iconfont
        font-size 22px
    span
      display block
      height 85px
      font-size 20px
      margin-right 36px
    .active
      color #b4282d
      font-weight bold
      font-size 24px
    .Right
      padding-left 3%
      .iconfont
        font-size 22px

           

</style>
