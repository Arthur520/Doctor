// pages/find/find.js
var timer = require("../../utils/time.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page1: 1,
    page2:1,
    page3:1,                              //当前请求数据是第几页
    pageSize: 15,                          //每页数据条数
    hasMoreData1: true,
    hasMoreData2: true,
    hasMoreData3: true,                      //上拉时是否继续请求数据，即是否还有更多数据
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    firstArticleList:null,
    secondArticleList: null,
    thirdArticleList: null,
    select1: false,
    select2:false,
    select3:false,
    show1:"内科",
    show2: "外科",
    show3: "其他",
    department1: "消化内科",
    department2:"神经外科",
    department3: "口腔科"
  },
  mySelect1(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      department1: name,
      show1:name
    })
    this.change1();
    console.log(this.data.department1)
  },
  mySelect2(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      department2: name,
      show2: name
    })
    this.change2();
    console.log(this.data.department2)
  },
  mySelect3(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      department3: name,
      show3: name
    })
    this.change3();
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
      url: '/pages/article/article?id=' + e.currentTarget.dataset.id + "&doctorid=" + e.currentTarget.dataset.doctorid + "&title=" + e.currentTarget.dataset.title
    })
    
  },
  getInfo1: function (message) {
    var serverUrl = app.globalData.serverUrl;
    var that = this;
    wx.showNavigationBarLoading()              //在当前页面显示导航条加载动画
    wx.showLoading({                        //显示 loading 提示框
      title: message,
    })
    wx.request({
      url: serverUrl + '/article/changefirsttype',
      method: "POST",
      data: {
        name: that.data.department1,
        fans: that.data.page1
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var list = data.data;
        var contentlistTem = that.data.firstArticleList;
        if (list.length > 0) {
          wx.hideNavigationBarLoading()     //在当前页面隐藏导航条加载动画
          wx.hideLoading()               //隐藏 loading 提示框
          if (that.data.page1 == 1) {
            contentlistTem = []
          }
          if (list.length < that.data.pageSize) {
            that.setData({
              firstArticleList: contentlistTem.concat(list),
              hasMoreData1: false
            })
            var datelist_ = new Array();
            for (var i = 0; i < list.length; i++) {
              datelist_[i] = timer.js_date_another_time(that.data.firstArticleList[i].date);
            }
            that.setData({
              datelist1: that.data.datelist1.concat(datelist_)
            })
          } else {
            that.setData({
              firstArticleList: contentlistTem.concat(list),
              hasMoreData1: true,
              page1: that.data.page1 + 1
            })
            var datelist_ = new Array();
            for (var i = 0; i < list.length; i++) {
              datelist_[i] = timer.js_date_another_time(that.data.firstArticleList[i].date);
            }
            that.setData({
              datelist1: that.data.datelist1.concat(datelist_)
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
  getInfo2: function (message) {
    var serverUrl = app.globalData.serverUrl;
    var that = this;
    wx.showNavigationBarLoading()              //在当前页面显示导航条加载动画
    wx.showLoading({                        //显示 loading 提示框
      title: message,
    })
    wx.request({
      url: serverUrl + '/article/changesecondtype',
      method: "POST",
      data: {
        name: that.data.department2,
        fans: that.data.page2
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var list = data.data;
        var contentlistTem = that.data.secondArticleList;
        if (list.length > 0) {
          wx.hideNavigationBarLoading()     //在当前页面隐藏导航条加载动画
          wx.hideLoading()               //隐藏 loading 提示框
          if (that.data.page2 == 1) {
            contentlistTem = []
          }
          if (list.length < that.data.pageSize) {
            that.setData({
              secondArticleList: contentlistTem.concat(list),
              hasMoreData2: false
            })
            var datelist_ = new Array();
            for (var i = 0; i < list.length; i++) {
              datelist_[i] = timer.js_date_another_time(that.data.secondArticleList[i].date);
            }
            that.setData({
              datelist2: that.data.datelist2.concat(datelist_)
            })
          } else {
            that.setData({
              secondArticleList: contentlistTem.concat(list),
              hasMoreData2: true,
              page2: that.data.page2 + 1
            })
            var datelist_ = new Array();
            for (var i = 0; i < list.length; i++) {
              datelist_[i] = timer.js_date_another_time(that.data.secondArticleList[i].date);
            }
            that.setData({
              datelist2: that.data.datelist2.concat(datelist_)
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
  getInfo3: function (message) {
    var serverUrl = app.globalData.serverUrl;
    var that = this;
    wx.showNavigationBarLoading()              //在当前页面显示导航条加载动画
    wx.showLoading({                        //显示 loading 提示框
      title: message,
    })
    wx.request({
      url: serverUrl + '/article/changethirdtype',
      method: "POST",
      data: {
        name: that.data.department3,
        fans: that.data.page3
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var list = data.data;
        var contentlistTem = that.data.thirdArticleList;
        if (list.length > 0) {
          wx.hideNavigationBarLoading()     //在当前页面隐藏导航条加载动画
          wx.hideLoading()               //隐藏 loading 提示框
          if (that.data.page3 == 1) {
            contentlistTem = []
          }
          if (list.length < that.data.pageSize) {
            that.setData({
              thirdArticleList: contentlistTem.concat(list),
              hasMoreData3: false
            })
            var datelist_ = new Array();
            for (var i = 0; i < list.length; i++) {
              datelist_[i] = timer.js_date_another_time(that.data.thirdArticleList[i].date);
            }
            that.setData({
              datelist3: that.data.datelist3.concat(datelist_)
            })
          } else {
            that.setData({
              thirdArticleList: contentlistTem.concat(list),
              hasMoreData3: true,
              page3: that.data.page3 + 1
            })
            var datelist_ = new Array();
            for (var i = 0; i < list.length; i++) {
              datelist_[i] = timer.js_date_another_time(that.data.thirdArticleList[i].date);
            }
            that.setData({
              datelist3: that.data.datelist3.concat(datelist_)
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
  change1: function () {
    var serverUrl = app.globalData.serverUrl;
    var that = this;
    that.setData({
      page1: 1,
      hasMoreData1:true,
      firstArticleList:null
    })
    wx.request({
      url: serverUrl + '/article/changefirsttype',
      method: "POST",
      data: {
        name: that.data.department1,
        fans:1
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
            firstArticleList: list,
            page1:that.data.page1+1
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
  },
  change2: function () {
    var serverUrl = app.globalData.serverUrl;
    var that = this;
    that.setData({
      page2: 1,
      hasMoreData2: true
    })
    wx.request({
      url: serverUrl + '/article/changesecondtype',
      method: "POST",
      data: {
        name: that.data.department2,
        fans:1
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
            secondArticleList: list,
            page2: that.data.page2 + 1
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
  },
  change3: function () {
    var serverUrl = app.globalData.serverUrl;
    var that = this;
    that.setData({
      page3: 1,
      hasMoreData3: true
    })
    wx.request({
      url: serverUrl + '/article/changethirdtype',
      method: "POST",
      data: {
        name: that.data.department3,
        fans:1
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
            thirdArticleList: list,
            page3: that.data.page3 + 1
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
  searchInput: function (e) {
    this.setData({
      search: e.detail.value
    })
  },
  searchBtn: function (e) {
    wx.navigateTo({
      url: '/pages/articlelist/articlelist?search=' + this.data.search
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var serverUrl = app.globalData.serverUrl;
    var that = this;
    wx.request({
      url: serverUrl + '/article/changefirsttype',
      method: "POST",
      data: {
        name: that.data.department1,
        fans:1
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
            firstArticleList: list,
            page1: that.data.page1 + 1
          });
          var datelist1 = new Array();
          for (var i = 0; i < list.length; i++) {
            datelist1[i] = timer.js_date_another_time(that.data.firstArticleList[i].date);
          }
          that.setData({
            datelist1: datelist1,
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
        name: that.data.department2,
        fans:1
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
            secondArticleList: list,
            page2: that.data.page2 + 1
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
        name: that.data.department3,
        fans:1
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
            thirdArticleList: list,
            page3: that.data.page3 + 1
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
  bindscrolltolower:function(e){
    this.onReachBottom()
  },
  onReachBottom: function () {
    if(this.data.currentTab == 0){
    if (this.data.hasMoreData1) {
      this.getInfo1('加载更多数据')
    } else {
      wx.showToast({
        title: '没有更多数据',
      })
    }
    }
    else if (this.data.currentTab == 1) {
      if (this.data.hasMoreData2) {
        this.getInfo2('加载更多数据')
      } else {
        wx.showToast({
          title: '没有更多数据',
        })
      }
    }
    else {
      if (this.data.hasMoreData3) {
        this.getInfo3('加载更多数据')
      } else {
        wx.showToast({
          title: '没有更多数据',
        })
      }
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})