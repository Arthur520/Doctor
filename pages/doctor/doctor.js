// pages/doctor/doctor.js
var timer = require("../../utils/time.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focusInput: false,
    height: '300',
    isInput: false,
    doctor: null,
    avatar:null,
    reviewlist:null,
    length:0, 
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
      isInput: true, 
    })
  },
  findDoctor:function(e){
    wx.navigateTo({
      url: '/pages/search/search?diseaseName=' + e.currentTarget.dataset.name + "&choice=" + 4
    })
  },
  bind: function (e) {
    this.setData({
      content: e.detail.value
    });
  },
  addDoctorReview: function (e) {
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    wx.showLoading({
      title: '请等待...',
    });
    var content = that.data.content;
    wx.request({
      url: serverUrl + '/user/adddoctorreview',
      method: "POST",
      data: {
        userid: app.globalData.userInfo.id,
        doctorid: that.data.doctorId,
        content: content
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var list = data.data;
        if (data.status == 200) {
          if(data.data!=null){
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
  like:function(e){
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    wx.showLoading({
      title: '请等待...',
    });
    // request for New list
    wx.request({
      url: serverUrl + '/user/dolike',
      method: "POST",
      data: {
        userid: that.data.userInfo.id,
        doctorid:that.data.doctorId,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var like_doctor = data.data;
        if (data.status == 200) {
          
          if(like_doctor.status=="1"){
          that.setData({
            like:'/image/Collection.png'
          })
            wx.showToast({
              title: '关注成功',
              icon: 'success',
              duration: 1000
            })
            setTimeout(function () {
              that.onShow();
            }, 1000)
          }else{
            that.setData({
              like: '/image/cancelCollection.png'
            })
            wx.showToast({
              title: '取消成功',
              icon: 'success',
              duration: 1000
            })
            setTimeout(function () {
              that.onShow();
            }, 1000)
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
  goLogin:function(e){
    wx.showModal({
      title: '提示',
      content: '请先登录',
      cancelText:"不用了",
      confirmText:"去登录",
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/login/login',
          })
        } 
      }
    })
  },
  toarticle: function (e) {
    wx.navigateTo({
      url: '/pages/article/article?id=' + e.currentTarget.dataset.id + "&doctorid=" + e.currentTarget.dataset.doctorid + "&title=" + e.currentTarget.dataset.title
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo,
      doctorId:options.id,
    });
    const id = options.id;
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    wx.showLoading({
      title: '请等待...',
    });
    // request for New list
    wx.request({
      url: serverUrl + '/doctor/query',
      method: "POST",
      data: {
        id:id,
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
            diseaselist:doctor.disease.split("/")
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
      url: serverUrl + '/article/doctor',
      method: "POST",
      data: {
        doctorid: id,
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
      url: serverUrl + '/doctor/review',
      method: "POST",
      data: {
        id: id,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var length=data.data.length;
        var list = data.data;
        if (data.status == 200) {
          that.setData({
            reviewlist: list,
            length:length
          });
          var datelist = new Array();
          for (var i = 0; i < list.length; i++) {  
            datelist[i] = timer.js_date_time(that.data.reviewlist[i].date);                        console.log(datelist[i]);
          }
          that.setData({
            datelist:datelist
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
    if (app.globalData.userInfo!=null){
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    wx.request({
      url: serverUrl + '/user/searchlike',
      method: "POST",
      data: {
        userid: that.data.userInfo.id,
        doctorid: that.data.doctorId,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var like_doctor = data.data;
        if (data.status == 200) {
          if (like_doctor.status == "1") {
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
        url: serverUrl + '/doctor/query',
        method: "POST",
        data: {
          id: that.data.doctorId,
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          var data = res.data;
          var doctor = data.data;
          if (data.status == 200) {
            that.setData({
              doctor: doctor
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
      desc: '医生信息',
      path: '/pages/doctor?id=' + this.data.doctor.id
    } 
  }
})