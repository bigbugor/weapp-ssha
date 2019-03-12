Page({
  data: {
    title: '郑州尚科智能科技有限公司',
    swipers: [
      { 'pic': 'https://img-blog.csdnimg.cn/20190312131313800.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTEyMDUxNzc=,size_16,color_FFFFFF,t_70', 'link': '' },
      { 'pic': 'https://img-blog.csdnimg.cn/20190312131347241.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTEyMDUxNzc=,size_16,color_FFFFFF,t_70', 'link': ''},
      { 'pic': 'https://img-blog.csdnimg.cn/20190312131426387.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTEyMDUxNzc=,size_16,color_FFFFFF,t_70', 'link': '' },
      { 'pic': 'https://img-blog.csdnimg.cn/20190311140415435.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTEyMDUxNzc=,size_16,color_FFFFFF,t_70', 'link': '' },
      { 'pic': 'https://img-blog.csdnimg.cn/20190312131347241.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTEyMDUxNzc=,size_16,color_FFFFFF,t_70', 'link': '' },




      { 'pic': 'https://img-blog.csdnimg.cn/20190312131018511.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTEyMDUxNzc=,size_16,color_FFFFFF,t_70', 'link': ''}
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 1000,
    duration: 1000,

    news: [
      {
        'id': 0,
        'pic': 'http://www.jsssha.com/wp-content/uploads/2016/12/4-300x250.jpg',
        'title': '“创新发展 再创辉煌”尚科2018年度圣诞主题年会圆满落幕',
        'content': '2018年，对于尚科而言是一个机遇与挑战并存的一年，更是收获的一年。这一年在公司领导层的正确领导和支持下，全体员工齐心协力，顽强进取，各方面的工作都取得了一定的成绩。',
      },
      {
        'id': 1,
        'pic': 'http://www.jsssha.com/wp-content/uploads/2016/12/2-1-300x250.jpg',
        'title': 'CCIA第七届中国物联网产业与新型智慧城市年会圆满落幕，郑州尚科智能科技股份有限公司',
        'content': '2018年12月16日，由工业和信息化部指导，中国通信工业协会主办，中国通信工业协会物联网应用分会承办的“第七届中国物联网产业与新型智慧城市年会”在北京万寿宾馆隆重召开。',
      }
    ]
  },
  onShareAppMessage: function () {
   // return custom share data when user share.
   console.log('onShareAppMessage')
   return {
      title: '郑州尚科',
      desc: '小程序',
      path: '/pages/index/index'
    }
  },
});
