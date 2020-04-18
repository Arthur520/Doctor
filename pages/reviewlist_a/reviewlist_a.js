// pages/reviewlist_a/reviewlist_a.js
var timer = require("../../utils/time.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focusInput: false,
    focusInput1: false,
    height: '300',
    isInput: false,
    isInput1: false,
    reviewlist: null,
    length: 0,
  },
  inputFocus(e) {
    this.setData({
      height: e.detail.height,
      isInput: true
    })
  },
  inputFocus1(e) {
    this.setData({
      height: e.detail.height,
      isInput1: true
    })
  },
  inputBlur() {
    this.setData({
      isInput: false
    })
  },
  inputBlur1() {
    this.setData({
      isInput1: false
    })
  },

  focusButn: function () {
    this.setData({
      focusInput: true,
      isInput: true,
    })
  },
  focusButn1: function (e) {
    this.setData({
      focusInput1: true,
      isInput1: true,
      touserid1: e.currentTarget.dataset.touserid1,
    })
  },
  bind: function (e) {
    this.setData({
      content: e.detail.value
    });
  },
  bind1: function (e) {
    this.setData({
      content: e.detail.value
    });
  },
  goLogin: function (e) {
    wx.showModal({
      title: '提示',
      content: '请先登录',
      cancelText: "不用了",
      confirmText: "去登录",
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/login/login',
          })
        }
      }
    })
  },
  addUserReview: function (e) {
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    var touserid = that.data.touserid;
    var review_articleid = that.data.review_articleid;
    wx.showLoading({
      title: '请等待...',
    });
    var content = that.data.content;
    wx.request({
      url: serverUrl + '/user/adduserreview_a',
      method: "POST",
      data: {
        userid: app.globalData.userInfo.id,
        touserid: touserid,
        review_articleid: review_articleid,
        content: content
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var list = data.data;
        if (data.status == 200) {
          if (data.data != null) {
            var length = data.data.length;
            that.setData({
              reviewlist: list,
              length: length
            });
            wx.showToast({
              title: '回复成功',
              icon: 'success',
              duration: 1000
            })
            var datelist = new Array();
            for (var i = 0; i < list.length; i++) {
              datelist[i] = timer.js_date_time(that.data.reviewlist[i].date); console.log(datelist[i]);
            }
            that.setData({
              datelist: datelist
            })
          } else {
            // 失败弹出框
            wx.showToast({
              title: data.data.msg,
              icon: 'none',
              duration: 500
            })
          }
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
    wx.hideLoading();
  },
  addUserReview1: function (e) {
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    var touserid = that.data.touserid1;
    var review_articleid = that.data.review_articleid;
    wx.showLoading({
      title: '请等待...',
    });
    var content = that.data.content;
    wx.request({
      url: serverUrl + '/user/adduserreview_a',
      method: "POST",
      data: {
        userid: app.globalData.userInfo.id,
        touserid: touserid,
        review_articleid: review_articleid,
        content: content
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var list = data.data;
        if (data.status == 200) {
          if (data.data != null) {
            var length = data.data.length;
            that.setData({
              reviewlist: list,
              length: length
            });
            wx.showToast({
              title: '回复成功',
              icon: 'success',
              duration: 1000
            })
            var datelist = new Array();
            for (var i = 0; i < list.length; i++) {
              datelist[i] = timer.js_date_time(that.data.reviewlist[i].date); 
            }
            that.setData({
              datelist: datelist
            })
          } else {
            // 失败弹出框
            wx.showToast({
              title: data.data.msg,
              icon: 'none',
              duration: 500
            })
          }
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
    wx.hideLoading();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    const review_articleid = options.review_articleid;
    const touserid = options.touserid;
    that.setData({
      userInfo: app.globalData.userInfo,
      review_articleid: review_articleid,
      touserid: touserid,
    })
    wx.request({
      url: serverUrl + '/user/touserreview_a',
      method: "POST",
      data: {
        review_articleid: review_articleid,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var length = data.data.length;
        var list = data.data;
        if (data.status == 200) {
          that.setData({
            reviewlist: list,
            length: length
          });
          var datelist = new Array();
          for (var i = 0; i < list.length; i++) {
            datelist[i] = timer.js_date_time(that.data.reviewlist[i].date); 
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
    wx.hideLoading();
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
    this.setData({
      userInfo: app.globalData.userInfo
    });
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