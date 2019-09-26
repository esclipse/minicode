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
    sectionicon: ['../../images/1.png', '../../images/2.png'
      , '../../images/3.png','../../images/guanggao.png'],
    activearr: [{ id: 1, img: '../../images/swiper1.png' }, { id: 1, img: '../../images/swiper1.png' }]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
    console.log('hello world')
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
  }
})