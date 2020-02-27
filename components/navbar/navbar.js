// components/navbar/navbar.js
var app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pageName: {
      type: String,
      value: ""
    },
    titleColor: {
      type: String,
      value: "#fff"
    },
    titleSize: {
      type: String,
      value: "40rpx"
    },
    showBack: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    bgColor: "#cccccc",
    navTop: app.globalData.navTop + 2,
    navHeight: app.globalData.navHeight,
    windowHeight: app.globalData.windowHeight,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
