// pages/doctorlist/doctorlist.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doctorlist:null,
    length: 0
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
    const department=options.department;
    console.log(department);
    wx.request({
      url: serverUrl + '/doctor/department',
      method: "POST",
      data: {
        department: department,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        console.log(res);
        var list = data.data;
        var length = data.data.length;
        console.log(list);
        if (data.status == 200) {
          that.setData({
            doctorlist: list,
            length:length
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