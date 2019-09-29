// pages/Jilu/Jilu.js
Page({

  /**
   * Page initial data
   */
  data: {
    jilu: [{ type: 0, pt: "智慧课堂", qs: "老师在备课中添加任务后确定不动" }, { type: 1, pt: "智慧课堂", qs: "老师在备课中添加任务后确定不动" }, { type: 2, pt: "智慧课堂", qs: "老师在备课中添加任务后确定不动"}],
    trans: ['待受理', '已受理', '维护完成'],
    statusimg: ['/images/daishouli.png.png','/images/yishouli.png.png','/images/zhengque.png.png'],
    name: "1"
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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

  clickme: function (e) {
    this.setData({
      name: e.detail.name
    })
  }
})