// pages/login/login.js
Page({

  /**
   * Page initial data
   */
  data: { 
    imgUrls: ['../../images/swiper1.png', '../../images/swiper2.jpg'],
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    duration: 500,
    sectionicon: ['../../images/3.png', '../../images/2.png'
      , '../../images/1.png','../../images/guanggao.png'],
    activearr: [{ id: 99, img: 'http://www.scope.com.cn/upload/page/2016/0803/14702086354975.jpg', title: "SCOPE  昌乐一中翻转课堂亮相中国-东盟交流周", section: "第九届“中国-东盟教育交流周”在贵阳国际生态会议中心开幕，刘延东副总理出席开幕式并发表演讲。", link: "http://www.scope.com.cn/content.php" }, {
      id: 96, img: 'http://www.scope.com.cn/upload/page/2016/1019/14768623118180.jpg', title: "国务院副总理汪洋、商务部部长及乌拉圭总统莅临希科普广交会展位 视察指导工作", section: "2016年10月15日—19日，120届广交会在广州市隆重举行。展会期间，中央政治局委员、国务院副总理汪洋，商务部国际贸易谈判代表兼副部长钟山及乌拉圭总统，分别于16日、17日莅临我司广交会展位视察指导工作。", link: "http://www.scope.com.cn/content.php" }]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
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
  tohardware: function () {
    wx.navigateTo({
      url: '../Hardware/Hardware'
    })
  },
  tologistics: function(){
    wx.navigateTo({
      url: '../Logistics/Logistics'
    })
  },
  jinru: function(e) {
    console.log(e.target.dataset)
    wx.navigateTo({
      url: `../WebView/WebView?link=${e.target.dataset.name}&id=${e.target.dataset.id}`,
    })
  }
})