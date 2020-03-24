// pages/hospital/hospital.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNav: 1,
    curIndex: 0,
    hospitalId:null
  },
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  isDetail: function (e) {
    var that=this;
    var hospitalId=that.data.hospitalId;
    wx.navigateTo({
      url: "/pages/hospitalDoctorlist/hospitalDoctorlist?id=" + hospitalId + "&department=" + e.currentTarget.dataset.department
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var hospitalId=options.id;
      this.setData({
        hospitalId: hospitalId
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
    var serverUrl = app.globalData.serverUrl;
    var that = this;
    wx.request({
      url: serverUrl + '/hospital/hospdepartment',
      method: "POST",
      data: {
        hospitalid: that.data.hospitalId,
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
            cateItems:list
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