<template>
    <footer class="footer_guide border-1px">
        <span class="guide_item" :class="{on: $route.path==='/home'}" @click="goTo('/home')">
            <span class="item-icon">
                <i class="iconfont icon-shouye"></i>
            </span>
            <span>首页</span>
        </span>
        <span class="guide_item" :class="{on: $route.path==='/category'}" @click="goTo('/category')">
            <span class="item-icon">
                <i class="iconfont icon-icon_category"></i>
            </span>
            <span>分类</span>
        </span>
        <span class="guide_item" :class="{on: $route.path==='/fehelper/physical'}" @click="goTo('/fehelper/physical')">
            <span class="item-icon">
                <i class="iconfont icon-shiwutupian"></i>
            </span>
            <span>识物</span>
        </span>
        <span class="guide_item" :class="{on: $route.path==='/shopcart'}" @click="goTo('/shopcart')">
            <span class="item-icon">
                <i class="iconfont icon-iconfontgouwuche"></i>
            </span>
            <span>购物车</span>
        </span>
        <span class="guide_item" :class="{on: $route.path==='/personal'}" @click="goTo('/personal')">
            <span class="item-icon">
                <i class="iconfont icon-geren"></i>
            </span>
            <span>个人</span>
        </span>
    </footer>
</template>

<script type="text/ecmascript-6">
  export default {
      name:'Footerguide',
      methods:{
          goTo(path){
            // 编程式路由
            this.$router.replace(path)
          }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'

.footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    left 0
    bottom 0
    background-color #fff
    height 49px
    width 100%
    display flex
    padding 6px
    box-sizing border-box
    z-index 40
    .guide_item
        display flex
        flex 1
        flex-direction column
        align-items center
        width 12px
        height 100%
        &.on
            color #b4282d
        span
            font-size 12px
            margin-bottom 8px
        .iconfont
            font-size 20px
</style>
<!--
强制绑定数据：v-bind  简写: 
:class "on"        字符串   类名是不确定的，但是确定是有的
:class "{on:false}" 对象语法  类名是确定的，但不确定有没有

路由跳转（两种方式）
  声明式路由导航  routerlink
  编程式路由导航  【js编码，需要手动绑定点击事件监听@click="goTo"】
  :class="{on: $route.path==='/msite'}默认添加了this.$router，this==路由器，动态获取路由的组件来确定需要读取的哪个组件

  methods  是对象，因为每个函数都有名字，函数是靠名字标识的

  路由跳转
    push 有回退的功能
    replace 无回退的功能
    
-->