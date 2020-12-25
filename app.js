//app.js

App({
  "cloud": true,
  onLaunch: function () {
    wx.cloud.init({
      traceUser: true,
    });
  }
})