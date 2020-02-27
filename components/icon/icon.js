// components/icon/icon.js
Component({
  options: {
    addGlobalClass: true
  },
  externalClasses: ['custom-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    info: null,
    name: String,
    size: String,
    color: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClickqiehuanqizuo() {
      wx.navigateBack({
        delta: 1
      })    
    }
  }
})
