<template>
  <div class="Wrap" v-if="searchInitialData.defaultKeyword">
    <div class="Search">
      <header class="Header">
        <form class="input"  @input="kong" v-model="searchContent" @keyup="search">
          <i class="iconfont icon-search"></i>
          <input class="placeholder" :placeholder="searchInitialData.defaultKeyword.keyword">
        </form>
        <span class="delete" @click="deleteSearchContent" v-show="searchContent">X</span>
        <span class="Cancel"@click="$router.back()">取消</span>
      </header>
      <h3 class="HotSearch">热门搜索</h3>
      <div class="Content" v-show="!searchContent">
        <ul>
          <li v-for="(hotKeyword,index) in searchInitialData.hotKeywordVOList" :key="index">{{hotKeyword.keyword}}</li>
        </ul>
      </div>
      <!-- 点击热词进行搜索 -->
      <section class="searchList" v-if="searchContent">
        <ul>
          <li v-for="(item,index) in searchData">{{item}}</li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'//映射
  import {reqThingsSearch} from '../../api'
  export default {
    data(){
      return{
        searchContent:'',//初始为空数据
        searchData:[]//搜索的数据
      }
    },
    // 映射
    computed:{
      ...mapState(["searchInitialData"])
    },
    mounted(){
      // 分发actions
      this.$store.dispatch("getSearchInitialData")
    },
    methods:{
      kong(){
        this.searchData = []
      },
      async searchData(event){
        const result  = await reqThingsSearch(this.searchContent)
        if(result.code*1===200){
          this.searchData = result.data
        }
      },
      deleteSearchContent(){
        this.searchContent = ''
      }
    },
  }

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'

.Wrap
  width 100%
  height 100%
  background-color #ededed
  .Search
    height 240px
    width 100%
    background #fff
    .Header
      height 60px
      width 100%
      display flex
      .input
        height 29px
        width 300px
        line-height 28px
        border-radius 1px
        background-color #ededed
        margin 10px
        .iconfont
          margin-left 10px
          font-size 20px
        .placeholder
          height 21px
          width 255px
          font-size 14px
          color #666
          text-indent 14px
          margin-left 6px
          background-color #ededed
      .delete
        width 30px
        height 30px
        line-height 30px
        background-color #ccc
        position absolute
        right 134px
        top 30px
        border-radius 50%
        text-align center
        color #fff
      .Cancel
        height 100%
        line-height 48px
        text-align center
        margin-left 10px
    .HotSearch
      color #999
      height 20px
      padding-left 13px
      margin-bottom 10px
    .Content
      margin-right -5px
      margin-bottom -4px
      ul
        padding-left 10px
        li
          font-size 14px
          float left
          padding 0 10px
          border 1px solid #eee
          color #333
          float left
          border-radius 5px
          margin-right 10px
          margin-bottom 20px
    .searchList
      ul
        padding-left 30px
        li
          font-size 28px
          color #333
          border-bottom 1px solid #d9d9d9
          height 90px
          line-height 90px
          width 720px
</style>
