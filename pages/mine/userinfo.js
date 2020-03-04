// pages/mine/userinfo.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    send: true,
    second: 60,
    reSend: true,
    sms_text: "发送验证码"
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
  sendSms: function(e){
    var vsecond = 60;
    var that = this;

    //这里发送短信
    

    var appCount = setInterval(function(){
      vsecond -=1;
      that.setData({
        second: vsecond,
        send: false,
        sms_text: vsecond+"s后重发"
      })
      if(vsecond < 1){
        clearInterval(appCount);
        that.setData({
          send: true,
          second: 60,
          reSend: true,
          sms_text: "发送验证码"
        })
      }
    },1000);
  },
  formSubmit: function(e){
    console.log(e.detail.value);
    console.log(wx.getStorageSync('openid'));
    console.log(wx.getStorageSync('session_key'));
    wx.request({
      url: 'http://test.lexy.cn:8080/mini/addUser',
      data: {
        username: e.detail.value.username,
        phonenumber: e.detail.value.phonenumber,
        idcard: e.detail.value.idcard,
        openid: wx.getStorageSync('openid'),
        verifycode: e.detail.value.verifycode 
      },
      success(res) {
        console.log(res);
         if(res.data){
            wx.switchTab({
              url: '/pages/home/home',
              success: (result) => {
                
              },
              fail: () => {},
              complete: () => {}
            });
              
         }
      }
    })
  }
})