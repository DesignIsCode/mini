// pages/home/home.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,//是否显示圆点
    autoplay: true, //是否自动播放
    interval: 10000, //自动切换时间间隔
    duration: 2000,//滑动动画时长
    imgUrls: ['/images/1.jpg','/images/2.jpg'], //轮播的图片,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //判断是否是已注册过的用户
    // wx.request({
    //   url: 'http://192.168.35.211:8080/mini/checkUser',
    //   data: {
    //     openid: wx.getStorageSync("openid")
    //   },
    //   success(res) {
    //     if (!res.data.flag) {
    //       console.log(res);
    //       wx.navigateTo({
    //         url: '/pages/mine/userinfo',
    //       })
    //     }else {
    //        //通过
    //     }
    //   }
    // })
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