// pages/User/baoxiulog/baoxiulog.js;
var app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    logid: ""
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
  // event
  changeValue: function (e) {
    // console.log(e.detail.value,'value')
    this.setData({
      logid: e.detail.value
    })
  },

  searchLog : function () {
    console.log(this.data.logid);
    app.getExpressInfo(this.data.logid,function(data){
      console.log(data)
    })
  },

})