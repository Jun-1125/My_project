<template>
  <section class="Classify">
    <div class="classify-container">
      <img src="https://yanxuan.nosdn.127.net/41fbcc8dedb1bf6dee02ea5bd5af29db.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      <div class="classify-list">
        <ul class="ul-node">
          <li>
            <img src="https://yanxuan.nosdn.127.net/630db6838c0cce666f7641469275a0ab.png?imageView&quality=65&thumbnail=330x330" alt="商品图片">
            <div class="good-info">
              <span class="good-name">滋养液</span>
              <span class="good-price">￥289</span>
            </div>
          </li>
          <li>
            <div class="good-info">
              <img src="https://yanxuan.nosdn.127.net/41fbcc8dedb1bf6dee02ea5bd5af29db.jpg?imageView&quality=75&thumbnail=750x0" alt="">
              <span class="good-name">滋养液</span>
              <span class="good-price">￥289</span>
            </div>
          </li>
           <li>
            <div class="good-info">
              <img src="https://yanxuan.nosdn.127.net/41fbcc8dedb1bf6dee02ea5bd5af29db.jpg?imageView&quality=75&thumbnail=750x0" alt="">
              <span class="good-name">滋养液</span>
              <span class="good-price">￥289</span>
            </div>
          </li>
           <li>
            <div class="good-info">
              <img src="https://yanxuan.nosdn.127.net/41fbcc8dedb1bf6dee02ea5bd5af29db.jpg?imageView&quality=75&thumbnail=750x0" alt="">
              <span class="good-name">滋养液</span>
              <span class="good-price">￥289</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
 import BScroll from 'better-scroll'
  export default {
    data(){
      return{

      }
    },
    mounted(){
      new BScroll('.classify-list', {
        scrollX: true,
        click:true
      })
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

<!--


-->