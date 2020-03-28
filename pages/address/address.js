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
        cate_name: "北京",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '朝阳'
            },
            {
              child_id: 2,
              name: '海淀'
            },
            {
              child_id: 3,
              name: '西城'
            },
            {
              child_id: 4,
              name: '东城'
            },
            {
              child_id: 5,
              name: '丰台'
            },
            {
              child_id: 6,
              name: '大兴'
            },
            {
              child_id: 7,
              name: '昌平'
            },
            {
              child_id: 8,
              name: '石景山'
            },
            {
              child_id: 9,
              name: '通州'
            },
            {
              child_id: 10,
              name: '房山'
            },
            {
              child_id: 11,
              name: '顺义'
            },
            {
              child_id: 12,
              name: '怀柔'
            },
            {
              child_id: 13,
              name: '平谷'
            },
            {
              child_id: 14,
              name: '门头沟'
            },
            {
              child_id: 15,
              name: '延庆'
            },
            
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
            },
           
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
              name: '黑河'
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
            },
           
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
            },
            
            
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
              name: '静安'
            },
            {
              child_id: 2,
              name: '浦东新'
            },
            {
              child_id: 3,
              name: '徐汇'
            },
            {
              child_id: 4,
              name: '黄浦'
            },
            {
              child_id: 5,
              name: '长宁'
            },
            {
              child_id: 6,
              name: '闵行'
            },
            {
              child_id: 7,
              name: '虹口'
            },
            {
              child_id: 8,
              name: '杨浦'
            },
            {
              child_id: 9,
              name: '普陀'
            },
            {
              child_id: 10,
              name: '宝山'
            },
            {
              child_id: 11,
              name: '嘉定'
            },
            {
              child_id: 12,
              name: '金山'
            },
            {
              child_id: 13,
              name: '松江'
            },
            {
              child_id: 14,
              name: '青浦'
            },
            {
              child_id: 15,
              name: '崇明'
            },
            {
              child_id: 16,
              name: '奉贤'
            },
            {
              child_id: 17,
              name: '闸北'
            },
           
            
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
            },
            
        
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
              name: '广州'
            },
            {
              child_id: 2,
              name: '深圳'
            },
            {
              child_id: 3,
              name: '佛山'
            },
            {
              child_id: 4,
              name: '东莞'
            },
            {
              child_id: 5,
              name: '江门'
            },
            {
              child_id: 6,
              name: '汕头'
            },
            {
              child_id: 7,
              name: '惠州'
            },
            {
              child_id: 8,
              name: '湛江'
            },
            {
              child_id: 9,
              name: '肇庆'
            },
            {
              child_id: 10,
              name: '三门峡'
            },
            {
              child_id: 11,
              name: '茂名'
            },
            {
              child_id: 12,
              name: '珠海'
            },
            {
              child_id: 13,
              name: '中山'
            },
            {
              child_id: 14,
              name: '阳江'
            },
            {
              child_id: 15,
              name: '梅州'
            },
            {
              child_id: 16,
              name: '韶关'
            },
            {
              child_id: 17,
              name: '清远'
            },
            {
              child_id: 18,
              name: '揭阳'
            },
            {
              child_id: 19,
              name: '河源'
            },
            {
              child_id: 20,
              name: '赣州'
            },
            {
              child_id: 21,
              name: '汕尾'
            },
            {
              child_id: 22,
              name: '云浮'
            },
           
          ]
      },
      {
        cate_id: 8,
        cate_name: "广西",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '南宁'
            },
            {
              child_id: 2,
              name: '桂林'
            },
            {
              child_id: 3,
              name: '柳州'
            },
            {
              child_id: 4,
              name: '玉林'
            },
            {
              child_id: 5,
              name: '梧州'
            },
            {
              child_id: 6,
              name: '钦州'
            },
            {
              child_id: 7,
              name: '河池'
            },
            {
              child_id: 8,
              name: '北海'
            },
            {
              child_id: 9,
              name: '贺州'
            },
            {
              child_id: 10,
              name: '贵港'
            },
            {
              child_id: 11,
              name: '防城港'
            },
            {
              child_id: 12,
              name: '崇左'
            },
            {
              child_id: 13,
              name: '百色'
            },
            {
              child_id: 14,
              name: '来宾'
            },
           

          ]
      },
      {
        cate_id: 9,
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
              name: '温州'
            },
            {
              child_id: 3,
              name: '宁波'
            },
            {
              child_id: 4,
              name: '金华'
            },
            {
              child_id: 5,
              name: '台州'
            },
            {
              child_id: 6,
              name: '绍兴'
            },
            {
              child_id: 7,
              name: '嘉兴'
            },
            {
              child_id: 8,
              name: '湖州'
            },
            {
              child_id: 9,
              name: '丽水'
            },
            {
              child_id: 10,
              name: '衢州'
            },
            {
              child_id: 11,
              name: '舟山'
            },
            
           

          ]
      },
      {
        cate_id: 10,
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
              name: '蚌埠'
            },
            {
              child_id: 3,
              name: '安庆'
            },
            {
              child_id: 4,
              name: '芜湖'
            },
            {
              child_id: 5,
              name: '阜阳'
            },
            {
              child_id: 6,
              name: '宣城'
            },
            {
              child_id: 7,
              name: '淮南'
            },
            {
              child_id: 8,
              name: '六安'
            },
            {
              child_id: 9,
              name: '巢湖'
            },
            {
              child_id: 10,
              name: '亳州'
            },
            {
              child_id: 11,
              name: '马鞍山'
            },
            {
              child_id: 12,
              name: '黄山'
            },
            {
              child_id: 13,
              name: '淮北'
            },
            {
              child_id: 14,
              name: '池州'
            },
            {
              child_id: 15,
              name: '铜陵'
            },
            {
              child_id: 16,
              name: '滁州'
            },
            {
              child_id: 17,
              name: '宿州'
            },
           
            

          ]
      },
      {
        cate_id: 11,
        cate_name: "江西",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '南昌'
            },
            {
              child_id: 2,
              name: '赣州'
            },
            {
              child_id: 3,
              name: '上饶'
            },
            {
              child_id: 4,
              name: '九江'
            },
            {
              child_id: 5,
              name: '宜春'
            },
            {
              child_id: 6,
              name: '吉安'
            },
            {
              child_id: 7,
              name: '景德镇'
            },
            {
              child_id: 8,
              name: '萍乡'
            },
            {
              child_id: 9,
              name: '新余'
            },
            {
              child_id: 10,
              name: '抚州'
            },
            {
              child_id: 11,
              name: '鹰潭'
            },
            
            

          ]
      },
      {
        cate_id: 12,
        cate_name: "福建",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '福州'
            },
            {
              child_id: 2,
              name: '泉州'
            },
            {
              child_id: 3,
              name: '厦门'
            },
            {
              child_id: 4,
              name: '三明'
            },
            {
              child_id: 5,
              name: '龙岩'
            },
            {
              child_id: 6,
              name: '南平'
            },
            {
              child_id: 7,
              name: '宁德'
            },
            {
              child_id: 8,
              name: '莆田'
            },
            {
              child_id: 9,
              name: '漳州'
            },
            
            


          ]
      },
      {
        cate_id: 13,
        cate_name: "山东",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '潍坊'
            },
            {
              child_id: 2,
              name: '济南'
            },
            {
              child_id: 3,
              name: '青岛'
            },
            {
              child_id: 4,
              name: '临沂'
            },
            {
              child_id: 5,
              name: '济宁'
            },
            {
              child_id: 6,
              name: '泰安'
            },
            {
              child_id: 7,
              name: '聊城'
            },
            {
              child_id: 8,
              name: '烟台'
            },
            {
              child_id: 9,
              name: '淄博'
            },
            {
              child_id: 10,
              name: '菏泽'
            },
            {
              child_id: 11,
              name: '德州'
            },
            {
              child_id: 12,
              name: '滨州'
            },
            {
              child_id: 13,
              name: '枣庄'
            },
            {
              child_id: 14,
              name: '威海'
            },
            {
              child_id: 15,
              name: '东营'
            },
            {
              child_id: 16,
              name: '日照'
            },
            {
              child_id: 17,
              name: '莱芜'
            },
            


          ]
      },
      {
        cate_id: 14,
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
              name: '长治'
            },
            {
              child_id: 3,
              name: '运城'
            },
            {
              child_id: 4,
              name: '大同'
            },
            {
              child_id: 5,
              name: '临汾'
            },
            {
              child_id: 6,
              name: '晋州'
            },
            {
              child_id: 7,
              name: '晋城'
            },
            {
              child_id: 8,
              name: '阳泉'
            },
            {
              child_id: 9,
              name: '吕梁'
            },
            {
              child_id: 10,
              name: '忻州'
            },
            {
              child_id: 11,
              name: '朔州'
            },
            
            

          ]
      },
      {
        cate_id: 15,
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
              name: '邯郸'
            },
            {
              child_id: 3,
              name: '保定'
            },
            {
              child_id: 4,
              name: '邢台'
            },
            {
              child_id: 5,
              name: '唐山'
            },
            {
              child_id: 6,
              name: '张家口'
            },
            {
              child_id: 7,
              name: '沧州'
            },
            {
              child_id: 8,
              name: '秦皇岛'
            },
            {
              child_id: 9,
              name: '廊坊'
            },
            {
              child_id: 10,
              name: '承德'
            },
            {
              child_id: 11,
              name: '衡水'
            },
            


          ]
      },
      {
        cate_id: 16,
        cate_name: "天津",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '南开'
            },
            {
              child_id: 2,
              name: '河西'
            },
            {
              child_id: 3,
              name: '和平'
            },
            {
              child_id: 4,
              name: '河北'
            },
            {
              child_id: 5,
              name: '塘沽'
            },
            {
              child_id: 6,
              name: '津南'
            },
            {
              child_id: 7,
              name: '河东'
            },
            {
              child_id: 8,
              name: '红桥'
            },
            {
              child_id: 9,
              name: '北辰'
            },
            {
              child_id: 10,
              name: '汉沽'
            },
            {
              child_id: 11,
              name: '大港'
            },
            {
              child_id: 12,
              name: '宝坻'
            },
            {
              child_id: 13,
              name: '武清'
            },
            {
              child_id: 14,
              name: '静海'
            },
            {
              child_id: 15,
              name: '滨海新区'
            },
            


          ]
      },
      {
        cate_id: 17,
        cate_name: "辽宁",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '沈阳'
            },
            {
              child_id: 2,
              name: '大连'
            },
            {
              child_id: 3,
              name: '鞍山'
            },
            {
              child_id: 4,
              name: '锦州'
            },
            {
              child_id: 5,
              name: '朝阳'
            },
            {
              child_id: 6,
              name: '辽阳'
            },
            {
              child_id: 7,
              name: '阜新'
            },
            {
              child_id: 8,
              name: '抚顺'
            },
            {
              child_id: 9,
              name: '丹东'
            },
            {
              child_id: 10,
              name: '营口'
            },
            {
              child_id: 11,
              name: '铁岭'
            },
            {
              child_id: 12,
              name: '本溪'
            },
            {
              child_id: 13,
              name: '葫芦岛'
            },
            {
              child_id: 14,
              name: '盘锦'
            },
            
            


          ]
      },
      {
        cate_id: 18,
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
            },
            {
              child_id: 3,
              name: '延边'
            },
            {
              child_id: 4,
              name: '通化'
            },
            {
              child_id: 5,
              name: '四平'
            },
            {
              child_id: 6,
              name: '松原'
            },
            {
              child_id: 7,
              name: '辽源'
            },
            {
              child_id: 8,
              name: '白城'
            },
            {
              child_id: 9,
              name: '白山'
            },
            
            


          ]
      },
      {
        cate_id: 19,
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
              name: '十堰'
            },
            {
              child_id: 3,
              name: '宜昌'
            },
            {
              child_id: 4,
              name: '荆州'
            },
            {
              child_id: 5,
              name: '襄阳'
            },
            {
              child_id: 6,
              name: '孝感'
            },
            {
              child_id: 7,
              name: '荆门'
            },
            {
              child_id: 8,
              name: '黄冈'
            },
            {
              child_id: 9,
              name: '咸宁'
            },
            {
              child_id: 10,
              name: '随州'
            },
            {
              child_id: 11,
              name: '黄石'
            },
            {
              child_id: 12,
              name: '恩施'
            },
            {
              child_id: 13,
              name: '仙桃'
            },
            {
              child_id: 14,
              name: '鄂州'
            },
            {
              child_id: 15,
              name: '潜江'
            },
            


          ]
      },
      {
        cate_id: 20,
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
              name: '郴州'
            },
            {
              child_id: 3,
              name: '衡阳'
            },
            {
              child_id: 4,
              name: '常德'
            },
            {
              child_id: 5,
              name: '株洲'
            },
            {
              child_id: 6,
              name: '湘潭'
            },
            {
              child_id: 7,
              name: '岳阳'
            },
            {
              child_id: 8,
              name: '邵阳'
            },
            {
              child_id: 9,
              name: '娄底'
            },
            {
              child_id: 10,
              name: '永州'
            },
            {
              child_id: 11,
              name: '益阳'
            },
            {
              child_id: 12,
              name: '怀化'
            },
            {
              child_id: 13,
              name: '张家界'
            },
            {
              child_id: 14,
              name: '湘西'
            },
            


          ]
      },
      {
        cate_id: 21,
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
              name: '绵阳'
            },
            {
              child_id: 3,
              name: '广元'
            },
            {
              child_id: 4,
              name: '自贡'
            },
            {
              child_id: 5,
              name: '泸州'
            },
            {
              child_id: 6,
              name: '乐山'
            },
            {
              child_id: 7,
              name: '宜宾'
            },
            {
              child_id: 8,
              name: '眉山'
            },
            {
              child_id: 9,
              name: '达州'
            },
            {
              child_id: 10,
              name: '德阳'
            },
            {
              child_id: 11,
              name: '攀枝花'
            },
            {
              child_id: 12,
              name: '凉山'
            },
            {
              child_id: 13,
              name: '南充'
            },
            {
              child_id: 14,
              name: '资阳'
            },
            {
              child_id: 15,
              name: '内江'
            },
            {
              child_id: 16,
              name: '雅安'
            },
            {
              child_id: 17,
              name: '遂宁'
            },
            {
              child_id: 18,
              name: '巴中'
            },
            {
              child_id: 19,
              name: '广安'
            },
            


          ]
      },
      {
        cate_id: 22,
        cate_name: "重庆",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '渝中'
            },
            {
              child_id: 2,
              name: '万州'
            },
            {
              child_id: 3,
              name: '沙坪坝'
            },
            {
              child_id: 4,
              name: '南岸'
            },
            {
              child_id: 5,
              name: '江北'
            },
            {
              child_id: 6,
              name: '涪陵'
            },
            {
              child_id: 7,
              name: '渝北'
            },
            {
              child_id: 8,
              name: '九龙坡'
            },
            {
              child_id: 9,
              name: '巴南'
            },
            {
              child_id: 10,
              name: '江津'
            },
            {
              child_id: 11,
              name: '长寿'
            },
            {
              child_id: 12,
              name: '北培'
            },
            {
              child_id: 13,
              name: '黔江'
            },
            {
              child_id: 14,
              name: '永川'
            },
            {
              child_id: 15,
              name: '铜梁'
            },
            {
              child_id: 16,
              name: '璧山'
            },
            {
              child_id: 17,
              name: '云阳'
            },
            {
              child_id: 18,
              name: '綦江县'
            },
            


          ]
      },
      {
        cate_id: 23,
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
              name: '武威'
            },
            {
              child_id: 3,
              name: '庆阳'
            },
            {
              child_id: 4,
              name: '酒泉'
            },
            {
              child_id: 5,
              name: '平凉'
            },
            {
              child_id: 6,
              name: '陇南'
            },
            {
              child_id: 7,
              name: '白银'
            },
            {
              child_id: 8,
              name: '张掖'
            },
            {
              child_id: 9,
              name: '天水'
            },
            {
              child_id: 10,
              name: '临夏'
            },
            {
              child_id: 11,
              name: '嘉峪关'
            },
            {
              child_id: 12,
              name: '定西'
            },
            {
              child_id: 13,
              name: '金昌'
            },
            
            
          ]
      },
      {
        cate_id: 24,
        cate_name: "云南",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '昆明'
            },
            {
              child_id: 2,
              name: '红河'
            },
            {
              child_id: 3,
              name: '大理'
            },
            {
              child_id: 4,
              name: '曲靖'
            },
            {
              child_id: 5,
              name: '楚雄'
            },
            {
              child_id: 6,
              name: '昭通'
            },
            {
              child_id: 7,
              name: '玉溪'
            },
            {
              child_id: 8,
              name: '西双版纳'
            },
            {
              child_id: 9,
              name: '文山'
            },
            {
              child_id: 10,
              name: '宝山'
            },
            {
              child_id: 11,
              name: '普洱'
            },
            {
              child_id: 12,
              name: '怒江'
            },
            {
              child_id: 13,
              name: '临沧'
            },
            {
              child_id: 14,
              name: '丽江'
            },
            {
              child_id: 15,
              name: '德宏'
            },
            

          ]
      },
      {
        cate_id: 25,
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
              name: '昌吉'
            },
            {
              child_id: 3,
              name: '克拉玛依'
            },
            {
              child_id: 4,
              name: '喀什'
            },
            {
              child_id: 5,
              name: '阿克苏'
            },
            {
              child_id: 6,
              name: '伊犁'
            },
            {
              child_id: 7,
              name: '哈密'
            },
            {
              child_id: 8,
              name: '巴音郭楞'
            },
            {
              child_id: 9,
              name: '石河子'
            },
            {
              child_id: 10,
              name: '克孜勒苏'
            },
            {
              child_id: 11,
              name: '和田'
            },
            {
              child_id: 12,
              name: '塔城'
            },
            {
              child_id: 13,
              name: '博尔塔拉'
            },
            {
              child_id: 14,
              name: '阿勒泰'
            },
            
            
          ]
      },
      {
        cate_id: 26,
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
              name: '赤峰'
            },
            {
              child_id: 3,
              name: '包头'
            },
            {
              child_id: 4,
              name: '通辽'
            },
            {
              child_id: 5,
              name: '呼伦贝尔'
            },
            {
              child_id: 6,
              name: '巴彦淖尔'
            },
            {
              child_id: 7,
              name: '乌兰察布'
            },
            {
              child_id: 8,
              name: '鄂尔多斯'
            },
            {
              child_id: 9,
              name: '兴安盟'
            },
            {
              child_id: 10,
              name: '乌海'
            },
            {
              child_id: 11,
              name: '阿拉善盟'
            },
            {
              child_id: 12,
              name: '锡林郭勒盟'
            },
            
            
          ]
      },
      {
        cate_id: 27,
        cate_name: "海南",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '海口'
            },
            
           
          ]
      },
      {
        cate_id: 28,
        cate_name: "贵州",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '昆贵阳'
            },
            {
              child_id: 2,
              name: '遵义'
            },
            {
              child_id: 3,
              name: '黔南州'
            },
            {
              child_id: 4,
              name: '毕节'
            },
            {
              child_id: 5,
              name: '黔西南州'
            },
            {
              child_id: 6,
              name: '黔东南州'
            },
            {
              child_id: 7,
              name: '六盘水'
            },
            {
              child_id: 8,
              name: '铜仁'
            },
            {
              child_id: 9,
              name: '安顺'
            },
            
          

          ]
      },
      {
        cate_id: 29,
        cate_name: "青海",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '西宁'
            },
            {
              child_id: 2,
              name: '海西'
            },
            {
              child_id: 3,
              name: '海东'
            },
            
           

          ]
      },
      {
        cate_id: 30,
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
            },
            {
              child_id: 3,
              name: '吴忠'
            },
            {
              child_id: 4,
              name: '中卫'
            },
            {
              child_id: 5,
              name: '固原'
            },
            
           

          ]
      },
      {
        cate_id: 31,
        cate_name: "西藏",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '拉萨'
            },
            {
              child_id: 2,
              name: '昌都'
            },
            {
              child_id: 3,
              name: '阿里'
            },
            {
              child_id: 4,
              name: '那曲'
            },
            {
              child_id: 5,
              name: '日喀则'
            },
            
           
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
    app.globalData.complete_address = e.currentTarget.dataset.top +"-" +e.currentTarget.dataset.address;
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