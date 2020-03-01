// pages/changeName/changeName.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname:null
  },
  nameInput:function(e){
    var formObject = e.detail.value;
    this.setData({
      nickname: formObject
    })
  },
  changeName:function(e){
    var serverUrl = app.globalData.serverUrl;
    console.log(this.data.nickname);
    console.log(app.globalData.userInfo.id);
    wx.request({
      url: serverUrl + '/user/changename',
      method: "POST",
      data: {
        nickname: this.data.nickname,
        id: app.globalData.userInfo.id
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        console.log(res);
        var user = data.data;
        console.log(user);
        if (data.status == 200) {   
          app.globalData.userInfo=user;
          wx.showToast({
            title: '修改成功',
            icon: 'success',
            duration: 2000
          })
          setTimeout(function () {
            wx.navigateBack({
              delta: 1,
              success: function (e) {
                //刷新页面
                var page = getCurrentPages().pop();
                if (page == undefined || page == null) return;
                //加载page中的onload方法
                page.onLoad();
              }
            })
          }, 2000)
        } 
      }
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