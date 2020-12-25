// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    artList: []
  },

  toDetail(event){
    let artId = event.currentTarget.dataset.artid;
    wx.navigateTo({
      url: `../detail/detail?artId=${artId}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'getBanners',
      success: (res) => {
        this.setData({
          banners: res.result
        })
      }
    })
    wx.cloud.callFunction({
      name: 'getPosts',
      data: {post: true},
      success: (res) => {
        console.log(res);
        this.setData({
          artList: res.result
        })
      }
    })
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