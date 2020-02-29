//app.js
App({
  
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          wx.request({
            url: 'http://192.168.35.211:8080/mini/initUserInfo',
            data: {
              code: res.code
            },
            success(res) {
              wx.setStorageSync("openid", res.data.openid);
              wx.setStorageSync("session_key",res.data.session_key);
              //判断是否是已注册过的用户
              wx.request({
                url: 'http://dzfp.lexy.cn/wechatmini/mini/checkUser',
                data: {
                  openid: wx.getStorageSync("openid")
                },
                success(res) {
                  if (!res.data.flag) {
                    console.log(res);
                    wx.navigateTo({
                      url: '/pages/mine/userinfo',
                    })
                  }else {
                     //通过
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
    
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top,//胶囊按钮与顶部的距离
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2;//导航高度
        this.globalData.navHeight = navHeight;
        this.globalData.navTop = navTop;
        this.globalData.windowHeight = res.windowHeight;
      },
      fail(err) {
        console.log(err);
      }
    })
  },
  globalData: {
    userInfo: null,
    hasUserInfo: false,
    statusBarHeight: wx.getSystemInfoSync()['statusBarHeight']
  }
})