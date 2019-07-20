<template>
  <div class="Catergory">
    <!-- 头部导航 -->
    <header class="header">
      <div class="input">
        <i class="iconfont icon-search"></i>
        <span class="placeholder">搜索商品，共21702款好物</span>
      </div>
    </header>
    
    <div class="content">
      <!-- 左侧列表 -->
      <ul class="Contentleft navList">
        <li class="item" v-for="(item,index) in navList" :key="index" @click="newindex=index" 
          :class="index===newindex? 'item active':'item'">{{item}}</li>
      </ul>
      <!-- 右侧列表 -->
      <div class="Contentright">
        <span class="RightImg">
          <img src="https://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png?imageView&thumbnail=0x196" alt="">
        </span>
        <ul class="cateList">
          <li class="Item">
            <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144" alt="">
            <span class="ItemText">员工精选好货</span>
          </li>
          <li class="Item">
            <img src="https://yanxuan.nosdn.127.net/537552999ee981ed17eccf968fb2fd23.png?imageView&quality=85&thumbnail=144x144" alt="">
            <span class="ItemText">夏日女士穿搭特价</span>
          </li>
          <li class="Item">
            <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144" alt="">
            <span class="ItemText">员工精选好货</span>
          </li>
          <li class="Item">
            <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144" alt="">
            <span class="ItemText">员工精选好货</span>
          </li>
          <li class="Item">
            <img src="https://yanxuan.nosdn.127.net/537552999ee981ed17eccf968fb2fd23.png?imageView&quality=85&thumbnail=144x144" alt="">
            <span class="ItemText">夏日女士穿搭特价</span>
          </li>
          <li class="Item">
            <img src="https://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144" alt="">
            <span class="ItemText">员工精选好货</span>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:'Catergory',
    data(){
      return{
        newindex:0,
        navList:['推荐专区','夏凉专区','新品专区','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运动旅行','数码家电','全球特色']
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'

.Catergory
  bottom-border-1px(#e4e4e4)
  height 100%
  width 100%
  .header
    height 100%
    width 44px
    .input
      height 38px
      width 350px
      line-height 38px
      border-radius 5px
      background-color #ededed
      text-align center
      margin 10px
      .iconfont
        width 14px
      .placeholder
        height 21px
        width 159px
        font-size 14px
        color #666
        text-indent 14px
  .content
    height 100%
    width 100%
    position relative
    .Contentleft
      width 81px
      color #333
      font-size 14px
      display flex
      flex-direction column
      white-space nowrap
      background-color white
      float left
      margin-left -5px
      .item
        height 25px
        margin 0 6px
        line-height 25px
        text-align center
        margin-top 23px
        padding-left 10px
        &.active
          border-left 3px solid #b4282d
          color #b4282d
    .Contentright
      height 100%
      width 264px
      float right
      margin-right 10px
      img 
        height 96px
        width 264px
        margin-bottom 10px
      .cateList
        height 324px
        width 100%
        display flex
        flex-wrap wrap
        .Item
          height 72px
          width 72px
          margin-right 15px
          img 
            display block
            width 100%
            height 70px
            background #fff
          .ItemText
            height 10px
            color #333
            text-align center
            line-height 10px
            font-size 12px
            
</style>
