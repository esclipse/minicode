// pages/Jilu/Jilu.js
Page({

  /**
   * Page initial data
   */
  data: {
    jilu: [{ type: 0, pt: "智慧课堂", qs: "老师在备课中添加任务后确定不动" }, { type: 1, pt: "智慧课堂", qs: "老师在备课中添加任务后确定不动" }, { type: 2, pt: "智慧课堂", qs: "老师在备课中添加任务后确定不动"}],
    trans: ['待受理', '已受理', '维护完成'],
    statusimg: ['/images/daishouli.png.png','/images/yishouli.png.png','/images/zhengque.png.png'],
    name: "1",
    reqaireList: []
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const that = this;
      wx.request({
        url: 'http://localhost/getRepaireLog',
        data: {
          type: 1
        },
        success: function(res){
          that.setData({
            reqaireList: res.data.reqaireList
          });
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

  formatDateTime: function (inputTime) {
    var date = new Date(inputTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
  },

  clickme: function (e) {
    this.setData({
      name: e.detail.name
    })
  }
})