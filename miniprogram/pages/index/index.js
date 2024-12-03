//index.js

//获取应用实例
const app = getApp();

Page({
  data: {},
  onLoad: function () {
    this.getRecommendData();
  },

  async getRecommendData(){
    const res = await app.api.fetchHomeRecommend();
    console.log(res);
  }

});
