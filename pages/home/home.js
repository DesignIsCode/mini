// pages/home/home.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "hello,mina",
    indicatorDots: false,//是否显示圆点
    autoplay: true, //是否自动播放
    interval: 10000, //自动切换时间间隔
    duration: 2000,//滑动动画时长
    imgUrls: ['/images/img01.png'] //轮播的图片
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

  },
  // getUserInfo: function(e){
  //   console.log("getUserInfo");
  //   console.log(e);
    
    
  //   //const {userInfo} = e.detail;
  //   //将数据缓存
  //   //wx.setStorageSync("userInfo", userInfo);
  // }
})