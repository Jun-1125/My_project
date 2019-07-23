<template>
  <div class="Home">
    <!-- 头部-->
      <div class="headerTop">
        <Header class="header">
          <img class="logo" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
          <div class="input">
            <i class="iconfont icon-search"></i>
            <span class="placeholder">搜索商品，共21702款好物</span>
          </div>
          <a href="javascript:" @click="$router.push('/login')">登录</a>
        </Header>
      <!-- 头部导航 -->
        <div class="headerNav" ref="wrapper">
          <ul class="headerList">
            <li class="item" v-for="(item,index) in navList" :key="index" @click="newindex=index" 
            :class="index===newindex? 'item active':'item'">{{item}}</li>
          </ul>
          
          <!-- 箭头arrow -->
          <div class="arrow" @click="handleArrow">
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png"
                :class="isArrow ? 'downArrow' : 'upArrow'" alt="">
          </div>
          <!-- 遮罩层上的所有商品 -->
          <div class="maskShop" v-show="isShow">
            <div class="maskTitle">全部频道</div>
            <ul class="headerList ">
              <li class="item" v-for="(item,index) in navList" :key="index" @click="newindex=index" 
              :class="index===newindex? 'item active':'item'">{{item}}</li>
            </ul>
          </div>
        </div>
        <!--home头部遮罩层-->
        <section class="mask" v-show="isShow" @click="handleArrow"></section>
      </div>
      <!-- 轮播图 Shuffling figure-->
      <div class="Shuffling">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/8d2af3ab55bf51d5ac03e5d9c6fa1fc4.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/2f9c81a130447f34424a16a40d66cbba.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/e1838f8442e7bfef014070ff902a698f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/dc972eece406987cbdd29f8849055d45.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/3b6044678c7d6ec12a1733657aa294ae.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/7c1ce80acc7625c23246cc99e9cd8f4a.png?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <!-- 服务保障，安全 -->
      <div class="Servesafety">
        <span class="text">
          <span>
            <i class="iconfont icon-yi" style="color:#b4282d"></i>
            网易自营品牌
          </span>
          <span>
            <i class="iconfont icon-dunpai1" style="color:#b4282d"></i>
            0天无忧退货
          </span>
          <span>
            <i class="iconfont icon-qian" style="color:#b4282d"></i>
            48小时快速退款
          </span>
        </span>
      </div>
      <!-- 滚动条的产品信息 -->
      <div class="ProductInfo">
        <!-- 事物图片 -->
        <div class="Producticon">
          <ul class="list">
            <li>
              <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" style="height:55px;width:55px" alt="">
              <span class="text">新品首发</span>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" style="height:55px;width:55px" alt="">
              <span class="text">居家生活</span>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png" style="height:55px;width:55px" alt="">
              <span class="text">服饰鞋包</span>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" style="height:55px;width:55px" alt="">
              <span class="text">美食酒水</span>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" style="height:55px;width:55px" alt="">
              <span class="text">个护清洁</span>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" style="height:55px;width:55px" alt="">
              <span class="text">母婴亲子</span>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" style="height:55px;width:55px" alt="">
              <span class="text">运动旅行</span>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" style="height:55px;width:55px" alt="">
              <span class="text">数码家电</span>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png" style="height:55px;width:55px" alt="">
              <span class="text">全球特色</span>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/3954c3cbeb4359dd7007be7a076e0dda.gif" style="height:55px;width:55px" alt="">
              <span class="text">超级会员</span>
            </li>
          </ul>
        </div>
        <!-- 新人专享礼 -->
        <div class="PerGift">
          <h3>新人专享礼</h3>
          <div class="content">
            <div class="left">
              <span class="LeftText">新人专享礼包</span>
              <div class="imgWrap">
                <img src="https://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="" style="width:100%;height:130px">
              </div>
            </div>
            <div class="right">
              <div class="top">
                <a href="javascript:">
                  <div class="picWrap">
                    <div class="lazyload">
                      <img src="https://yanxuan.nosdn.127.net/db352a1dc9f26050b9df09f763b2f936.png?imageView&thumbnail=200x200&quality=75" alt="">
                    </div>
                    <div class="discount">
                      <div>￥11</div>
                      <div class="line2">￥22</div>
                    </div>
                  </div>
                  <div class="cnt">
                      <span class="title">福利社</span>
                      <span class="subTitle">今日特价</span>
                  </div>
                </a>
              </div>
              <div class="bottom">
                <a href="javascript:">
                  <div class="picWrap">
                    <div class="lazyload">
                      <img src="https://yanxuan.nosdn.127.net/00382181864967c1125b75bd5289c8d3.png?imageView&thumbnail=200x200&quality=75" alt="">
                    </div>
                    <div class="discount">
                      <div>￥1</div>
                      <div class="line2">￥16</div>
                    </div>
                  </div>
                  <div class="cnt">
                      <span class="title">亲人拼团</span>
                      <span class="subTitle"></span>
                      <span class="tag">1元包邮</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- 品牌制造商直供manufacturers -->
        <div class="Manufacturers">
          <div class="moduleTitle">
            <span class="left">品牌制造商直供</span>
            <a class="right" href="javascript:">
              <span class="more">更多</span>
              <span class="lgticon">></span>
            </a>
          </div>
          <ul class="List">
            <a class="ListItem" href="javascript:">
              <img src="https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1" alt="">
              <div class="Listcontainer">
                <h4 class="title">海外制造商</h4>
                <div class="price">
                  <span class="PriceNumber">9.9</span>
                  <span class="PriceString">元起</span>
                </div>
              </div>
            </a>
            <a class="ListItem" href="javascript:">
              <img src="https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1" alt="">
              <div class="Listcontainer">
                <h4 class="title">CK制造商</h4>
                <div class="price">
                  <span class="PriceNumber">29.9</span>
                  <span class="PriceString">元起</span>
                </div>
              </div>
            </a>
            <a class="ListItem" href="javascript:">
              <img src="https://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1" alt="">
              <div class="Listcontainer">
                <h4 class="title">新秀制造商</h4>
                <div class="price">
                  <span class="PriceNumber">169</span>
                  <span class="PriceString">元起</span>
                </div>
              </div>
            </a>
            <a class="ListItem" href="javascript:">
              <img src="https://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png?imageView&thumbnail=343y260&enlarge=1" alt="">
              <div class="Listcontainer">
                <h4 class="title">Nine West制造商</h4>
                <div class="price">
                  <span class="PriceNumber">219</span>
                  <span class="PriceString">元起</span>
                </div>
              </div>
            </a>
          </ul>
        </div>
        <!-- 类目热销榜 -->
        <div class="HotSell">
          <div class="HotSellTitle">
            <span class="left">类目热销榜</span>
          </div>
          <div class="content">
            <ul class="ListTop">
              <a class="ListItem1" href="javascript:">
                <div class="Itemleft">
                  <span class="Lefttext">热销榜</span>
                </div>
                <div class="ItemImg">
                  <img src="https://yanxuan.nosdn.127.net/06388e29fad0b7e8a9d6b1f398e5dcd3.png?imageView&quality=65&thumbnail=200x200" alt="">
                </div>
              </a>
              <a class="ListItem2" href="javascript:">
                <div class="Itemright">
                  <span class="Lefttext">好评榜</span>
                </div>
                <div class="ItemImg">
                  <img src="https://yanxuan.nosdn.127.net/7dd208d4eb386ca3fc0f794963a0d70e.png?imageView&quality=65&thumbnail=200x200" alt="">
                </div>
              </a>
            </ul>
            <ul class="ListBottom" style="height:100px;width:100px">
              <a class="ListItem" href="javascript:">
                <div class="Item">
                  <span class="Life">居家生活榜</span>
                  <img src="https://yanxuan.nosdn.127.net/7110ef3a50fa078f3ea904d9453a5588.png?imageView&quality=65&thumbnail=200x200" alt="">
                </div>
              </a>
              <a class="ListItem" href="javascript:">
                <div class="Item">
                  <span class="Life">美食酒水榜</span>
                  <img src="https://yanxuan.nosdn.127.net/f0e6ed6b4903403f5fafbedfac2d299d.png?imageView&quality=65&thumbnail=200x200" alt="">
                </div>
              </a>
              <a class="ListItem" href="javascript:">
                <div class="Item">
                  <span class="Life">居家生活榜</span>
                  <img src="https://yanxuan.nosdn.127.net/7110ef3a50fa078f3ea904d9453a5588.png?imageView&quality=65&thumbnail=200x200" alt="">
                </div>
              </a>
              <a class="ListItem" href="javascript:">
                <div class="Item">
                  <span class="Life">美食酒水榜</span>
                  <img src="https://yanxuan.nosdn.127.net/f0e6ed6b4903403f5fafbedfac2d299d.png?imageView&quality=65&thumbnail=200x200" alt="">
                </div>
              </a>
            </ul>
            <ul class="ListBottom" style="height:100px;width:100px">
              <a class="ListItem" href="javascript:">
                <div class="Item">
                  <span class="Life">居家生活榜</span>
                  <img src="https://yanxuan.nosdn.127.net/7110ef3a50fa078f3ea904d9453a5588.png?imageView&quality=65&thumbnail=200x200" alt="">
                </div>
              </a>
              <a class="ListItem" href="javascript:">
                <div class="Item">
                  <span class="Life">美食酒水榜</span>
                  <img src="https://yanxuan.nosdn.127.net/f0e6ed6b4903403f5fafbedfac2d299d.png?imageView&quality=65&thumbnail=200x200" alt="">
                </div>
              </a>
              <a class="ListItem" href="javascript:">
                <div class="Item">
                  <span class="Life">居家生活榜</span>
                  <img src="https://yanxuan.nosdn.127.net/7110ef3a50fa078f3ea904d9453a5588.png?imageView&quality=65&thumbnail=200x200" alt="">
                </div>
              </a>
              <a class="ListItem" href="javascript:">
                <div class="Item">
                  <span class="Life">美食酒水榜</span>
                  <img src="https://yanxuan.nosdn.127.net/f0e6ed6b4903403f5fafbedfac2d299d.png?imageView&quality=65&thumbnail=200x200" alt="">
                </div>
              </a>
            </ul>
          </div>
        </div>
        <!-- 人气推荐  popular-->
        <div class="PopularInfo">
          <div class="InfoTitle">
            <span class="left">人气推荐</span>
            <a class="right" href="javascript:">
              <span class="more">更多</span>
              <span class="lgticon">></span>
            </a>
          </div>
          <ul class="InfoItem">
            <a class="InfoTop" href="javascript:">
              <span class="ItemLeft">
                <img src="https://yanxuan.nosdn.127.net/85a480bd9a852da923b8d3b5c7f7b759.png?imageView&quality=65&thumbnail=280x280" alt="">
              </span>
              <div class="ItemRight">
                <div class="news">
                  <!-- 优惠券 coupon -->
                  <span class="coupon">每满99减15券</span>
                </div>
                <span class="name">全棉针织条纹大豆纤维夏被 可机洗</span>
                <span class="dec">可裸睡针织棉，植物抗菌柔弹</span>
                <div class="price">
                  <span>￥</span>
                  <span>199</span>
                </div>
              </div>
            </a>
            <a class="InfoBottom" href="javascript:">
              <ul class="ListBottom">
                <div class="Item">
                  <img src="https://yanxuan.nosdn.127.net/4114839cec128a22b8f60ddafec3f944.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="Life">红豆薏米丸 100克</span>
                  <span class="price">￥39</span>
                  <p class="addPrice">加购价</p>
                </div>
                <div class="Item">
                  <img src="https://yanxuan.nosdn.127.net/4114839cec128a22b8f60ddafec3f944.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="Life">红豆薏米丸 100克</span>
                  <span class="price">￥39</span>
                  <p class="addPrice">加购价</p>
                </div>
                <div class="Item">
                  <img src="https://yanxuan.nosdn.127.net/4114839cec128a22b8f60ddafec3f944.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="Life">红豆薏米丸 100克</span>
                  <span class="price">￥39</span>
                  <p class="addPrice">加购价</p>
                </div>
              </ul>
            </a>
          </ul>
        </div>
        <!-- 限时购 -->
        <div class="SellTime">
          <div class="SellTitle">
            <span class="left">限时购</span>
            <div class="middle">
              <span class="middleNumber">00</span>
              <span>:</span>
              <span class="middleNumber">00</span>
              <span>:</span>
              <span class="middleNumber">14</span>
            </div>
            <a class="right" href="javascript:">
              <span class="more">更多</span>
              <span class="lgticon">></span>
            </a>
          </div>
          <div class="Sellmiddle">
            <a class="MiddleItem" href="javascript:">
              <img src="https://yanxuan.nosdn.127.net/30cb11f1fbc360fb701bd735ea6deb2b.jpg?imageView&thumbnail=216x216&quality=75" alt="">
              <div class="Middldiscount">
                <div>￥219</div>
                <div class="Middleline2">￥399</div>
              </div>
            </a>
            <a class="MiddleItem" href="javascript:">
              <img src="https://yanxuan.nosdn.127.net/30cb11f1fbc360fb701bd735ea6deb2b.jpg?imageView&thumbnail=216x216&quality=75" alt="">
              <div class="Middldiscount">
                <div>￥219</div>
                <div class="Middleline2">￥399</div>
              </div>
            </a>
            <a class="MiddleItem" href="javascript:">
              <img src="https://yanxuan.nosdn.127.net/30cb11f1fbc360fb701bd735ea6deb2b.jpg?imageView&thumbnail=216x216&quality=75" alt="">
              <div class="Middldiscount">
                <div>￥219</div>
                <div class="Middleline2">￥399</div>
              </div>
            </a>
            <a class="MiddleItem" href="javascript:">
              <img src="https://yanxuan.nosdn.127.net/30cb11f1fbc360fb701bd735ea6deb2b.jpg?imageView&thumbnail=216x216&quality=75" alt="">
              <div class="Middldiscount">
                <div>￥219</div>
                <div class="Middleline2">￥399</div>
              </div>
            </a>
            <a class="MiddleItem" href="javascript:">
              <img src="https://yanxuan.nosdn.127.net/30cb11f1fbc360fb701bd735ea6deb2b.jpg?imageView&thumbnail=216x216&quality=75" alt="">
              <div class="Middldiscount">
                <div>￥219</div>
                <div class="Middleline2">￥399</div>
              </div>
            </a>
            <a class="MiddleItem" href="javascript:">
              <img src="https://yanxuan.nosdn.127.net/30cb11f1fbc360fb701bd735ea6deb2b.jpg?imageView&thumbnail=216x216&quality=75" alt="">
              <div class="Middldiscount">
                <div>￥219</div>
                <div class="Middleline2">￥399</div>
              </div>
            </a>
          </div>
        </div>
        <!-- 新品首发 -->
        <div class="Update">
          <div class="UpdateTitle">
            <span class="left">人气推荐</span>
            <a class="right" href="javascript:">
              <span class="more">更多</span>
              <span class="lgticon">></span>
            </a>
          </div>
          <div class="UpdateTop">
            <a class="UpdateBottom" href="javascript:">
              <ul class="ListBottom">
                <div class="Item">
                  <img src="https://yanxuan.nosdn.127.net/a40fd46da5dcb4b91412272f331a61f5.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="Life">网易智造四季全屏循环扇￥299</span>
                  <p class="addPrice">满赠</p>
                </div>
                <div class="Item">
                  <img src="https://yanxuan.nosdn.127.net/609452a430143ec9e691abddb067ec67.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="Life">全价成猫粮 1.8千克￥99</span>
                </div>
                <div class="Item">
                  <img src="https://yanxuan.nosdn.127.net/20818ef4e7d98ca6356b3ee59cc315ea.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="Life">福禄寿喜 银铸金手镯￥1388</span>
                </div>
              </ul>
              <ul class="ListBottom">
                <div class="Item">
                  <img src="https://yanxuan.nosdn.127.net/a40fd46da5dcb4b91412272f331a61f5.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="Life">网易智造四季全屏循环扇￥299</span>
                  <p class="addPrice">满赠</p>
                </div>
                <div class="Item">
                  <img src="https://yanxuan.nosdn.127.net/609452a430143ec9e691abddb067ec67.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="Life">全价成猫粮 1.8千克￥99</span>
                </div>
                <div class="Item">
                  <img src="https://yanxuan.nosdn.127.net/20818ef4e7d98ca6356b3ee59cc315ea.png?imageView&quality=65&thumbnail=330x330" alt="">
                  <span class="Life">福禄寿喜 银铸金手镯￥1388</span>
                </div>
              </ul>
            </a>
          </div>
        </div>

        <!-- 底部轮播图 -->
       <Classify/>
      </div>

  </div>
</template>

<script type="text/ecmascript-6">
 import Classify from './Classify.vue'
 import BScroll from 'better-scroll'
 import Swiper from 'swiper'
 import 'swiper/dist/css/swiper.css'
  export default {
    name:'Home',
    components:{
      Classify
    },
    data(){
      return{
        isArrow:true,
        isShow:false,
        newindex:0,
        navList:['推荐','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运动旅行','数码家电','全球特色']
      }
    },
    
    methods:{
      handleArrow () {
        this.isArrow = !this.isArrow
        this.isShow = !this.isShow
      },
      
    },
    mounted(){
      new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination'
        }
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'

.Home
  padding-bottom 100px
  height 100%
  width 100%
  overflow hidden
  .headerTop
    position fixed
    margin-bottom 44px
    background-color #fff
    z-index 30
    .header
      height 44px
      display flex
      align-items center
      line-height 36px
      padding 4px 20px
      z-index 40
      .logo
        height 20px
      .input
        height  29px
        width 221px
        margin 0 4px 0 5px
        line-height 28px
        border-radius 1px
        background-color #ededed
        text-align center
        margin 0 10px
        .iconfont
          width 14px
        .placeholder
          height 21px
          width 159px
          font-size 14px
          color #666
          text-indent 14px
      a
        color #b4282d
        font-size 12px
        display block
        width 40px
        height 20px
        border 1px solid #b4282d
        text-align center
        line-height 20px
        border-radius 4px
    .headerNav
      width 375px
      height 33px
      position relative
      .headerList
        color #333
        font-size 14px
        white-space nowrap
        float left
        .item
          height 33px
          margin 0 6px
          line-height 33px
          display inline-block
          text-align center
          &.active
            border-bottom 1px solid #b4282d
            color #b4282d
      //箭头
      .arrow
        width 60px
        height 30px
        background-color #fff
        z-index 60
        position absolute
        top 0
        right 0
        transition all 1s
        img 
          position absolute
          top 0
          right 10px
        .downArrow
          transform rotate(0deg)
          transition all 0.5s
        .upArrow
          transform rotate(180deg)
          transition all 0.5s
      // 遮罩上的数据
      .maskShop
        background-color #fff
        height 186px
        width 100%
        color #333
        position absolute
        top 0
        left 0
        z-index 10
        .maskTitle
          width 100%
          height 30px
          line-height 30px
          font-size  14px
          padding-left 15px
        .headerList
          padding 24px 0 0 0
          li
            width 75px
            height 28px
            line-height 28px
            text-align center
            border 1px solid #ccc
            border-radius 2px
            float left
            font-size 12px
            margin 0 0 20px 15px
            background-color #fafafa
            &.active
              color #b4282d
              border-color #b4282d
    //遮罩
    .mask
      position absolute
      left 0
      right 0
      top 40px
      bottom 0
      margin auto
      background-color white
  //轮播图
  .Shuffling
    height 185px
    width 100%
    margin-top 88px
    position fixed
      // 轮播图
    .swiper-container
      height 100%
      width 100%
      .swiper-wrapper
        .swiper-slide
          img 
            height 100%
            width 100%        
  // 服务保障
  .Servesafety
    width 100%
    height 36px
    .text
        font-size 12px
        height 100%
        width 100%
        line-height 36px
        margin 0 16px
        span 
          margin-right 12px
  // 滚动条的产品信息
  .ProductInfo
    width 100%
    .Producticon
      width 100%
      height 180px
      border-bottom 10px solid #eee
      box-sizing border-box
      .list
        margin-left 10px
        li
          display flex
          flex-direction column
          margin 0 8px
          float left
          .text
            font-size 12px
            white-space nowrap
            line-height 12px
            margin-top 6px
  // 新人专享礼
  .PerGift
    width 100%
    height 270px
    border-bottom 10px solid #eee
    h3
      height 45px
      width 100%
      line-height 45px
      text-align center
      color #333
      position relative
      &::before
        content:''
        position absolute
        top 22px
        left 34%
        height 1px
        width 12px
        background #333
      &::after
        content:''
        position absolute
        top 22px
        right 34%
        height 1px
        width 12px
        background #333
    .content
      height 220px
      width 100%
      .left
        display block
        height 217px
        width 172px
        background-color #F9E9CF
        float left
        margin-left 12px
        border-right 3px solid #eee
        .LeftText
          height 36px
          line-height 36px
          padding 0 25px
        .imgWrap
          height 150px
          width 130px
          position relative
          margin 15px auto
          img 
            width 150px
            height 150px
      .right
        height 219px
        width 165px
        float right 
        margin-right 12px
        .top
          width 100%
          height 108px
          background-color #FBE2D3 
          border-bottom 3px solid #fff
          a
            display block
            color #333
            width 140px
            height 90px
            border-radius 2px
            font-size 20px
            padding 20px 0 0 14px
            position relative
            .picWrap
              width 100px
              height 100px
              position absolute
              right 0
              top 0
              .lazyload
                width 100px
                height 100px
                img 
                  display inline
                  width 100%
                  height auto
              .discount
                background #F59524
                position absolute
                top 13px
                right -6px
                width 35px
                height 25px
                padding-top 8px
                border-radius 50%
                color #fff
                text-align center
                opacity 0.8
                font-size 9px
                .line2
                  text-decoration line-through
                  margin-top 2px
                  font-size 8px
            .cnt
              position relative
              .title
                position absolute
                top 0
                left 0
                font-size 16px
              .subTitle
                color #7F7F7F
                font-size 12px
                position absolute
                top 20px
                left 0
        .bottom
          width 100%
          height 108px
          background-color #FFECC2
          a
            display block
            color #333
            width 140px
            height 90px
            border-radius 2px
            font-size 20px
            padding 20px 0 0 14px
            position relative
            .picWrap
              width 100px
              height 100px
              position absolute
              right 0
              top 0
              .lazyload
                width 100px
                height 100px
                img 
                  display inline
                  width 100%
                  height auto
              .discount
                background #F59524
                position absolute
                top 13px
                right -6px
                width 35px
                height 25px
                padding-top 8px
                border-radius 50%
                color #fff
                text-align center
                opacity 0.8
                font-size 9px
                .line2
                  text-decoration line-through
                  margin-top 2px
                  font-size 8px
            .cnt
              position relative
              .title
                position absolute
                top 0
                left 0
                font-size 16px
              .subTitle
                color #7F7F7F
              .tag
                position relative
                top 16px
                display inline-block
                padding 8px
                height 2px
                background #CBB693
                border-radius 2px
                color #fff
                font-size 12px
                line-height 2px
                text-align center

  //品牌制造商直供
  .Manufacturers
    height 320px
    width 100%
    border-bottom 10px solid #eee
    .moduleTitle
      width 100%
      background #fff
      line-height 40px
      overflow hidden
      .left
        float left
        font-size 17px
        padding-left 12px
      .right
        height 100%
        float right
        display block
        font-size 14px
        color #333
        padding-right 12px
    .List
      width 100%
      height 280px
      overflow hidden
      position relative
      padding-left 16px
      .ListItem
        display inline-block
        height 130px
        width 170px
        margin 0 0px 10px
        border-radius 2px
        background-color #eee
        position relative
        img
          height 100%
          width 100%
        .Listcontainer
          width 100%
          text-align center
          position absolute
          top 0
          left 0
          padding-top 10px
          z-index 6
          .title
            color #333
            margin-bottom 4px
            font-size 14px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            line-height 16px
          .price
            color #7F7F7F
            font-size 12px
  //热销榜
  .HotSell
    width 100%
    height 342px
    border-bottom 10px solid #eee
    .HotSellTitle
      float left
      font-size 17px
      padding-left 12px
      background #fff
      height 50px
      width 100%
      .left
        line-height 50px
    .content
      padding-top 50px
      height 305px
      width 100%
      .ListTop
        width 100%
        height 100px
        margin-left 8px
        border-bottom 2px solid #eee
        .ListItem1
          height 100px
          width 170px
          float left
          margin 0 2px 0
          position relative
          color #333
          .Itemleft
            height 100%
            position relative
            background #F9F3E4
            .Lefttext
              font-size 14px
              width 100%
              position absolute
              top 30px
              left 15px
              z-index 6
              &::after
                content ''
                position absolute
                left 0
                bottom -10px
                height 2px
                width 25px
                background #333
          .ItemImg
            height 100px
            width 100px
            position absolute
            right 0
            top 0
            img 
              height 100%
              width 100%
        .ListItem2
          height 100px
          width 175px
          float right
          position relative
          margin-right 17px
          color #333
          .Itemright
            height 100%
            position relative
            background #EBEFF6
            .Lefttext
              font-size 14px
              width 100%
              position absolute
              top 30px
              left 15px
              z-index 6
              &::after
                content ''
                position absolute
                left 0
                bottom -10px
                height 2px
                width 25px
                background #333
          .ItemImg
            height 100px
            width 100px
            position absolute
            right 0
            top 0
            img 
              height 100%
              width 100%
      .ListBottom
        width 100%
        height 220px
        margin-left 8px
        display flex
        white-space wrap 
        .ListItem
          height 90px
          width 100%
          margin 4px 5px
          float left
          display block
          background #F5F5F5
          .Item
            height 100%
            width 100%
            .Life
              margin-top 10px
              text-align center
              font-size 12px
              color #333
            img
              width 70px
              height 70px
              margin 0 0 0 9px
  //人气推荐
  .PopularInfo
    height 320px
    width 100%
    border-bottom 10px solid #eee
    .InfoTitle
      width 100%
      background #fff
      line-height 50px
      overflow hidden
      .left
        float left
        font-size 17px
        padding-left 12px
      .right
        height 100%
        float right
        display block
        font-size 14px
        color #333
        padding-right 12px
    .InfoItem
      width 100%
      height 280px
      overflow hidden
      .InfoTop
        display inline-block
        height 130px
        width 340px
        border-radius 2px
        margin 2px 14px
        background-color #FEF0DF
        .ItemLeft
          float left
          width 130px
          height 130px
          margin-right 6px
          img
            height 100%
            width 100%
        .ItemRight
          float right
          width 200px
          display flex
          flex-direction column
          justify-content center 
          .news
            width 170x
            height 15px
            margin-bottom 2px
            .coupon
              background-image url(//yanxuan.nosdn.127.net/ed89ab4f5ad97ad23257f635a9c2fdbb.png),url(//yanxuan.nosdn.127.net/344655c651a5cf17b7d6096b69be7aba.png),url(//yanxuan.nosdn.127.net/6dcff693a2be08725c1313c7e2390840.png)
              background-repeat no-repeat
              background-size auto 100%,auto 100%,100% 100%
              background-position left center,right center,center center
              border none
              border-radius 2px
              padding 2px
              height 15px
              line-height 10px
              font-size 4px
              color #B4282D
              background rgba(255,255,255,.9)
          .name
            font-size 18px
            width 20px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
          .dec
            font-size 8px
          .price
            font-size 8px
      .InfoBottom
        display inline-block
        height 130px
        width 340px
        border-radius 2px
        margin 0px 14px
        .ListBottom
          height 130px
          width 108px
          display flex
          .Item
            margin-left 12px
            padding-bottom 5px
            display flex
            flex-direction column
            img
              height 85px
              width 106px
            .Life
              font-size 5px
              overflow visible
              white-space normal
              text-overflow ellipsis
              line-height 12px
              color #333
              display inline-block
            .addPrice
              display inline-block
              color #CE2424
              border 1px solid #CE2424
              font-size 8px
              border-radius 5px
              padding-right 10px
              vertical-align middle
              width 30px
  //限时购
  .SellTime
    height 350px
    width 100%
    border-bottom 10px solid #eee
    .SellTitle
      width 100%
      line-height 50px
      overflow hidden
      margin-left 12px
      .left
        float left
        font-size 17px
      .middle
        float left
        font-size 17px
        padding-left 20px
        display inline-block
        vertical-align middle
        margin 0 0 0 2px
        .middleNumber
          height 18px
          width 18px
          background-color #333
          color #fff
          text-align center
          line-height 18px
      .right
        height 100%
        float right
        display block
        font-size 14px
        color #333
        padding-right 12px
    .Sellmiddle
      width 100%
      height 150px
      margin-left 4px
      display flex
      flex-wrap wrap
      .MiddleItem
        margin-left 8px
        float left
        img
          height 130px
          width 112px
        .Middldiscount
          color #b4282d
          font-size 14px
          padding-left 7px
          display flex
          .Middleline2
            text-decoration line-through
            color #7F7F7F
            padding-left 4px
  //新品首发
  .Update
    height 320px
    width 100%
    border-bottom 10px solid #eee
    .UpdateTitle
      width 100%
      background #fff
      line-height 50px
      overflow hidden
      .left
        float left
        font-size 17px
        padding-left 12px
      .right
        height 100%
        float right
        display block
        font-size 14px
        color #333
        padding-right 12px
    .UpdateBottom
        display inline-block
        height 130px
        width 340px
        border-radius 2px
        margin 0px 14px
        .ListBottom
          height 130px
          width 108px
          display flex
          .Item
            margin-left 12px
            padding-bottom 5px
            display flex
            flex-direction column
            img
              height 85px
              width 106px
            .Life
              font-size 5px
              overflow visible
              white-space normal
              text-overflow ellipsis
              line-height 12px
              color #333
              display inline-block
            .price
              display inline-block
              font-size 5px
              color #b4282d
              overflow visible
              white-space normal
              text-overflow ellipsis
              margin-top 0px
            .addPrice
              display inline-block
              color #CE2424
              border 1px solid #CE2424
              font-size 8px
              border-radius 5px
              padding-right 10px
              vertical-align middle
              width 30px
  //底部轮播图
 
  
</style>
