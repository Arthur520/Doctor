// pages/comments/comments.js
const app = getApp();
var timer = require("../../utils/time.js");
const util = require('../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    doctorReviewLength:0,
    articleReviewLength:0,
    doctorReviewList:null,
    articleReviewList:null,
    focusInput: false,
    height: '300',
    isInput: false,
    focusInput1: false,
    isInput1: false,
  },
  inputFocus(e) {
    console.log(e, '键盘弹起')
    this.setData({
      height: e.detail.height,
      isInput: true
    })
  },
  inputBlur(e) {
    console.log('键盘收起')
    this.setData({
      isInput: false,
      
    })
  },
  inputFocus1(e) {
    console.log(e, '键盘弹起')
    this.setData({
      height: e.detail.height,
      isInput1: true
    })
  },
  inputBlur1(e) {
    console.log('键盘收起')
    this.setData({
      isInput1: false,
      
    })
  },

  focusButn: function (e) {
    this.setData({
      focusInput: true,
      isInput: true,
      doctorid: e.currentTarget.dataset.doctorid
    })
  },
  deleteDoctorReview:function(e){
    var doctorid=e.currentTarget.dataset.doctorid;
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    wx.showLoading({
      title: '请等待...',
    });
    wx.request({
      url: serverUrl + '/review/deletedoctorreview',
      method: "POST",
      data: {
        userid: app.globalData.userInfo.id,
        doctorid: doctorid,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        console.log(res);
        var list = data.data;
        var length=data.data.length;
        console.log(list);
        if (data.status == 200) {
          that.setData({
            doctorReviewList: list,
            doctorReviewLength: length
          });
          wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 1000
          })
          setTimeout(function () {
            that.onLoad();
          }, 1000)
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
  focusButn1: function (e) {
    this.setData({
      focusInput1: true,
      isInput1: true,
      articleid: e.currentTarget.dataset.articleid
    })
  },
  deleteArticleReview: function (e) {
    var articleid = e.currentTarget.dataset.articleid;
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    wx.showLoading({
      title: '请等待...',
    });
    wx.request({
      url: serverUrl + '/review/deletearticlereview',
      method: "POST",
      data: {
        userid: app.globalData.userInfo.id,
        articleid: articleid,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        console.log(res);
        var list = data.data;
        var length=data.data.length;
        console.log(list);
        if (data.status == 200) {
          that.setData({
            articleReviewList: list,
            articleReviewLength: length
          });
          wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 1000
          })
          setTimeout(function () {
            that.onLoad();
          }, 1000)
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
  doctorselect: function (e) {
    var that = this
    wx.showActionSheet({
      itemList: ['查看医生','更改评论', '删除评论'],
      success: function (res) {
        if(res.tapIndex==0){
          that.toDoctor(e);
         }
        if (res.tapIndex == 1) {
          that.focusButn(e);
        }
        if (res.tapIndex == 2) {
          that.deleteDoctorReview(e);
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  articleselect: function (e) {
    var that = this
    wx.showActionSheet({
      itemList: ['查看文章', '更改评论', '删除评论'],
      success: function (res) {
        if (res.tapIndex == 0) {
          that.toarticle(e);
        }
        if (res.tapIndex == 1) {
          that.focusButn1(e);
        }
        if (res.tapIndex == 2) {
          that.deleteArticleReview(e);
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  bind:function(e){
    this.setData({
      content: e.detail.value
    });
  },
  changeDoctorReview:function(e){
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    wx.showLoading({
      title: '请等待...',
    });
    var content = that.data.content;
    wx.request({
      url: serverUrl + '/review/doctorreview',
      method: "POST",
      data: {
        userid: app.globalData.userInfo.id,
        doctorid: that.data.doctorid,
        content:content
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        console.log(res);
        var list = data.data;
        var length=data.data.length;
        console.log(list);
        if (data.status == 200) {
          that.setData({
            doctorReviewList: list,
            doctorReviewLength: length
          });
          wx.showToast({
            title: '修改成功',
            icon: 'success',
            duration: 1000
          })
          setTimeout(function (){
            that.onLoad();
          },1000)
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
  changeArticleReview: function (e) {
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    wx.showLoading({
      title: '请等待...',
    });
    var content = that.data.content;
    wx.request({
      url: serverUrl + '/review/articlereview',
      method: "POST",
      data: {
        userid: app.globalData.userInfo.id,
        articleid: that.data.articleid,
        content: content
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        console.log(res);
        var list = data.data;
        doctorReviewLength: length
        console.log(list);
        if (data.status == 200) {
          that.setData({
            articleReviewList: list,
            articleReviewLength: length
          });
          wx.showToast({
            title: '修改成功',
            icon: 'success',
            duration: 1000
          })
          setTimeout(function () {
            that.onLoad();
          }, 1000)
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
  toDoctor: function (e) {
    wx.navigateTo({
      url: '/pages/doctor/doctor?id=' + e.currentTarget.dataset.doctorid,
    })
  },
  toarticle: function (e) {
    wx.navigateTo({
      url: '/pages/article/article?id=' + e.currentTarget.dataset.articleid
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    wx.showLoading({
      title: '请等待...',
    });
    // request for New list
    wx.request({
      url: serverUrl + '/review/doctor',
      method: "POST",
      data: {
        id: app.globalData.userInfo.id,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        console.log(res);
        var list = data.data;
        console.log(list);
        var length = data.data.length;
        if (data.status == 200) {
          that.setData({
            doctorReviewList: list,
            doctorReviewLength:length
          });
          var datelist = new Array();
          for (var i = 0; i < list.length; i++) {
            datelist[i] = timer.js_date_time(that.data.doctorReviewList[i].date); console.log(datelist[i]);
          }
          that.setData({
            doctordatelist: datelist
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
      url: serverUrl + '/review/finddoctor',
      method: "POST",
      data: {
        id: app.globalData.userInfo.id,
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
            doctorlist: list,
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
      url: serverUrl + '/review/article',
      method: "POST",
      data: {
        id: app.globalData.userInfo.id,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        console.log(res);
        var list = data.data;
        console.log(list);
        var length = data.data.length;
        if (data.status == 200) {
          that.setData({
            articleReviewList: list,
            articleReviewLength: length
          });
          var datelist = new Array();
          for (var i = 0; i < list.length; i++) {
            datelist[i] = timer.js_date_time(that.data. articleReviewList[i].date); console.log(datelist[i]);
          }
          that.setData({
            articledatelist: datelist
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
      url: serverUrl + '/review/findarticle',
      method: "POST",
      data: {
        id: app.globalData.userInfo.id,
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