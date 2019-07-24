
// 包含n个用于间接修改状态数据的方法的对象

// api上的接口请求函数
import {
    reqHomeData,
    reqCategoryData,
    reqCategoryListData,
    reqThingsData,
    reqThingsNav,
    reqSearchInitialData,
    reqFehelper
  } from '../api'

import {
    RECEIVE_HOMEDATA,
    RECEIVE_CATEGORY,
    RECEIVE_SEARCHINITIAL,
    RECEIVE_THINGSDATA,
    RECEIVE_THINGSNAV,
    RECEIVE_FEHELPER
} from './mutation_type'
  
export default {
    // 间接修改状态state数据。将数据信息传递给mutation，由mutation直接去修改状态数据

   
 async getHomeData({commit},data){
    //发送异步ajax请求   
      //有顺序要求  reqHomeData返回的一个promise   和index.js中的地址传递位置
    const result = await reqHomeData () 
    // 有结构后，提交mutation
    if(result.code===0){
      //提交  commit
      commit(RECEIVE_HOMEDATA,result.data)//提交会触发mutations调用
    }
  },

  async getCategoryData({commit},callback){
    //发送异步ajax请求   
      //有顺序要求  reqCategoryData返回的一个promise   和index.js中的地址传递位置
    const result = await reqCategoryData () 
    console.log(result)
    // 有结构后，提交mutation
    if(result.code===0){
      //提交  commit
      commit(RECEIVE_CATEGORY,result.data)//提交会触发mutations调用
      callback()
    }
  },

  async getCategoryListData({commit}){
    //发送异步ajax请求   
      //有顺序要求  reqCategoryListData返回的一个promise   和index.js中的地址传递位置
    const result = await reqCategoryListData () 
    // 有结构后，提交mutation
    if(result.code*1 === 200){
      //提交  commit
      commit(RECEIVE_SEARCHINITIAL,result.data)//提交会触发mutations调用
    }
  },

/*   async getThingsNav({commit},callback){
    //发送异步ajax请求   
      //有顺序要求  reqThingsNav返回的一个promise   和index.js中的地址传递位置
    const result = await reqThingsNav () 
    // 有结构后，提交mutation
    if(result.code*1 === 200){
      //提交  commit
      commit(RECEIVE_THINGSNAV,result.data)//提交会触发mutations调用
      callback()
    }
  }, */

  async reqThingsData({commit}) {
    //发异步ajax请求
    const result = await reqThingsData ()
    if (result.code*1 === 200) {
      commit(RECEIVE_THINGSDATA,result.data)
    }
  },

  async getFehelper({commit}) {
    //发异步ajax请求
    const result = await reqFehelper ()
    // console.log(result)
    if (result.code === 0) {
      commit(RECEIVE_FEHELPER,result.data)
    }
  },


  // 搜索
  async getSearchInitialData ({commit}) {
    const result = await reqSearchInitialData()
    if (result.code*1 === 200) {
      commit(RECEIVE_SEARCHINITIAL,result.data)
    }
  },
  
}