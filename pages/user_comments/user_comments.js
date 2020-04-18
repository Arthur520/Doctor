// pages/user_comments/user_comments.js
var timer = require("../../utils/time.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    focusInput2: false,
    focusInput1: false,
    height: '300',
    isInput2: false,
    isInput1: false,
    reviewlist: null,
    reviewlist_a: null,
    length_a:0,
    length: 0,
  },
  inputFocus2(e) {
    this.setData({
      height: e.detail.height,
      isInput2: true
    })
  },
  inputFocus1(e) {
    this.setData({
      height: e.detail.height,
      isInput1: true
    })
  },
  inputBlur2() {
    this.setData({
      isInput2: false
    })
  },
  inputBlur1() {
    this.setData({
      isInput1: false
    })
  },

  focusButn2: function (e) {
    this.setData({
      focusInput2: true,
      isInput2: true,
      touserid: e.currentTarget.dataset.touserid,
      review_articleid: e.currentTarget.dataset.reviewid,
    })
  },
  focusButn1: function (e) {
    this.setData({
      focusInput1: true,
      isInput1: true,
      touserid1: e.currentTarget.dataset.touserid1,
      review_doctorid:e.currentTarget.dataset.reviewid,
    })
  },
  bind2: function (e) {
    this.setData({
      content: e.detail.value
    });
  },
  bind1: function (e) {
    this.setData({
      content: e.detail.value
    });
  },
  addUserReview2: function (e) {
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    var touserid = that.data.touserid;
    var review_articleid = that.data.review_articleid;
    wx.showLoading({
      title: '请等待...',
    });
    var content = that.data.content;
    wx.request({
      url: serverUrl + '/user/adduserreview1_a',
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
            var length_a = data.data.length;
            that.setData({
              reviewlist_a: list,
              length_a: length_a
            });
            wx.showToast({
              title: '回复成功',
              icon: 'success',
              duration: 1000
            })
            var datelist_a = new Array();
            for (var i = 0; i < list.length; i++) {
              datelist_a[i] = timer.js_date_time(that.data.reviewlist_a[i].date); 
            }
            that.setData({
              datelist_a: datelist_a
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

  bindChange: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //滑动切换
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  //点击切换
  addUserReview1: function (e) {
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    var touserid = that.data.touserid1;
    var review_doctorid = that.data.review_doctorid;
    wx.showLoading({
      title: '请等待...',
    });
    var content = that.data.content;
    wx.request({
      url: serverUrl + '/user/adduserreview1',
      method: "POST",
      data: {
        userid: app.globalData.userInfo.id,
        touserid: touserid,
        review_doctorid: review_doctorid,
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
    that.setData({
      userInfo: app.globalData.userInfo,
    })
    wx.request({
      url: serverUrl + '/user/seeuserreview',
      method: "POST",
      data: {
        touserid: that.data.userInfo.id,
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
    wx.request({
      url: serverUrl + '/user/seeuserreview_a',
      method: "POST",
      data: {
        touserid: that.data.userInfo.id,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var length_a = data.data.length;
        var list = data.data;
        if (data.status == 200) {
          that.setData({
            reviewlist_a: list,
            length_a: length_a
          });
          var datelist_a = new Array();
          for (var i = 0; i < list.length; i++) {
            datelist_a[i] = timer.js_date_time(that.data.reviewlist_a[i].date); 
          }
          that.setData({
            datelist_a: datelist_a
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
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
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