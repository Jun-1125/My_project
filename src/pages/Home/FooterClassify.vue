<template>
  <section class="FooterClassify">
    <div class="classify-container">
      <img src="https://yanxuan.nosdn.127.net/ae09169ca36f7adc57458c5a371ab6df.jpg" alt="">
      <div class="classify-list">
        <ul class="ul-node" v-if="homeData.kingKongModule">
          <li v-for="(item ,index) in homeData.kingKongModule.kingKongList" :key="index">
            <img :src="item.picUrl" alt="商品图片">
            <div class="good-info">
              <span class="good-name">{{item.text}}</span>
              <span class="good-price">￥289</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="classify-container">
      <img src="https://yanxuan.nosdn.127.net/41fbcc8dedb1bf6dee02ea5bd5af29db.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      <div class="classify-list">
        <ul class="ul-node">
          <li v-for="(item ,index) in homeData.focusList" :key="index">
            <img :src="item.picUrl" alt="商品图片">
            <div class="good-info">
              <span class="good-name">{{item.name}}</span>
              <span class="good-price">￥289</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
  import BSroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['homeData'])
    },
    mounted () {
      this.$nextTick(() => {
        this._setUlWidth();
        this._initScroll();
      })
    },
    methods: {
      _setUlWidth () {
        const uls = document.querySelectorAll('.ul-node');
        let ulWidth;
        Array.from(uls).forEach((ul, index) => {
          const lis = ul.querySelectorAll('li');
          Array.from(lis).forEach((li, index) => {
            const width = li.clientWidth * lis.length + 20 * (lis.length - 1);
            ulWidth = width;
          })
          ul.style.width = ulWidth + 'px';
        });
      },
      _initScroll () {
        /* eslint-disable no-new */
        const classifyList = document.querySelectorAll('.classify-list');
        Array.from(classifyList).forEach((classify, index) => {
          new BSroll(classify, {
            click: true,
            scrollX: true
          })
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'


  .classify-container img
    width 100%
    height 130px
    margin-bottom 30px
  .classify-list
    width 100%
    padding 0 10px
    box-sizing border-box
    overflow hidden
    ul
      display flex
      flex-wrap nowrap
      li
        margin-left 10px
        width 120px
        img
          width 100px
          height 100px
          margin-bottom 10px
          background-color #F4F4F4
        .good-info
          span
            display block
            width 200px
          .good-price
            color $red
</style>
