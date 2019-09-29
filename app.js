//app.js
App({
  onLaunch: function (options) {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
    // 判断是否由分享进入小程序
    if (options.scene == 1007 || options.scene == 1008) {
      this.globalData.share = true
    } else {
      this.globalData.share = false
    };
    //获取设备顶部窗口的高度（不同设备窗口高度不一样，根据这个来设置自定义导航栏的高度）
    //这个最初我是在组件中获取，但是出现了一个问题，当第一次进入小程序时导航栏会把
    //页面内容盖住一部分,当打开调试重新进入时就没有问题，这个问题弄得我是莫名其妙
    //虽然最后解决了，但是花费了不少时间
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.height = res.statusBarHeight
      }
    })
  },

  globalData: {
    userInfo: null,
    share: false,  // 分享默认为false
    height: 0,
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