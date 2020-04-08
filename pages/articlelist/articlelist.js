// pages/articlelist/articlelist.js
var timer = require("../../utils/time.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,                              //当前请求数据是第几页
    pageSize: 12,                          //每页数据条数
    hasMoreData: true,                      //上拉时是否继续请求数据，即是否还有更多数据

  },

  /**
   * 生命周期函数--监听页面加载
   */
  toarticle: function (e) {
    wx.navigateTo({
      url: '/pages/article/article?id=' + e.currentTarget.dataset.id + "&doctorid=" + e.currentTarget.dataset.doctorid + "&title=" + e.currentTarget.dataset.title
    })
  },
  getInfo: function (message) {
    var serverUrl = app.globalData.serverUrl;
    var that = this;
    wx.showNavigationBarLoading()              //在当前页面显示导航条加载动画
    wx.showLoading({                        //显示 loading 提示框
      title: message,
    })
    wx.request({
      url: serverUrl + '/article/search',
      method: "POST",
      data: {
        name: that.data.title,
        fans: that.data.page
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var list = data.data;
        var contentlistTem = that.data.articlelist;
        if (list.length > 0) {
          wx.hideNavigationBarLoading()     //在当前页面隐藏导航条加载动画
          wx.hideLoading()               //隐藏 loading 提示框
          if (that.data.page == 1) {
            contentlistTem = []
          }
          if (list.length < that.data.pageSize) {
            that.setData({
              articlelist: contentlistTem.concat(list),
              hasMoreData: false
            })
          } else {
            that.setData({
              articlelist: contentlistTem.concat(list),
              hasMoreData: true,
              page: that.data.page + 1
            })
          }
        }
      },
      fail: function (res) {
        wx.hideNavigationBarLoading()
        wx.hideLoading()
        fail()
      },
      complete: function (res) {

      },
    })
  },
  onLoad: function (options) {
    var serverUrl = app.globalData.serverUrl;
    var that = this;
    const title=options.search;
    that.setData({
      title: title,
    })
    wx.request({
      url: serverUrl + '/article/search',
      method: "POST",
      data: {
        name: title,
        fans:1
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var list = data.data;
        if (data.status == 200) {
          that.setData({
            articlelist: list,
            articlelength:list.length,
            page:that.data.page+1
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
    if (this.data.hasMoreData) {
      this.getInfo('加载更多数据')
    } else {
      wx.showToast({
        title: '没有更多数据',
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})