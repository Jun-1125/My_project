<template>
  <div class="Find">
    <nav class="containerWrap">
      <nav class="navList">
        <ul>
          <li v-for="(thing) in thingsNav" :key="thing.tabId">{{thing.tabName}}</li>
        </ul>
      </nav>
      <!--中间的内容部分-->
      <div class="navContentWrap">
        <section class="center" v-for="(things,index) in thingsData" :key="index">
          <header v-for="(thing,index) in things.topics" :key="index">
            <div class="style2" v-if="thing.style === 2">
              <Split />
              <section class="wrap">
                <div class="left">
                  <h3>
                    <div>
                      <img :src="thing.avatar" alt="">
                    </div>
                    <span>{{thing.nickname}}</span>
                  </h3>
                  <p class="big">{{thing.title}}</p>
                  <p class="small">{{thing.subTitle}}</p>
                  <section>
                    <i class="iconfont icon-kanguo"></i>
                    <span>{{thing.readCount}}人看过</span>
                  </section>
                </div>
                <div class="right">
                  <img :src="thing.picUrl" alt="">
                </div>
              </section>
            </div>
            <div class="style1" v-if="thing.style === 1">
              <Split />
              <section class="wrap">
                <h3>
                  <div>
                    <img :src="thing.avatar" alt="">
                  </div>
                  <span>{{thing.nickname}}</span>
                </h3>
                <p>{{thing.title}}</p>
                <div class="bigImage">
                  <img :src="thing.picUrl" alt="">
                </div>
                <footer>
                  <i class="iconfont icon-kanguo"></i>
                  <span>{{thing.readCount}}人看过</span>
                </footer>
              </section>
            </div>
          </header>
        </section>
      </div>
    </nav>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Split from './Split.vue'
  export default {
    mounted () {
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
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
 @import '../../common/stylus/mixins.styl'
 
  .Find
    width 100%
    height 100%
    .SelectHeader
    position fixed
    margin-bottom 44px
    padding-right 10px
    .containerWrap
      padding-top 90px
      .navList
        width 100%
        overflow hidden
        border-bottom 1px solid #d9d9d9
        border-top 1px solid #d9d9d9
        background-color #fafafa
        position fixed
        top 88px
        left 0
        z-index 10
        ul
          display flex
          height 74.5px
          line-height 74.5px
          width 1020px
          li
            font-size 28px
            margin 0 20px
            padding 0 8px
            color #7f7f7f
      .navContentWrap
        padding-top 74.5px
        .center
          position relative
          .style2
            .wrap
              display flex
              justify-content space-between
              padding 32px 30px
              .left
                width 400px
                h3
                  display flex
                  height 54px
                  line-height 54px
                  div
                    width 54px
                    height 54px
                    border-radius 50%
                    overflow hidden
                    margin-right 12px
                    img
                      width 45px
                      height 45px
                  span
                    font-size 28px
                    color #333
                .big
                  color #333
                  font-size 16px
                  padding-top 32px
                .small
                  color #7f7f7f
                  font-size 28px
                  padding-top 8px
                section
                  margin-top 18px
                  color #999
                  i
                    font-size 20px
              .right
                height 172px
                width 172px
                border-radius 8px
                overflow hidden
                img
                  height 172px
                  width 172px
          .style1
            .wrap
              padding 32px 30px
              h3
                display flex
                height 54px
                line-height 54px
                margin-bottom 24px
                div
                  width 54px
                  height 54px
                  border-radius 50%
                  overflow hidden
                  margin-right 12px
                  img
                    width 54px
                    height 54px
                span
                  font-size 28px
                  color #333
              p
                font-size 32px
                color #333
                margin-bottom 16px
              .bigImage
                border-radius 8px
                overflow hidden
                img
                  height 176px
                  width 290px
              footer
                margin-top 10px
                color #999
                span
                  font-size 28px
                i
                  font-size 30px
</style>
