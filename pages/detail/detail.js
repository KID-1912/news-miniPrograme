// pages/detail.js
Page({
  data: {
  },
  barHandle(event){
    let type = event.target.id;
    let typeState = {};
    typeState[type] = !this.data[type];
    this.setData({...typeState});
    //同步收藏分享状态至服务端
    wx.cloud.callFunction({
      name: 'updateArticleState',
      data: {artId: this.data._id,typeState},
      complete: (res) => {
        let state = typeState[type];
        //服务端更新失败操作
        if(res.result.stats.updated === 1){
          let tip = state ? (type=='collected' ? '收藏' : '分享') : '取消';
          wx.showToast({icon: "none",title: `已${tip}`,duration: 1000});
        }else{
          wx.showToast({ticon: "none",itle: `${tipType}失败`,duration: 1000})
          typeState[type] = !state;
          this.setData(...typeState);
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'getPost',
      data: {artId: options.artId},
      success: (res) => {
        console.log(res);
        let data = res.result;
        this.setData({...data})
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