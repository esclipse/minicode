//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  globalData: {
    userInfo: null
  },

  getExpressInfo: function (nu, cb) {
    wx.request({
      url: 'https://www.kuaidi100.com/query?type=yuantong&postid=YT4042013613380',   
      data: {},
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded;'
      },
      success: function (res) {
        cb(res)
      }
    })
  },
})