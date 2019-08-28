//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
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
  },

  

  globalData: {
    userInfo: null
  },
  getExpressInfo: function (nu, cb) {
    wx.request({
      // url: 'https://www.kuaidi100.com/query?type=yuantong&postid=YT4042013613380',
      // url: "https://m.kuaidi100.com/app/query/?com=yuantong&nu=YT4042013613380&coname=lcj&callbackurl=m.kuaidi100.com",   
      url: "http://api.kdniao.com/Ebusiness/EbusinessOrderHandle.aspx?EBusinessID=test1572883&DataType=2&RequestType=1002&RequestData=%7b%22OrderCode%22%3a%22%22%2c%22ShipperCode%22%3a%22SF%22%2c%22LogisticCode%22%3a%221234561%22%2c%22IsHandleInfo%22%3a%220%22%7d&DataSign=YTNhMjZhNDM3ZWFhYTY0MmEzMzk1ZDYzMTU3ZWQ1ODc",
      data: {
        ShipperCode: "yuantong",
        LogisticCode: "YT4042013613380"
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded;'
      },
      success: function (res) {
        cb(res)
      }
    })
  },

  // getcompony: function(cb){
  //   wx.request({
  //     url: 'http://api.kdniao.com/Ebusiness/EbusinessOrderHandle.aspx',
  //     data: {
  //       LogisticCode: "3967950525457"
  //     },
  //     success: function(res){
  //       cb(res)
  //     }
  //   })
  // }
})