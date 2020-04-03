// pages/search/search.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doctorlist: null,
  },
  toDoctor: function (e) {
    wx.navigateTo({
      url: '/pages/doctor/doctor?id=' + e.currentTarget.dataset.id,
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
    if (choice == 0) {
      wx.request({
        url: serverUrl + '/doctor/doctorsearch',
        method: "POST",
        data: {
          name: search,
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
              length: length
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
              length: length
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
            length: length
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
              length: length
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
              length: length
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

})