// pages/index/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    griddata:[
      { name: "消化内科", img: "/image/department1.png", url: "/pages/doctorlist/doctorlist?department=消化内科/消化科/脾胃//胃肠/肠胃"},
      { name: "神经内科", img: "/image/department2.png", url: "/pages/doctorlist/doctorlist?department=神经内科"},
      { name: "儿科", img: "/image/department3.png", url: "/pages/doctorlist/doctorlist?department=儿" },
      { name: "耳鼻喉科", img: "/image/department4.png", url: "/pages/doctorlist/doctorlist?department=耳鼻/五官"},
      { name: "妇产科", img: "/image/department5.png", url: "/pages/doctorlist/doctorlist?department=妇科/产科/妇女"},
      { name: "更多", img: "/image/department6.png", url: "/pages/more/more" },
    ],
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true,      // 是否自动切换1
    circular: true,      // 是否采用衔接滑动
    interval: 3000,      // 自动切换时间间隔
    duration: 1000,      // 滑动动画时长
    doctorlist:null,
    hospitallist:null,
    indexDoctorList:null,
    length:0,
    choiceText:"医生姓名",
    address:null
  },  
  //轮播图切换事件
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  swiperClick: function (e) {
    console.log(this.data.swiperCurrent)
    wx.navigateTo({ 
      url: '/pages/doctor/doctor?id=' + e.currentTarget.dataset.id
    })
  },
  searchInput: function (e) {
    this.setData({
      search: e.detail.value
    })
  },
  searchBtn:function(e){
    wx.navigateTo({
      url: '/pages/search/search?search=' + this.data.search + "&choice=" + this.data.currentTab,
    })
  },
  toDoctor:function(e){
    wx.navigateTo({
      url: '/pages/doctor/doctor?id=' + e.currentTarget.dataset.id,
    })
  },
  toHospital: function (e) {
    wx.navigateTo({
      url: '/pages/hospital/hospital?id=' + e.currentTarget.dataset.id,
    })
  },
  selectHospital: function (e) {
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var serverUrl = app.globalData.serverUrl;
    var that = this;
    const complete_address = app.globalData.complete_address;
    that.setData({
      address: app.globalData.address
    })

    wx.request({
      url: serverUrl + '/hospital/address',
      method: "POST",
      data: {
        address: complete_address
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        console.log(res);
        var list = data.data;
        console.log(list);
        var length = data.data.length;
        if (data.status == 200) {
          that.setData({
            hospitallist: list,
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
    wx.request({
      url: serverUrl + '/doctor/indexdoctor',
      method: "GET",
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
            indexDoctorList: list
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
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      if (e.target.dataset.current==0){
      that.setData({
        currentTab: e.target.dataset.current,
        choiceText:"医生姓名"
      })}
      else if (e.target.dataset.current == 1) {
        that.setData({
          currentTab: e.target.dataset.current,
          choiceText: "医院名称"
        })
      }
      else if (e.target.dataset.current == 2) {
        that.setData({
          currentTab: e.target.dataset.current,
          choiceText: "科室名称"
        })
      }
      else {
        that.setData({
          currentTab: e.target.dataset.current,
          choiceText: "疾病名称"
        })
      }
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