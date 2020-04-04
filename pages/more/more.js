// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "内科",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '呼吸内科',
              search: '呼吸内科'
            },
            {
              child_id: 2,
              name: '消化内科',
              search: '消化内科'
            },
            {
              child_id: 3,
              name: '心血管内科',
              search: '心血管内科'
            },
            {
              child_id: 4,
              name: '血液内科',
              search: '血液内科'
            },
            {
              child_id: 5,
              name: '肾内科',
              search: '肾内科'
            },
            {
              child_id: 6,
              name: '内分泌科',
              search: '内分泌科'
            },
            {
              child_id: 7,
              name: '风湿免疫科',
              search: '风湿免疫科'
            },
            {
              child_id: 8,
              name: '感染科',
              search: '感染科'
            },
            {
              child_id: 9,
              name: '老年病科',
              search: '老年病科'
            },
            {
              child_id: 10,
              name: '神经内科',
              search: '神经内科'
            },
            {
              child_id: 11,
              name: '肝病科',
              search: '肝胆内科'
            },
            {
              child_id: 12,
              name: '高压氧科',
              search: '高压氧科'
            },
            {
              child_id: 13,
              name: '变态反应科',
              search: '变态反应科'
            },
            {
              child_id: 14,
              name: '普内科',
              search: '门诊内科'
            }
          ]
      },
      {
        cate_id: 2,
        cate_name: "外科",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '普外科',
              search:'普外科'
            },
            {
              child_id: 2,
              name: '肝胆外科',
              search: '肝胆外科'
            },
            {
              child_id: 3,
              name: '乳腺外科',
              search: '乳腺外科'
            },
            {
              child_id: 4,
              name: '神经外科',
              search: '神经外科'
            },
            {
              child_id: 5,
              name: '泌尿外科',
              search: '泌尿外科'
            },
            {
              child_id: 6,
              name: '心血管外科',
              search: '心血管外科'
            },
            {
              child_id: 7,
              name: '胸外科',
              search: '胸外科'
            },
            {
              child_id: 8,
              name: '肛肠外科',
              search: '肛肠外科'
            },
            {
              child_id: 9,
              name: '骨科',
              search: '骨科'
            },
            {
              child_id: 10,
              name: '整型科',
              search: '整型科'
            },
            {
              child_id: 11,
              name: '器官移植科',
              search: '器官移植中心'
            },
            {
              child_id: 12,
              name: '微创外科',
              search: '微创外科'
            },
            {
              child_id: 13,
              name: '介入医疗科',
              search: '介入医疗科'
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "妇产科",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '妇产科',
              search: '妇产科'
            },
            
          ]
      },
      {
        cate_id: 4,
        cate_name: "儿科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '儿科',
            search: '儿科'
          }
        ]
      },
      {
        cate_id: 5,
        cate_name: "男科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '男科',
            search: '男科科'
          },
          {
            child_id: 2,
            name: '不孕不育科',
            search: '不孕不育科'
          },
          {
            child_id: 3,
            name: '生殖科',
            search: '生殖科'
          }
        ]
      },
      {
        cate_id: 6,
        cate_name: "皮肤性病科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '皮肤科',
            search: '皮肤科'
          },
          {
            child_id: 2,
            name: '性病科',
            search: '性病科'
          }
        ]
      },
      {
        cate_id: 7,
        cate_name: "五官科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '耳鼻喉科',
            search: '耳鼻喉科'
          },
          {
            child_id: 2,
            name: '口腔科',
            search: '口腔科'
          },
          {
            child_id: 3,
            name: '眼科',
            search: '眼科'
          }
        ]
      },
      {
        cate_id: 8,
        cate_name: "肿瘤科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '肿瘤科',
            search: '肿瘤科'
          }
        ]
      },
      {
        cate_id: 9,
        cate_name: "精神心理科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '精神科',
            search: '精神科'
          },
          {
            child_id: 2,
            name: '心理健康科',
            search: '心理健康科'
          }
        ]
      },
      {
        cate_id: 10,
        cate_name: "不孕不育",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '不孕不育',
            search: '不孕不育科'
          }
          
        ]
      },
      {
        cate_id: 11,
        cate_name: "中医科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '中医内科',
            search: '中医内科'
          },
          {
            child_id: 2,
            name: '中医外科',
            search: '中医外科'
          },
          {
            child_id: 3,
            name: '中医消化科',
            search: '中医消化科'
          },
          {
            child_id: 4,
            name: '中医呼吸科',
            search: '中医呼吸科'
          },
          {
            child_id: 5,
            name: '中医肝病科',
            search: '中医肝病科'
          }
        ]
      },
      {
        cate_id: 12,
        cate_name: "医学影像科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '影像科',
            search: '影像科'
          },
          {
            child_id: 2,
            name: '医学影像科',
            search: '医学影像科'
          },
          {
            child_id: 3,
            name: '核医学科',
            search: '核医学科'
          },
          {
            child_id: 4,
            name: '放射科',
            search: '放射科'
          },
          {
            child_id: 5,
            name: '超声科',
            search: '超声科'
          },
          {
            child_id: 6,
            name: '超声诊断科',
            search: '超声诊断科'
          }
        ]
      },
    ],
    curNav: 1,
    curIndex: 0
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
    wx.navigateTo({
      url: "/pages/doctorlist/doctorlist?department=" + e.currentTarget.dataset.department
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