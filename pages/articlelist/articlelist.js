// pages/articlelist/articlelist.js
var timer = require("../../utils/time.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  toarticle: function (e) {
    wx.navigateTo({
      url: '/pages/article/article?id=' + e.currentTarget.dataset.id + "&doctorid=" + e.currentTarget.dataset.doctorid + "&title=" + e.currentTarget.dataset.title
    })

  },
  onLoad: function (options) {
    var serverUrl = app.globalData.serverUrl;
    var that = this;
    const title=options.search
    wx.request({
      url: serverUrl + '/article/search',
      method: "POST",
      data: {
        title: title,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        console.log(res);
        var list = data.data;
        console.log(list);
        if (data.status == 200) {
          that.setData({
            articlelist: list,
            articlelength:list.length
          });
          var datelist = new Array();
          for (var i = 0; i < list.length; i++) {
            datelist[i] = timer.js_date_another_time(that.data.articlelist[i].date);
          }
          that.setData({
            datelist: datelist
          })
        } else {
          // 失败弹出框
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 3000
          })
        }
      }
    })
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})