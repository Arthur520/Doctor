// pages/mine/mine.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar:null,
  },
  toLogin: function () {
    wx.navigateTo({
      url: '../login/login',
    });
  },
  // 个人资料
  toMyinfo: function () {
      wx.navigateTo({
        url: '../myinfo/myinfo',
      })
  },
  msg:function(e){
    wx.showToast({
      title: '请先登录',//提示文字
      duration: 2000,//显示时长
      mask: true,//是否显示透明蒙层，防止触摸穿透，默认：false  
      image: '/image/warning.png', //图标，支持"success"、"loading"    
    })
  },
  // 查看我的关注
  toIlike: function () {
    wx.navigateTo({
      url: '../ilike/ilike',
    })
  },
  // 查看我的收藏
  toCollection: function () {
    wx.navigateTo({
      url: '../collection/collection',
    })
  },
//查看我的评论
  toComments: function () {
    wx.navigateTo({
      url: '../comments/comments',
    })
  },
  toUserComments: function () {
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    wx.request({
      url: serverUrl + '/user/changecount',
      method: "POST",
      data: {
        touserid: app.globalData.userInfo.id,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.status == 200) {
          wx.navigateTo({
            url: '../user_comments/user_comments',
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo
    });
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
    var that = this;
    var serverUrl = app.globalData.serverUrl;
    var userInfo = app.globalData.userInfo;
    if (userInfo != null) {
      that.setData({
        avatar: userInfo.avatar,
        userInfo:app.globalData.userInfo
      });
      wx.request({
        url: serverUrl + '/user/userreviewcount',
        method: "POST",
        data: {
          touserid: that.data.userInfo.id,
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          var data = res.data;
          var count = data.data;
          if (data.status == 200) {
            that.setData({
              count:count
            });
            if (count != 0) {
              wx.showTabBarRedDot({ index: 2 });
            }
            else{
              wx.hideTabBarRedDot({ index: 2 });
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
    } else {
      that.setData({
        avatar: '/image/user.png'
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

  }
})