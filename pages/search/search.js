// pages/search/search.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,                              //当前请求数据是第几页
    pageSize: 12,                          //每页数据条数
    hasMoreData: true,                      //上拉时是否继续请求数据，即是否还有更多数据
    doctorlist: null,
  },
  toDoctor: function (e) {
    wx.navigateTo({
      url: '/pages/doctor/doctor?id=' + e.currentTarget.dataset.id,
    })
  },


  getHospitalInfo: function (message) {
    var serverUrl = app.globalData.serverUrl;
    var that = this;
    const complete_address = app.globalData.complete_address;
    wx.showNavigationBarLoading()              //在当前页面显示导航条加载动画
    wx.showLoading({                        //显示 loading 提示框
      title: message,
    })
    wx.request({
      url: serverUrl + '/doctor/hospitalsearch',
      method: "POST",
      data: {
        name: that.data.search,
        address: complete_address,
        fans: that.data.page
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var list = data.data;
        var contentlistTem = that.data.doctorlist;
        if (list.length > 0) {
          wx.hideNavigationBarLoading()     //在当前页面隐藏导航条加载动画
          wx.hideLoading()               //隐藏 loading 提示框
          if (that.data.page == 1) {
            contentlistTem = []
          }
          if (list.length < that.data.pageSize) {
            that.setData({
              doctorlist: contentlistTem.concat(list),
              hasMoreData: false
            })
          } else {
            that.setData({
              doctorlist: contentlistTem.concat(list),
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
  getNameInfo: function (message) {
    var serverUrl = app.globalData.serverUrl;
    var that = this;
    const complete_address = app.globalData.complete_address;
    wx.showNavigationBarLoading()              //在当前页面显示导航条加载动画
    wx.showLoading({                        //显示 loading 提示框
      title: message,
    })
    wx.request({
      url: serverUrl + '/doctor/doctorsearch',
      method: "POST",
      data: {
        name: that.data.search,
        address: complete_address,
        fans: that.data.page
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var list = data.data;
        var contentlistTem = that.data.doctorlist;
        if (list.length > 0) {
          wx.hideNavigationBarLoading()     //在当前页面隐藏导航条加载动画
          wx.hideLoading()               //隐藏 loading 提示框
          if (that.data.page == 1) {
            contentlistTem = []
          }
          if (list.length < that.data.pageSize) {
            that.setData({
              doctorlist: contentlistTem.concat(list),
              hasMoreData: false
            })
          } else {
            that.setData({
              doctorlist: contentlistTem.concat(list),
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
  getDepartmentInfo: function (message) {
    var serverUrl = app.globalData.serverUrl;
    var that = this;
    const complete_address = app.globalData.complete_address;
    wx.showNavigationBarLoading()              //在当前页面显示导航条加载动画
    wx.showLoading({                        //显示 loading 提示框
      title: message,
    })
    wx.request({
      url: serverUrl + '/doctor/departmentsearch',
      method: "POST",
      data: {
        department: that.data.search,
        address: complete_address,
        fans: that.data.page
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var list = data.data;
        var contentlistTem = that.data.doctorlist;
        if (list.length > 0) {
          wx.hideNavigationBarLoading()     //在当前页面隐藏导航条加载动画
          wx.hideLoading()               //隐藏 loading 提示框
          if (that.data.page == 1) {
            contentlistTem = []
          }
          if (list.length < that.data.pageSize) {
            that.setData({
              doctorlist: contentlistTem.concat(list),
              hasMoreData: false
            })
          } else {
            that.setData({
              doctorlist: contentlistTem.concat(list),
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
  getDiseaseInfo: function (message) {
    var serverUrl = app.globalData.serverUrl;
    var that = this;
    const complete_address = app.globalData.complete_address;
    wx.showNavigationBarLoading()              //在当前页面显示导航条加载动画
    wx.showLoading({                        //显示 loading 提示框
      title: message,
    })
    wx.request({
      url: serverUrl + '/doctor/diseasesearch',
      method: "POST",
      data: {
        disease: that.data.search,
        address: complete_address,
        fans: that.data.page
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var list = data.data;
        var contentlistTem = that.data.doctorlist;
        if (list.length > 0) {
          wx.hideNavigationBarLoading()     //在当前页面隐藏导航条加载动画
          wx.hideLoading()               //隐藏 loading 提示框
          if (that.data.page == 1) {
            contentlistTem = []
          }
          if (list.length < that.data.pageSize) {
            that.setData({
              doctorlist: contentlistTem.concat(list),
              hasMoreData: false
            })
          } else {
            that.setData({
              doctorlist: contentlistTem.concat(list),
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
  getDisease_Info: function (message) {
    var serverUrl = app.globalData.serverUrl;
    var that = this;
    const complete_address = app.globalData.complete_address;
    wx.showNavigationBarLoading()              //在当前页面显示导航条加载动画
    wx.showLoading({                        //显示 loading 提示框
      title: message,
    })
    wx.request({
      url: serverUrl + '/doctor/diseasesearch',
      method: "POST",
      data: {
        disease: that.data.diseaseName,
        address: complete_address,
        fans: that.data.page
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        var list = data.data;
        var contentlistTem = that.data.doctorlist;
        if (list.length > 0) {
          wx.hideNavigationBarLoading()     //在当前页面隐藏导航条加载动画
          wx.hideLoading()               //隐藏 loading 提示框
          if (that.data.page == 1) {
            contentlistTem = []
          }
          if (list.length < that.data.pageSize) {
            that.setData({
              doctorlist: contentlistTem.concat(list),
              hasMoreData: false
            })
          } else {
            that.setData({
              doctorlist: contentlistTem.concat(list),
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var serverUrl = app.globalData.serverUrl;
    var that = this;
    const search = options.search;
    const diseaseName=options.diseaseName;
    const choice = options.choice;
    that.setData({
      choice: choice,
      search:search,
      diseaseName:diseaseName
    })
    if (choice == 0) {
      wx.request({
        url: serverUrl + '/doctor/doctorsearch',
        method: "POST",
        data: {
          name: search,
          fans: 1,
          address: app.globalData.complete_address
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
              doctorlist: list,
              length: length,
              page: that.data.page + 1
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
    }
    if (choice == 1) {
      wx.request({
        url: serverUrl + '/doctor/hospitalsearch',
        method: "POST",
        data: {
          name: search,
          fans:1,
          address: app.globalData.complete_address
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
              doctorlist: list,
              length: length,
              page:that.data.page+1
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
    }
    if(choice==2){
    wx.request({
      url: serverUrl + '/doctor/departmentsearch',
      method: "POST",
      data: {
        department: search,
        fans:1,
        address:app.globalData.complete_address
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
            doctorlist: list,
            length: length,
            page: that.data.page + 1
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
    }
    if (choice == 3) {
      wx.request({
        url: serverUrl + '/doctor/diseasesearch',
        method: "POST",
        data: {
          disease: search,
          fans:1,
          address: app.globalData.complete_address
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
              doctorlist: list,
              length: length,
              page: that.data.page + 1
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
    }
    if (choice == 4) {
      wx.request({
        url: serverUrl + '/doctor/diseasesearch',
        method: "POST",
        data: {
          disease: diseaseName,
          fans:1,
          address: app.globalData.complete_address
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
              doctorlist: list,
              length: length,
              page: that.data.page + 1
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
    }
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
    if(this.data.choice==1){
    if (this.data.hasMoreData) {
      this.getHospitalInfo('加载更多数据')
    } else {
      wx.showToast({
        title: '没有更多数据',
      })
    }
    }
    else if (this.data.choice == 2) {
      if (this.data.hasMoreData) {
        this.getDepartmentInfo('加载更多数据')
      } else {
        wx.showToast({
          title: '没有更多数据',
        })
      }
    }
    else if (this.data.choice == 0) {
      if (this.data.hasMoreData) {
        this.getNameInfo('加载更多数据')
      } else {
        wx.showToast({
          title: '没有更多数据',
        })
      }
    }
    else if (this.data.choice == 3) {
      if (this.data.hasMoreData) {
        this.getDiseaseInfo('加载更多数据')
      } else {
        wx.showToast({
          title: '没有更多数据',
        })
      }
    }
    else {
      if (this.data.hasMoreData) {
        this.getDisease_Info('加载更多数据')
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