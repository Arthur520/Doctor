// pages/myinfo/myinfo.js
var uploader = require("../../utils/qiniuUploader.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  changeName:function(e){
    wx.navigateTo({
      url: '/pages/changeName/changeName' 
    })
  },
  changeAvatar:function(e){  
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success(res) {
        const filepath = res.tempFilePaths[0]
        that.setData({
          filepath: filepath
        });
         // 返回选定照片的本地路径列表 
        wx.request({
          url: app.globalData.serverUrl + "/user/qiniu",
          data: {
            id:app.globalData.userInfo.id
          },
          success: function (result) {
            console.log("初始化七牛返回token:", result);//token: 后端返回的上传验证信息
            //存logo
            that.initQiniu(result.data);
            uploader.upload(that.data.filepath, (res) => {
              //对象存储中外链默认域名 http://p2mksxx.bkt.clouddn.com/
              var logo = "http://user.lymgo.club/" + res.key //最后把这个完整的图片地址再次传送给后台
              //存form表单公司详情数据
              wx.request({
                url: app.globalData.serverUrl + "/user/changeavatar",
                method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                header: { 'content-type': 'application/json' },
                data: {
                  id: app.globalData.userInfo.id,
                  avatar: logo,
                },
                success: function (res) {
                  var data = res.data;
                  console.log(res);
                  var user = data.data;
                  app.globalData.userInfo=user;
                  wx.showModal({
                    title: '提示',
                    showCancel: false,
                    confirmText: "我知道了",
                    content: '提交成功',
                    success: function (res) {
                      that.onLoad();
                    }
                  })
                },
                fail:function(res){
                  wx.showModal({
                    title: '提示',
                    showCancel: false,
                    confirmText: "我知道了",
                    content: '文件最大为2M',
                    success: function (res) {
                      that.onLoad();
                    }
                  })
                }
              })
            }, (error) => {
              console.error('error: ' + JSON.stringify(error));
            });
          }
        })
      } 
      
    })
    
  },
  initQiniu: function (res){
    var options = {
      region: 'SCN', // 华南
      // ECN, SCN, NCN, NA, ASG，分别对应七牛的：华东，华南，华北，北美，新加坡 5 个区域
      uptoken: res.uptoken,
      // uptokenURL: 'https://[yourserver.com]/api/uptoken',
      // uptoken: 'xxxx',
      domain: 'http://user.lymgo.club', // bucket 域名，下载资源时用到。如果设置，会在 success callback 的 res 参数加上可以直接使用的 ImageURL 字段。否则需要自己拼接。
      shouldUseQiniuFileName: false
    };
    uploader.init(options);
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