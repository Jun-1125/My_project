<template>
  <div class="Physical">
    <Header/>
    
      <!-- 内容区域轮播图 -->
    
    <!-- <section class="center" v-for="(things,index) in thingsData" :key="index">
      <header v-for="(thing,index) in things.topics" :key="index">
        <div class="style2" v-if="thing.style === 2">
          <div class="Bed">
            <div class="InfoTitle">
              <img :src="thing.avatar" alt="">
              <span class="left">{{thing.nickname}}</span>
            </div>
            <a class="InfoItem" href="javascript:;">
              <p class="Infodec">{{thing.title}}</p>
              <p class="Infodec">{{thing.subTitle}}</p>
            </a>
            <span>
              <i class="iconfont icon-kanguo"></i>
              <div>{{thing.readCount}}人看过</div>
            </span>
          </div>
        </div>
        
        <div class="style1" v-if="thing.style === 1">
        <div class="Bed">
            <div class="InfoTitle">
              <img :src="thing.avatar" alt="">
              <span class="left">{{thing.nickname}}</span>
            </div>
            <a class="InfoItem" href="javascript:;">
              <p class="Infodec">{{thing.title}}</p>
              <img :src="thing.picUrl" alt="">
            </a>
            <footer>
              <i class="iconfont icon-kanguo"></i>
              <span>{{thing.readCount}}人看过</span>
            </footer>
          </div>
        </div>
      </header>
      
    </section> -->
    
    <div>
      <div class="Advice" v-for="(topic,index) in result.topics" :key="index">
        <div class="InfoTitle">
          <img :src="topic.avatar" alt="">
          <span class="left">{{topic.nickname}}</span>
        </div>
        <a class="InfoItem" href="javascript:;">
          <p class="Infodec">{{topic.title}}</p>
          <p class="Infodec">{{topic.subTitle}}</p>
        </a>
        <span>
          <i class="iconfont icon-kanguo"></i>
          <div>{{topic.readCount}}人看过</div>
        </span>
        <div class="ImgBig">
          <img :src="topic.picUrl" alt="">
        </div>
      </div>
      
    </div>
   
    

  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Split from './Split.vue'
  export default {
     mounted () {
      //分发action请求
      this.$store.dispatch('getFehelper',() => {
        this.$nextTick(() => {
          new BScroll('.navList',{//导航滑动
            scrollX: true
          })
        })
      })
    },
    computed: {
      ...mapState(["result"])
    },
    components: {
      Split,
    } 
   /*  mounted () {
      //请求导航数据
      this.$store.dispatch('getThingsNav',() => {
        this.$nextTick(() => {
          new BScroll('.navList',{//导航滑动
            scrollX: true
          })
        })
      })
      //请求数据
      this.$store.dispatch('reqThingsData')
    },
    computed: {
      ...mapState(["thingsNav","thingsData"])
    },
    components: {
      Split,
    } */
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'

.Physical
  padding-bottom 100px
  width 100%
  height 100%
  overflow hidden
  // 产品轮播图
  .fixed
    height 185px
    width 100%
    margin-top 120px
    border-bottom 10px solid #eee
    img 
      height 140px
      width 345px
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
        width 85%
           

</style>
