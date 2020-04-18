// pages/article/article.js
const app=getApp();
var timer = require("../../utils/time.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focusInput: false,
    height: '300',
    isInput: false,
    article:null,
    length: 0 
  },
  toDoctor: function (e) {
    wx.navigateTo({
      url: '/pages/doctor/doctor?id=' + e.currentTarget.dataset.id,
    })
  },
  inputFocus(e) {
    this.setData({
      height: e.detail.height,
      isInput: true
    })
  },
  inputBlur() {
    this.setData({
      isInput: false
    })
  },

  focusButn: function () {
    this.setData({
      focusInput: true,
      isInput: true
    })
  },
  bind: function (e) {
    this.setData({
      content: e.detail.value
    });
  },
  addArticleReview: function (e) {
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    wx.showLoading({
      title: '请等待...',
    });
    var content = that.data.content;
    wx.request({
      url: serverUrl + '/user/addarticlereview',
      method: "POST",
      data: {
        userid: app.globalData.userInfo.id,
        articleid: that.data.articleId,
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
              title: '评论成功',
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
  like: function (e) {
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    wx.showLoading({
      title: '请等待...',
    });
    // request for New list
    wx.request({
      url: serverUrl + '/user/doanotherlike',
      method: "POST",
      data: {
        userid: that.data.userInfo.id,
        articleid: that.data.articleId,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var like_article = data.data;
        if (data.status == 200) {

          if (like_article.status == "1") {
            that.setData({
              like: '/image/Collection.png'
            })
            wx.showToast({
              title: '收藏成功',
              icon: 'success',
              duration: 1000
            })
          } else {
            that.setData({
              like: '/image/cancelCollection.png'
            })
            wx.showToast({
              title: '取消成功',
              icon: 'success',
              duration: 1000
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
  toarticle: function (e) {
    wx.navigateTo({
      url: '/pages/article/article?id=' + e.currentTarget.dataset.id + "&doctorid=" + e.currentTarget.dataset.doctorid + "&title=" + e.currentTarget.dataset.title
    })

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
  touserreview: function (e) {
    wx.navigateTo({
      url: '/pages/reviewlist_a/reviewlist_a?touserid=' + e.currentTarget.dataset.touserid + "&review_articleid=" + e.currentTarget.dataset.review_articleid
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo,
      articleId:options.id,
    });
    const id = options.id;
    const doctorid=options.doctorid;
    const title=options.title;
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    wx.showLoading({
      title: '请等待...',
    });
    // request for New list
    wx.request({
      url: serverUrl + '/article/article',
      method: "POST",
      data: {
        id: id,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var article = data.data;
        if (data.status == 200) {
          that.setData({
            article: article
          });
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
      url: serverUrl + '/article/similar',
      method: "POST",
      data: {
        title: title,
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
            articlelength:list.length
          });
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
      url: serverUrl + '/doctor/query',
      method: "POST",
      data: {
        id: doctorid,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var doctor = data.data;
        if (data.status == 200) {
          that.setData({
            doctor: doctor,
          });
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
      url: serverUrl + '/article/review',
      method: "POST",
      data: {
        id: id,
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
    if (app.globalData.userInfo != null) {
      var that = this;
      var serverUrl = app.globalData.serverUrl;
      wx.request({
        url: serverUrl + '/user/searchcollection',
        method: "POST",
        data: {
          userid: that.data.userInfo.id,
          articleid: that.data.articleId,
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          var data = res.data;
          var like_article = data.data;
          if (data.status == 200) {
            if (like_article.status == "1") {
              that.setData({
                like: '/image/Collection.png'
              })
            } else {
              that.setData({
                like: '/image/cancelCollection.png'
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
      wx.request({
        url: serverUrl + '/user/userreviewcount',
        method: "POST",
        data: {
          touserid: app.globalData.userInfo.id,
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          var data = res.data;
          var count = data.data;
          if (data.status == 200) {
            that.setData({
              count: count
            });
            if (count != 0) {
              wx.showTabBarRedDot({ index: 2 });
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
    }
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
    return {
      title: '分享',
      desc: '文章信息',
      path: '/pages/article?id=' + this.data.article.id
    }
  }
})