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
    var userInfo = app.globalData.userInfo;
    if (userInfo != null) {
      that.setData({
        avatar: userInfo.avatar,
        userInfo:app.globalData.userInfo
      });
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