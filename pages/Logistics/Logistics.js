// pages/Logistics/Logistics.js;
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    userPwd: '',
    areaIndex: 0,
    area: ['点击选择', '申通', 'EMS', '顺丰', '圆通', '中通', '韵达', '天天', '汇通', '全峰', '德邦', '宅急送'],
    realvalue: [',', 'shentong', 'ems','shunfeng', 'yuantong', 'zhongtong', 'yunda', 'tiantian', 'huitongkuaidi', 'quanfengkuaidi', 'debangwuliu', 'zhaijisong']
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

  searchlog: function(){
    console.log(this.data,'hello worl');
  },
  // log number
  passWdInput: function (e) {
    this.setData({
      userPwd: e.detail.value
    })
  },

  bindPickerChange: function (e) {
    this.setData({             //**重点**！！！使用setData重新给data赋值或新建data
      userName: this.data.realvalue[e.detail.value],
      areaIndex: e.detail.value
    })
  },
})