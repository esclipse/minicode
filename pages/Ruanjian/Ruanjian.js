// pages/Hardware/Hardware.js
import { $init, $digest } from '../../utils/utils/common.util.js'
Page({

  /**
   * Page initial data
   */
  data: {
    files: [],
    countryCodes: ["请选择", "F503H", "F503K", "SP1009V"],
    pingtai: ["请选择", "平台1", "平台2", "平台3"],

    countryCodeIndex: 0,
    schoolIndex: 0,
    school: ["请选择", "山西大学", "深圳大学", "香港大学"],
    name: "2",
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    $init(this);
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
  bindCountryCodeChange: function (e) {
    this.setData({
      countryCodeIndex: e.detail.value
    })
  },

  bindSchool: function (e) {
    this.setData({
      schoolIndex: e.detail.value
    })
  },

  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },

  clickme: function (e) {
    this.setData({
      name: e.detail.name
    })
  },

  formSubmit: function (e) {
    console.log('hello world', e);
    const { pingtai, xuexiao, username, phone, question } = e.detail.value;
    const { countryCodes, school } = this.data;
    wx.request({
      url: 'http://localhost/putRepaireLog',
      data: {
        pintai: pingtai[pingtai],
        xuexiao: school[xuexiao],
        username,
        phone,
        question,
        status: 0,
        files: this.data.files,
        type: 2
      },
      method: "put",
      success: function (res) {
        wx.showModal({
          title: '',
          content: '提交成功',
        });
        wx.switchTab({
          url: '../index/index',
        })
      }
    })
  }
})