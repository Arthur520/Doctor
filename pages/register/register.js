// pages/register/register.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    check: false
  },
  save:function(e){
    var that = this;  
    that.setData({
      check: !that.data.check
    })   
  },
  doRegister: function (e) {
    var that = this;
    var formObject = e.detail.value;
    var username = formObject.username;
    var password = formObject.password;
    var passwordconfirm = formObject.passwordconfirm;
    var nickname = formObject.nickname;
    
    // 简单验证
    if (username.length == 0 || password.length == 0 || nickname.length ==0) {
      wx.showToast({
        title: '用户名、密码、昵称不能为空',
        icon: 'none',
        duration: 3000
      })
    }
    else if(passwordconfirm!=password){
      wx.showToast({
        title: '两次输入的密码不相同',
        icon: 'none',
        duration: 3000
      })
    }
     else {
      if (that.data.check == false) {
        app.globalData.openid = null;
      }
      wx.showLoading({
        title: '请等待...',
      });
      var serverUrl = app.globalData.serverUrl;
      // 调用后端
      wx.request({
        url: serverUrl + '/user/register',
        method: "POST",
        data: {
          username: username,
          password: password,
          nickname: nickname,
          openid:app.globalData.openid,
          avatar: "/image/user.png"
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          app.globalData.userInfo = res.data.data;
          wx.hideLoading();
          if(res.data.data==null){
            wx.showToast({
              title: '用户名已被占用，换个试试',
              icon: 'none',
              duration: 3000
            })
          }
          else{
            wx.showToast({
              title: '注册成功',
              icon: 'success',
              duration: 2000
            })
            setTimeout(function () {
              wx.navigateBack({
                delta: 2,
                fail: function (e) {
                  wx.switchTab({
                    url: '../mine/mine',
                    success: function (e) {
                      //刷新页面
                      var page = getCurrentPages().pop();
                      if (page == undefined || page == null) return;
                      //加载page中的onload方法
                      page.onLoad();
                    }
                  })
                },
                success: function (e) {
                  //刷新页面
                  var page = getCurrentPages().pop();
                  if (page == undefined || page == null) return;
                  //加载page中的onload方法
                  page.onShow();
                }
              })
            }, 2000) //延迟时间
            app.globalData.userInfo = res.data.data;
        }
        }
      })
    }
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