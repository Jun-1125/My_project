<template>
  <div class="Physical">
    
      <!-- 内容区域轮播图 -->
    <div v-for="(result,index) in fehelper.result" :key="index">
      <div class="Advice" v-for="(topic,index) in result.topics" :key="index">
        <div class="InfoTitle">
          <img :src="topic.avatar" alt="">
          <span class="left">{{topic.nickname}}</span>
        </div>
        <a class="InfoItem" href="javascript:;">
          <p class="Infodec">{{topic.title}}</p>
          <p class="Infodec">{{topic.subTitle}}</p>
          <img :src="topic.picUrl" alt="">
        </a>
        <span>
          <i class="iconfont icon-kanguo"></i>
          <div>{{topic.readCount}}人看过</div>
        </span>
      </div>
      
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Split from './Split.vue'
  export default {
    data(){
      return{
        newindex:0,
        navList:['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运动旅行','数码家电','全球特色']
      }
    },
     mounted () {
      //分发action请求
      this.$store.dispatch('getFehelper',() => {})
    },
    computed: {
      ...mapState(["fehelper"])
    },
    components: {
      Split,
    } 
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'

.Physical
  position absolute
  top 90px
  left 0
  // 产品轮播图
  .Advice
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
        width 95%
           

</style>
