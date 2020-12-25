//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {}
  },

  onLoad: function () {
    wx.login({
      success: res => console.log(res)
    });
    wx.getSetting({
      success(res){
        console.log(res);
      }
    });
    

  }
})
