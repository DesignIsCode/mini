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
        sms_text: vsecond+"s后重新发送"
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
    console.log(wx.getStorageSync('unionid'));  
    console.log(app.globalData.userInfo);
    wx.request({
      url: 'http://127.0.0.1:8080/mini/addUser',
      data: {
        username: e.detail.value.username,
        phonenumber: e.detail.value.phonenumber,
        idcard: e.detail.value.idcard,
        wxopenid: wx.getStorageSync('openid'),
        unionid: wx.getStorageSync('unionid'),
        sessionkey: wx.getStorageSync('session_key'),
        iv: wx.getStorageSync('iv'),
        verifycode: e.detail.value.verifycode 
      }
    })
  }
})