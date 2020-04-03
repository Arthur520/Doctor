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
              search: '呼吸内科/呼吸科/呼吸与危重症医学科/肺病科'
            },
            {
              child_id: 2,
              name: '消化内科',
              search: '消化内科/消化科/脾胃内科/胃肠内科/肠胃科/胃肠科'
            },
            {
              child_id: 3,
              name: '心血管内科',
              search: '心血管内科/心血管科/心脏内科'
            },
            {
              child_id: 4,
              name: '血液内科',
              search: '血液内科/血液科'
            },
            {
              child_id: 5,
              name: '肾脏内科',
              search: '肾脏内科/肾内科/肾病内科'
            },
            {
              child_id: 6,
              name: '内分泌科',
              search: '内分泌科/代谢科'
            },
            {
              child_id: 7,
              name: '风湿免疫科',
              search: '风湿免疫科'
            },
            {
              child_id: 8,
              name: '感染科',
              search: '感染科/感染内科/传染科/传染病科'
            },
            {
              child_id: 9,
              name: '老年病科',
              search: '老年病科/老年科'
            },
            {
              child_id: 10,
              name: '神经内科',
              search: '神经内科'
            },
            {
              child_id: 11,
              name: '肝病科',
              search: '肝胆内科/肝病科'
            },
            {
              child_id: 12,
              name: '高压氧科',
              search: '高压氧科'
            },
            {
              child_id: 13,
              name: '变态反应科',
              search: '变态反应科/过敏科'
            },
            {
              child_id: 14,
              name: '普内科',
              search: '普内科/普通内科/综合内科/门诊内科'
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
              search:'普外科/普通外科/胃肠外科'
            },
            {
              child_id: 2,
              name: '肝胆外科',
              search: '肝胆外科/肝胆胰外科'
            },
            {
              child_id: 3,
              name: '乳腺外科',
              search: '乳腺外科'
            },
            {
              child_id: 4,
              name: '神经外科',
              search: '神经外科/脑外科'
            },
            {
              child_id: 5,
              name: '泌尿外科',
              search: '泌尿外科/肾病外科'
            },
            {
              child_id: 6,
              name: '心血管外科',
              search: '心血管外科/心胸外科/血管外科/心脏外科/心外科'
            },
            {
              child_id: 7,
              name: '胸外科',
              search: '心胸外科/胸心外科/胸外科'
            },
            {
              child_id: 8,
              name: '肛肠外科',
              search: '肛肠外科/肛肠科/痔瘘科'
            },
            {
              child_id: 9,
              name: '骨科',
              search: '骨科/关节外科/脊柱外科'
            },
            {
              child_id: 10,
              name: '整型科',
              search: '整型科/整型外科/烧伤科/美容科'
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
              search: '妇科/产科/妇产科'
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
            search: '儿科/小儿科'
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
            search: '男科/生殖科/不孕不育科'
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
            search: '耳鼻喉科/五官科'
          },
          {
            child_id: 2,
            name: '口腔科',
            search: '口腔科'
          },
          {
            child_id: 3,
            name: '眼科',
            search: '眼科/五官科'
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
            search: '心理科/精神科/心理健康科'
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
            search: '不孕不育科/生殖科/男科'
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
            name: '中医科',
            search: '中医内科/中医外科/中医消化科/中医呼吸科/中医男科/中医肝病科'
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
            name: '医学影像科',
            search: '影像科/医学影像科'
          },
          {
            child_id: 2,
            name: '核医学科',
            search: '核医学科/PET/同位素科'
          },
          {
            child_id: 3,
            name: '放射科',
            search: '放射科'
          },
          {
            child_id: 4,
            name: '超声科',
            search: '超声科/彩超科/B超室/超声诊断科'
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