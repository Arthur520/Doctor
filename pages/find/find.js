// pages/find/find.js
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
    firstArticleList:null,
    secondArticleList: null,
    thirdArticleList: null,
    select1: false,
    select2:false,
    select3:false,
    department1: "全部内科",
    department2:"全部外科",
    department3: "其他全部"
  },
  mySelect1(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      department1: name
    })
    this.onShow();
    console.log(this.data.department1)
  },
  mySelect2(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      department2: name
    })
    this.onShow();
    console.log(this.data.department2)
  },
  mySelect3(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      department3: name
    })
    this.onShow();
    console.log(this.data.department3)
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
    if (this.data.currentTab == e.target.dataset.current) {
      if (this.data.currentTab==0){
      that.setData({
      select1: !this.data.select1
      })}
      if (this.data.currentTab == 1) {
        that.setData({
          select2: !this.data.select2
        })
      }
      if (this.data.currentTab == 2) {
        that.setData({
          select3: !this.data.select3
        })
      }
      return false;
    } else {
      if (this.data.currentTab == 0) {
        that.setData({
          currentTab: e.target.dataset.current,
          select1: false
        })
      }
      if (this.data.currentTab == 1) {
        that.setData({
          currentTab: e.target.dataset.current,
          select2: false
        })
      }
      if (this.data.currentTab == 2) {
        that.setData({
          currentTab: e.target.dataset.current,
          select3: false
        })
      }
      
      
    }
  },
  //点击切换
  toarticle:function(e){
    wx.navigateTo({
      url: '/pages/article/article?id=' + e.currentTarget.dataset.id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
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
    var serverUrl = app.globalData.serverUrl;
    var that = this;
    wx.request({
      url: serverUrl + '/article/changefirsttype',
      method: "POST",
      data: {
        type: that.data.department1,
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
            firstArticleList: list
          });
          var datelist1 = new Array();
          for (var i = 0; i < list.length; i++) {
            datelist1[i] = timer.js_date_another_time(that.data.firstArticleList[i].date);
          }
          that.setData({
            datelist1: datelist1
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
      url: serverUrl + '/article/changesecondtype',
      method: "POST",
      data: {
        type: that.data.department2,
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
            secondArticleList: list
          });
          var datelist2 = new Array();
          for (var i = 0; i < list.length; i++) {
            datelist2[i] = timer.js_date_another_time(that.data.secondArticleList[i].date);
          }
          that.setData({
            datelist2: datelist2
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
      url: serverUrl + '/article/changethirdtype',
      method: "POST",
      data: {
        type: that.data.department3,
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
            thirdArticleList: list
          });
          var datelist3 = new Array();
          for (var i = 0; i < list.length; i++) {
            datelist3[i] = timer.js_date_another_time(that.data.thirdArticleList[i].date);
          }
          that.setData({
            datelist3: datelist3
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