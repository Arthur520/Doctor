// pages/address/address.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "全国",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '全国'
            }
          ]
      },
      {
        cate_id: 2,
        cate_name: "江苏",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '南京'
            },
            {
              child_id: 2,
              name: '苏州'
            },
            {
              child_id: 3,
              name: '无锡'
            },
            {
              child_id: 4,
              name: '徐州'
            },
            {
              child_id: 5,
              name: '南通'
            },
            {
              child_id: 6,
              name: '盐城'
            },
            {
              child_id: 7,
              name: '泰州'
            },
            {
              child_id: 8,
              name: '宿迁'
            },
            {
              child_id: 9,
              name: '常州'
            },
            {
              child_id: 10,
              name: '镇江'
            },
            {
              child_id: 11,
              name: '扬州'
            },
            {
              child_id: 12,
              name: '淮安'
            },
            {
              child_id: 13,
              name: '连云港'
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "黑龙江",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '哈尔滨'
            },
            {
              child_id: 2,
              name: '齐齐哈尔'
            },
            {
              child_id: 3,
              name: '伊春'
            },
            {
              child_id: 4,
              name: '绥化'
            },
            {
              child_id: 5,
              name: '牡丹江'
            },
            {
              child_id: 6,
              name: '鹤岗'
            },
            {
              child_id: 7,
              name: '鸡西'
            },
            {
              child_id: 8,
              name: '佳木斯'
            },
            {
              child_id: 9,
              name: '大兴安岭'
            },
            {
              child_id: 10,
              name: '大庆'
            },
            {
              child_id: 11,
              name: '双鸭山'
            },
            {
              child_id: 12,
              name: '七台河'
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "陕西",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '西安'
            },
            {
              child_id: 2,
              name: '宝鸡'
            },
            {
              child_id: 3,
              name: '咸阳'
            },
            {
              child_id: 4,
              name: '汉中'
            },
            {
              child_id: 5,
              name: '榆林'
            },
            {
              child_id: 6,
              name: '渭南'
            },
            {
              child_id: 7,
              name: '铜川'
            },
            {
              child_id: 8,
              name: '安康'
            },
            {
              child_id: 9,
              name: '商洛'
            },
            {
              child_id: 10,
              name: '延安'
            }
          ]
      },
      {
        cate_id: 5,
        cate_name: "上海",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '静安区'
            },
            {
              child_id: 2,
              name: '浦东新区'
            },
            {
              child_id: 3,
              name: '徐汇区'
            },
            {
              child_id: 4,
              name: '黄浦区'
            },
            {
              child_id: 5,
              name: '长宁区'
            },
            {
              child_id: 6,
              name: '闵行区'
            },
            {
              child_id: 7,
              name: '虹口区'
            },
            {
              child_id: 8,
              name: '杨浦区'
            },
            {
              child_id: 9,
              name: '普陀区'
            },
            {
              child_id: 10,
              name: '宝山区'
            },
            {
              child_id: 11,
              name: '嘉定区'
            },
            {
              child_id: 12,
              name: '金山区'
            },
            {
              child_id: 13,
              name: '松江区'
            },
            {
              child_id: 14,
              name: '青浦区'
            },
            {
              child_id: 15,
              name: '崇明区'
            }
          ]
      },
      {
        cate_id: 6,
        cate_name: "河南",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '郑州'
            },
            {
              child_id: 2,
              name: '洛阳'
            },
            {
              child_id: 3,
              name: '南阳'
            },
            {
              child_id: 4,
              name: '开封'
            },
            {
              child_id: 5,
              name: '新乡'
            },
            {
              child_id: 6,
              name: '焦作'
            },
            {
              child_id: 7,
              name: '濮阳'
            },
            {
              child_id: 8,
              name: '平顶山'
            },
            {
              child_id: 9,
              name: '信阳'
            },
            {
              child_id: 10,
              name: '三门峡'
            },
            {
              child_id: 11,
              name: '驻马店'
            },
            {
              child_id: 12,
              name: '鹤壁'
            },
            {
              child_id: 13,
              name: '安阳'
            },
            {
              child_id: 14,
              name: '许昌'
            },
            {
              child_id: 15,
              name: '漯河'
            },
            {
              child_id: 16,
              name: '商丘'
            },
            {
              child_id: 17,
              name: '周口'
            },
            {
              child_id: 18,
              name: '济源'
            }
          ]
      },
      {
        cate_id: 7,
        cate_name: "广东",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '深圳'
            },
            {
              child_id: 2,
              name: '广州'
            },
            {
              child_id: 3,
              name: '东莞'
            }
          ]
      },
      {
        cate_id: 8,
        cate_name: "北京",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '朝阳区'
            },
            {
              child_id: 2,
              name: '海淀区'
            },
            {
              child_id: 3,
              name: '丰台区'
            },
            {
              child_id: 4,
              name: '西城区'
            },
            {
              child_id: 5,
              name: '石景山区'
            },
            {
              child_id: 6,
              name: '东城区'
            },
            {
              child_id: 7,
              name: '顺义区'
            },
            {
              child_id: 8,
              name: '昌平区'
            },
            {
              child_id: 9,
              name: '大兴区'
            }
          ]
      },
      {
        cate_id: 9,
        cate_name: "四川",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '成都'
            },
            {
              child_id: 2,
              name: '宜宾'
            },
            {
              child_id: 3,
              name: '资阳'
            },
            {
              child_id: 4,
              name: '自贡'
            },
            {
              child_id: 5,
              name: '攀枝花'
            },
            {
              child_id: 6,
              name: '绵阳'
            },
            {
              child_id: 7,
              name: '广元'
            },
            {
              child_id: 8,
              name: '巴中'
            },
            {
              child_id: 9,
              name: '德阳'
            },
            {
              child_id: 10,
              name: '内江'
            },
            {
              child_id: 11,
              name: '凉山州'
            },
            {
              child_id: 12,
              name: '乐山'
            },
            {
              child_id: 13,
              name: '眉山'
            },
            {
              child_id: 14,
              name: '南充'
            }
          ]
      },
      {
        cate_id: 10,
        cate_name: "山东",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '青岛'
            },
            {
              child_id: 2,
              name: '济南'
            },
            {
              child_id: 3,
              name: '淄博'
            },
            {
              child_id: 4,
              name: '烟台'
            },
            {
              child_id: 5,
              name: '枣庄'
            },
            {
              child_id: 6,
              name: '济宁'
            },
            {
              child_id: 7,
              name: '泰安'
            }
          ]
      },
      {
        cate_id: 11,
        cate_name: "安徽",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '合肥'
            },
            {
              child_id: 2,
              name: '亳州'
            },
            {
              child_id: 3,
              name: '芜湖'
            },
            {
              child_id: 4,
              name: '安庆'
            },
            {
              child_id: 5,
              name: '宿州'
            },
            {
              child_id: 6,
              name: '六安'
            },
            {
              child_id: 7,
              name: '马鞍山'
            },
            {
              child_id: 8,
              name: '淮北'
            },
            {
              child_id: 9,
              name: '铜陵'
            },
            {
              child_id: 10,
              name: '黄山'
            },
            {
              child_id: 11,
              name: '阜阳'
            },
            {
              child_id: 12,
              name: '巢湖'
            },
            {
              child_id: 13,
              name: '池州'
            },
            {
              child_id: 14,
              name: '蚌埠'
            }
          ]
      },
      {
        cate_id: 12,
        cate_name: "重庆",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '渝中区'
            },
            {
              child_id: 2,
              name: '沙坪坝区'
            },
            {
              child_id: 3,
              name: '江北区'
            },
            {
              child_id: 4,
              name: '万州区'
            },
            {
              child_id: 5,
              name: '九龙坡区'
            },
            {
              child_id: 6,
              name: '渝北区'
            },
            {
              child_id: 7,
              name: '南岸区'
            },
            {
              child_id: 8,
              name: '长寿区'
            },
            {
              child_id: 9,
              name: '永川区'
            },
            {
              child_id: 10,
              name: '北培区'
            },
            {
              child_id: 11,
              name: '巴南区'
            },
            {
              child_id: 12,
              name: '江津区'
            },
            {
              child_id: 13,
              name: '南川区'
            },
            {
              child_id: 14,
              name: '璧山区'
            }
          ]
      },
      {
        cate_id: 13,
        cate_name: "浙江",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '杭州'
            },
            {
              child_id: 2,
              name: '嘉兴'
            },
            {
              child_id: 3,
              name: '宁波'
            },
            {
              child_id: 4,
              name: '温州'
            },
            {
              child_id: 5,
              name: '金华'
            }
          ]
      },
      {
        cate_id: 14,
        cate_name: "湖北",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '武汉'
            },
            {
              child_id: 2,
              name: '黄冈'
            },
            {
              child_id: 3,
              name: '仙桃'
            }
          ]
      },
      {
        cate_id: 15,
        cate_name: "山西",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '太原'
            },
            {
              child_id: 2,
              name: '晋城'
            },
            {
              child_id: 3,
              name: '晋中'
            }
          ]
      },
      {
        cate_id: 16,
        cate_name: "湖南",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '长沙'
            },
            {
              child_id: 2,
              name: '湘潭'
            },
            {
              child_id: 3,
              name: '益阳'
            },
            {
              child_id: 4,
              name: '常德'
            }
          ]
      },
      {
        cate_id: 17,
        cate_name: "天津",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '和平区'
            },
            {
              child_id: 2,
              name: '河西区'
            },
            {
              child_id: 3,
              name: '河东区'
            },
            {
              child_id: 4,
              name: '河北区'
            },
            {
              child_id: 5,
              name: '滨海新区'
            }
          ]
      },
      {
        cate_id: 18,
        cate_name: "河北",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '石家庄'
            },
            {
              child_id: 2,
              name: '秦皇岛'
            },
            {
              child_id: 3,
              name: '廊坊'
            },
            {
              child_id: 4,
              name: '保定'
            }
          ]
      },
      {
        cate_id: 19,
        cate_name: "内蒙古",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '呼和浩特'
            },
            {
              child_id: 2,
              name: '包头'
            },
            {
              child_id: 3,
              name: '呼伦贝尔'
            }
          ]
      },
      {
        cate_id: 20,
        cate_name: "宁夏",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '银川'
            },
            {
              child_id: 2,
              name: '石嘴山'
            }
          ]
      },
      {
        cate_id: 21,
        cate_name: "甘肃",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '兰州'
            },
            {
              child_id: 2,
              name: '武夷'
            },
            {
              child_id: 3,
              name: '酒泉'
            }
          ]
      },
      {
        cate_id: 22,
        cate_name: "江西",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '南昌'
            }
          ]
      },
      {
        cate_id: 23,
        cate_name: "吉林",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '长春'
            },
            {
              child_id: 2,
              name: '吉林'
            }
          ]
      },
      {
        cate_id: 24,
        cate_name: "青海",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '西宁'
            }
          ]
      },
      {
        cate_id: 25,
        cate_name: "广西",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '南宁'
            }
          ]
      },
      {
        cate_id: 26,
        cate_name: "新疆",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '乌鲁木齐'
            },
            {
              child_id: 2,
              name: '克拉玛依'
            }
          ]
      },
      {
        cate_id: 27,
        cate_name: "云南",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '昆明'
            }
          ]
      },
      {
        cate_id: 28,
        cate_name: "福建",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '龙岩'
            }
          ]
      },
      {
        cate_id: 29,
        cate_name: "海南",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '海口'
            }
          ]
      },
      {
        cate_id: 30,
        cate_name: "香港",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '中西区'
            }
          ]
      },
      {
        cate_id: 31,
        cate_name: "辽宁",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '沈阳'
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
  address: function (e) {
    app.globalData.address=e.currentTarget.dataset.address;
    wx.switchTab({
      url: "/pages/index/index",
      success: function (e) {
        //刷新页面
        var page = getCurrentPages().pop();
        if (page == undefined || page == null) return;
        //加载page中的onload方法
        page.onLoad();
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