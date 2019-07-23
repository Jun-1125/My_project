// 包含n个用于直接修改状态数据的方法的对象


import {
    RECEIVE_HOMEDATA,
    RECEIVE_CATEGORY,
    RECEIVE_SEARCHINITIAL,
    RECEIVE_THINGSNAV,
    RECEIVE_THINGSDATA
} from './mutation_type'
export default {
/* [RECEIVE_HOMEDATA](state, 自定义的实参address2) {
    不可变的，因为是本身的状态state.address = address2
  }, */
  // 根据首页获取后台数据信息
  [RECEIVE_HOMEDATA](state,homeData) {
    state.homeData = homeData
  },

  // 获取分类数据
  [RECEIVE_CATEGORY](state, data) {
    state.categoryData = data
  },
  
  // 获取搜索信息
  [RECEIVE_SEARCHINITIAL](state, data) {
    state.searchInitialData = data
  },

  // 识物界面数据获取
  [RECEIVE_THINGSNAV] (state,data) {
    state.thingsNav = data
  },
  
  [RECEIVE_THINGSDATA] (state,data) {
    state.thingsData = data
  }
}