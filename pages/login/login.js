// pages/login/login.js
Page({

  /**
   * Page initial data
   */
  data: {
  
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // wx.checkSession({
    //   success() {
    //     // session_key 未过期，并且在本生命周期一直有效;
    //     console.log('hello world');
    //     wx.switchTab({
    //       url: '../index/index',
    //     })
    //   },
    //   fail() {
    //     // session_key 已经失效，需要重新执行登录流程
    //     //重新登录
    //     console.log('pls login again')
    //   }
    // })
    wx.getSetting({
      success: function(res) {
        const userInfoAuth = res.authSetting['scope.userInfo'];
        if(userInfoAuth){
          wx.switchTab({
            url: '../index/index',
          })
        }
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  onGotUserInfo: function () {
    let that = this;
    wx.getSetting({
      success(res) {
        // console.log("res", res)
        if (res.authSetting['scope.userInfo']) {
          console.log("已授权=====");
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              const { nickName, avatarUrl } = res.userInfo;
              const userinfo = {
                nickName,
                avatarUrl
              }
              wx.login({
                success: function(res){
                  console.log(res.code,res)
                  wx.request({
                    url: 'http://localhost/login',
                    data: {
                      code: res.code,
                      nickName,
                      avatarUrl,
                    },
                    method: "post",
                    header: {
                      'content-type': "application/json"
                    },
                    success: function (res) {
                      wx.setStorageSync('userinfo', userinfo)
                      wx.switchTab({
                        url: '../index/index'
                      })
                    },
                    fail: function (err) {
                      console.log(err,'error')
                    }
                  })
                }
              })
            },
            fail(res) {
              console.log("获取用户信息失败", res)
            }
          })
        } else {
          console.log("未授权=====")
        }
      }
    })
  },
})