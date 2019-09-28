// pages/User/User.js
// const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    userimg: [
      '../../images/baoxiujilu.png.png',
      '../../images/weixiujilu.png.png',
      '../../images/wentifangkui.png.png',
      '../../images/lianxikefu.png.png',
      '../../images/guanyuwm.png.png',
      ],
    avatarUrl: '',
    nickName: ""
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const { nickName, avatarUrl } = wx.getStorageSync('userinfo');
    this.setData({
      nickName,
      avatarUrl
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

  }
})