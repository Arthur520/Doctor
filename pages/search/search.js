// pages/search/search.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    doctorSearchLength: 0,
    hospitalSearchLength:0,
    departmentSearchLength:0,
    diseaseSearchLength:0,
    doctorSearchList:null,
    hospitalSearchList: null,
    diseaseSearchList: null,
    departmentSearchList: null
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
  toDoctor: function (e) {
    wx.navigateTo({
      url: '/pages/doctor/doctor?id=' + e.currentTarget.dataset.id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const search=options.search;
    var serverUrl = app.globalData.serverUrl;
    var that = this;
    wx.request({
      url: serverUrl + '/doctor/doctorsearch',
      method: "POST",
      data: {
        name: search,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        console.log(res);
        var list = data.data;
        var length = data.data.length;
        console.log(length);
        console.log(list);
        if (data.status == 200) {
          that.setData({
            doctorSearchList: list,
            doctorSearchLength: length
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
      url: serverUrl + '/doctor/hospitalsearch',
      method: "POST",
      data: {
        hospital: search,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        console.log(res);
        var list = data.data;
        var length = data.data.length;
        console.log(length);
        console.log(list);
        if (data.status == 200) {
          that.setData({
            hospitalSearchList: list,
            hospitalSearchLength: length
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
      url: serverUrl + '/doctor/department',
      method: "POST",
      data: {
        department: search,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        console.log(res);
        var list = data.data;
        var length = data.data.length;
        console.log(length);
        console.log(list);
        if (data.status == 200) {
          that.setData({
            departmentSearchList: list,
            departmentSearchLength: length
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
      url: serverUrl + '/doctor/diseasesearch',
      method: "POST",
      data: {
        name: search,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        console.log(res);
        var list = data.data;
        var length = data.data.length;
        console.log(length);
        console.log(list);
        if (data.status == 200) {
          that.setData({
            diseaseSearchList: list,
            diseaseSearchLength: length
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