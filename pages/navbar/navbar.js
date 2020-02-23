// pages/navbar/navbar.js
var app = getApp();

Page({
  options: {
    addGlobalClass: true,
  },

  /**
   * 页面的初始数据
   */
  data: {
    bgColor: '#FF4040',
    title: '123',
    navTop: app.globalData.navTop,
    navHeight: app.globalData.navHeight,
    windowHeight: app.globalData.windowHeight,
    showNav: true
  },

  /**
   * 属性
   * @param {*} options 
   */
  properties: {
    title: {			// 设置标题
      type: String,
      value: '123'
    },
    showNav: {			// 控制返回箭头是否显示
      type: Boolean,
      value: false
    }
  },
  methods: {
    //回退
    navBack: function(){
      wx.navigateBack({
        delta: 1
      })   
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(this.data.navTop)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})