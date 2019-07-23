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
      <ul class="Contentleft navList" v-if="categoryData.categoryL1List">
        <li class="item" v-for="(category,index) in categoryData.categoryL1List" :key="category.id" @click="getIndex(index)" 
          :class="index===newindex? 'item active':'item'">{{category.name}}</li>
      </ul>
      <!-- 右侧列表 -->
      <div class="Contentright" v-if="categoryData.categoryL1List">
        <span class="RightImg">
          <img :src="categoryData.categoryL1List[newindex].wapBannerUrl" alt="">
        </span>
        <ul class="cateList">
          <li class="Item" v-for="(item) in categoryData.categoryL1List[newindex].subCateList" :key="item.id">
            <img :src="item.bannerUrl" alt="">
            <span class="ItemText">{{item.name}}</span>
          </li>
          
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'//映射
import BScroll from 'better-scroll'
  export default {
    name:'Catergory',
    data(){
      return{
        newindex: 0
      }
    },
    methods:{
      getIndex(index){
        this.newindex = index
      }
    },
    computed:{
      ...mapState(['categoryData'])
    },
    mounted(){
      //分发事件分发action
      this.$store.dispatch("getCategoryData",() => {
        this.$nextTick(() => {
          new BScroll('.navList',{
            click: true
          })
          new BScroll('.cateList')
        })
      })
     
       
     
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
          margin-bottom 25px
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
