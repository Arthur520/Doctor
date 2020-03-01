// pages/hospital/hospital.js
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
              name: '呼吸内科'
            },
            {
              child_id: 2,
              name: '消化内科'
            },
            {
              child_id: 3,
              name: '心血管内科'
            },
            {
              child_id: 4,
              name: '血液内科'
            },
            {
              child_id: 5,
              name: '肾脏内科'
            },
            {
              child_id: 6,
              name: '内分泌科'
            },
            {
              child_id: 7,
              name: '风湿免疫科'
            },
            {
              child_id: 8,
              name: '感染科'
            }
          ]
      },
      {
        cate_id: 2,
        cate_name: "神经内科",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '神经内科'
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "外科",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '骨科'
            },
            {
              child_id: 2,
              name: '泌尿外科'
            },
            {
              child_id: 3,
              name: '肝胆外科'
            },
            {
              child_id: 4,
              name: '胸外科'
            },
            {
              child_id: 5,
              name: '心脏大血管外科'
            },
            {
              child_id: 6,
              name: '整型外科'
            },
            {
              child_id: 7,
              name: '胃肠外科'
            },
            {
              child_id: 8,
              name: '乳腺外科'
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "神经外科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '神经外科'
          }
        ]
      },
      {
        cate_id: 5,
        cate_name: "妇产科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '妇产科'
          }
        ]
      },
      {
        cate_id: 6,
        cate_name: "生殖不孕专科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '生殖健康与不孕不育'
          }
        ]
      },
      {
        cate_id: 7,
        cate_name: "儿科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '儿科'
          },
          {
            child_id: 2,
            name: '儿外科'
          }
        ]
      },
      {
        cate_id: 8,
        cate_name: "眼科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '眼科'
          }
        ]
      },
      {
        cate_id: 9,
        cate_name: "耳鼻喉科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '耳鼻喉科'
          }
        ]
      },
      {
        cate_id: 10,
        cate_name: "口腔科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '口腔修复'
          },
          {
            child_id: 2,
            name: '口腔正畸'
          },
          {
            child_id: 3,
            name: '牙周病'
          },
          {
            child_id: 4,
            name: '口腔种植修复'
          },
          {
            child_id: 5,
            name: '口腔颌面外科'
          }
        ]
      },
      {
        cate_id: 11,
        cate_name: "皮肤科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '皮肤科'
          }
        ]
      },
      {
        cate_id: 12,
        cate_name: "心身医学科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '心身医学'
          },
          {
            child_id: 1,
            name: '心理咨询'
          }
        ]
      },
      {
        cate_id: 13,
        cate_name: "肿瘤科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '肿瘤科'
          }
        ]
      },
      {
        cate_id: 14,
        cate_name: "康复科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '颈肩腰腿病康复'
          },
          {
            child_id: 2,
            name: '神经康复'
          }
        ]
      },
      {
        cate_id: 15,
        cate_name: "麻醉科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '麻醉科'
          }
        ]
      },
      {
        cate_id: 16,
        cate_name: "影像科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '放射科'
          },
          {
            child_id: 2,
            name: '超声科'
          }
        ]
      },
      {
        cate_id: 17,
        cate_name: "中医科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '中医内科'
          },
          {
            child_id: 2,
            name: '中医骨科'
          },
          {
            child_id: 3,
            name: '中医妇科'
          },
          {
            child_id: 4,
            name: '中医儿科'
          },
          {
            child_id: 5,
            name: '中医男科'
          },
          {
            child_id: 6,
            name: '中医针灸科'
          },
          {
            child_id: 7,
            name: '中医养身保健科'
          }
        ]
      },
      {
        cate_id: 18,
        cate_name: "营养科",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: '营养科'
          }
        ]
      }
    ],
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
    var hospitalId=this.data.hospitalId;
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