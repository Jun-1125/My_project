<template>
  <div>
    <FooterGuide v-if="$route.meta.isShowFooter"/>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from '../src/components/FooterGuide/FooterGuide.vue'
  export default {
    name:'App',
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  
 
</style>
