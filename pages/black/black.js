// pages/black/black.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    //判断是否是已注册过的用户
    
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          if (res.code) {
            wx.request({
              url: 'http://test.lexy.cn:8080/mini/initUserInfo',
              data: {
                code: res.code
              },
              success(res) {
                //这里的属性可能还不全还没有处理unionid
                wx.setStorageSync("openid", res.data.openid);
                wx.setStorageSync("session_key",res.data.session_key);
                
                wx.request({
                  url: 'http://test.lexy.cn:8080/mini/checkUser',
                  data: {
                    openid: wx.getStorageSync("openid")
                  },
                  success(res) {
                    if (!res.data.result) {
                      wx.navigateTo({
                        url: '/pages/mine/userinfo',
                      })
                    }else {
                      console.log(res.data.user);
                       //通过
                       wx.switchTab({
                        url: '/pages/home/home',
                      })
                    }
                  }
                })
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    
    
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

  }
})