// pages/news/news.js
Page({
  data:{
    'news': [
      {
        'id': 10,
        'pic': 'http://www.jsssha.com/wp-content/uploads/2016/10/1-300x250.jpg',
        'title': '2018首届新型智慧城市发展高峰论坛在京召开 尚科受邀出席',
        'content': '10月20日，由中国信息协会主办，中国信息界杂志社、中国信息协会信息惠民分会承办的“2016首届新型智慧城市发展高峰'
      },
      {
        'id': 11,
        'pic': 'http://www.jsssha.com/wp-content/uploads/2016/10/1-300x250.png',
        'title': '尚科成为我市首届 “港城合伙人”',
        'content': '10月18日，“港城合伙人”峰会首期开幕式在张家港暨阳湖大酒店隆重召开。现场有上市企业、新三板挂牌企业、创新创业企业代表，全国多家'
      },
      {
        'id': 12,
        'pic': 'http://www.jsssha.com/wp-content/uploads/2016/10/DSC_4148-300x250.jpg',
        'title': '张家港市市长黄戟一行莅临尚科调研指导',
        'content': '9月22日，张家港市市长一行来到郑州尚科智能科技股份有限公司调研指导工作，尚科董事长等公司领导进'
      },
      
      {
        'id': 14,
        'pic':'http://www.jsssha.com/wp-content/uploads/2016/10/%E6%83%A0%E6%B0%91%E9%80%9A%E6%9C%8D%E5%8A%A1%E7%AB%99-300x250.jpg',
        'title': '港城首家“盛世惠民通社区便民服务中心”盛大开业',
        'content': '按2016年张家港市编制的“十三五”规划内容，为持续推进国家级物联网重大应用示范，加快惠民通信息服务平台建设，实现互联网+生活的集'
      },
      {
        'id': 15,
        'pic':'http://www.jsssha.com/wp-content/uploads/2016/09/20130604083316_39766-300x250.jpg',
        'title': '热烈欢迎政府领导一行莅临尚科',
        'content': '2018年9月2号，张家港市副市长兼公安局局长、财政局局长一行到郑州尚科智能科技股份有限公司调研指导工作，尚科负责人陪同'
      }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  go: function(event) {
    wx.navigateTo({
      url: '/pages/news/news-details?id=' + event.currentTarget.dataset.type
    })
  }
})
